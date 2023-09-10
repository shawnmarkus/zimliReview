import React from 'react'
import Image from 'next/image';
 function Button1({value}) {
  return (
    <div
      className="bg-[#DC137B]  py-2 px-4 cursor-pointer"
      style={{ display: "flex" }}
    >
      <p className="text-white font-semibold text-sm">{value}</p>
    </div>
  );
}

 function Button2({value}) {
  return (
    <div
      className="bg-[#DC137B] rounded-md py-2 px-4 flex w-fit items-center  cursor-pointer"

    >
      <p className="text-white font-semibold text-xl">{value}</p>
      <div className='ml-2 reletive top-50'>
        <svg
          width="24"
          height="20"
          viewBox="0 0 24 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"

        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.5 10C1.5 9.83424 1.57902 9.67526 1.71967 9.55805C1.86032 9.44084 2.05109 9.375 2.25 9.375H19.9395L15.219 5.4425C15.0782 5.32514 14.9991 5.16597 14.9991 5C14.9991 4.83403 15.0782 4.67485 15.219 4.5575C15.3598 4.44014 15.5508 4.37421 15.75 4.37421C15.9492 4.37421 16.1402 4.44014 16.281 4.5575L22.281 9.5575C22.3508 9.61555 22.4063 9.68452 22.4441 9.76045C22.4819 9.83639 22.5013 9.91779 22.5013 10C22.5013 10.0822 22.4819 10.1636 22.4441 10.2395C22.4063 10.3155 22.3508 10.3844 22.281 10.4425L16.281 15.4425C16.1402 15.5599 15.9492 15.6258 15.75 15.6258C15.5508 15.6258 15.3598 15.5599 15.219 15.4425C15.0782 15.3251 14.9991 15.166 14.9991 15C14.9991 14.834 15.0782 14.6749 15.219 14.5575L19.9395 10.625H2.25C2.05109 10.625 1.86032 10.5591 1.71967 10.4419C1.57902 10.3247 1.5 10.1658 1.5 10Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}
function ButtonBig({value}){
    return <div className="bg-[#DC137B] px-16 py-6 font-bold text-base text-[#FFF] flex w-fit cursor-pointer">{value}</div>;
}
function ButtonExport({onClick}){
  return (
    <button className="flex  items-center  text-xs font-normal px-4 rounded-full bg-[#FFF1D4] border border-[#E9AB26]">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=' mr-1'
      >
        <path
          d="M13.9467 10.413C13.9129 10.3322 13.8656 10.2578 13.8067 10.193L11.8067 8.19301C11.6811 8.06747 11.5109 7.99695 11.3333 7.99695C11.1558 7.99695 10.9855 8.06747 10.86 8.19301C10.7345 8.31854 10.6639 8.48881 10.6639 8.66634C10.6639 8.84387 10.7345 9.01414 10.86 9.13967L11.7267 9.99967H8C7.82319 9.99967 7.65362 10.0699 7.5286 10.1949C7.40357 10.32 7.33333 10.4895 7.33333 10.6663C7.33333 10.8432 7.40357 11.0127 7.5286 11.1377C7.65362 11.2628 7.82319 11.333 8 11.333H11.7267L10.86 12.193C10.7975 12.255 10.7479 12.3287 10.7141 12.41C10.6802 12.4912 10.6628 12.5783 10.6628 12.6663C10.6628 12.7543 10.6802 12.8415 10.7141 12.9227C10.7479 13.004 10.7975 13.0777 10.86 13.1397C10.922 13.2022 10.9957 13.2518 11.077 13.2856C11.1582 13.3194 11.2453 13.3369 11.3333 13.3369C11.4213 13.3369 11.5085 13.3194 11.5897 13.2856C11.671 13.2518 11.7447 13.2022 11.8067 13.1397L13.8067 11.1397C13.8684 11.0771 13.9161 11.0021 13.9467 10.9197C14.0133 10.7574 14.0133 10.5753 13.9467 10.413ZM9.33333 13.333H4C3.82319 13.333 3.65362 13.2628 3.5286 13.1377C3.40357 13.0127 3.33333 12.8432 3.33333 12.6663V3.33301C3.33333 3.1562 3.40357 2.98663 3.5286 2.8616C3.65362 2.73658 3.82319 2.66634 4 2.66634H7.33333V4.66634C7.33333 5.19677 7.54405 5.70548 7.91912 6.08055C8.29419 6.45563 8.8029 6.66634 9.33333 6.66634H12C12.1316 6.66568 12.2601 6.62608 12.3692 6.55253C12.4784 6.47897 12.5633 6.37475 12.6133 6.25301C12.6644 6.1316 12.6783 5.99779 12.6534 5.86846C12.6285 5.73914 12.5658 5.62009 12.4733 5.52634L8.47333 1.52634C8.41822 1.47449 8.35521 1.43173 8.28667 1.39967H8.22667L8.04 1.33301H4C3.46957 1.33301 2.96086 1.54372 2.58579 1.91879C2.21071 2.29387 2 2.80257 2 3.33301V12.6663C2 13.1968 2.21071 13.7055 2.58579 14.0806C2.96086 14.4556 3.46957 14.6663 4 14.6663H9.33333C9.51015 14.6663 9.67971 14.5961 9.80474 14.4711C9.92976 14.3461 10 14.1765 10 13.9997C10 13.8229 9.92976 13.6533 9.80474 13.5283C9.67971 13.4032 9.51015 13.333 9.33333 13.333ZM8.66667 3.60634L10.3933 5.33301H9.33333C9.15652 5.33301 8.98695 5.26277 8.86193 5.13775C8.73691 5.01272 8.66667 4.84315 8.66667 4.66634V3.60634Z"
          fill="#E9AB26"
        />
      </svg>
      Export
    </button>
  );
}
function FilterButton({lable,options}){
return (
  <div className="relative border rounded w-32">
    <select
      type="text"
      className="peer block h-[100%] w-full  border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] font-normal text-[#000000B2]  outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
      // value={selectedOption}
      // onChange={handleSelectChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    <label className="pointer-events-none absolute left-3 top-0 mb-0  max-w-[90%]  bg-transparent origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-[#DC137BB2] bg-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
      {lable}
    </label>
  </div>
);
}

function Badges({ name, deleteBtn, className, rounded, ...rest }) {
  return (
    <div className={`relative w-fit mr-4`}>
      {deleteBtn ? (
        <div className="absolute right-[6px] -top-[3px] bg-white " {...rest}>
          <Image
            width={10}
            height={10}
            src={require("@/app/(admin)/category/Assets/crossBtn.svg")}
          />
        </div>
      ) : null}
      <div
        className={`border ${className} ${rounded ? "rounded-full" : null} `}
      >
        <p>{name}</p>
      </div>
    </div>
  );
}

function Active() {
  return (
    <div className="rounded-full bg-[#EBF9F4] text-[#12AC4E] px-4 text-xs py-1">
      <p>Active</p>
    </div>
  );
}

function InActive() {
  return (
    <div className="rounded-full bg-[#FFF8D9] text-[#E9AB26] px-4 text-xs py-1">
      <p className="h-full">InActive</p>
    </div>
  );
}

export {
  Button1,
  Button2,
  ButtonBig,
  Badges,
  Active,
  FilterButton,
  InActive,
  ButtonExport,
};



export const ButtonCustom = ({ name, className, ...rest }) => {
  return (
    <div>
      <button className={`${className}`} {...rest}>
        {name}
      </button>
    </div>
  );
};

