import React, { useState, useEffect } from "react";
import style from "./inputBox.module.css";
import Image from "next/image";

/*
 * this inputBox will need type of {email,password and email} expect date
 * this will use the function for change
 * pattern --> for validation for {email, password , email } especially rest it can handle by it default validation {like for text, number,... etc}
 */

const InputBox = ({
  label,
  type,
  placeholder,
  onChange,
  className,
  ...moreProps
}) => {
  const patternMap = {
    tel: {
      pattern: "^[6-9]\\d{9}$",
      title: "The mobile number should be of 10 digits",
    },
    email: {
      pattern: "^([\\w])+@(([a-zA-Z0-9])+\\.)+([a-zA-Z0-9])+$",
      title: "enter the Valid email address",
    },
    password: {
      pattern:
        "(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*_+\\(\\)\\{\\}\\[\\]:;<>,.?~]).{8,}$",
      title:
        "The password should contain alteast 1 UpperCase Character, 1 LowerCase Character, 1 special charater, 1 numberic value and the length must be greater than 7  ",
    },

    emailAndTel: {
      pattern:
        "((^([\\w])+@(([a-zA-Z0-9])+\\.)+([a-zA-Z0-9])+$)|(^[6-9]\\d{9}$))",
      title: "Enter either email or mobile number ",
    },
  };

  const [inputType, setInputType] = useState(type);
  // useEffect(() => {
  //   setInputType(type)
  // },[type])

  const revealThePasswrd = (changeTypeTo) => {
    setInputType(changeTypeTo);
  };

  return (
    <>
      {label && <label>{label}</label>}
      <div
        className={`relative flex-auto  box-border w-[${
          moreProps.width ? moreProps.width : ""
        }]`}
      >
        {type === "password" ? (
          <div
            className=" absolute translate-y-[5px] sm:translate-y-1/2 right-2 "
            onClick={() =>
              revealThePasswrd(inputType === "password" ? "text" : "password")
            }
          >
            <Image src={require("./reveal.svg")} alt="reveal" />
          </div>
        ) : null}
        <input
          type={inputType}
          placeholder={placeholder}
          onChange={onChange}
          className={`${style.inputBox} ${className ? className : ""}`}
          pattern={patternMap[type] ? patternMap[type].pattern : null}
          title={patternMap[type] ? patternMap[type].title : null}
          {...moreProps}
        />
      </div>
    </>
  );
};

export default InputBox;
