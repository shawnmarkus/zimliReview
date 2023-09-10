"use client";
import React, { useEffect, useReducer, useState } from "react";
import ModalTemplate from "@/app/components/common/ModalTemplate/ModalTemplate";
import Image from "next/image";
import InputBox from "@/app/components/common/InputBox/InputBox";
import SelectBox from "@/app/components/common/selectBox/SelectBox";
import { ButtonCustom } from "@/app/components/common/Button";
import { SearchBox } from "@/app/components/common/SearchBox/SearchBox";
import { useCreateAttributesMutation } from "@/store/features/Attributes/attributesApiSlice";
import {
  showError,
  showSuccess,
} from "@/app/components/common/SnackBar/SnackBarActions";

import { useDispatch } from "react-redux";

const AttributeModal = (props) => {
  const dispatchErr = useDispatch();
  const [selectedOption, setSelectedOption] = useState(null);
  const initialState = {
    description: "",
    valueList: [],
    value: "",
    name: "",
  };

  const [
    createAttributes,
    {
      data: attributeDataAfterMut,
      isLoading: attributeDataIsLoading,
      isError: attributeIsError,
      isSuccess: attributeIsSuccess,
      error: attributeError,
    },
  ] = useCreateAttributesMutation();


  function reducerFunction(state, action) {
    switch (action.type) {
      case "UPDATE_NAME":
        return { ...state, name: action.payload };
      case "UPDATE_DESC":
        return { ...state, description: action.payload };
      case "UPDATE_VAL_LIST":
        return { ...state, valueList: action.payload };
      case "UPDATE_VAL":
        return { ...state, value: action.payload };
      case "RESET":
        return initialState;
    }
  }
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const handleSingleValueAddBtn = () => {
    if (state.value) {
      dispatch({
        type: "UPDATE_VAL_LIST",
        payload: [...state.valueList, state.value],
      });
      dispatch({
        type: "UPDATE_VAL",
        payload: "",
      });
    } else {
      const btn = document.getElementById("myInput");
      btn.setCustomValidity("first add the value in it");
      btn.reportValidity();
    }
  };

  const handleDeleteBtn = (key) => {
    const updatedValueList = [...state.valueList];
    updatedValueList.splice(key, 1);
    dispatch({
      type: "UPDATE_VAL_LIST",
      payload: updatedValueList,
    });
  };
  const handleEditBtn = (key) => {
    dispatch({
      type: "UPDATE_VAL",
      payload: state.valueList[key],
    });
    handleDeleteBtn(key);
  };

  useEffect(() => {
    if (attributeIsSuccess) {
      dispatchErr(showSuccess({ message: "Attribute created successfully" }));
    }
    if (attributeIsError) {
      if (attributeError?.message) {
        dispatchErr(showError({ message: attributeError?.message }));
      } else {
        dispatchErr(
          showError({ message: "Something went wrong, please try again" })
        );
      }
    }
  }, [attributeIsSuccess, attributeIsError, attributeError, dispatch]);

  const saveAction = () => {
    if (selectedOption === "selective") {
      console.log("the save action execution");

      createAttributes({
        name: state.name,
        value: state.valueList,
        type: "selective",
      });
    } else if (selectedOption === "custom") {
      console.log("the save action execution");

      createAttributes({
        name: state.name,
        description: state.description,
        type: "custom",
      });
    }

    dispatch({ type: "RESET" });
  };

  return (
    <ModalTemplate showModal={props.showModal} closeModal={props.closeModal}>
      <div className="relative w-full">
        <div className="flex items-center gap-3 bg-[#FFF8FC] p-4">
          <div className="w-fit" onClick={() => props.closeModal()}>
            <Image
              src={require("./images/close.svg")}
              width={20}
              height={20}
              alt="image"
            />
          </div>
          <div className="flex-auto text-[#000] text-base font-semibold leading-6">
            Add Attribute
          </div>
        </div>
        <div className="p-12">
          <div className=" flex gap-4">
            <InputBox
              type="text"
              placeholder="Name"
              className=" p-4 leading-5 text-sm w-[100%]"
              width={"50%"}
              value={state?.name}
              onChange={(e) =>
                dispatch({ type: "UPDATE_NAME", payload: e.target.value })
              }
            />
            <div className="w-[50%]">
              <SelectBox
                options={[
                  { label: "Selective", value: "selective" },
                  { label: "Custom", value: "custom" },
                  // { label: "try", value: "try", disabled: true },
                ]}
                className="w-[100%] h-[100%] text-sm "
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              />
            </div>
          </div>
          <section className="">
            {selectedOption && selectedOption === "selective" ? (
              <div>
                <hr className="mt-4 border-[#0000004D]" />
                <div className="py-4">
                  <SearchBox width={"w-[100%]"} />
                </div>
                <div className="flex border rounded border-[#0000003B] mb-4">
                  <InputBox
                    type="textarea"
                    className="w-full p-4 leading-5 text-sm !border-0"
                    width={"100%"}
                    placeholder="Value"
                    required
                    id="myInput"
                    value={state.value}
                    onChange={(e) => {
                      dispatch({
                        type: "UPDATE_VAL",
                        payload: e.target.value,
                      });
                    }}
                  />
                  <button
                    type="submit"
                    className="px-4 text-[#c9c9c9] bg-[#fff] overflow-hidden "
                    onClick={handleSingleValueAddBtn}
                  >
                    <Image src={require("./images/plus.svg")} alt="svg" />
                  </button>
                </div>
                <div className="max-h-[200px] overflow-auto">
                  {state?.valueList.length
                    ? state?.valueList.map((item, key) => (
                        <div
                          key={key}
                          id={`valueList${key + 1}`}
                          className="flex justify-between mb-4"
                        >
                          <div className="p-3 border border-[#0000003B] w-[50%] rounded">
                            {item}
                          </div>
                          <div className="flex gap-2 pr-3">
                            <Image
                              src={require("./images/edit.svg")}
                              alt="image"
                              onClick={() => handleEditBtn(key)}
                            />
                            <Image
                              src={require("./images/delete.svg")}
                              alt="image"
                              onClick={() => handleDeleteBtn(key)}
                            />
                          </div>
                        </div>
                      ))
                    : null}
                </div>
              </div>
            ) : selectedOption && selectedOption === "custom" ? (
              <div className="pt-4 relative">
                {!state?.description ? (
                  <label
                    for="descriptionBox"
                    className="text-[#8E96A3] p-4 absolute z-[1000]"
                  >
                    Description
                  </label>
                ) : null}
                <textarea
                  type="textarea"
                  className="w-full p-4 leading-5 text-sm h-[150px] border border-[#0000003B] rounded"
                  width={"100%"}
                  id="descriptionBox"
                  value={state?.description}
                  onChange={(e) => {
                    dispatch({
                      type: "UPDATE_DESC",
                      payload: e.target.value,
                    });
                  }}
                />
              </div>
            ) : null}
          </section>

          {/* button */}
          <section className="flex justify-between mt-16 items-center">
            <ButtonCustom
              name="Save & Add Another"
              onClick={() => {
                saveAction();
              }}
              className=" text-base font-medium underline decoration-1 underline-offset-2 text-[#DC137B] "
            />
            <div className="flex gap-2">
              <ButtonCustom
                onClick={props.closeModal}
                name="Decline"
                className="bg-[#DC137B] text-[#FFF] text-base font-bold py-4 px-12"
              ></ButtonCustom>
              <ButtonCustom
                name="Save"
                onClick={() => {
                  saveAction();
                  props.closeModal();
                }}
                className="bg-[#CFCFCF] text-[#FFF] py-4 px-12 text-base font-bold"
              ></ButtonCustom>
            </div>
          </section>
        </div>
      </div>
    </ModalTemplate>
  );
};

export default AttributeModal;
