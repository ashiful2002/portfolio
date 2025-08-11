import { useState, useEffect } from "react";
import { navItems } from "../Constants/Index";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/3.png";

const Header = () => {
  const [activeId, setActiveId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    navItems.forEach(({ url }) => {
      const id = url.replace("/#", "").replace("#", "");
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-white shadow-md">
      <div className="flex h-16 items-center justify-between px-4 md:px-20">
        <HashLink smooth to="/" onClick={handleLinkClick}>
          <img src={logo} alt="Ashiful Islam" className="h-10" />
        </HashLink>

        {/* Desktop Menu */}
        <div className="hidden space-x-6 md:flex">
          {navItems.map(({ id, url, title }) => (
            <HashLink
              key={id}
              smooth
              to={url}
              className={`relative capitalize no-underline transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary-color after:transition-all after:duration-300 hover:after:w-full ${
                activeId === url.replace("/#", "").replace("#", "")
                  ? "text-primary-color after:w-full"
                  : ""
              }`}
              onClick={handleLinkClick}
            >
              {title}
            </HashLink>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="block focus:outline-none md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`transition-max-height overflow-hidden bg-white shadow-md duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-4 px-4 py-4">
          {navItems.map(({ id, url, title }) => (
            <HashLink
              key={id}
              smooth
              to={url}
              className={`relative capitalize no-underline transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary-color after:transition-all after:duration-300 hover:after:w-full ${
                activeId === url.replace("/#", "").replace("#", "")
                  ? "text-primary-color after:w-full"
                  : ""
              }`}
              onClick={handleLinkClick}
            >
              {title}
            </HashLink>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="bg- gray-100 fixed inset-0 z-40 bg-opacity-40 md:hidden"
        />
      )}
    </nav>
  );
};

export default Header;
