import axios, { AxiosInstance } from "axios";
import { ulid } from "ulid";

/**
 * Server-side API client for backend service-to-service communication
 * This client automatically includes the API token for authentication
 *
 * IMPORTANT: This should ONLY be used in:
 * - API routes (/app/api/)
 * - Server Components
 * - Server Actions
 *
 * Never import this in Client Components as it would expose the API token
 */

// Ensure this only runs on the server
if (typeof window !== "undefined") {
  throw new Error("server-api-client should only be used on the server-side");
}

// Validate required environment variables
// const CORE_API_KEY = process.env.CORE_API_KEY;
// if (!CORE_API_KEY) {
//   console.error(
//     "CORE_API_KEY environment variable is required for server-side API calls",
//   );
// }

// const coreApiUrl = process.env.NEXT_PUBLIC_JOUVAE_CORE_API;
// if (!coreApiUrl) {
//   console.error("NEXT_PUBLIC_JOUVAE_CORE_API environment variable is required");
// }

// Create the server-side axios instance
export const serverApiClient: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    // Authorization: `Bearer ${CORE_API_KEY}`,
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

// Request interceptor for server-side requests
serverApiClient.interceptors.request.use(
  async (config) => {
    config.headers["Request-Id"] = `req_${ulid()}`;

    config.headers["User-Agent"] = "nextjs-proxy";
    config.headers["Cache-Control"] = "private";

    // if (!config.headers.Cookie || config.headers.Cookie === "") {
    //   try {
    //     const store = await cookies();
    //     const cookie = store.get("__jouvae-session");
    //     if (cookie) {
    //       config.headers["Cookie"] = `${cookie.name}=${cookie.value}`;
    //     }
    //   } catch (e) {
    //     console.error("failed to get cookies from nextjs cookie store");
    //   }
    // }

    return config;
  },
  (error) => {
    console.error("Server API request interceptor error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor for server-side error handling
serverApiClient.interceptors.response.use(
  (response) => {
    // Log successful responses for debugging
    if (process.env.NODE_ENV === "development") {
      console.log(
        `✅ Server API Success: ${response.config.method?.toUpperCase()} ${
          response.config.url
        }`
      );
    }

    return response;
  },
  async (error) => {
    // Handle server-side API errors
    if (error.response?.status === 401) {
      // errorLogger("client error: ", error.toJSON());
      console.error(error);
    }
    // Handle network errors
    if (!error.response) {
      // errorLogger("Server API network error:", error.toJSON());
      error.message = "Backend service unavailable";
    }

    // Handle specific API errors
    if (error.response?.data?.error) {
      error.message = error.response.data.error;
      console.error(error.message);
    }

    return Promise.reject(error);
  }
);

/**
 * Helper function to validate server API client configuration
 */
export function validateServerApiClient(): boolean {
  //   if (!CORE_API_KEY) {
  //     console.error("CORE_API_KEY environment variable is not set");
  //     return false;
  //   }

  //   if (!coreApiUrl) {
  //     console.error(
  //       "NEXT_PUBLIC_JOUVAE_CORE_API environment variable is not set",
  //     );
  //     return false;
  //   }

  return true;
}

/**
 * Convenience methods for common server API operations
 */
export const serverApi = {
  get: (url: string, config?: any) => serverApiClient.get(url, config),
  post: (url: string, data?: any, config?: any) => {
    return serverApiClient.post(url, data, config);
  },
  put: (url: string, data?: any, config?: any) =>
    serverApiClient.put(url, data, config),
  delete: (url: string, config?: any) => serverApiClient.delete(url, config),

  patch: (url: string, data?: any, config?: any) =>
    serverApiClient.patch(url, data, config),
};

export default serverApiClient;
