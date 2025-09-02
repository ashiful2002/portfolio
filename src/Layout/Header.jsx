import { useState, useEffect } from "react";
import { navItems } from "../Constants/Index";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [activeId, setActiveId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Track visible section for active link
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
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

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/40 bg-white/40 shadow-md backdrop-blur-lg dark:border-gray-700 dark:bg-gray-900/10">
      <div className="flex h-16 items-center justify-between px-4 md:px-20">
        {/* Logo */}
        <HashLink smooth to="/" onClick={() => setActiveId("")}>
          <img
            src="https://i.ibb.co.com/F4QZzP97/ai-logo.png"
            alt="Ashiful Islam"
            className="-ml-4 w-[199px] sm:ml-0"
          />
        </HashLink>

        {/* Desktop Menu */}
        <div className="hidden space-x-6 md:flex">
          {navItems.map(({ id, url, title }) => {
            const sectionId = url.replace("/#", "").replace("#", "");
            return (
              <HashLink
                key={id}
                smooth
                to={`/#${sectionId}`}
                className={`relative capitalize no-underline transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary-color after:transition-all after:duration-300 hover:after:w-full ${
                  activeId === sectionId
                    ? "text-primary-color after:w-full"
                    : "text-gray-900 dark:text-gray-100"
                }`}
              >
                {title}
              </HashLink>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="z-50 block focus:outline-none md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-gray-800 dark:text-gray-100"
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
        className={`overflow-hidden border-t transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        } bg- white mx-2 rounded border-gray-200 dark:border-gray-700 dark:bg-blue-950/30`}
      >
        <div className="flex flex-col space-y-3 px-4">
          {navItems.map((item) => {
            const sectionId = item.url.replace("/#", "").replace("#", "");
            const isActive = activeId === sectionId;

            return (
              <a
                key={item.id}
                href={item.url}
                onClick={() => setIsOpen(false)}
                className={`relative py-2 capitalize no-underline transition-colors hover:text-primary-color dark:hover:text-primary-color ${
                  isActive
                    ? "font-semibold text-primary-color"
                    : "text-gray-900 dark:text-gray-100"
                }`}
              >
                {item.title}
                {isActive && (
                  <span className="absolute -bottom-0 left-0 h-[2px] w-12 bg-primary-color"></span>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Header;
