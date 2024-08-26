import {
  CypressIcon,
  ExpressIcon,
  FigmaIcon,
  GitIcon,
  JavascriptIcon,
  MongoDBIcon,
  NestIcon,
  NextIcon,
  NodeIcon,
  ReactIcon,
  SassIcon,
  SocketIcon,
  StoryBookIcon,
  TailwindcssIcon,
  TypescriptIcon,
} from "./Icons/SkillsIcons";
import { SectionProsp } from "./SectionProps";
import { SkillBox } from "./SkillBox";
export const Section3 = () => {
  return (
    <div className=" container md:flex  md:flex-col mt-14  gap-12 ">
      <div className="flex flex-col items-center gap-4">
        <SectionProsp text={"Skills"} />
        <span>The skills, tools and technologies I am really good at:</span>
      </div>
      <div className="container md:w-full inline-flex flex-wrap md:flex md:flex-row md:gap-16 gap-9 mt-6 dark:text-white ">
        <SkillBox iconComponent={<JavascriptIcon />} text={"Javascript"} />
        <SkillBox iconComponent={<TypescriptIcon />} text={"Typescript"} />
        <SkillBox iconComponent={<ReactIcon />} text={"React"} />
        <SkillBox iconComponent={<NextIcon />} text={"NextJS"} />
        <SkillBox iconComponent={<NodeIcon />} text={"NodeJS"} />
        <SkillBox iconComponent={<ExpressIcon />} text={"ExpressJS"} />
        <SkillBox iconComponent={<NestIcon />} text={"NestJS"} />
        <SkillBox iconComponent={<SocketIcon />} text={"Socket.io"} />
        <div className="w-[88px] h-[100px] flex flex-col items-center gap-2 ">
          <img
            className="w-[64px] dark:bg-gray-950 h-[64px]"
            src="./postgresql.png"
          />
          <SkillBox text={"PostgreSQL"} />
        </div>
        <SkillBox iconComponent={<MongoDBIcon />} text={"MongoDB"} />
        <SkillBox iconComponent={<SassIcon />} text={"Sass/Scss"} />
        <SkillBox iconComponent={<TailwindcssIcon />} text={"Tailwindcss"} />
        <SkillBox iconComponent={<FigmaIcon />} text={"Figma"} />
        <SkillBox iconComponent={<CypressIcon />} text={"Cypress"} />
        <SkillBox iconComponent={<StoryBookIcon />} text={"StoryBook"} />
        <SkillBox iconComponent={<GitIcon />} text={"Git"} />
      </div>
    </div>
  );
};
