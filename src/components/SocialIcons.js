import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

export default function SocialIcons() {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:text-xl p-4 space-y-4 sm:space-y-0">
    <a
      href="https://www.linkedin.com/in/yannick-mathieu/"
      title="Yannick MATHIEU' Page Linkedin"
      className="lg:w-10 w-8 flex justify-center"
    >
      <BsLinkedin aria-hidden="true"  />
    </a>
    <a
      href="https://github.com/YannickMath"
      title="Yannick MATHIEU' Page Github"
      className="lg:w-10 w-8 flex justify-center"
    >
      <BsGithub aria-hidden="true"  />
    </a>
  </div>
  
  );
}
