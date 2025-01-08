"use client";
import React, { useState } from 'react';
import { Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react';
import NextLink from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { ThemeSwitch } from './theme-switch';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const nFormat = new Intl.NumberFormat("pl", {minimumFractionDigits: 2});
  const TimeCurrency = 513000
  const FormattedTimeCurrency = nFormat.format(TimeCurrency).replace(',', '.');;

  return (
    <NextUINavbar maxWidth="xl" position="sticky" onMenuOpenChange={setIsMenuOpen}>
      {/* Brand Section */}
      <NavbarContent className="flex-grow basis-1/5 sm:basis-auto" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <div className="flex items-center gap-2">
              {/* Replace with your Logo component */}
              <span className="font-bold text-lg">⏳</span>
              <p className="font-bold text-inherit">TimeXchange</p>
            </div>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Links Section */}
      <NavbarContent className="hidden sm:flex basis-auto" justify="center">
        <NavbarItem>
          <NextLink href="/">Home</NextLink>
        </NavbarItem>
        <NavbarItem>
          <NextLink href="offers">Offers</NextLink>
        </NavbarItem>
        <NavbarItem>
          <NextLink href="faq">FAQ</NextLink>
        </NavbarItem>
      </NavbarContent>

      {/* User Actions and Currency Display */}
      <NavbarContent className="flex-grow basis-1/5 sm:basis-auto" justify="end">
        <NavbarItem className='flex gap-2 items-center'>
            <FontAwesomeIcon icon={faClock} />
            <div className="text-blue-400 mr-5">{FormattedTimeCurrency}</div>
        </NavbarItem>
        <ThemeSwitch />
        <NavbarItem className="hidden sm:flex">
          <NextLink href="#login"><Button>Login</Button></NextLink>
        </NavbarItem>
        <NavbarItem  className="hidden sm:flex">
          <NextLink href="#signup"><Button color="primary">Sign Up</Button></NextLink>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className='gap-4'>
        <NavbarMenuItem>
          <NextLink href="home">Home</NextLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NextLink href="offers">offers</NextLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NextLink href="faq">FAQ</NextLink>
        </NavbarMenuItem>
        <NavbarMenuItem className='mt-6 text-blue-300'>
          <NextLink href="login">Login</NextLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NextLink className="text-blue-500" href="signup">Sign Up</NextLink>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
};