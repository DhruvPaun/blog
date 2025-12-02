import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-amber-50 to-orange-100 border-t border-amber-200 py-12 text-stone-700">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap justify-between gap-10">
          {/* Logo & Copy */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <div className="flex flex-col justify-between h-full">
              <div className="mb-4 flex items-center space-x-2">
                <Logo width="90px" />
                <h2 className="text-xl font-extrabold text-amber-600">DevBlog</h2>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                Your daily dose of development tips, tutorials, and inspiration.
              </p>
              <p className="mt-4 text-sm text-stone-500">
                © {new Date().getFullYear()} <span className="font-medium">DevBlog</span>. All rights reserved.
              </p>
            </div>
          </div>

          {/* Company */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-sm font-semibold uppercase text-stone-500 mb-4 tracking-wide">
              Company
            </h3>
            <ul className="space-y-2">
              {["About", "Features", "Pricing", "Press"].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="hover:text-amber-600 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-sm font-semibold uppercase text-stone-500 mb-4 tracking-wide">
              Support
            </h3>
            <ul className="space-y-2">
              {["Account", "Help", "Contact", "Community"].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="hover:text-amber-600 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h3 className="text-sm font-semibold uppercase text-stone-500 mb-4 tracking-wide">
              Legal
            </h3>
            <ul className="space-y-2">
              {["Terms", "Privacy", "Licensing"].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="hover:text-amber-600 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
