import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

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
