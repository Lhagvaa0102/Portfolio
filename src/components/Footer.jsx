import { FooterIcon } from "./Icons/FooterIcon";

export const Footer = () => {
  return (
    <div className="flex justify-center items-center gap-2 p-5 ">
      <div className="">
        <FooterIcon />
      </div>
      <div>
        <p className="footer_text">
          2024 | Greetings with ❤️️ from Ulaanbaatar
        </p>
      </div>
    </div>
  );
};
