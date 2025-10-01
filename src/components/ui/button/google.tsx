"use client";
import { usePathname } from "next/navigation";
import { FC } from "react";
import Icon, { IconVariant } from "@/components/ui/icons";
import { sendGTMEvent } from "@next/third-parties/google";
import Button from "@/components/ui/button";
import useFingerprint from "@/hooks/use_fingerprint";
import { useAuthContext } from "@/context";

//"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
const GoogleAuth: FC<{ buttonText?: string }> = ({
  buttonText = "Continue with Google",
}) => {
  let isMobile = false;
  const pathName = usePathname();

  const { session } = useAuthContext();

  // FIXME: [overmind] this was originally being derived from the overmind state
  const { fingerprint, loading } = useFingerprint();

  const handleClick = async (e: any) => {
    e.preventDefault();

    try {
      // FIXME: update this to use the usePrivateApis hook
      const response = await fetch(
        `/api/auth?provider=google&fingerprint=${fingerprint}&lastactiveuri=${pathName}`,
        {
          credentials: "include",
        },
      );

      if (!response.ok) {
        // !!! FIXME: update this to show a graceful message to the guest
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.status === "redirect" && data.redirectUrl) {
        // This kills the cors devil!!!

        window.location.href = data.redirectUrl;
      } else {
        console.debug("Auth response:", data);
      }
    } catch (error) {
      console.error("Auth error:", error);
    }

    // FIXME: add valid data to GTM event
    sendGTMEvent({
      event: "personAuthenticating",
      value: {
        anonymousId: "hah7adhfafds",
        pathName,
        campaignId: "kjah665a65d",
        oauthProvider: "google",
        email: "rasta@juvae.co",
        firstName: "rasta",
        lastName: "man",
      },
    });
  };

  return (
    <Button
      variant="secondary"
      type="submit"
      onClick={handleClick}
      icon={{ left: IconVariant.GOOGLE }}
    >
      Continue with Google
    </Button>
  );
};

export default GoogleAuth;
