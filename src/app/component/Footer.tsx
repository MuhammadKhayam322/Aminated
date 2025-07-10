import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

interface FooterColumn {
  title?: string;
  items: string[];
}

interface FooterProps {
  logo?: string;
  columns: FooterColumn[];
  aboutUs: string[];
  bottomLinks: string[];
}

const Footer: React.FC<FooterProps> = ({ logo, columns, aboutUs, bottomLinks }) => {
  return (
    <footer className="bg-black text-white py-10 px-4 lg:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
        {/* Logo */}
        <div className="col-span-1 flex flex-col gap-4">
          {logo && <img src={logo} alt="Logo" className="w-16" />}
          <p className="text-sm text-white/80">Utopia</p>
        </div>

        {/* Dynamic Columns */}
        {columns.map((col, index) => (
          <div key={index}>
            {col.title && <h4 className="font-semibold mb-3">{col.title.toUpperCase()}</h4>}
            <ul className="space-y-1 text-sm text-white/80">
              {col.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* About Us */}
        <div>
          <h4 className="font-semibold mb-3">ABOUT US</h4>
          <ul className="space-y-1 text-sm text-white/80">
            {aboutUs.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-10 border-t border-white/20 pt-6 flex flex-col lg:flex-row justify-between items-center text-sm gap-4">
        <div className="flex flex-wrap justify-center gap-4 text-white/70">
          {bottomLinks.map((link, index) => (
            <span key={index} className="border-r border-white/20 pr-4 last:border-none">
              {link}
            </span>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-3 text-xl">
          <a href="https://www.instagram.com/" className="text-pink-500"><FaInstagram /></a>
          <a href="https://www.facebook.com/" className="text-blue-600"><FaFacebookF /></a>
          <a href="https://www.linkedin.com/" className="text-blue-500"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
