"use client";
import React, { useState } from 'react';
import { Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react';
import NextLink from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const nFormat = new Intl.NumberFormat("pl", {minimumFractionDigits: 2});
  const TimeCurrency = 513000
  const FormattedTimeCurrency = nFormat.format(TimeCurrency).replace(',', '.');;

  return (
    <NextUINavbar maxWidth="xl" position="sticky" onMenuOpenChange={setIsMenuOpen}>
      {/* Brand Section */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
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
      <NavbarContent className="hidden sm:flex basis-3/5 sm:basis-full" justify="center">
        <NavbarItem>
          <NextLink href="#home">Home</NextLink>
        </NavbarItem>
        <NavbarItem>
          <NextLink href="#services">Services</NextLink>
        </NavbarItem>
        <NavbarItem>
          <NextLink href="#faq">FAQ</NextLink>
        </NavbarItem>
      </NavbarContent>

      {/* User Actions and Currency Display */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className='flex gap-2 items-center'>
            <FontAwesomeIcon icon={faClock} />
            <div className="text-blue-400 mr-5">{FormattedTimeCurrency}</div>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Button href="#login">Login</Button>
        </NavbarItem>
        <NavbarItem  className="hidden sm:flex">
          <Button color="primary" href="#signup">Sign Up</Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className='gap-4'>
        <NavbarMenuItem>
          <NextLink href="#home">Home</NextLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NextLink href="#services">Services</NextLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NextLink href="#faq">FAQ</NextLink>
        </NavbarMenuItem>
        <NavbarMenuItem className='mt-6 text-blue-300'>
          <NextLink href="#login">Login</NextLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NextLink className="text-blue-500" href="#signup">Sign Up</NextLink>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
};
