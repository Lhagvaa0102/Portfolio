import { SectionProsp } from "./SectionProps";

export const Section4 = () => {
  return (
    <div className="flex justify-center flex-col gap-12 mb-24 ">
      <div className="flex flex-col items-center gap-4">
        <span className="border mt-12 rounded-xl  pl-5 pr-5 pt-1 pb-1 border-solid dark:border-gray-600 bg-gray-200 text-gray-600 dark:bg-gray-500 dark:text-gray-200 text-sm font-normal">
          Experience
        </span>
        {/* <SectionProsp text={"Experience"} /> */}
        <span>Here is a quick summary of my most recent experiences:</span>
      </div>

      <div className=" md:container ml-4 mr-4 md:p-8 p-6 border rounded-xl flex flex-col md:gap-12 gap-4 shadow-md md:flex-row ">
        <div>
          <img className="h-[28px]" src="./Column.png" />
        </div>
        <div className="flex md:hidden">Nov 2021 - Present</div>
        <div>
          <ul className="text-gray-900 text-xl list-disc list-inside font-semibold  leading-7">
            Sr. Frontend Developer
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li> Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
          </ul>
        </div>
        <div className="hidden md:flex">Nov 2021 - Present</div>
      </div>
      <div className=" md:container  ml-4 mr-4 md:p-8 p-6 border rounded-xl flex flex-col md:gap-12 gap-4 shadow-md md:flex-row  ">
        <div>
          <img className="h-[28px]" src="./Column.png" />
        </div>
        <div className="flex md:hidden">Nov 2021 - Present</div>
        <div>
          <ul className="text-gray-900 text-xl list-disc list-inside font-semibold leading-7">
            Sr. Frontend Developer
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li> Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
          </ul>
        </div>
        <div className="hidden md:flex">Nov 2021 - Present</div>
      </div>
      <div className=" md:container  ml-4 mr-4 md:p-8 p-6 border rounded-xl flex flex-col md:gap-12 gap-4 shadow-md md:flex-row  ">
        <div>
          <img className="h-[28px]" src="./Column.png" />
        </div>
        <div className="flex md:hidden">Nov 2021 - Present</div>
        <div>
          <ul className="text-gray-900 text-xl list-disc list-inside font-semibold leading-7">
            Sr. Frontend Developer
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit.</li>
          </ul>
        </div>
        <div className="hidden md:flex">Nov 2021 - Present</div>
      </div>
    </div>
  );
};
