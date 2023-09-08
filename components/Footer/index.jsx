"use client";

import { RiGithubFill, RiGithubLine, RiInstagramFill, RiTwitterFill } from "react-icons/ri";

const socialInfo = [
  {
    icon: RiInstagramFill,
    href: "https://www.instagram.com/gramflow.pro",
  },
  {
    icon: RiTwitterFill,
    href: "https://twitter.com/gramflow.pro",
  },
  {
    icon: RiGithubFill,
    href: "https://github.com/imprakharshukla/gramflow.pro-origin",
  }
];

const Footer = () => (
  <footer>
    <div className="custom-screen pt-16">
      <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
        <p className="text-gray-600">
          © {new Date().getFullYear()} Gramflow. All rights reserved.
        </p>

        <div className="flex items-center gap-x-6 text-gray-400 mt-6 ">
          {socialInfo.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={item.href}
                aria-label="social media"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400"
              >
                <Icon className="text-2xl" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
