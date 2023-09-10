import React from 'react'
export default function Breadcrumbs({ text }) {
  // console.log("🤣🤣🤣🤣", text.split("/").filter(Boolean));
  return text
    .split("/")
    .filter(Boolean)
    .map((part, index) => {
      if (index == 0) {
        return (
          <span className=" font-semibold text-4xl pr-2">
            {part.charAt(0).toUpperCase() + part.slice(1)}
          </span>
        );
      }
      if (index == 1) {
        return (
          <span>
            &gt;
            <span className=" font-medium text-lg text-[#DC137B]">
              {part.charAt(0).toUpperCase() + part.slice(1)}
            </span>
          </span>
        );
      }
      return part.charAt(0).toUpperCase() + part.slice(1);
    });
}