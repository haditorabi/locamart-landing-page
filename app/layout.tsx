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
            <main className="container max-w-full flex-grow">{children}</main>
            <footer className="w-full flex flex-col items-center justify-center pt-3">
              <div className="flex w-[350px] justify-center py-10">
                <Link
                  isExternal
                  aria-label="Calendly"
                  href={siteConfig.links.linkedin}
                >
                  <FiLinkedin className="bg-black w-10 h-10 mx-4 text-white rounded-[50%] px-[7px]" />
                </Link>
                <Link
                  isExternal
                  aria-label="Calendly"
                  href={siteConfig.links.twitter}
                >
                  <BsTwitterX className="bg-black w-10 h-10 mx-4 text-white rounded-[50%] px-[7px]" />
                </Link>
                <Link
                  isExternal
                  aria-label="Calendly"
                  href={siteConfig.links.facebook}
                >
                  <FiFacebook className="bg-black w-10 h-10 mx-4 text-white rounded-[50%] px-[7px]" />
                </Link>
                <Link
                  isExternal
                  aria-label="Calendly"
                  href={siteConfig.links.instagram}
                >
                  <FiInstagram className="bg-black w-10 h-10 mx-4 text-white rounded-[50%] px-[7px]" />
                </Link>
              </div>
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="/"
                title="Locamart homepage"
              >
                <span className="text-default-600">
                  © {new Date().getFullYear()} Locamart Inc. All rights
                  reserved.  
                </span>
              </Link>
              <div className="bg-primary h-6 w-screen mt-3"></div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
