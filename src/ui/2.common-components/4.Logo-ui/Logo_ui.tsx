"use client";
// ------------------------
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
// --------------------------------------------------------------------
const LogoUi = (props: any) => {
  const router = useRouter();
  const imgRef = useRef<HTMLImageElement>(null);
  const whiteLogo = "/1.Home/logo/noava-white.jpeg";
  const yellowLogo = "/1.Home/logo/noava-red.jpeg";
  const [logo, setLogo] = useState<string>(whiteLogo);
  useEffect(() => {
    document.addEventListener("contextmenu", (event) => event.preventDefault());
  }, []);
  return (
    <Link href="/">
      <img
        ref={imgRef}
        onMouseEnter={() => setLogo(yellowLogo)}
        onMouseLeave={() => setLogo(whiteLogo)}
        onTouchStart={(event) => {
          setLogo(yellowLogo);
          event.preventDefault();
        }}
        onTouchEnd={(event) => {
          event.preventDefault();
          setLogo(whiteLogo);
          router.push("/");
        }}
        className="w-[100px] object-contain"
        src={logo}
        alt="noava logo"
        loading="lazy"
      />
    </Link>
  );
};

export default LogoUi;
