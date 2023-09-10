/** @format */
"use client";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Datepicker from "react-tailwindcss-datepicker";

export default function ResellerPending() {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

return (
  <div>
    <div className="my-5 z-20 w-[fit-content] border rounded">
      <Datepicker
        primaryColor={"pink"}
        value={value}
        onChange={handleValueChange}
        showShortcuts={true}
        displayFormat={"DD/MM/YYYY"}
      />
    </div>

    <div className="flex bg-[#F9F9F9] mb-7 py-4 rounded-lg border pl-4 border-[#F2F2F2] font-semibold text-sm ">
      <h3 className="w-[12.5%]">Id</h3>
      <h3 className="w-1/4">Name</h3>
      <h3 className="w-1/4">Contact number</h3>
      <h3 className="w-1/4">Date</h3>
      <h3 className="w-[12.5%]">Action</h3>
    </div>
    <Reseller itemsPerPage={8} />
  </div>
);
}




// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div className="flex hover:bg-[#FFEEFB] mb-5 py-4 rounded-lg border pl-4 border-[#F2F2F2]">
            <h3 className="w-[12.5%]">Item #{item}</h3>
            <h3 className="w-1/4">Item #{item}</h3>
            <h3 className="w-1/4">Item #{item}</h3>
            <h3 className="w-1/4">Item #{item}</h3>
            <div className="w-[12.5%] flex">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" cursor-pointer"
              >
                <g clip-path="url(#clip0_316_1189)">
                  <path
                    d="M10 19.1666C15.0626 19.1666 19.1667 15.0626 19.1667 9.99998C19.1667 4.93737 15.0626 0.833313 10 0.833313C4.9374 0.833313 0.833344 4.93737 0.833344 9.99998C0.833344 15.0626 4.9374 19.1666 10 19.1666Z"
                    fill="url(#paint0_linear_316_1189)"
                  />
                  <path
                    d="M8.33335 14.1666C8.11235 14.1666 7.90043 14.0788 7.74418 13.9225L5.24418 11.4225C5.09238 11.2653 5.00839 11.0548 5.01029 10.8363C5.01218 10.6178 5.09983 10.4088 5.25433 10.2543C5.40884 10.0998 5.61785 10.0121 5.83635 10.0102C6.05484 10.0083 6.26535 10.0923 6.42251 10.2441L8.33335 12.155L13.5775 6.91081C13.7347 6.75901 13.9452 6.67501 14.1637 6.67691C14.3822 6.67881 14.5912 6.76645 14.7457 6.92096C14.9002 7.07546 14.9878 7.28447 14.9897 7.50297C14.9916 7.72147 14.9076 7.93197 14.7558 8.08914L8.92251 13.9225C8.76627 14.0788 8.55434 14.1666 8.33335 14.1666Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_316_1189"
                    x1="10"
                    y1="0.79748"
                    x2="10"
                    y2="19.1308"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#71FF7B" />
                    <stop offset="1" stop-color="#27F42C" />
                  </linearGradient>
                  <clipPath id="clip0_316_1189">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" cursor-pointer"
              >
                <path
                  d="M10 1C8.21997 1 6.47991 1.52784 4.99987 2.51677C3.51983 3.50571 2.36628 4.91131 1.68509 6.55585C1.0039 8.20038 0.82567 10.01 1.17294 11.7558C1.5202 13.5016 2.37737 15.1053 3.63604 16.364C4.89472 17.6226 6.49836 18.4798 8.24419 18.8271C9.99002 19.1743 11.7996 18.9961 13.4442 18.3149C15.0887 17.6337 16.4943 16.4802 17.4832 15.0001C18.4722 13.5201 19 11.78 19 10C18.9973 7.61387 18.0483 5.32623 16.361 3.63898C14.6738 1.95173 12.3861 1.00266 10 1ZM13.5303 12.4697C13.6019 12.5389 13.659 12.6217 13.6983 12.7132C13.7376 12.8047 13.7583 12.9031 13.7592 13.0027C13.7601 13.1023 13.7411 13.201 13.7034 13.2932C13.6657 13.3854 13.61 13.4691 13.5395 13.5395C13.4691 13.61 13.3854 13.6657 13.2932 13.7034C13.201 13.7411 13.1023 13.7601 13.0027 13.7592C12.9031 13.7583 12.8047 13.7376 12.7132 13.6983C12.6217 13.659 12.5389 13.6019 12.4698 13.5302L10 11.0606L7.53025 13.5302C7.3888 13.6669 7.19935 13.7425 7.0027 13.7408C6.80606 13.739 6.61795 13.6602 6.47889 13.5211C6.33983 13.3821 6.26096 13.1939 6.25925 12.9973C6.25754 12.8007 6.33314 12.6112 6.46975 12.4697L8.93943 10L6.46975 7.53025C6.33314 7.3888 6.25754 7.19935 6.25925 7.0027C6.26096 6.80605 6.33983 6.61794 6.47889 6.47889C6.61795 6.33983 6.80606 6.26095 7.0027 6.25924C7.19935 6.25753 7.3888 6.33313 7.53025 6.46975L10 8.93942L12.4698 6.46975C12.6112 6.33313 12.8007 6.25753 12.9973 6.25924C13.194 6.26095 13.3821 6.33983 13.5211 6.47889C13.6602 6.61794 13.739 6.80605 13.7408 7.0027C13.7425 7.19935 13.6669 7.3888 13.5303 7.53025L11.0606 10L13.5303 12.4697Z"
                  fill="url(#paint0_linear_316_1197)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_316_1197"
                    x1="10"
                    y1="1"
                    x2="10"
                    y2="19"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F96D6D" />
                    <stop offset="1" stop-color="#FD2323" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        ))}
    </>
  );
}

 function Reseller({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <div className="flex justify-between">
        <p className=" font-[Merriweather]">Showing 02 of 28</p>
        <ReactPaginate
          breakLabel="..."
          nextLabel=" >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< "
          renderOnZeroPageCount={null}
          activeClassName="text-[#DC137B]"
          className="flex [&>li]:px-2"
        />
      </div>
    </>
  );
}
