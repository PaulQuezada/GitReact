import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button
} from "@nextui-org/react";
import { AcmeLogo } from "../components/AcmeLogo";

export default function header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <div className="">
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit">TR Algorithm</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Dashboard
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Playita
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Locureichon
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="/login">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="/" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <div className="h-screen" id="inicio">
        <div className="bg-gradient-to-br from-blue-300 to-purple-500 h-3/5 rounded">
          <div className="p-10 mx-10 flex-row">
            <h1 className="mt-12 text-5xl text-white font-black"> Bienvenido a TR Algorithm</h1>
            <h1 className="mt-5 text-2xl text-white font-black"> Bienvenido a TR Algorithm</h1>
            <img
              src="./src/assets/data_algorithm.svg"
              className="absolute top-20 right-0 w-1/3 h-1/2"
            />
          </div>
        </div>

        <h1 className="ml-10 mt-10 text-4xl font-black"> Sobre el Algoritmo</h1>

        <div className="grid grid-cols-3 gap-4 p-5 h-screen">
          <div className="bg-purple-500 rounded-lg p-5 text-white font-black h-1/4">LOS TEAM PLAYA XDXDXD </div>
          <div className="bg-purple-500 rounded-lg p-5 text-white font-black h-1/4">LOS TEAM PLAYA XDXDXD </div>
          <div className="bg-purple-500 rounded-lg p-5 text-white font-black h-1/4">LOS TEAM PLAYA XDXDXD </div>
        </div>
      </div>
    </div>
  );
}
