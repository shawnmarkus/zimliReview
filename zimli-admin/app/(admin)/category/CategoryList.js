/** @format */
import { useState } from "react";
import React from "react";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import { ButtonExport } from "@/app/components/common/Button";
import SearchBar from "@/app/components/common/SearchBar";
import AddCategoryform from "./AddCategoryform";


const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
export default function CategoryList({ itemsPerPage }) {

  const [itemOffset, setItemOffset] = useState(0);
   const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);


   const closeCategoryModal = () => {
     setIsCategoryModalOpen(false);
   };
   const openModal = () => {
     setIsCategoryModalOpen(true);
   };


  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="flex justify-between mt-6 mb-6">
        <SearchBar width={"w-[30%]"} />
        <div className="flex gap-3">
          <button
            className=" text-xs font-normal text-[#DC137B] border rounded border-[#DC137B] px-5"
            onClick={openModal}
          >
            Add Category
          </button>
          <ButtonExport />
        </div>
      </div>

      <div className="flex border-b border-[#0000004D] mb-7 py-4 pl-5  font-medium text-sm  ">
        <h3 className="w-[6.25%]">Image</h3>
        <h3 className="w-[12.5%]">Name</h3>
        <h3 className="w-[12.5%]">Slug</h3>
        <h3 className="w-[25%]">Description</h3>
        <h3 className="w-[6.25%]">Status</h3>
        <h3 className="w-[25%]">Attributes</h3>
        <h3 className="w-[12.5%]">Actions</h3>
      </div>
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
      {isCategoryModalOpen ? (
        <AddCategoryform
          showModal={isCategoryModalOpen}
          closeModal={closeCategoryModal}
        />
      ) : null}

    </>
  );
}
function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, key) => (
          <div
            key={key}
            className="flex hover:bg-[#FFEEFB] mb-5 py-4 rounded-lg border pl-5 border-[#F2F2F2] bg-[#FDFDFD] items-center"
          >
            <div className="w-[6.25%]">
              <Image src={"/images/product2.png"} width={40} height={40} />
            </div>
            <h3 className="w-[12.5%] font-medium text-xs text-[#333]">0034</h3>
            <h3 className="w-[12.5%] font-semibold text-xs text-[#333]">
              Lorem lpsum
            </h3>
            <h3 className="w-[25%] font-normal text-xs text-[#333]">
              Saree With Stitched Blouse
            </h3>
            <h3 className="w-[6.25%] font-normal text-xs text-[#333]">
              Tikhi Imli
            </h3>
            <h3 className="w-[25%] font-normal text-xs text-[#333]">11</h3>
            <div className="w-[12.5%]  flex gap-3">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" cursor-pointer"
              >
                <path
                  d="M11.0004 16.2939C5.43164 16.2939 2.92227 11.3783 2.81914 11.1721C2.75039 11.0346 2.75039 10.8971 2.81914 10.7596C2.92227 10.5533 5.43164 5.6377 11.0004 5.6377C16.5691 5.6377 19.0785 10.5533 19.1816 10.7596C19.2504 10.8971 19.2504 11.0346 19.1816 11.1721C19.0785 11.4127 16.5691 16.2939 11.0004 16.2939ZM3.74726 11.0002C4.26288 11.8939 6.63476 15.4002 11.0004 15.4002C15.366 15.4002 17.7379 11.8939 18.2535 11.0002C17.7379 10.1064 15.366 6.6002 11.0004 6.6002C6.63476 6.6002 4.26288 10.1064 3.74726 11.0002Z"
                  fill="black"
                />
                <path
                  d="M11.0004 15.3314C8.59419 15.3314 6.66919 13.3721 6.66919 11.0002C6.66919 8.62832 8.62857 6.66895 11.0004 6.66895C13.3723 6.66895 15.3317 8.62832 15.3317 11.0002C15.3317 13.3721 13.4067 15.3314 11.0004 15.3314ZM11.0004 7.5627C9.10982 7.5627 7.56294 9.10957 7.56294 11.0002C7.56294 12.8908 9.10982 14.4377 11.0004 14.4377C12.8911 14.4377 14.4379 12.8908 14.4379 11.0002C14.4379 9.10957 12.8911 7.5627 11.0004 7.5627Z"
                  fill="black"
                />
                <path
                  d="M11 13.4065C9.69375 13.4065 8.59375 12.3409 8.59375 11.0003C8.59375 10.7597 8.8 10.5534 9.04063 10.5534C9.28125 10.5534 9.4875 10.7597 9.4875 11.0003C9.4875 11.8253 10.1406 12.4784 10.9656 12.4784C11.7906 12.4784 12.4437 11.8253 12.4437 11.0003C12.4437 10.1753 11.7906 9.52217 10.9656 9.52217C10.725 9.52217 10.5188 9.31591 10.5188 9.07529C10.5188 8.83466 10.725 8.62842 10.9656 8.62842C12.2719 8.62842 13.3719 9.69404 13.3719 11.0347C13.3719 12.3753 12.3063 13.4065 11 13.4065Z"
                  fill="black"
                />
              </svg>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" cursor-pointer"
              >
                <path
                  d="M17.9727 17.1837C17.9727 17.9913 17.3163 18.6724 16.5087 18.6724H4.79466C3.98708 18.6724 3.33074 17.9913 3.33074 17.1837V5.46962C3.33074 4.66203 3.98708 4.02953 4.79466 4.02953H11.6275V3.0542H4.79466C3.44899 3.0542 2.35449 4.12487 2.35449 5.47053V17.1837C2.35449 18.5294 3.44899 19.6477 4.79466 19.6477H16.5078C17.8535 19.6477 18.948 18.5285 18.948 17.1837V10.3747H17.9717L17.9727 17.1837Z"
                  fill="black"
                />
                <path
                  d="M19.0735 2.90598C18.3365 2.16806 17.0504 2.16806 16.3125 2.90598L9.76471 9.45373C9.70237 9.51606 9.65746 9.59489 9.63637 9.68014L8.94704 12.4402C8.90579 12.6061 8.95437 12.7821 9.07537 12.9041C9.16796 12.9966 9.29262 13.0471 9.42004 13.0471C9.45946 13.0471 9.49887 13.0425 9.53829 13.0324L12.2993 12.3421C12.3855 12.3211 12.4634 12.2761 12.5257 12.2138L19.0735 5.66606C19.442 5.29756 19.6455 4.80714 19.6455 4.28556C19.6455 3.76398 19.4429 3.27448 19.0735 2.90598ZM11.9317 11.4282L10.091 11.8884L10.5512 10.0477L15.9678 4.63114L17.3483 6.01164L11.9317 11.4282ZM18.3832 4.97581L18.0385 5.32048L16.658 3.93998L17.0027 3.59531C17.3712 3.22681 18.0147 3.22681 18.3832 3.59531C18.5675 3.77956 18.6692 4.02431 18.6692 4.28556C18.6692 4.54681 18.5675 4.79156 18.3832 4.97581Z"
                  fill="black"
                />
              </svg>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" cursor-pointer"
              >
                <g clip-path="url(#clip0_706_14907)">
                  <path
                    d="M13.75 19.9375H8.25C7.33832 19.9375 6.46398 19.5753 5.81932 18.9307C5.17466 18.286 4.8125 17.4117 4.8125 16.5V8.25C4.8125 8.06766 4.88493 7.8928 5.01386 7.76386C5.1428 7.63493 5.31766 7.5625 5.5 7.5625C5.68234 7.5625 5.8572 7.63493 5.98614 7.76386C6.11507 7.8928 6.1875 8.06766 6.1875 8.25V16.5C6.1875 17.047 6.4048 17.5716 6.79159 17.9584C7.17839 18.3452 7.70299 18.5625 8.25 18.5625H13.75C14.297 18.5625 14.8216 18.3452 15.2084 17.9584C15.5952 17.5716 15.8125 17.047 15.8125 16.5V8.25C15.8125 8.06766 15.8849 7.8928 16.0139 7.76386C16.1428 7.63493 16.3177 7.5625 16.5 7.5625C16.6823 7.5625 16.8572 7.63493 16.9861 7.76386C17.1151 7.8928 17.1875 8.06766 17.1875 8.25V16.5C17.1875 17.4117 16.8253 18.286 16.1807 18.9307C15.536 19.5753 14.6617 19.9375 13.75 19.9375Z"
                    fill="black"
                  />
                  <path
                    d="M17.875 6.1875H4.125C3.94266 6.1875 3.7678 6.11507 3.63886 5.98614C3.50993 5.8572 3.4375 5.68234 3.4375 5.5C3.4375 5.31766 3.50993 5.1428 3.63886 5.01386C3.7678 4.88493 3.94266 4.8125 4.125 4.8125H17.875C18.0573 4.8125 18.2322 4.88493 18.3611 5.01386C18.4901 5.1428 18.5625 5.31766 18.5625 5.5C18.5625 5.68234 18.4901 5.8572 18.3611 5.98614C18.2322 6.11507 18.0573 6.1875 17.875 6.1875Z"
                    fill="black"
                  />
                  <path
                    d="M13.75 6.1875H8.25C8.06766 6.1875 7.8928 6.11507 7.76386 5.98614C7.63493 5.8572 7.5625 5.68234 7.5625 5.5V4.125C7.5625 3.57799 7.7798 3.05339 8.16659 2.66659C8.55339 2.2798 9.07799 2.0625 9.625 2.0625H12.375C12.922 2.0625 13.4466 2.2798 13.8334 2.66659C14.2202 3.05339 14.4375 3.57799 14.4375 4.125V5.5C14.4375 5.68234 14.3651 5.8572 14.2361 5.98614C14.1072 6.11507 13.9323 6.1875 13.75 6.1875ZM8.9375 4.8125H13.0625V4.125C13.0625 3.94266 12.9901 3.7678 12.8611 3.63886C12.7322 3.50993 12.5573 3.4375 12.375 3.4375H9.625C9.44266 3.4375 9.2678 3.50993 9.13886 3.63886C9.00993 3.7678 8.9375 3.94266 8.9375 4.125V4.8125Z"
                    fill="black"
                  />
                  <path
                    d="M9.625 15.8125C9.44266 15.8125 9.2678 15.7401 9.13886 15.6111C9.00993 15.4822 8.9375 15.3073 8.9375 15.125V10.3125C8.9375 10.1302 9.00993 9.9553 9.13886 9.82636C9.2678 9.69743 9.44266 9.625 9.625 9.625C9.80734 9.625 9.9822 9.69743 10.1111 9.82636C10.2401 9.9553 10.3125 10.1302 10.3125 10.3125V15.125C10.3125 15.3073 10.2401 15.4822 10.1111 15.6111C9.9822 15.7401 9.80734 15.8125 9.625 15.8125Z"
                    fill="black"
                  />
                  <path
                    d="M12.375 15.8125C12.1927 15.8125 12.0178 15.7401 11.8889 15.6111C11.7599 15.4822 11.6875 15.3073 11.6875 15.125V10.3125C11.6875 10.1302 11.7599 9.9553 11.8889 9.82636C12.0178 9.69743 12.1927 9.625 12.375 9.625C12.5573 9.625 12.7322 9.69743 12.8611 9.82636C12.9901 9.9553 13.0625 10.1302 13.0625 10.3125V15.125C13.0625 15.3073 12.9901 15.4822 12.8611 15.6111C12.7322 15.7401 12.5573 15.8125 12.375 15.8125Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_706_14907">
                    <rect width="22" height="22" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        ))}
    </>
  );
}
