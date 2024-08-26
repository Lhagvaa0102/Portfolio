import { ActiveIcon } from "./Icons/ActiveIcon";
import { LocationIcon } from "./Icons/LocationIcon";
import { FigmaIcon, GitHubICon, TwitterIcon } from "./Icons/SectionOneIcon";

export const Section1 = () => {
  return (
    <div className="mt-[96px] mb-[96px] flex justify-center  flex-col md:flex-row md:justify-between container  ">
      <div className="md:hidden">
        <img className="dark:bg-gray-700" src="./mobile-section1.png" alt="" />
      </div>
      <div className=" flex justify-between flex-col gap-12 md:w-1/2">
        <div className="text-gray-900 dark:text-white md:text-6xl font-bold text-4xl  ">
          HI, I'm TOM 👋
        </div>
        <div className="text-wrap">
          I specialize in full stack development, particularly with React.js and
          Node.js. My main goal is to create exceptional digital experiences
          that are fast, visually appealing, and accessible to everyone. With
          over 7 years of experience in web development, I continue to find joy
          in crafting innovative solutions and designs.
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <LocationIcon />
            Ulaanbaatar, Mongolia
          </div>
          <div className="flex items-center gap-2">
            <ActiveIcon />
            Available for new projects
          </div>
        </div>
        <div className="flex  ">
          <GitHubICon />
          <TwitterIcon />
          <FigmaIcon />
        </div>
      </div>
      <div className="w-1/2 md:flex justify-end hidden ">
        <img
          className="w-min-[320px] h-[360px] object-cover "
          src="./Section1.png"
        />
      </div>
    </div>
  );
};
