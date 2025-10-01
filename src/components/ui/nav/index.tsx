import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

const navigation = [
  // { name: "Home", href: "/", current: true },
  { name: "Kitchen", href: "/kitchen", current: false },
  { name: "Blog", href: "/blog", current: false },
  { name: "About", href: "/about", current: false },
  // { name: "Dashboard", href: "profile", current: false },
];

export default function Example() {
  return (
    <Disclosure
      as="nav"
      className="fixed top-0 z-50 w-full bg-white backdrop-blur-sm border-b border-neutral-200/50 __dark:bg-neutral-900/95 __dark:border-neutral-700/50 shadow-sm"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 __dark:text-neutral-400 __dark:hover:bg-neutral-800 __dark:hover:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-colors">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-between">
            <Link href="/">
              <div className="flex shrink-0 items-center">
                <Image
                  src={"/chef.png"}
                  width={38}
                  height={38}
                  alt="Schedule thyme logo"
                />
              </div>
            </Link>
            <div className="hidden sm:block">
              <div className="flex space-x-8">
                {navigation.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    aria-current={link.current ? "page" : undefined}
                    className={clsx(
                      link.current
                        ? "text-primary-600 __dark:text-primary-400 font-light"
                        : "text-neutral-700 hover:text-primary-600 __dark:text-neutral-300 __dark:hover:text-primary-400",
                      "px-3 py-2 text-sm font-light transition-colors duration-200 rounded-lg hover:bg-neutral-100 __dark:hover:bg-neutral-800"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Future: Profile dropdown or login button */}
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden bg-white/95 backdrop-blur-sm border-t border-neutral-200/50 __dark:bg-neutral-900/95 __dark:border-neutral-700/50">
        <div className="space-y-1 px-4 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={clsx(
                item.current
                  ? "bg-primary-50 text-primary-700 border-primary-500 __dark:bg-primary-900/20 __dark:text-primary-400 __dark:border-primary-600"
                  : "text-neutral-900 hover:bg-neutral-100 hover:text-primary-600 __dark:text-neutral-300 __dark:hover:bg-neutral-800 __dark:hover:text-primary-400",
                "block rounded-lg px-4 py-3 text-base font-light transition-colors border-l-4 border-transparent"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
