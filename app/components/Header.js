"use client";

import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { useRef } from "react";
import { ImCross } from "react-icons/im";

function Header() {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <div className="w-full flex items-center justify-between px-[10px] md:px-[2rem] py-[1.5rem] h-[80px]">
      <div className="text-[22px] font-[600] text-[#000] uppercase tracking-wider">
        <Link href="/">gantry</Link>
      </div>

      <div className="navigation" ref={menuRef} onClick={toggleMenu}>
        <div className="flex justify-between gap-[4rem] items-center menu">
          <ImCross className="w-[20px] h-[20px] lg:hidden text-black absolute top-[2rem] left-[2rem]" />
          <Link href="/">Product</Link>
          <Link href="/">Solutions</Link>

          <Link
            href="/resources"
            className="text-center rounded-full bg-[#000] w-fit h-fit text-[#fff] text-[14px] font-[500] px-[1.5rem] py-[10px]"
          >
            Resources
          </Link>
          <Link href="/company">Company</Link>
        </div>
      </div>
      <div className="flex items-center gap-[1rem]">
        <Link href="/contact">Get in touch</Link>
        <span className="block lg:hidden" onClick={toggleMenu}>
          <BiMenu className="w-[35px] h-[35px] text-black cursor-pointer" />
        </span>
      </div>
    </div>
  );
}

export default Header;
