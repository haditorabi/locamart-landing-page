"use client";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import React, { useState } from "react";

import { siteConfig } from "@/config/site";
import { LogoX } from "@/components/icons";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeroUINavbar
      height="4.6rem"
      isBordered={true}
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      position="static"
      style={{ position: "fixed" }}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand as="li" className="gap-3 md:px-4 max-w-fit">
        <NextLink className="flex items-center justify-start gap-1" href="/">
          <LogoX height={35} width={180} />
        </NextLink>
      </NavbarBrand>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        <ul className="justify-center hidden gap-8 ml-2 lg:flex">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>
      <NavbarContent
        className="hidden pl-4 sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <Link
          isExternal
          aria-label="Calendly"
          href={siteConfig.links.calcom}
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <Button className="px-9" color="primary" radius="sm" size="md">
            Let’s Talk
          </Button>
        </Link>
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={handleMenuToggle}
        />
      </NavbarContent>

      <NavbarMenu>
        {siteConfig.navItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} className="py-3">
            <Link
              className="w-full"
              color={"foreground"}
              href={item.href}
              size="lg"
              onClick={handleMenuItemClick}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem key={`last-item`} className="py-3">
          <div className="p-3 text-2xl font-semibold text-center">
            Interested in <br />
            Partnering with Us?
          </div>
          <Button
            className="text-center w-full"
            color="primary"
            fullWidth={true}
            radius="sm"
            size="lg"
            onClick={() => {
              window.open(
                siteConfig.links.calcom,
                "_blank",
                "noopener,noreferrer"
              );
              handleMenuItemClick();
            }}
          >
            Let’s Talk
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
