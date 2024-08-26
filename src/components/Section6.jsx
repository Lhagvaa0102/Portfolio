import { Email } from "./Icons/Email";
import { PhoneIcon } from "./Icons/PhoneIcon";
import { Section6Icon } from "./Icons/Section6Icon";
import { FigmaIcon, GitHubICon, TwitterIcon } from "./Icons/SectionOneIcon";

import { SectionProsp } from "./SectionProps";

export const Section6 = () => {
  return (
    <div className=" flex p-4 flex-col mb-16 gap-12">
      <div className="flex flex-col items-center gap-4">
        <span className="border mt-12 rounded-xl border-solid bg-gray-200 text-gray-600 text-sm font-normal">
          <SectionProsp text={"Get in touch"} />
        </span>
        <span className="md:w-[576px] text-wrap ">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </span>
      </div>
      <div className="flex items-center flex-col">
        <div className="flex flex-col gap-4">
          <div className="flex gap-5 justify-center ">
            <Email />
            <p className="text-gray-950 dark:text-white font-semibold text-xl md:text-4xl ">
              tom@pinecone.mn
            </p>
            <Section6Icon />
          </div>
          <div className="flex gap-5 justify-center ">
            <PhoneIcon />
            <p className="text-gray-950 dark:text-white font-semibold text-xl md:text-4xl">
              +976 88112233
            </p>
            <Section6Icon />
          </div>
        </div>
      </div>
      <div>
        <div className="text-center text-base font-normal text-gray-600">
          You may also find me on these platforms!
        </div>
        <div className="flex justify-center ">
          <GitHubICon />
          <TwitterIcon />
          <FigmaIcon />
        </div>
      </div>
    </div>
  );
};
