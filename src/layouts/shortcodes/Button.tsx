import React from "react";

const Button = ({
  label,
  link,
  style,
  rel,
  center = false,
}: {
  label: string;
  link: string;
  style?: string;
  rel?: string;
  center?: boolean;
}) => {
  return (
    <div style={{ display: center ? "flex" : "block", justifyContent: center ? "center" : "initial" }}>
      <a
        href={link}
        target="_blank"
        rel={`noopener noreferrer ${
          rel ? (rel === "follow" ? "" : rel) : "nofollow"
        }`}
        className={`btn mb-4 me-4 dark:hover:text-black hover:no-underline ${
          style === "outline" ? "btn-outline-primary" : "btn-primary"
        }`}
      >
        {label}
      </a>
    </div>
  );
};

export default Button;
