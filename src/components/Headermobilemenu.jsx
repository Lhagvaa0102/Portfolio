import { DarkModeIcon } from "./Icons/DarkModeIcon";
import { MobileXbutton } from "./Icons/MobileXbutton";

export const OnclickHeadermobile = ({ handleMenu, isOpenMenu }) => {
  return (
    <div
      className={` w-screen h-screen bg-gray-100 flex flex-col absolute transition-all duration-500 p-0 m-0 top-0 ease-in-out ${
        isOpenMenu ? "right-0" : "right-[-100%]"
      } right-0 `}
    >
      <div>
        <div className="flex justify-between p-4 items-center">
          <h1 className="text-gray-950 text-3xl font-sans">TOM</h1>
          <button onClick={handleMenu}>
            <MobileXbutton />
          </button>
        </div>
        <div className="flex flex-col border text-gray-600 items-start p-4 gap-4 flex-start">
          <button>About</button>
          <button>Work</button>
          <button>Testimonials</button>
          <button>Contact</button>
        </div>
        <div className="flex justify-between p-4 items-center">
          <p>Switch theme</p>
          <DarkModeIcon />
        </div>
        <div className="flex justify-center p-4 ">
          <button className=" border bg-gray-950 rounded-xl pt-2 pb-2 pl-28 pr-28 text-gray-50">
            Downlaod CV
          </button>
        </div>
      </div>
    </div>
  );
};
