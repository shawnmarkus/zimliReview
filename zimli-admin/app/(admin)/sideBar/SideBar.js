/** @format */

"use client";
import ZimliLogo from "@/app/components/common/ZimliLogo";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import style from "./style.module.css";

const MultiLevelSidebarElement = ({ item, setSelected, selected }) => {
  const [expand, setExpand] = useState(false);

  return (
    <>
      <button
        type="button"
        className="flex items-center w-full p-2 text-sm text-gray-900 px-3 transition duration-75 rounded-lg group "
        onClick={() => setExpand(!expand)}
      >
        {/* <item.svg /> */}
        <Image src={item.svg} width={24} height={24} alt="not_available" />

        <span className="flex-1 ml-3 font-medium text-[#393939] py-1 text-left whitespace-nowrap">
          {item.title}
        </span>
        <svg
          className={`w-3 h-3 ${
            expand ? "rotate-180" : "rotate-0"
          } transition-transform`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <ul
        id="dropdown-example"
        className={`py-2 space-y-2 ${!expand ? "hidden" : ""}`}
      >
        {item.subList.map((item, key) => {
          return (
            <div key={key}>
              <SubList
                selected={selected}
                setSelected={setSelected}
                title={item.title}
                imageSrc={item.imageSrc}
                link={item.link}
              />
            </div>
          );
        })}
      </ul>
    </>
  );
};
const SideBarElement = ({ item, selected, setSelected }) => {
  return (
    <li>
      <Link
        href={item.link}
        className={`flex items-center p-2 text-[#393939] font-medium py-3 group px-3 ${
          selected === item.title ? style.selectedCard : ""
        }`}
        onClick={() => {
          setSelected(item.title);
        }}
      >
        <Image src={item.svg} width={24} height={24} />
        <span className="ml-3">{item.title}</span>
      </Link>
    </li>
  );
};

const SubList = ({ title, imageSrc, link, selected, setSelected }) => {
  return (
    <li>
      <Link
        href={link}
        className={`flex items-center w-full p-2 text-gray-900 transition duration-75 font-medium pl-11 py-3 group px-3 ${
          selected === title ? style.selectedCard : ""
        }`}
        onClick={() => {
          setSelected(title);
        }}
      >
        {imageSrc ? <Image src={imageSrc} width={24} height={24} /> : null}
        {title}
      </Link>
    </li>
  );
};


const SideBar = ({setSelected,selected,nav}) => {
  const handleHideClick = (state) => {
    const sideBar = document.getElementById("logo-sidebar");
    const overlay = document.getElementById("overlay");
    if (state) {
      sideBar.classList.remove("-translate-x-full");
      overlay.classList.remove("-translate-x-full");
    } else {
      sideBar.classList.add("-translate-x-full");
      overlay.classList.add("-translate-x-full");
    }
  };


  useEffect(() => {
    console.log("the selected card ===>", selected);
  }, [selected]);

  return (
    <div>
      <button
        onClick={() => {
          handleHideClick(true);
        }}
        type="button"
        className=" items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <div className="top-0 left-0 w-max h-max">
        <aside
          id="logo-sidebar"
          className="fixed top-0 left-0 z-40 h-screen transition-transform -translate-x-full sm:translate-x-0  sm:sticky "
          aria-label="Sidebar"
        >
          <div className="h-full w-64 z-60  overflow-y-auto bg-[#FFEEFB] ">
            <div className="flex justify-center w-[100%]">
              <a href="/" className="flex items-center mt-4">
                <ZimliLogo />
              </a>
            </div>

            <div className=" border-t border-[#666] opacity-50 my-8"></div>
            <ul className="space-y-2 font-medium ">
              {nav.map((item, key) => {
                return item?.subList?.length ? (
                  <div key={key} className="w-[100%] m-auto">
                    <MultiLevelSidebarElement
                      item={item}
                      selected={selected}
                      setSelected={setSelected}
                    />
                  </div>
                ) : (
                  <div key={key} className="w-[100%] m-auto">
                    <SideBarElement
                      item={item}
                      selected={selected}
                      setSelected={setSelected}
                    />
                  </div>
                );
              })}
            </ul>
          </div>
        </aside>
        <div
          id="overlay"
          className="fixed top-0 right-0 left-0 bottom-0  z-30 min-w-[100vw] h-screen -translate-x-full  sm:hidden "
          onClick={() => {
            handleHideClick(false);
          }}
        >
        </div>
      </div>
    </div>
  );
};

export default SideBar;
