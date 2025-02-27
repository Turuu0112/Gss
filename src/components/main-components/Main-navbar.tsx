"use client";
import { FaBars, FaGreaterThan } from "react-icons/fa6";

export const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center  justify-stretch p-2 bg-blue-950 fixed shadow-lg top-0 left-0 w-full z-10">
        <div
          className="w-[100px] h-[100px] relative perspective-900"
          style={{ transformStyle: "preserve-3d" }}
        >
          <img
            src="/Logo-gss.png"
            width={100}
            height={100}
            alt="Logo"
            className="rounded-full border-4 p-3 border-white transition-transform-075s transform"
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform =
                "rotateX(20deg) rotateY(20deg)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg)")
            }
          />
        </div>
        <div className=" items-center gap-6 lg:flex hidden">
          <a
            href="https://globalgroup.mn/"
            className="text-lg text-white hover:text-yellow-300 transition duration-300 flex items-center gap-2 uppercase font-semibold"
          >
            <FaGreaterThan size={12} />
            Глобал Групп
          </a>
          <a
            href="https://globalgroup.mn/news/"
            className="text-lg text-white hover:text-yellow-300 transition duration-300 flex items-center gap-2 uppercase font-semibold"
          >
            <FaGreaterThan size={12} />
            Мэдээ
          </a>
          <a
            href="#"
            className="text-lg text-white hover:text-yellow-300 transition duration-300 flex items-center gap-2 uppercase font-semibold"
          >
            <FaGreaterThan size={12} />
            Зөвлөгөө
          </a>
          <a
            href="https://globalgroup.mn/career/"
            className="text-lg text-white hover:text-yellow-300 transition duration-300 flex items-center gap-2 uppercase font-semibold"
          >
            <FaGreaterThan size={12} />
            Хүний нөөц
          </a>
        </div>
        <div className="block lg:hidden ">
          <FaBars className="text-white" size={24} />
        </div>
      </nav>
    </div>
  );
};
