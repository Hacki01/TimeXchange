import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import NextLink from "next/link";

import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">TimeXchange</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="center"
      >
        <NavbarItem>
          <NextLink href="/services">Services</NextLink>
        </NavbarItem>
        <NavbarItem>
          <NextLink href="/exchange">Exchange</NextLink>
        </NavbarItem>
        <NavbarItem>
          <NextLink href="/profile">Profile</NextLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarMenu>
        <NavbarItem>
          <NextLink href="/services">Services</NextLink>
        </NavbarItem>
        <NavbarItem>
          <NextLink href="/exchange">Exchange</NextLink>
        </NavbarItem>
        <NavbarItem>
          <NextLink href="/profile">Profile</NextLink>
        </NavbarItem>
      </NavbarMenu>
    </NextUINavbar>
  );
};
