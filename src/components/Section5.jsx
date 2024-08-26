import { WorkIcon } from "./Icons/WorkIcon";
import { SectionProsp } from "./SectionProps";

export const Section5 = () => {
  return (
    <div className="md:gap-12 gap-6 flex justify-center p-4 flex-col ">
      <div className="flex flex-col items-center gap-4">
        <span className="border mt-12 rounded-xl pl-5 pr-5 pt-1 pb-1 border-solid bg-gray-200 text-gray-600 dark:text-gray-200 dark:bg-gray-600 dark:border-gray-600 text-sm font-normal">
          Work
        </span>
        <span>Some of the noteworthy projects I have built:</span>
      </div>
      <div className="md:flex md:border dark:border-gray-900  rounded-xl  md:mr-auto md:ml-auto shadow-md justify-center">
        <div className="md:p-12 bg-gray-50 dark:bg-gray-800 md:w-[480px] rounded-l-xl rounded-bl-xl` flex justify-start items-center md:h-[384px] ">
          <img className="" src="./UBCAB.png" />
        </div>
        <div className="md:p-12 md:w-[576px] p-8 flex gap-6 flex-col ">
          <p className="text-gray-900 text-xl font-semibold leading-7">UBCab</p>
          <p className="section5text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
            quasi?
          </p>
          <div className=" inline-flex gap-2 flex-wrap">
            <SectionProsp text={"React"} />
            <SectionProsp text={"Next.JS"} />
            <SectionProsp text={"Typescript"} />
            <SectionProsp text={"Nest.JS"} />
            <SectionProsp text={"PostgreSQL"} />
            <SectionProsp text={"Tailwindcss"} />
            <SectionProsp text={"Figma"} />
            <SectionProsp text={"Cypress"} />
            <SectionProsp text={"Storybook"} />
            <SectionProsp text={"Git"} />
          </div>
          <div>
            <WorkIcon />
          </div>
        </div>
      </div>
      <div className="md:flex border rounded-xl  md:mr-auto md:ml-auto shadow-md justify-center">
        <div className="md:p-12 md:w-[576px] p-8 flex gap-6 flex-col ">
          <p className="text-gray-900 text-xl font-semibold leading-7">
            MentorHub
          </p>
          <p className="section5text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            laboriosam vero vel fuga! Pariatur cupiditate dolore totam quas
            expedita maxime.
          </p>
          <div className=" inline-flex gap-2 flex-wrap">
            <SectionProsp text={"React"} />
            <SectionProsp text={"Next.JS"} />
            <SectionProsp text={"Typescript"} />
            <SectionProsp text={"Nest.JS"} />
            <SectionProsp text={"PostgreSQL"} />
            <SectionProsp text={"Tailwindcss"} />
            <SectionProsp text={"Figma"} />
            <SectionProsp text={"Cypress"} />
            <SectionProsp text={"Storybook"} />
            <SectionProsp text={"Git"} />
          </div>
          <div>
            <WorkIcon />
          </div>
        </div>
        <div className="md:p-12 bg-gray-50">
          <img
            className="md:w-[480px] md:h-[384px]  p-8"
            src="./workpic2.png"
          />
        </div>
      </div>
      <div className="md:flex border rounded-xl  md:mr-auto md:ml-auto shadow-md justify-center">
        <div className="md:p-12 bg-gray-50">
          <img
            className="md:w-[480px] md:h-[384px] p-8 "
            src="./workpic3.png"
          />
        </div>
        <div className="md:p-12 md:w-[576px] p-8 flex gap-6 flex-col ">
          <p className="text-gray-900 text-xl font-semibold  leading-7">
            iToim
          </p>
          <p className="section5text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
            quasi?
          </p>
          <div className=" inline-flex gap-2 flex-wrap">
            <SectionProsp text={"React"} />
            <SectionProsp text={"Next.JS"} />
            <SectionProsp text={"Typescript"} />
            <SectionProsp text={"Nest.JS"} />
            <SectionProsp text={"PostgreSQL"} />
            <SectionProsp text={"Tailwindcss"} />
            <SectionProsp text={"Figma"} />
            <SectionProsp text={"Cypress"} />
            <SectionProsp text={"Storybook"} />
            <SectionProsp text={"Git"} />
          </div>
          <div>
            <WorkIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
