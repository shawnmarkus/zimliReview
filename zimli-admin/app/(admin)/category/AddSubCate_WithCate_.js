/** @format */

"use client";
import ModalTemplate from "@/app/components/common/ModalTemplate/ModalTemplate";
import React, { useState } from "react";
import Image from "next/image";
import InputBox from "@/app/components/common/InputBox/InputBox";
import SelectBox from "@/app/components/common/selectBox/SelectBox";
import { Badges } from "@/app/components/common/Button";

export default function AddSubCate_WithCate(props) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectCategory, setSelectCategory] = useState(null);
  return (
    <ModalTemplate
      showModal={props.showModal}
      closeModal={props.closeModal}
      className="!w-[60%]"
    >
      <div className="w-full ">
        <div className=" w-[100%]">
          <div className="flex justify-between py-6 px-4 items-center bg-[#FFF8FC]">
            <div className=" inline-flex items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" cursor-pointer"
                onClick={props.closeModal}
              >
                <path
                  d="M4.41666 15.5833C4.58332 15.75 4.74999 15.8333 4.99999 15.8333C5.24999 15.8333 5.41666 15.75 5.58332 15.5833L9.99999 11.1667L14.4167 15.5833C14.5833 15.75 14.8333 15.8333 15 15.8333C15.1667 15.8333 15.4167 15.75 15.5833 15.5833C15.9167 15.25 15.9167 14.75 15.5833 14.4167L11.1667 9.99999L15.5833 5.58332C15.9167 5.24999 15.9167 4.74999 15.5833 4.41666C15.25 4.08332 14.75 4.08332 14.4167 4.41666L9.99999 8.83332L5.58332 4.41666C5.24999 4.08332 4.74999 4.08332 4.41666 4.41666C4.08332 4.74999 4.08332 5.24999 4.41666 5.58332L8.83332 9.99999L4.41666 14.4167C4.08332 14.75 4.08332 15.25 4.41666 15.5833Z"
                  fill="black"
                />
              </svg>
              <p className=" font-semibold text-base ml-3">Add Sub-category</p>
            </div>
          </div>
        </div>
        <div className="w-full  mt-14 box-border px-8">
          <div className="flex gap-3">
            <div>
              <UploadDiv />
            </div>
            {/* right part */}
            <section className="w-full">
              <div className="flex gap-3 mb-4">
                <div className="flex w-[50%]">
                  <SelectBox
                    options={[
                      { label: "Active", value: "active" },
                      { label: "Inactive", value: "inactive" },
                    ]}
                    className="w-[100%] text-sm text-[#8E96A3]"
                    selectedOption={selectCategory}
                    setSelectedOption={setSelectCategory}
                    placeholder={"Select Category"}
                  />
                </div>
                <div className="w-[50%]">
                  <InputBox
                    type="text"
                    placeholder="Name"
                    className="p-3 text-sm w-[100%]"
                  />
                </div>
              </div>
              <div className="flex gap-3 mb-4">
                <div className="w-[50%]">
                  <InputBox
                    type="text"
                    placeholder="Description"
                    className="p-3 text-sm w-[100%]"
                  />
                </div>
                <div className="flex w-[50%]">
                  <SelectBox
                    options={[
                      { label: "Active", value: "active" },
                      { label: "Inactive", value: "inactive" },
                    ]}
                    className="w-[100%] text-sm text-[#8E96A3]"
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                    placeholder={"Status"}
                  />
                </div>
              </div>
              <div className=" pb-14 pt-14 flex flex-row-reverse gap-4">
                <button className="bg-[#DC137B] text-[#FFF] text-base font-bold py-3 px-12">
                  SAVE
                </button>
                <button
                  className="bg-[#CFCFCF] text-[#FFF] py-3 px-12 text-base font-bold"
                  onClick={props.closeModal}
                >
                  CANCEL
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </ModalTemplate>
  );
}
export const UploadDiv = () => {
  return (
    <>
      <label
        htmlFor="uploadDiv"
        className="border rounded box-border  px-4 py-12 flex items-center"
      >
        <Image src={require("./Assets/totalUploadDiv.svg")} alt="img" />
      </label>
      <input type="file" id="uploadDiv" className="hidden" />
    </>
  );
};
