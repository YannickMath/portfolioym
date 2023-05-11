import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

export default function SocialIcons() {
  return (
    <div className="flex">


      <a
        href="https://www.linkedin.com/in/yannick-mathieu/"
        title="Yannick MATHIEU' Page Linkedin"
        className="lg:w-10 w-8"
      >
        <BsLinkedin aria-hidden="true" size={25} />
      </a>
      <a
        href="https://github.com/YannickMath"
        title="Yannick MATHIEU' Page Github"
        className="lg:w-10 w-8"
      >
        <BsGithub aria-hidden="true" size={25} />
      </a>

    </div>
  );
}
