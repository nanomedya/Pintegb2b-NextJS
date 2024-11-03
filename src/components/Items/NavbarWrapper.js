"use client"
import React, { useEffect } from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, User, Tooltip } from "@nextui-org/react";
import AcmeLogo from "./AcmeLogo.jsx";
import { Bell, Box, CreditCard, FileText, Home, List, MapPin, ShoppingCart } from "react-feather";
import { MenuItem } from "../Elements/MenuItem.js";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { fetchUser } from "@/redux/slices/userSlice.js";

export default function NavbarWrapper() {
  const dispatch = useDispatch()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const user = useSelector((state) => state.user)
  const router = useRouter()
  const path = usePathname()

  const menuItems = [
    { label: "Anasayfa", link: "home" },
    { label: "Ürünler", link: "product" },
    { label: "Sepetim", link: "basket" },
    { label: "Siparişler", link: "" },
    { label: "Cari Hesap", link: "" },
    { label: "Ödeme Yap", link: "pay" },
    { label: "İletişim", link: "contact" },
  ];

  const logout = () => {
    window.localStorage.clear()
    router.push("/")
  }

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      maxWidth="2xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="lg:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link href="/pages/home"><AcmeLogo className="h-10" /></Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-16" justify="center">
        <NavbarBrand>
          <Link href="/pages/home"><AcmeLogo className="h-14" /></Link>
        </NavbarBrand>

        <NavbarItem isActive>
          <MenuItem
            link="/pages/home"
            istooltip={false}
            isArrow={false}
            icon={Home}
            tooltipText="Anasayfa"
            isActive={path === "/" ? true : false}
          />
        </NavbarItem>
        <NavbarItem>
          <MenuItem
            link="/pages/product"
            istooltip={false}
            isArrow={false}
            icon={Box}
            tooltipText="Ürünler"
            isActive={path === "/pages/product" ? true : false}
          />
        </NavbarItem>
        <NavbarItem>
          <Dropdown placement="bottom-end" key="order">
            <DropdownTrigger>
              <div className="flex items-center gap-2 cursor-pointer">
                <MenuItem
                  link="/"
                  istooltip={false}
                  isArrow={true}
                  icon={List}
                  tooltipText="Siparişler"
                  isActive={false}
                />
              </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem textValue="settings" key="orders"><Link className="text-small text-black w-full font-normal" href="/pages/orders/my-orders">Siparişlerim</Link></DropdownItem>
              <DropdownItem textValue="settings" key="order_balance"><Link className="text-small text-black w-full font-normal" href="/pages/orders/my-back-orders">Bakiye Siparişlerim</Link></DropdownItem>
              <DropdownItem textValue="settings" key="where_cargo"><Link className="text-small text-black w-full font-normal" href="/pages/orders/where-is-cargo">Kargo Nerede?</Link></DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Dropdown placement="bottom-end" key="cari">
            <DropdownTrigger>
              <div className="flex items-center gap-2 cursor-pointer">
                <MenuItem
                  link="/"
                  istooltip={false}
                  isArrow={true}
                  icon={FileText}
                  tooltipText="Cari Hesap"
                  isActive={false}
                />
              </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem textValue="settings" key="tax"><Link className="text-small text-black w-full font-normal" href="/pages/current-account/invoices">Faturalar</Link></DropdownItem>
              <DropdownItem textValue="settings" key="open_tax"><Link className="text-small text-black w-full font-normal" href="/pages/current-account/unclosed-invoices">Kapanmamış Faturalar</Link></DropdownItem>
              <DropdownItem textValue="settings" key="debt_statu"><Link className="text-small text-black w-full font-normal" href="/pages/current-account/debt-status">Borç Durumu</Link></DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <MenuItem
            link="/pages/pay"
            istooltip={false}
            isArrow={false}
            icon={CreditCard}
            tooltipText="Ödeme Yap"
            isActive={path === "/pages/pay" ? true : false}
          />
        </NavbarItem>
        <NavbarItem>
          <MenuItem
            link="/pages/contact"
            istooltip={false}
            isArrow={false}
            icon={MapPin}
            tooltipText="İletişim"
            isActive={path === "/pages/contact" ? true : false}
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" className="items-center gap-10" justify="end">
        <NavbarItem className="hidden lg:flex">


          <MenuItem
            link="/pages/my-basket"
            istooltip={false}
            isArrow={false}
            icon={ShoppingCart}
            tooltipText="Sepetim"
            isActive={path === "/pages/my-basket" ? true : false}
          />

        </NavbarItem>
        <NavbarItem className="hidden lg:flex">


          <MenuItem
            link="/pages/notification"
            istooltip={false}
            isArrow={false}
            icon={Bell}
            tooltipText="Bildirimler"
            isActive={path === "/pages/notification" ? true : false}
          />

        </NavbarItem>

        <Dropdown placement="bottom-end" key="settings">
          <DropdownTrigger>

            <div className="flex items-center gap-2 cursor-pointer">
              <User
                name={user.data && user.data.name}
                description={user.data && user.data.email}
                avatarProps={{
                  src: "https://i.pravatar.cc/150?img=8",
                  isBordered: true,
                  as: "button",
                  color: "warning",
                  className: "transition-transform"
                }}
              />
            </div>

          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem textValue="profile" key="profile">
              <Link className="w-full text-black font-normal" href="/pages/my-profile">Profilim</Link>
            </DropdownItem>
            <DropdownItem textValue="settings" key="settings"><Link className="w-full text-black font-normal" href="/pages/settings">Ayarlar</Link></DropdownItem>
            <DropdownItem textValue="help_and_feedback" key="help_and_feedback"><Link className="w-full text-black font-normal" href="/pages/help-feedback">Yardım & Geri bildirim</Link></DropdownItem>
            <DropdownItem textValue="logout" className="text-black" key="logout" color="danger" onClick={logout}>
              Güvenli Çıkış
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href={item.link}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
