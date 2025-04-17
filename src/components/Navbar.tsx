import MenuIcon from "@/assets/icons/menu.svg";
import logoImage from "@/assets/images/logosaas.png";
import Image from "next/image";

export const Navbar = () => {
  return <div className="bg-black">
    <div className="px-4">
      <div className="py-4 flex items-center justify-between">
        <div className="relative">
          <div className="absolute w-full top-2 bottom-2 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md">
          </div>
          <Image
            src={logoImage}
            alt="SaaS logo"
            className="size-12 relative"
          />
        </div>
        <div className="border border-white border-opacity-30 size-10 inline-flex justify-center items-center rounded-lg sm:hidden">
          <MenuIcon className="text-white" />
        </div>
        <nav className="gap-6 items-center hidden sm:flex">
          <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">About</a>
          <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Features</a>
          <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Updates</a>
          <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Help</a>
          <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Customers</a>
          <button className="bg-white py-2 px-4 rounded-lg">Get for free</button>
        </nav>
      </div>
    </div>
  </div>;
};
