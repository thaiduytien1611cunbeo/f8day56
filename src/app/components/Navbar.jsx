import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

import NavbarIcon from "./NavbarIcon";

export default function NextNavbar() {
  return (
    <Navbar className="fixed bg-slate-800/50">
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#home">
            Trang chủ
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#book">
            Đặt Lịch
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#packages">
            Ưu Đãi
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#services">
            Dịch Vụ
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#gallery">
            Thư Viện
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#review">
            Đánh Giá
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#contact">
            Liên Hệ
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarIcon />
      </NavbarContent>
    </Navbar>
  );
}
