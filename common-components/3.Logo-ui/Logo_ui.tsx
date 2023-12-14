"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { StaticImageData } from "next/image";
// images
import whiteLogo from "@/public/1.Home/logo/noava-white.jpeg";
import yellowLogo from "@/public/1.Home/logo/noava-red.jpeg";
// --------------------------------------------------------------------
const LogoUi = (props: any) => {
  const router = useRouter();
  const imgRef = useRef<HTMLImageElement>(null);
  const [logo, setLogo] = useState<StaticImageData>(whiteLogo);
  useEffect(() => {
    document.addEventListener("contextmenu", (event) => event.preventDefault());
  }, []);
  return (
    <Link href="/">
      <Image
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
