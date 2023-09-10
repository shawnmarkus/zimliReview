"use client";
import SearchBar from "@/app/components/common/SearchBar";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useGetAllAttributesQuery } from "@/store/features/Attributes/attributesApiSlice";
import AttributeModal from "./AttributeModal/AttributeModal";

export default function Attributes() {
  const [page, setPage] = useState(1);
  const [queries, setQueries] = useState({})
  // useEffect()

  const {
    data: attributeData,
    isLoading: attributeDataIsLoading,
    isSuccess: attributeDataIsSuccess,
    error: attributeDataError,
    isError: attributeDataIsError, 
  } = useGetAllAttributesQuery({...queries,pageNo:page,pageSize:10}); //taking page Size always 10

  const [isAttributeModalOpen, setIsAttributeModalOpen] = useState(false);
  const openAttruibuteModal = () => {
    setIsAttributeModalOpen(true);
  };

  const closeAttributeModal = () => {
    setIsAttributeModalOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mt-12 mb-7">
        <SearchBar width={"w-[45%]"} />
        <button
          className="inline-flex text-[#DC137B] p-4 border rounded border-[#DC137B] font-normal text-sm"
          onClick={() => openAttruibuteModal()}
        >
          Product Attributes{" "}
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-6"
          >
            <path
              d="M1.10336 9.00031C1.10336 9.23601 1.16229 9.41279 1.33907 9.58957C1.51584 9.76634 1.69262 9.82527 1.92832 9.82527L8.17443 9.82527L8.17443 16.0714C8.17443 16.3071 8.29228 16.5428 8.41013 16.6606C8.52799 16.7785 8.76369 16.8963 8.99939 16.8963C9.47079 16.8963 9.82435 16.5428 9.82435 16.0714L9.82435 9.82527L16.0705 9.82527C16.5419 9.82527 16.8954 9.47172 16.8954 9.00031C16.8954 8.52891 16.5419 8.17535 16.0705 8.17535L9.82435 8.17535L9.82435 1.92924C9.82435 1.45784 9.47079 1.10429 8.99939 1.10429C8.52799 1.10429 8.17443 1.45784 8.17443 1.92924L8.17443 8.17535L1.92832 8.17535C1.45692 8.17535 1.10336 8.52891 1.10336 9.00031Z"
              fill="#DC137B"
            />
          </svg>
        </button>
        {isAttributeModalOpen && (
          <AttributeModal
            showModal={isAttributeModalOpen}
            closeModal={closeAttributeModal}
          />
        )}
      </div>
      <div className="flex border-b border-[#0000004D] mb-7 py-4  pl-8  font-medium text-sm ">
        <h3 className="w-[25%]">Name</h3>
        <h3 className="w-[55%]">Option Value</h3>
        <h3 className="w-[20%]">Action</h3>
      </div>
      <AttributesList
        itemsPerPage={10}
        attributeData={attributeData?.data}
        setPage={setPage}
      />
    </div>
  );
}

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, key) => (
          <div
            key={key}
            className="flex hover:bg-[#FFEEFB] mb-5 py-4 rounded-lg border pl-8 border-[#F2F2F2] bg-[#FDFDFD]"
          >
            <h3 className="w-[25%] font-semibold text-xs text-[#333]">
              Item #{item.name}
            </h3>
            <div className="w-[55%] flex items-center gap-3 flex-wrap">
              <div className="border-[0.5px] rounded-full px-4 text-[#005686] bg-[#EBFCFF] text-xs border-[#005686]">
                Silk
              </div>
              <div className="border-[0.5px] rounded-full px-4 text-[#005686] bg-[#EBFCFF] text-xs border-[#005686]">
                Cotton
              </div>
            </div>
            <div className="w-[20%] flex">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer mr-4"
              >
                <path
                  d="M17.973 17.1838C17.973 17.9914 17.3167 18.6725 16.5091 18.6725H4.79503C3.98744 18.6725 3.33111 17.9914 3.33111 17.1838V5.46974C3.33111 4.66215 3.98744 4.02965 4.79503 4.02965H11.6279V3.05432H4.79503C3.44936 3.05432 2.35486 4.12499 2.35486 5.47065V17.1838C2.35486 18.5295 3.44936 19.6478 4.79503 19.6478H16.5082C17.8539 19.6478 18.9484 18.5286 18.9484 17.1838V10.3748H17.9721L17.973 17.1838Z"
                  fill="black"
                />
                <path
                  d="M19.0731 2.90585C18.3361 2.16794 17.05 2.16794 16.3121 2.90585L9.76434 9.4536C9.70201 9.51594 9.65709 9.59477 9.63601 9.68002L8.94668 12.4401C8.90543 12.606 8.95401 12.782 9.07501 12.9039C9.16759 12.9965 9.29226 13.0469 9.41968 13.0469C9.45909 13.0469 9.49851 13.0424 9.53792 13.0323L12.2989 12.342C12.3851 12.3209 12.463 12.276 12.5253 12.2137L19.0731 5.66594C19.4416 5.29744 19.6451 4.80702 19.6451 4.28544C19.6451 3.76385 19.4425 3.27435 19.0731 2.90585ZM11.9313 11.4281L10.0907 11.8883L10.5508 10.0476L15.9674 4.63102L17.3479 6.01152L11.9313 11.4281ZM18.3828 4.97569L18.0382 5.32035L16.6577 3.93985L17.0023 3.59519C17.3708 3.22669 18.0143 3.22669 18.3828 3.59519C18.5671 3.77944 18.6688 4.02419 18.6688 4.28544C18.6688 4.54669 18.5671 4.79144 18.3828 4.97569Z"
                  fill="black"
                />
              </svg>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer "
              >
                <g clip-path="url(#clip0_630_1571)">
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
                  <clipPath id="clip0_630_1571">
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
function AttributesList({ itemsPerPage, attributeData, setPage }) {
  const [itemOffset, setItemOffset] = useState(0);

  // if want to show the data that is shown so far -----> we can set itemOFFset = attributeData.length + ((page-1)*itemsPerPage) 

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = attributeData
    ? attributeData?.data.slice(itemOffset, endOffset)
    : [];
  const pageCount = Math.ceil((attributeData?.totalCount || 1) / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % attributeData?.totalCount;

    setPage(event.selected + 1);
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <div className="flex justify-between">
        <p className=" font-[Merriweather]">
          Showing {itemOffset} of {attributeData?.totalCount}
        </p>
        <ReactPaginate
          breakLabel="..."
          nextLabel=" >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          activeClassName="text-[#DC137B]"
          className="flex [&>li]:px-2"
        />
      </div>
    </>
  );
}
