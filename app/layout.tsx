import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";
import { BsTwitterX } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import "@/styles/main.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container flex-grow max-w-full">{children}</main>
            <footer className="flex flex-col items-center justify-center w-full pt-3">
              <div className="flex justify-center w-full py-8 md:py-10">
                <Link
                  isExternal
                  aria-label="Calendly"
                  href={siteConfig.links.linkedin}
                >
                  <FiLinkedin className="bg-black md:w-10 md:h-10 w-8 h-8 mx-2 md:mx-4 text-white rounded-[50%] px-[7px]" />
                </Link>
                <Link
                  isExternal
                  aria-label="Calendly"
                  href={siteConfig.links.twitter}
                >
                  <BsTwitterX className="bg-black md:w-10 md:h-10 w-8 h-8 mx-2 md:mx-4 text-white rounded-[50%] px-[7px]" />
                </Link>
                <Link
                  isExternal
                  aria-label="Calendly"
                  href={siteConfig.links.facebook}
                >
                  <FiFacebook className="bg-black md:w-10 md:h-10 w-8 h-8 mx-2 md:mx-4 text-white rounded-[50%] px-[7px]" />
                </Link>
                <Link
                  isExternal
                  aria-label="Calendly"
                  href={siteConfig.links.instagram}
                >
                  <FiInstagram className="bg-black md:w-10 md:h-10 w-8 h-8 mx-2 md:mx-4 text-white rounded-[50%] px-[7px]" />
                </Link>
              </div>
              <Link
                isExternal
                className="flex items-center gap-1 text-sm md:text-current"
                href="/"
                title="Locamart homepage"
              >
                <span className="text-default-600">
                  © {new Date().getFullYear()} Locamart Inc. All rights
                  reserved.  
                </span>
              </Link>
              <div className="w-full mt-8 h-7 md:mt-3 bg-primary" />
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
