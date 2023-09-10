/** @format */

"use client";
import ModalTemplate from "@/app/components/common/ModalTemplate/ModalTemplate";
import React, { useState } from "react";
import Image from "next/image";
import InputBox from "@/app/components/common/InputBox/InputBox";
import SelectBox from "@/app/components/common/selectBox/SelectBox";
import { Badges } from "@/app/components/common/Button";
import AddSubCate_WithCate from "./AddSubCate_WithCate_";

export default function AddCategoryform(props) {
  const [subCategoryformOpen, setSubCategoryformOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const [attributeVal, setAttributeVal] = useState("");
  const [attributeList, setAttributeList] = useState([]);
  const handleSingleValueAddBtn = () => {
    if (attributeVal) {
      setAttributeList([...attributeList, attributeVal]);
      setAttributeVal("");
    } else {
      const btn = document.getElementById("myInputBox");
      btn.setCustomValidity("first add the value in it");
      btn.reportValidity();
    }
  };
 const closeSubCategoryModal = () => {
   setSubCategoryformOpen(false);
 };
 const openSubCategoryModal = () => {
   setSubCategoryformOpen(true);
 };

  const handleDeleteBtn = (key) => {
    const updatedValueList = [...attributeList];
    updatedValueList.splice(key, 1);
    setAttributeList(updatedValueList);
  };
  return (
    <>
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
                <p className=" font-semibold text-base ml-3">Add Category</p>
              </div>
            </div>
          </div>
          <div className="w-full  mt-12 box-border px-8">
            <div className="flex gap-3">
              <div>
                <UploadDiv />
              </div>
              {/* right part */}
              <section className="w-full">
                <div className="flex gap-3 mb-4">
                  <InputBox
                    type="text"
                    placeholder="Category Name"
                    className="p-3 text-sm w-[100%]"
                  />
                  <InputBox
                    type="text"
                    placeholder="Slug (URL)"
                    className="p-3 text-sm w-[100%]"
                  />
                </div>
                <div className="flex gap-3 mb-4">
                  <div className="w-[50%]">
                    <InputBox
                      type="text"
                      placeholder="Category Name"
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
                    />
                  </div>
                </div>
                <div className="flex relative ">
                  <InputBox
                    type="text"
                    placeholder="Category Name"
                    className="p-3 text-sm w-[100%]"
                    id="myInputBox"
                    onChange={(e) => {
                      setAttributeVal(e.target.value);
                    }}
                    value={attributeVal}
                  />
                  <button
                    type="submit"
                    className="px-4 text-[#C9C9C9] bg-[#fff] overflow-hidden absolute  top-1/2 h-[95%] right-1 -translate-y-1/2"
                    onClick={handleSingleValueAddBtn}
                  >
                    <Image src={require("./Assets/plus.svg")} />
                  </button>
                </div>
                {/* attributes values */}
                <div className="mt-2 mb-5 flex flex-wrap max-w">
                  {attributeList?.length
                    ? attributeList.map((item, key) => {
                        return (
                          <div key={key} className="my-1">
                            <Badges
                              name={item}
                              deleteBtn={true}
                              rounded={true}
                              itemKey={key}
                              onClick={(itemKey) => handleDeleteBtn(itemKey)}
                              className="py-1 px-4 text-xs bg-[white] text-[#005686] border-[#005686]"
                            />
                          </div>
                        );
                      })
                    : null}
                </div>
                <div className="pb-12 flex flex-row-reverse gap-4">
                  <button className="bg-[#DC137B] text-[#FFF] text-base font-bold py-3 px-12">
                    SUBMIT
                  </button>
                  <button
                    className="bg-[#CFCFCF] text-[#FFF] py-3 px-12 text-base font-bold"
                    onClick={props.closeModal}
                  >
                    CANCEL
                  </button>
                  <button
                    className=" text-base font-medium text-[#DC137B] px-5 py-3 border border-[#DC137B] rounded"
                    onClick={openSubCategoryModal}
                  >
                    Add sub-category
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </ModalTemplate>
      {subCategoryformOpen ? (
        <AddSubCate_WithCate
          showModal={subCategoryformOpen}
          closeModal={closeSubCategoryModal}
        />
      ) : null}
    </>
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
