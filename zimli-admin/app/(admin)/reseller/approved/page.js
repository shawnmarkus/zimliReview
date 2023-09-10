"use client"
import { ButtonExport, FilterButton } from '@/app/components/common/Button';
import SearchBar from '@/app/components/common/SearchBar';
import React,{useState} from 'react'
import Datepicker from 'react-tailwindcss-datepicker';


export default function ResellerApproved() {
const [value, setValue] = useState({
  startDate: new Date(),
  endDate: new Date().setMonth(11),
});

const handleValueChange = (newValue) => {
  console.log("newValue:", newValue);
  setValue(newValue);
};
 const options = [
   {value:"null",label:""},
   { value: "option1", label: "Option 1" },
   { value: "option2", label: "Option 2" },
   { value: "option3", label: "Option 3" },
 ];

  return (
    <>
      <div className="flex justify-between mt-12 mb-6 items-center">
        <SearchBar width={"w-56"} />
        <div className="flex gap-3">
          <FilterButton options={options} lable="Total sale" />
          <FilterButton options={options} lable="Total earing" />
          <FilterButton options={options} lable="State" />
          <FilterButton options={options} lable="City" />
          <div className=" z-20 w-[fit-content] border rounded">
            <Datepicker
              primaryColor={"pink"}
              value={value}
              onChange={handleValueChange}
              showShortcuts={true}
              displayFormat={"DD/MM/YYYY"}
            />
          </div>
          <ButtonExport />
        </div>
      </div>
    </>
  );
}
