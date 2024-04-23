import React, { useState } from "react";
import logo from "../../assets/logo.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = (e) => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header class="bg-white font-poppins">
      <nav class="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <a href="/" class="font-anton">PEAK PERFORMANCE</a>
        </div>
        <div
          class={`nav-links md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${
            menuOpen ? "top-[9%]" : "top-[-100%]"
          } md:w-auto w-full flex items-center px-5 transition-all duration-300`}
        >
          <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <a class="hover:text-gray-500" href="/">
                Home
              </a>
            </li>
            <li>
              <a class="hover:text-gray-500" href="products">
                Products
              </a>
            </li>
            <li>
              <a class="hover:text-gray-500" href="about">
                About
              </a>
            </li>
          </ul>
        </div>
        <div class="flex items-center gap-6">
          <button class="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
            Sign in
          </button>
          <ion-icon
            onClick={onToggleMenu}
            name={menuOpen ? "close" : "menu"}
            class="text-3xl cursor-pointer md:hidden"
          ></ion-icon>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
