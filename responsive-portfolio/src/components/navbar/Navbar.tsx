"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/logo.png";
import { NAVIGATION_LINKS } from "../../constants";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e: any, href: any) => {
    // Zabrání výchozímu chování odkazu (okamžitému přesměrování)
    e.preventDefault();

    // Najde element na stránce, který odpovídá selektoru v href
    const targetElement = document.querySelector(href);

    // Pokud je nalezen cílový element
    if (targetElement) {
      // Definuje ofset (posun) od vrchu stránky, aby se zajistil prostor např. pro pevné záhlaví
      const offset = -85;

      // Zjistí aktuální pozici cílového elementu vzhledem k vrchní části viditelné části okna (viewportu)
      const elementPosition = targetElement.getBoundingClientRect().top;

      // Vypočítá finální pozici, kam se má stránka scrollovat
      // Přidá k pozici elementu aktuální scrollovací pozici stránky a aplikuje ofset
      const offsetPosition = elementPosition + window.scrollY + offset;

      // Provádí hladký scroll na vypočtenou pozici
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth", // Hladké scrollování
      });
    }

    // Zavře mobilní menu, pokud bylo otevřené
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50">
        {/* {Desktop menu} */}
        <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex">
          <div className="mr-5 flex items-center justify-between gap-6">
            <a href="#">
              <Image src={logo} alt="logo" width={150} />
            </a>
          </div>
          <div>
            <ul className="flex items-center gap-4">
              {NAVIGATION_LINKS.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-sm hover:text-yellow-400"
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* {Mobile menu} */}
        <div className="rounded-lg backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <div>
              <a href="#">
                <Image src={logo} alt="logo" width={90} className="ml-5" />
              </a>
            </div>
            <div className="flex items-center">
              <button
                className="mr-5 focus:outline-none lg:hidden"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="m-2 h-6 w-5" />
                ) : (
                  <FaBars className="m-2 h-6 w-5" />
                )}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
              {NAVIGATION_LINKS.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="ml-2 block w-full text-lg"
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
