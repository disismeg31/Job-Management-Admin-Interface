import React ,{useState}from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoMdClose } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
function Modal({ onClose, open }) {
    const [yourDate, setYourDate] = useState(null);
  return (
    <div
      className={`fixed inset-0 z-50 justify-center items-center flex flex-col w-full
     transition-colors 
     ${open ? "visible bg-black/20" : "invisible"} 
     `}
    >
      <div className="bg-[#FFFFFF] text-[#222222] rounded-2xl p-7.5 w-210 h-auto">
        <button onClick={onClose}>
          <IoMdClose size={23} />
        </button>
        <p className="text-center text-2xl font-bold">Create Job Opening</p>
        <form className="w-full" action="">
          <div className="flex justify-center w-full gap-4 my-4">
            <label className="flex flex-1 flex-col font-bold mb-1.5">
              Job Title
              <input
                className=" h-14 px-3 py-2 text-lg focus:outline-0 placeholder:text-[#bcbcbc] placeholder:font-medium border border-[#bcbcbc] focus:border-[#222222] rounded-[10px]"
                type="text"
                placeholder="Full Stack Developer"
              />
            </label>
            <label className="flex flex-1 flex-col font-bold mb-1.5">
              Company Name
              <input
                className=" h-14 px-3 py-2 text-lg focus:outline-0 placeholder:text-[#bcbcbc] placeholder:font-medium border border-[#bcbcbc] focus:border-[#222222] rounded-[10px]"
                type="text"
                placeholder="Amazon, Microsoft, Swiggy"
              />
            </label>
          </div>

          <div className="flex justify-center w-full gap-4 my-4">
            <label className="flex flex-1 flex-col font-bold mb-1.5">
              Location
              <input
                className="w-full h-14 px-3 py-2 text-lg focus:outline-0 placeholder:text-[#bcbcbc] placeholder:font-medium border border-[#bcbcbc] focus:border-[#222222] rounded-[10px]"
                type="text"
                placeholder="Enter Preferred Location"
              />
            </label>
            <label className="flex flex-1 flex-col font-bold mb-1.5">
              Job type
              <input
                className="w-full h-14 px-3 py-2 text-lg focus:outline-0 placeholder:text-[#bcbcbc] placeholder:font-medium border border-[#bcbcbc] focus:border-[#222222] rounded-[10px]"
                type="text"
                placeholder="FullTime"
              />
            </label>
          </div>

          <div className="flex justify-center w-full gap-4 my-4">
            <label className="flex flex-1 flex-col font-bold mb-1.5">
              Salary Range
              <div className="w-full flex gap-3">
                <input
                  className="w-1/2 h-14 px-3 py-2 text-lg focus:outline-0 placeholder:text-[#bcbcbc] placeholder:font-medium border border-[#bcbcbc] focus:border-[#222222] rounded-[10px]"
                  type="number"
                  placeholder="⇅ ₹0"
                />
                <input
                  className="w-1/2 h-14 px-3 py-2 text-lg focus:outline-0 placeholder:text-[#bcbcbc] placeholder:font-medium border border-[#bcbcbc] focus:border-[#222222] rounded-[10px]"
                  type="number"
                  placeholder="⇅ ₹12,00,000"
                />
              </div>
            </label>
            <label className="flex flex-1 flex-col font-bold mb-1.5 relative">
              Application Deadline
                <DatePicker
                selected={yourDate}
                onChange={(date) => setYourDate(date)}
                className="h-14 w-full px-3 pr-10 py-2 text-lg focus:outline-0 placeholder:text-[#bcbcbc] placeholder:font-medium border border-[#bcbcbc] focus:border-[#222222] rounded-[10px]"
                placeholderText=" "
                dateFormat="yyyy-MM-dd"
                />
              <MdOutlineDateRange className="absolute right-3 top-13 transform -translate-y-1/2 text-[#686868] pointer-events-none" />
            </label>
          </div>

          <div className="w-full flex-col my-4">
            <label className="flex flex-col font-bold">
              Job Description
              <textarea name="" id=""></textarea>
            </label>
          </div>
          {/* <div className="w-full flex-col font-bold">
            <label className="flex flex-col">
              Requirements
              <textarea name="" id=""></textarea>
            </label>
          </div> */}
          {/* <div className="w-full flex-col font-bold">
            <label className="flex flex-col">
              Responsibilities
              <textarea name="" id=""></textarea>
            </label>
          </div> */}

          <div className="flex justify-between">
            <button>Save Draft</button>
            <button>Publish</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
