'use client'

import {
  ArrowPathIcon,
  ChevronRightIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'

const primaryFeatures = [
  {
    name: 'Professional Equipment',
    description: 'Fully equipped commercial kitchens with industrial-grade appliances and Caribbean cooking essentials.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Flexible Scheduling',
    description: 'Book kitchen time by the hour, day, or week. Perfect for meal prep, catering, and food delivery businesses.',
    icon: LockClosedIcon,
  },
  {
    name: 'Virgin Islands Licensed',
    description: 'All kitchens are properly licensed and inspected, meeting USVI health department requirements.',
    icon: ServerIcon,
  },
]

const secondaryFeatures = [
  {
    name: 'Ghost Kitchen Ready',
    description:
      'Perfect for delivery-only restaurants, meal prep services, and food entrepreneurs. Launch your culinary business without the overhead of a full restaurant.',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Caribbean Equipped',
    description:
      'Specialized equipment for authentic Virgin Islands cuisine including plantain presses, large rice cookers, and seafood prep stations.',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Real-Time Booking',
    description:
      'Easy online scheduling system lets you book, modify, or extend your kitchen time instantly. Get notifications and manage your reservations seamlessly.',
    href: '#',
    icon: ArrowPathIcon,
  },
]

const featuredTestimonial = {
  body: 'KitchenThyme transformed my food business. I went from selling plates out of my home to running a full catering operation with three delivery brands. The professional kitchen space and flexible scheduling made it all possible.',
  author: {
    name: 'Maria Santos',
    handle: 'mariaskitchen',
    imageUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
    logoUrl: 'https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-gray-900.svg',
  },
}

const testimonials = [
  [
    [
      {
        body: 'Finally found a professional kitchen that understands Caribbean cooking. The plantain press and proper seasoning stations make all the difference for my authentic dishes.',
        author: {
          name: 'Andre Joseph',
          handle: 'chefandre',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: 'Started my meal prep business here six months ago. Now I\'m serving 200+ customers weekly. The hourly booking system is perfect for scaling up gradually.',
        author: {
          name: 'Keisha Williams',
          handle: 'keishaprep',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: 'Consequatur ut atque. Itaque nostrum molestiae id veniam eos cumque. Ut quia eum fugit laborum autem inventore ut voluptate.',
        author: {
          name: 'Dries Vincent',
          handle: 'driesvincent',
          imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    ],
    [
      {
        body: 'Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.',
        author: {
          name: 'Lindsay Walton',
          handle: 'lindsaywalton',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: 'Nam nesciunt dolorem dolor asperiores cum. Incidunt molestiae quis deleniti vitae ut in earum delectus iusto.',
        author: {
          name: 'Courtney Henry',
          handle: 'courtneyhenry',
          imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    ],
  ],
  [
    [
      {
        body: 'Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.',
        author: {
          name: 'Tom Cook',
          handle: 'tomcook',
          imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: 'Aliquid dolore praesentium ratione. Cumque ea officia repellendus laboriosam. Vitae quod id explicabo non sunt.',
        author: {
          name: 'Whitney Francis',
          handle: 'whitneyfrancis',
          imageUrl:
            'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    ],
    [
      {
        body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
        author: {
          name: 'Leonard Krasner',
          handle: 'leonardkrasner',
          imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: 'Architecto libero natus est. Est quam debitis officia enim atque et ut non. Sunt reiciendis quasi eaque. Itaque error ut et.',
        author: {
          name: 'Floyd Miles',
          handle: 'floydmiles',
          imageUrl:
            'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: 'Temporibus ea molestiae impedit adipisci perspiciatis illo aliquid. Quis ut ratione et voluptatem et. Nostrum explicabo iste unde beatae.',
        author: {
          name: 'Emily Selman',
          handle: 'emilyselman',
          imageUrl:
            'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    ],
  ],
]

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

export default function HeroSectionNew() {
  return (
    <div className="bg-white">
      <main>
        {/* Hero section */}
        <div className="relative isolate pt-14">
          <svg
            aria-hidden="true"
            className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
          </svg>
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <div className="flex">
                <div className="relative flex items-center gap-x-4 rounded-full bg-white px-4 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span className="font-semibold text-indigo-600">Now Open</span>
                  <span aria-hidden="true" className="h-4 w-px bg-gray-900/10" />
                  <a href="#" className="flex items-center gap-x-1">
                    <span aria-hidden="true" className="absolute inset-0" />
                    Book your first session
                    <ChevronRightIcon aria-hidden="true" className="-mr-2 size-5 text-gray-400" />
                  </a>
                </div>
              </div>
              <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                KitchenThyme Marketplace
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                The two-sided marketplace connecting chefs who need professional kitchen space with customers who want fresh, locally-prepared food. Reserve commercial kitchens or discover amazing meals from talented local chefs.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="/chef-dashboard"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  I&apos;m a Chef
                </a>
                <a href="/marketplace" className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                  I&apos;m Hungry
                </a>
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
              <div className="relative mx-auto max-w-2xl">
                <img
                  alt="Professional commercial kitchen with modern appliances and equipment"
                  src="/kitchen-appliances-in-professional-kitchen-in-a-mo-2025-02-24-17-48-15-utc.jpg"
                  width={1024}
                  height={768}
                  className="w-full rounded-2xl shadow-2xl ring-1 ring-gray-900/10"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-gray-900/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Partner cloud */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 opacity-40 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <div className="col-span-2 max-h-12 w-full flex items-center justify-center lg:col-span-1">
              <span className="text-lg font-semibold text-gray-400">Island Eats</span>
            </div>
            <div className="col-span-2 max-h-12 w-full flex items-center justify-center lg:col-span-1">
              <span className="text-lg font-semibold text-gray-400">VI Delivery</span>
            </div>
            <div className="col-span-2 max-h-12 w-full flex items-center justify-center lg:col-span-1">
              <span className="text-lg font-semibold text-gray-400">Caribbean Fresh</span>
            </div>
            <div className="col-span-2 max-h-12 w-full flex items-center justify-center sm:col-start-2 lg:col-span-1">
              <span className="text-lg font-semibold text-gray-400">VI Health Dept</span>
            </div>
            <div className="col-span-2 col-start-2 max-h-12 w-full flex items-center justify-center sm:col-start-auto lg:col-span-1">
              <span className="text-lg font-semibold text-gray-400">Paradise Provisions</span>
            </div>
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
              <div className="lg:row-start-2 lg:max-w-md">
                <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                  From Home Kitchen to Commercial Success.
                </h2>
                <p className="mt-6 text-lg/8 text-gray-300">
                  Scale your food business with professional-grade equipment and Virgin Islands health department approved facilities. Perfect for ghost kitchens, catering, and meal prep services.
                </p>
              </div>
              <img
                alt="Professional chef finishing work in a commercial kitchen"
                src="/chef-ending-the-work-at-the-kitchen-2024-10-18-08-49-38-utc (1).jpg"
                width={1920}
                height={1280}
                className="relative -z-20 max-w-xl min-w-full rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-5xl lg:max-w-none"
              />
              <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
                <dl className="max-w-xl space-y-8 text-base/7 text-gray-300 lg:max-w-none">
                  {primaryFeatures.map((feature) => (
                    <div key={feature.name} className="relative">
                      <dt className="ml-9 inline-block font-semibold text-white">
                        <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-500" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-12 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:top-auto lg:-bottom-48 lg:translate-y-0"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-25"
              />
            </div>
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600">Cook Smarter</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
              Everything you need to launch your food business
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              From ghost kitchens to catering operations, our fully-equipped commercial spaces provide everything you need to turn your culinary passion into a thriving Virgin Islands food business.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {secondaryFeatures.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                    <feature.icon aria-hidden="true" className="size-5 flex-none text-indigo-600" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <a href={feature.href} className="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500">
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Newsletter section */}
        <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
            <h2 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Ready to start cooking professionally?
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-center text-lg text-gray-300">
              Join our waitlist to get early access to kitchen bookings, special pricing, and exclusive Caribbean cooking workshops.
            </p>
            <form className="mx-auto mt-10 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Join Waitlist
              </button>
            </form>
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2"
            >
              <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient
                  r={1}
                  cx={0}
                  cy={0}
                  id="759c1415-0410-454c-8f7c-9a820de03641"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Testimonials section */}
        <div className="relative isolate mt-32 sm:mt-56 sm:pt-32">
          <svg
            aria-hidden="true"
            className="absolute inset-0 -z-10 hidden size-full mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200 sm:block"
          >
            <defs>
              <pattern
                x="50%"
                y={0}
                id="55d3d46d-692e-45f2-becd-d8bdc9344f45"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={0} className="overflow-visible fill-gray-50">
              <path
                d="M-200.5 0h201v201h-201Z M599.5 0h201v201h-201Z M399.5 400h201v201h-201Z M-400.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#55d3d46d-692e-45f2-becd-d8bdc9344f45)" width="100%" height="100%" strokeWidth={0} />
          </svg>
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="ml-[max(50%,38rem)] aspect-1313/771 w-328.25 bg-linear-to-tr from-[#ff80b5] to-[#9089fc]"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="-ml-88 aspect-1313/771 w-328.25 flex-none origin-top-right rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] xl:mr-[calc(50%-12rem)] xl:ml-0"
              />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-base/7 font-semibold text-indigo-600">Testimonials</h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
                  Trusted by Virgin Islands food entrepreneurs
                </p>
              </div>
              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
                <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
                  <blockquote className="p-6 text-lg font-semibold tracking-tight text-gray-900 sm:p-12 sm:text-xl/8">
                    <p>{`"${featuredTestimonial.body}"`}</p>
                  </blockquote>
                  <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
                    <img
                      alt=""
                      src={featuredTestimonial.author.imageUrl}
                      className="size-10 flex-none rounded-full bg-gray-50"
                    />
                    <div className="flex-auto">
                      <div className="font-semibold text-gray-900">{featuredTestimonial.author.name}</div>
                      <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
                    </div>
                    <img alt="" src={featuredTestimonial.author.logoUrl} className="h-10 w-auto flex-none" />
                  </figcaption>
                </figure>
                {testimonials.map((columnGroup, columnGroupIdx) => (
                  <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
                    {columnGroup.map((column, columnIdx) => (
                      <div
                        key={columnIdx}
                        className={classNames(
                          (columnGroupIdx === 0 && columnIdx === 0) ||
                            (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                            ? 'xl:row-span-2'
                            : 'xl:row-start-1',
                          'space-y-8',
                        )}
                      >
                        {column.map((testimonial) => (
                          <figure
                            key={testimonial.author.handle}
                            className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                          >
                            <blockquote className="text-gray-900">
                              <p>{`"${testimonial.body}"`}</p>
                            </blockquote>
                            <figcaption className="mt-6 flex items-center gap-x-4">
                              <img
                                alt=""
                                src={testimonial.author.imageUrl}
                                className="size-10 rounded-full bg-gray-50"
                              />
                              <div>
                                <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                                <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                              </div>
                            </figcaption>
                          </figure>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}