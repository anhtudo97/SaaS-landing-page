import Instagram from "@/assets/icons/instagram.svg";
import Tiktok from "@/assets/icons/tiktok.svg";
import Twitter from "@/assets/icons/twitter.svg";
import Linkedin from "@/assets/icons/linkedin.svg";
import XSocial from "@/assets/icons/x-social.svg";

export const Footer = () => {
  return <footer className="py-5 bg-black text-white/60 border-t border-white/20">
    <div className="container">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
        <div className="text-center">© 2024 Your Company, Inc. All rights reserved</div>
        <ul className="flex justify-center gap-2.5">
          <li><Instagram /></li>
          <li><Tiktok /></li>
          <li><Twitter /></li>
          <li><Linkedin /></li>
          <li><XSocial /></li>
        </ul>
      </div>
    </div>
  </footer>;
};
