import Image from 'next/image';

const Header = () => {
  return (
      <header className="bg-white w-[90%] sm:w-[95vw] md:w-[95vw] h-15 float-right mt-5 rounded-l-[15px] flex items-center justify-between">
        <div className="toggle md:hidden w-10 h-10 ml-5 flex items-center justify-center">
          <Image width={25} height={25} src="/img/header/toggleIcon.png" alt="Toggle" />
        </div>

        <div className="brandLogo w-20 md:w-40 h-10 md:h-40 flex items-center justify-center">
          <a href="#">
            <Image width={100} height={40} src="/img/header/Logo.png" alt="Logo" />
          </a>
        </div>

        <div className="navLinks hidden md:block w-160 h-10">
          <ul className="flex items-center justify-between pt-2 gap-4">
            <li className="border-black text-[#4C4886] font-semibold border-b w-14 flex items-center justify-center">
              <a href="#">Home</a>
            </li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Careers Blog</a></li>
            <li><a href="#">Details</a></li>
            <li><a href="#">FAQ&apos;s</a></li>
          </ul>
        </div>

        <div className="socialLinks mr-5 flex items-center justify-between gap-4">
          <div className="whatsApp bg-[#4C4886] w-10 rounded-lg h-10 flex items-center justify-center">
            <a href="#">
              <Image width={20} height={20} src="/img/header/whatsApp.png" alt="WhatsApp" />
            </a>
          </div>
          <div className="mail w-10 bg-[#4C4886] rounded-lg h-10 flex items-center justify-center">
            <a href="#">
              <Image width={20} height={20} src="/img/header/mail.png" alt="Mail" />
            </a>
          </div>
        </div>
      </header>
  )
}

export default Header;
