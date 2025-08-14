import React from "react";
import { SocialMedia } from "../../../Constants/Index";

const Socials = () => {
  return (
    <div className="flex items-center justify-center gap-4 pb-5">
      {SocialMedia.map(({ id, icon: Icon, url, color, title }) => (
        <a
          key={id}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={title}
          className="mx-1 transition-colors hover:text-primary-color dark:rounded-full dark:bg-white dark:p-2 dark:hover:text-primary-color"
          style={{
            color: color || undefined, // use stock color from your data
          }}
        >
          <Icon size={26} />
        </a>
      ))}
    </div>
  );
};

export default Socials;
