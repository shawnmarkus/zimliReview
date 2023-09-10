/** @format */
"use client"
import SideBar from "./sideBar/SideBar";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Breadcrumbs from "../components/common/Breadcrumbs";
import Image from "next/image";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import ApiSlice from "@/store/api/ApiSlice";
import { SnackbarProvider } from "notistack";

export default function AdminLayout({
  children, // will be a page or nested layout
}) {
  const nav = [
    {
      title: "Dashboard",
      svg: "/svgs/sidebar/dashboard.svg",
      link: "/dashboard",
    },
    {
      title: "Reseller",
      svg: "/svgs/sidebar/reseller.svg",
      link: "/dashboard",
      subList: [
        { title: "Approved", link: "/reseller/approved", imageSrc: "" },
        { title: "Pending", link: "/reseller/pending", imageSrc: "" },
        { title: "Blocked", link: "/reseller/blocked", imageSrc: "" },
      ],
    },
    {
      title: "Category",
      svg: "/svgs/sidebar/category.svg",
      link: "/category",
    },
    {
      title: "Attributes",
      svg: "/svgs/sidebar/attributes.svg",
      link: "/attributes",
    },
    {
      title: "Product",
      svg: "/svgs/sidebar/product.svg",
      link: "/product",
    },
  ];
  const [selected, setSelected] = useState(nav?.[0].title);
  return (
    <ApiProvider api={ApiSlice}>
      <SnackbarProvider maxSnack={1}>
        <section className="text-sm flex flex-col sm:flex-row ">
          {/* Include shared UI here e.g. a header or sidebar */}
          <SideBar nav={nav} selected={selected} setSelected={setSelected} />
          <div className=" w-[100%] mx-16">
            <div className="flex justify-between items-center mt-12 cursor-pointer">
              <div>
                <Breadcrumbs text={usePathname()} />
              </div>
              <div className="bg-pink-500 p-3 rounded-lg">
                <Image
                  src="/svgs/admin/setting.svg"
                  alt="Setting Icon"
                  width={24.44}
                  height={24.44}
                />
              </div>
            </div>

            {children}
          </div>
        </section>
      </SnackbarProvider>
    </ApiProvider>
  );
}
