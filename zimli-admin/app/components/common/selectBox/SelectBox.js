import React, { useEffect, useState } from "react";
import style from "./selectBox.module.css";
import Select from "react-select";

/*
    OPTIONS must have label and value, and optional selected
*/

const SelectBox = ({
  options,
  className,
  selectedOption,
  setSelectedOption,
  label,
  ...restProps
}) => {
  React.useEffect(() => {
    console.log("selected options ", selectedOption);
  });

  // useEffect(() => {
  //   if (selectedOption) {
  //     handleLabelOnFocus()
  //   }
  // }, [selectedOption])

  const handleLabelOnFocus = () => {
    if (label) {
      const labelEle = document.getElementById("aria-label");
      if (labelEle) {
        labelEle.classList.remove(style.lableForSelectBoxDefault);
        labelEle.classList.add(style.lableForSelectBoxOnStateSet);
      }
    }
  };

  const handleLabelOnBlur = () => {
    if (label && !selectedOption) {
      const labelEle = document.getElementById("aria-label");
      if (labelEle) {
        labelEle.classList.add(style.lableForSelectBoxDefault);
        labelEle.classList.remove(style.lableForSelectBoxOnStateSet);
      }
    }
  };

  return (
    <div className={`${className} ${style.selectBox} relative h-full`}>
      {label ? (
        <label
          id="aria-label"
          htmlFor="aria-example-input"
          className={`${style.lableForSelectBoxDefault}`}
        >
          {label}
        </label>
      ) : null}
      <Select
        id
        defaultValue={selectedOption}
        onChange={(e) => setSelectedOption(e.value)}
        options={options}
        placeholder={label ? "" : "Select"}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            borderColor: "#00000040",
            height: "100%",
          }),
          container: (baseStyles) => ({
            ...baseStyles,
            height: "100%",
          }),

          singleValue: (baseStyles, state) => ({
            ...baseStyles,
            color: "#8E96A3",
          }),
        }}
        className={{
          control: (state) => (state.isFocused ? "border-[#00000040]" : ""),
        }}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: "#FFF8FC",
            primary: "#DC137B",
          },
        })}
        inputId="aria-example-input"
        onFocus={handleLabelOnFocus}
        onBlur={handleLabelOnBlur}
        isOptionDisabled={(option) => {
          return option.disabled;
        }}
        {...restProps}
      />
    </div>
  );
};

export default SelectBox;
