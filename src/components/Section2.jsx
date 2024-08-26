import { SectionProsp } from "./SectionProps";

export const Section2 = () => {
  return (
    <div className="pt-11 pb-12 md:pl-9 md:pr-9 pl-4 pr-4 md:flex  items-center  flex-col container">
      <div className="text-center">
        {/* <span className="border mt-12 rounded-xl pl-5 pr-5 pt-1 pb-1 border-solid bg-gray-200 text-gray-600 text-sm font-normal"></span> */}
        <SectionProsp text={"About Me"} />
      </div>
      <div className="mt-12 md:flex md:justify-between md:container flex gap-12 md:flex-row flex-col ">
        <div className="flex md:hidden">
          <img src="./mobile-section2.png" alt="" />
        </div>
        <div className="hidden md:flex">
          <img className="w-[440px] h-[520px]" src="./Section2.png" />
        </div>
        <div className="md:w-1/2 flex gap-4 flex-col">
          <h1 className="text-gray-900 text-3xl font-semibold">
            Curious about me? Here you have it:
          </h1>
          <p className="Section2text">
            I'm a designer turned full stack developer, passionate about
            React.js and Node.js. I excel in blending technical and visual
            aspects to craft exceptional digital products, prioritizing user
            experience, precise design, and optimized code.
          </p>
          <p className="Section2text">
            Since starting my web development journey in 2015, I've embraced
            challenges and kept up with the latest tech trends. Now in my early
            thirties, seven years in, I'm building cutting-edge web apps using
            Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.
          </p>
          <p className="Section2text">
            With a progressive mindset, I enjoy the entire product development
            process, from ideation to execution. Off duty, you'll find me on
            Twitter, tracking startup journeys, or unwinding. Follow me for tech
            insights and public project updates on Twitter or GitHub.
          </p>
          <p>Finally, some quick bits about me.</p>
          <ul className="list-disc list-inside ">
            <li>B.E. in Computer Engineering</li>
            <li>Full time freelancer</li>
            <li>Avid learner</li>
          </ul>
          <p className="Section2text">
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
};
