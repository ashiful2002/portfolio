import { useState, useEffect } from "react";
import { navItems } from "../Constants/Index";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/3.png";

const Header = () => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }, // 50% of section must be visible to count as active
    );

    navItems.forEach(({ url }) => {
      const id = url.replace("/#", "").replace("#", "");
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-white shadow-md">
      <div className="flex h-16 items-center justify-between px- 4 md:px-20">
        <HashLink smooth to="/">
          <img src={logo} alt="Ashiful Islam" className="h-10" />
        </HashLink>

        {/* Desktop Menu */}
        <div className="hidden space-x-6 md:flex">
          {navItems.map(({ id, url, title }) => (
            <HashLink
              key={id}
              smooth
              to={url}
              className={`relative capitalize no-underline transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full ${
                activeId === url.replace("/#", "").replace("#", "")
                  ? "text-blue-600 after:w-full"
                  : ""
              }`}
            >
              {title}
            </HashLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
