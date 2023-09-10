import React from "react";

export const SearchBox = ({ width }) => {
  return (
    <div className={`${width} rounded-full border`}>
      <div className="relative flex w-full flex-wrap items-stretch">
        <input
          type="search"
          className="relative m-0 mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l-full py-1.5 border-neutral-300 bg-transparent bg-clip-padding px-3  text-sm font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="Search by Name"
          aria-label="Search"
          aria-describedby="button-addon1"
        />
        <button
          className="relative z-[2] flex items-center  bg-primary px-3 py-1.5 text-xs font-medium rounded-r-full uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-primary-700  focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 "
          type="button"
          id="button-addon1"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="25" height="25" rx="12.5" fill="#DC137B" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.6635 15.327C13.6868 15.327 15.327 13.6868 15.327 11.6635C15.327 9.64021 13.6868 8 11.6635 8C9.64021 8 8 9.64021 8 11.6635C8 13.6868 9.64021 15.327 11.6635 15.327Z"
              stroke="white"
              stroke-width="1.5"
            />
            <path
              d="M14.4126 14.348L17.2633 17.2198"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
