"use client";

import Image from "next/image";

const logos = [
  {
    src: "https://order.reskinn.store/cl_logo.svg",
    ig: "https://www.instagram.com/re_skinn",
    alt: "reskinn",
  },
];

const LogoGrid = () => (
  <div>
    <div className="custom-screen">
      <h2 className="font-semibold text-sm text-gray-600 text-center">
        STORES USING GRAMFLOW AND AUTOMATING SALES
      </h2>
      <div className="mt-6">
        <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
          {logos.map((item, idx) => (
            <li key={idx}>
              <Image
                onClick={() => {
                  //redirect to instagram
                  window.open(item.ig);
                }}
                className="cursor-pointer grayscale hover:grayscale-0"
                width={100}
                height={100}
                src={item.src}
                alt={item.alt}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default LogoGrid;
