import { useState } from "react";
import Link from "next/link";
import { DarkModeIcon } from "./Icons/DarkModeIcon";
import { HeaderMobile } from "./Icons/HeaderMobile";
import { OnclickHeadermobile } from "./Headermobilemenu";
import { LightModeIcon } from "./Icons/LightModeIcon";
export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const [Dark, setDark] = useState(false);
  const toggleTheme = () => {
    setDark(!Dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className=" justify-between   items-center flex p-4 md:pl-9 md:pr-9 md:pt-5 md:pb-5 md:flex ">
      <div className="text-gray-900  text-3xl font-bold">
        <div className="text-gray-900 dark:text-gray-100">TOM</div>
      </div>
      <div className="md:hidden">
        <OnclickHeadermobile handleMenu={handleMenu} isOpenMenu={isOpenMenu} />
        <div onClick={handleMenu}>
          <HeaderMobile />
        </div>
      </div>
      <div className="hidden  md:flex dark:text-gray-300 text-gray-600 gap-6">
        <button>About</button>
        <button>Work</button>
        <button>Testimonials</button>
        <button>Contact</button>
        <button className=" border-[1px] borderl-[15px] border-gray-300"></button>
        {Dark ? (
          <button onClick={toggleTheme}>
            <LightModeIcon />
          </button>
        ) : (
          <button onClick={toggleTheme}>
            <DarkModeIcon />
          </button>
        )}

        <button className="w-[136px] h-[36px] border rounded-xl bg-gray-900 dark:bg-white dark:text-gray-950 pl-[10px] pr-[10px] pt-[6px] pb-[6px] flex justify-center text-gray-50">
          Downlaod CV
        </button>
      </div>
    </div>
  );
};
