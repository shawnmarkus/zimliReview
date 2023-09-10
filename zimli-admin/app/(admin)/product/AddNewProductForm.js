"use client"
import ModalTemplate from '@/app/components/common/ModalTemplate/ModalTemplate'
import React,{useState} from 'react'

export default function AddNewProductForm(props) {
  return (
    <ModalTemplate showModal={props.showModal} closeModal={props.closeModal} className="!w-[60%]">
      <div className=" w-[100%]">
        <MultiStepForm closeModal={props.closeModal} />
      </div>
    </ModalTemplate>
  );
}
function Step1({ data, setData, nextStep }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Your validation logic here

    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-col  ">
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        placeholder="First Name"
        className="py-3 px-2 rounded mb-3 border"
      />
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        placeholder="Last Name"
        className="py-3 px-2 rounded mb-3 border"
      />
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        placeholder="DOB"
        className="py-3 px-2 rounded mb-3 border"
      />
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        placeholder="Gender"
        className="py-3 px-2 rounded mb-3 border"
      />
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        placeholder="Mobile number*"
        className="py-3 px-2 rounded mb-3 border"
      />
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        placeholder="Alternate Mobile number*"
        className="py-3 px-2 rounded mb-3 border "
      />
      <button
        onClick={nextStep}
        className="  bottom-5  bg-[#C3C9D4] py-3 rounded  text-white font-semibold mb-16"
      >
        Next
      </button>
    </div>
  );
}
function Step3({ data, setData, nextStep }) {
  const handleChange = (e) => {
    // Update data in parent component's state
  };

  return (
    <div className="flex flex-col">
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        placeholder="Bank Name"
        className="py-3 px-2 rounded mb-3 border"
      />
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        placeholder="Account Holder Name"
        className="py-3 px-2 rounded mb-3 border"
      />
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        placeholder="Account no."
        className="py-3 px-2 rounded mb-3 border"
      />
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        placeholder="IFSC Code"
        className="py-3 px-2 rounded mb-3 border"
      />

      <button
        onClick={nextStep}
        className="bg-[#C3C9D4] py-3 rounded text-white font-semibold mb-16"
      >
        Update
      </button>
    </div>
  );
}
function Step2({ data, setData, nextStep }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Your validation logic here

    setData({
      ...data,
      [name]: value,
    });
  };
  return (
    <div className="flex flex-col ">
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        placeholder="Business Type"
        className="py-3 px-2 rounded mb-3 border"
      />
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        placeholder="Business/Individual Sort Name"
        className="py-3 px-2 rounded mb-3 border"
      />
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        placeholder="GST No."
        className="py-3 px-2 rounded mb-3 border"
      />
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        placeholder="Flat, House no, Building,Company,Apartment"
        className="py-3 px-2 rounded mb-3 border"
      />
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        placeholder="Area,Street,Sector,Village"
        className="py-3 px-2 rounded mb-3 border"
      />
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        placeholder="Landmark"
        className="py-3 px-2 rounded mb-3 border "
      />
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        placeholder="Pin Code"
        className="py-3 px-2 rounded mb-3 border "
      />
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        placeholder="City/Distict"
        className="py-3 px-2 rounded mb-3 border "
      />
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        placeholder="State"
        className="py-3 px-2 rounded mb-3 border "
      />
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        placeholder="Mode of Reselling"
        className="py-3 px-2 rounded mb-3 border "
      />
      <button
        onClick={nextStep}
        className="bg-[#C3C9D4] py-3 rounded  text-white font-semibold mb-16"
      >
        Next
      </button>
    </div>
  );
}

function MultiStepForm(props) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    mobileNumber: "",
    altMobileNumber: "",
    businessType: "",
    individualSortName: "",
    businessName: "",
    gstNO: "",
    landmark: "",
    pinCode: "",
    cityOrDistrict: "",
    state: "",
    modeOfReselling: "",
    bankName: "",
    accHolderName: "",
    AccNo: "",
    ifscCode: "",
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1 data={formData} setData={setFormData} nextStep={nextStep} />
        );
      case 2:
        return (
          <Step2
            data={formData}
            setData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return <Step3 data={formData} prevStep={prevStep} />;
      default:
        return null;
    }
  };

  return (
    <div>
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
          <p className=" font-semibold text-base ml-3">Add Product</p>
        </div>
      </div>
      <div className="step-buttons flex  pt-5  justify-center mb-8">
        <div
          className={`flex-1 flex flex-col justify-center items-center cursor-pointer gap-1 pb-4 ${
            step == 1
              ? "border-b-2 border-[#DC137B]"
              : " border-b-[1px] border-[#9C9C9C]"
          }`}
          onClick={() => setStep(1)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            // className={`${step==1?"fill-[#DC137B]":"fill-none"}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3341 16.1508L13.1098 17.0678C12.4369 17.3334 11.8993 17.5356 11.499 17.6746C11.0983 17.814 10.6327 17.8834 10.1022 17.8834C9.28751 17.8834 8.65384 17.6838 8.2019 17.2874C7.74996 16.8894 7.52392 16.3851 7.52392 15.7733C7.52392 15.5364 7.54032 15.2928 7.57442 15.0446C7.60881 14.7962 7.66348 14.5163 7.7383 14.2035L8.57931 11.2268C8.65413 10.9418 8.71773 10.6717 8.76866 10.4163C8.82032 10.1625 8.84521 9.92896 8.84521 9.71874C8.84521 9.3386 8.76651 9.0727 8.60982 8.9232C8.45312 8.77414 8.15413 8.69846 7.71025 8.69846C7.49284 8.69846 7.26938 8.73328 7.04161 8.80061C6.81284 8.86824 6.6173 8.93356 6.45312 8.99428L6.67802 8.07658C7.22895 7.85227 7.75557 7.66018 8.25931 7.50076C8.76305 7.3409 9.23902 7.2609 9.68924 7.2609C10.4983 7.2609 11.1226 7.45644 11.561 7.84752C11.9995 8.23889 12.2186 8.74623 12.2186 9.37141C12.2186 9.50076 12.2042 9.72867 12.1733 10.0544C12.1431 10.3809 12.0868 10.68 12.0048 10.9521L11.1674 13.9169C11.0987 14.155 11.037 14.4272 10.9833 14.7336C10.9279 15.0379 10.9015 15.2704 10.9015 15.4264C10.9015 15.82 10.9892 16.0888 11.1652 16.2317C11.3425 16.3746 11.6478 16.4457 12.0815 16.4457C12.2851 16.4457 12.5167 16.4095 12.7741 16.3386C13.031 16.2677 13.2182 16.2054 13.3341 16.1508ZM13.5466 3.70392C13.5466 4.22047 13.352 4.66162 12.9608 5.02435C12.5705 5.38838 12.1003 5.57054 11.5502 5.57054C10.9984 5.57054 10.5271 5.38838 10.1324 5.02435C9.73845 4.66148 9.54104 4.22047 9.54104 3.70392C9.54104 3.18838 9.73845 2.74651 10.1324 2.37917C10.5264 2.01241 10.9986 1.8291 11.5502 1.8291C12.1002 1.8291 12.5705 2.01284 12.9608 2.37917C13.3521 2.74651 13.5466 3.18853 13.5466 3.70392Z"
              // fill="#9C9C9C"
              fill={`${step == 1 ? "#DC137B" : "#9C9C9C"}`}
            />
          </svg>
          <p
            className={`w-[7ch] text-center font-medium text-sm ${
              step == 1 ? "text-[#DC137B]" : "text-[#9C9C9C] "
            }`}
          >
            Basic Details
          </p>
        </div>
        <div
          className={`flex-1 flex flex-col justify-center cursor-pointer  items-center gap-1 pb-4 ${
            step == 2
              ? "border-b-2 border-[#DC137B]"
              : " border-b-[1px] border-[#9C9C9C]"
          }`}
          onClick={() => setStep(2)}
        >
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.25 18.125H6.75V18.75H14.25V18.125Z"
              fill={`${step == 2 ? "#DC137B" : "#9C9C9C"}`}
            />
            <path
              d="M14.25 1.25H6.75V1.875H14.25V1.25Z"
              fill={`${step == 2 ? "#DC137B" : "#9C9C9C"}`}
            />
            <path
              d="M8.625 3.125H6.125V3.75H8.625V3.125Z"
              fill={`${step == 2 ? "#DC137B" : "#9C9C9C"}`}
            />
            <path
              d="M8.625 5.625H6.125V6.25H8.625V5.625Z"
              fill={`${step == 2 ? "#DC137B" : "#9C9C9C"}`}
            />
            <path
              d="M14.875 7.5H8.625V8.125H14.875V7.5Z"
              fill={`${step == 2 ? "#DC137B" : "#9C9C9C"}`}
            />
            <path
              d="M8 7.5H6.125V8.125H8V7.5Z"
              fill={`${step == 2 ? "#DC137B" : "#9C9C9C"}`}
            />
            <path
              d="M14.875 9.375H8.625V10H14.875V9.375Z"
              fill={`${step == 2 ? "#DC137B" : "#9C9C9C"}`}
            />
            <path
              d="M8 9.375H6.125V10H8V9.375Z"
              fill={`${step == 2 ? "#DC137B" : "#9C9C9C"}`}
            />
            <path
              d="M14.875 11.25H8.625V11.875H14.875V11.25Z"
              fill={`${step == 2 ? "#DC137B" : "#9C9C9C"}`}
            />
            <path
              d="M8 11.25H6.125V11.875H8V11.25Z"
              fill={`${step == 2 ? "#DC137B" : "#9C9C9C"}`}
            />
            <path
              d="M14.875 13.125H8.625V13.75H14.875V13.125Z"
              fill={`${step == 2 ? "#DC137B" : "#9C9C9C"}`}
            />
            <path
              d="M8 13.125H6.125V13.75H8V13.125Z"
              fill={`${step == 2 ? "#DC137B" : "#9C9C9C"}`}
            />
            <path
              d="M14.875 15H8.625V15.625H14.875V15Z"
              fill={`${step == 2 ? "#DC137B" : "#9C9C9C"}`}
            />
            <path
              d="M8 15H6.125V15.625H8V15Z"
              fill={`${step == 2 ? "#DC137B" : "#9C9C9C"}`}
            />
            <path
              d="M16.125 3.75V16.25H16.75V3.75H16.125Z"
              fill={`${step == 2 ? "#DC137B" : "#9C9C9C"}`}
            />
            <path
              d="M14.25 1.25V1.875H15.5C15.6658 1.875 15.8247 1.94085 15.9419 2.05806C16.0592 2.17527 16.125 2.33424 16.125 2.5V3.75H16.75V2.5C16.75 2.16848 16.6183 1.85054 16.3839 1.61612C16.1495 1.3817 15.8315 1.25 15.5 1.25H14.25Z"
              fill={`${step == 2 ? "#DC137B" : "#9C9C9C"}`}
            />
            <path
              d="M4.25 3.75L4.25 16.25H4.875L4.875 3.75H4.25Z"
              fill={`${step == 2 ? "#DC137B" : "#9C9C9C"}`}
            />
            <path
              d="M6.75 1.25V1.875H5.5C5.33424 1.875 5.17527 1.94085 5.05806 2.05806C4.94085 2.17527 4.875 2.33424 4.875 2.5V3.75H4.25V2.5C4.25 2.16848 4.3817 1.85054 4.61612 1.61612C4.85054 1.3817 5.16848 1.25 5.5 1.25H6.75Z"
              fill={`${step == 2 ? "#DC137B" : "#9C9C9C"}`}
            />
            <path
              d="M14.25 18.75V18.125H15.5C15.6658 18.125 15.8247 18.0592 15.9419 17.9419C16.0592 17.8247 16.125 17.6658 16.125 17.5V16.25H16.75V17.5C16.75 17.8315 16.6183 18.1495 16.3839 18.3839C16.1495 18.6183 15.8315 18.75 15.5 18.75H14.25Z"
              fill={`${step == 2 ? "#DC137B" : "#9C9C9C"}`}
            />
            <path
              d="M6.75 18.75V18.125H5.5C5.33424 18.125 5.17527 18.0592 5.05806 17.9419C4.94085 17.8247 4.875 17.6658 4.875 17.5V16.25H4.25V17.5C4.25 17.8315 4.3817 18.1495 4.61612 18.3839C4.85054 18.6183 5.16848 18.75 5.5 18.75H6.75Z"
              fill={`${step == 2 ? "#DC137B" : "#9C9C9C"}`}
            />
            <path
              d="M6.75 3.125H6.125V6.25H6.75V3.125Z"
              fill={`${step == 2 ? "#DC137B" : "#9C9C9C"}`}
            />
            <path
              d="M8.625 3.125H8V6.25H8.625V3.125Z"
              fill={`${step == 2 ? "#DC137B" : "#9C9C9C"}`}
            />
          </svg>
          <p
            className={`w-[8ch] text-center font-medium text-sm ${
              step == 2 ? "text-[#DC137B]" : "text-[#9C9C9C] "
            }`}
          >
            Business Details
          </p>
        </div>
        <div
          className={`flex-1 flex flex-col justify-center items-center cursor-pointer gap-1 pb-4 ${
            step == 3
              ? "border-b-2 border-[#DC137B]"
              : " border-b-[1px] border-[#9C9C9C]"
          }`}
          onClick={() => setStep(3)}
        >
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.19343 15.7788C9.62215 15.7788 9.97019 15.4308 9.97019 15.0021V8.14606C9.97019 7.71733 9.62215 7.36929 9.19343 7.36929H7.59293C7.16421 7.36929 6.81617 7.71733 6.81617 8.14606V15.0033C6.81617 15.432 7.16421 15.78 7.59293 15.78H9.19343V15.7788ZM7.86751 8.42064H8.91885V14.7275H7.86751V8.42064Z"
              fill={`${step == 3 ? "#DC137B" : "#9C9C9C"}`}
            />
            <path
              d="M17.604 15.7788C18.0327 15.7788 18.3807 15.4308 18.3807 15.0021V8.14606C18.3807 7.71733 18.0327 7.36929 17.604 7.36929H16.0035C15.5748 7.36929 15.2267 7.71733 15.2267 8.14606V15.0033C15.2267 15.432 15.5748 15.78 16.0035 15.78H17.604V15.7788ZM16.2781 8.42064H17.3294V14.7275H16.2781V8.42064Z"
              fill={`${step == 3 ? "#DC137B" : "#9C9C9C"}`}
            />
            <path
              d="M1.2864 6.31888H19.7035C20.4815 6.31888 20.7765 5.30126 20.1178 4.88578L10.9255 0.131267C10.911 0.124041 10.8966 0.115611 10.8821 0.107181C10.7605 0.0361285 10.6244 0 10.4883 0C10.3523 0 10.2162 0.0361285 10.0945 0.107181C10.0801 0.115611 10.0668 0.124041 10.0512 0.131267L0.869714 4.88578C0.214583 5.30126 0.50843 6.31888 1.2864 6.31888ZM10.4907 1.08988L18.5679 5.26754H2.42204L10.4907 1.08988Z"
              fill={`${step == 3 ? "#DC137B" : "#9C9C9C"}`}
            />
            <path
              d="M4.98936 15.7788C5.41809 15.7788 5.76613 15.4308 5.76613 15.0021V8.14606C5.76613 7.71733 5.41809 7.36929 4.98936 7.36929H3.38887C2.96014 7.36929 2.61211 7.71733 2.61211 8.14606V15.0033C2.61211 15.432 2.96014 15.78 3.38887 15.78H4.98936V15.7788ZM3.66345 8.42064H4.71479V14.7275H3.66345V8.42064Z"
              fill={`${step == 3 ? "#DC137B" : "#9C9C9C"}`}
            />
            <path
              d="M1.54034 17.3576C1.54034 17.6478 1.77518 17.8826 2.06541 17.8826H18.9158C19.206 17.8826 19.4408 17.6478 19.4408 17.3576C19.4408 17.0673 19.206 16.8325 18.9158 16.8325H2.06662C1.77639 16.8313 1.54034 17.0661 1.54034 17.3576Z"
              fill={`${step == 3 ? "#DC137B" : "#9C9C9C"}`}
            />
            <path
              d="M20.4916 19.4751C20.4916 19.1848 20.2568 18.95 19.9666 18.95H1.07014C0.77991 18.95 0.545074 19.1848 0.545074 19.4751C0.545074 19.7653 0.77991 20.0001 1.07014 20.0001H19.9666C20.2568 20.0001 20.4916 19.7653 20.4916 19.4751Z"
              fill={`${step == 3 ? "#DC137B" : "#9C9C9C"}`}
            />
            <path
              d="M13.3975 15.7788C13.8262 15.7788 14.1742 15.4308 14.1742 15.0021V8.14606C14.1742 7.71733 13.8262 7.36929 13.3975 7.36929H11.797C11.3683 7.36929 11.0202 7.71733 11.0202 8.14606V15.0033C11.0202 15.432 11.3683 15.78 11.797 15.78H13.3975V15.7788ZM12.0716 8.42064H13.1229V14.7275H12.0716V8.42064Z"
              fill={`${step == 3 ? "#DC137B" : "#9C9C9C"}`}
            />
          </svg>
          <p
            className={`w-[7ch] text-center font-medium text-sm ${
              step == 3 ? "text-[#DC137B]" : "text-[#9C9C9C] "
            }`}
          >
            Bank Details
          </p>
        </div>
      </div>
      <div className="mx-6 sm:mx-4">{renderStep()}</div>
    </div>
  );
}