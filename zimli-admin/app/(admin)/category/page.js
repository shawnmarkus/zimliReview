"use client"

import React,{useState} from 'react';
import AddCategoryform from './AddCategoryform';
import CategoryList from './CategoryList';
import SubCategoryList from './SubCategoryList';

export default function Category() {
  const [active,setActive]=useState("category");

  return (
    <>
      <div className=" inline-flex mt-12">
        <div
          className={`p-2 mr-5 text-base cursor-pointer ${
            active == "category"
              ? "font-semibold text-[#000] border-b-2 border-[#DC137B]"
              : "font-medium text-[#9C9C9C]"
          }`}
          onClick={() => setActive("category")}
        >
          Category
        </div>
        <div
          className={`p-2 mr-5 text-base cursor-pointer ${
            active == "sub-category"
              ? "font-semibold text-[#000] border-b-2 border-[#DC137B]"
              : "font-medium text-[#9C9C9C]"
          }`}
          onClick={() => setActive("sub-category")}
        >
          Sub-category
        </div>
      </div>
      {active == "category" ? (
        <CategoryList itemsPerPage={5} />
      ) : (
        <SubCategoryList itemsPerPage={5} />
      )}

    </>
  );
}
