import { Image } from '../atoms/Image';

export const Navbar = ({ logo, logoAlt, text }) => {
  return (
    <header className="bg-ownr-normal text-white flex flex-col px-3 py-2 mb-10">
      <nav className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex w-full md:w-auto justify-between items-center">
          <a
            href="/"
            className="font-bold text-xl flex space-x-2"
            aria-label="link to homepage"
          >
            <div className="w-8 h-8 self-center">
              <Image src={logo} altText={logoAlt} />
            </div>
            <div className="self-center">{text}</div>
          </a>
        </div>
      </nav>
    </header>
  );
};
