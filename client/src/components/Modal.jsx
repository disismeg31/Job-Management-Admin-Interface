import React ,{useState,useEffect,useContext}from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoMdClose } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { JobsContext } from "../context/JobContext";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import api from './../services/api'
function Modal({ onClose, open }) {
    const {setFilteredJobs,message,setMessage} = useContext(JobsContext)
    const [formData,setFormData] = useState({
      title: "",
      company: "",
      location: "",
      jobType: "",
      salaryRange: { min: "", max: "" },
      deadline: null,
      description: "",
    })
    const [openToast, setOpenToast] = useState(false);

    useEffect(() => {
      if (message) {
          setOpenToast(true);
        }
    }, [message]);

    const handleInput = (e) =>{
      const {name,value} = e.target;
      setFormData((f)=> ({...f,[name]:value}))
    }

    const handleSubmit=(e)=>{
      e.preventDefault();
      if (!formData.title || !formData.company || !formData.location || !formData.jobType || !formData.description) {
      setMessage("Please fill all required fields.");
      setOpenToast(true);
      return;
      }
      const preparedFormData = {
      ...formData,
      salaryRange: {
        min: Number(formData.salaryRange.min),
        max: Number(formData.salaryRange.max)
      }
      };

      api.postJob(preparedFormData)
      .then(result => {
        setMessage(result.message || "Job created successfully!");
        setOpenToast(true);
        api.getJobs().then(data => {
      // setJobs(data.payload);
        setFilteredJobs(data.payload);  
        });
        setFormData({
        title: "",
        companyName: "",
        location: "",
        jobType: "",
        salaryRange: { min: "", max: "" },
        deadline: null,
        description: "",
      });
      setTimeout(() => {
        onClose();
      }, 1500);
    })
    .catch(err => {
      console.log(err.response?.data?.message)
      setMessage(err.response?.data?.message || "Something went wrong");
      setOpenToast(true);
    });
      // setJobData(preparedFormData);
      // setFormData({
      // title: "",
      // companyName: "",
      // location: "",
      // jobType: "",
      // salaryRange: { min: 0, max: 1200000 },
      // deadline: null,
      // description: "",
      // });
      // onClose();
    }

    const handleToastClose = () => {
    setOpenToast(false);
    setTimeout(() => {
    // setJobData({});
    setMessage(""); 
    }, 300);
    };

  return (
    <>
    <Snackbar 
    open={openToast} 
    autoHideDuration={3000} 
    onClose={handleToastClose}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
    <MuiAlert 
    onClose={handleToastClose} 
    severity="success" 
    sx={{ width: '100%' }}>
    {message}
    </MuiAlert>
    </Snackbar>
    <div
      className={`fixed inset-0 z-50 justify-center items-center flex flex-wrap flex-col w-full
     transition-colors 
     ${open ? "visible bg-black/20" : "invisible"} 
     `}
    >
      <div className="bg-[#FFFFFF] text-[#222222] rounded-2xl p-7.5 max-w-[850px] h-auto">
        <button onClick={onClose}>
          <IoMdClose size={23} />
        </button>
        <p className="text-center text-2xl font-bold">Create Job Opening</p>
        <form className="w-full"  onSubmit={handleSubmit}>
          <div className="flex justify-center w-full gap-4 my-4">
            <label className="flex flex-1 flex-col font-bold mb-1.5">
              Job Title
              <input
                className=" h-14 px-3 py-2 text-base focus:outline-0 placeholder:text-[#bcbcbc] placeholder:font-medium border border-[#bcbcbc] focus:border-[#222222] rounded-[10px]"
                type="text"
                name="title"
                value={formData.title || ""}
                placeholder="Full Stack Developer"
                onChange={handleInput}
                autoComplete="off" 
              />
            </label>
            <label className="flex flex-1 flex-col font-bold mb-1.5">
              Company Name
              <input
                className=" h-14 px-3 py-2 text-base focus:outline-0 placeholder:text-[#bcbcbc] placeholder:font-medium border border-[#bcbcbc] focus:border-[#222222] rounded-[10px]"
                type="text"
                name="company"
                value={formData.company || ""}
                placeholder="Amazon, Microsoft, Swiggy"
                onChange={handleInput}
                autoComplete="off" 
              />
            </label>
          </div>

          <div className="flex justify-center w-full gap-4 my-4">
            <label className="flex flex-1 flex-col font-bold mb-1.5">
              Location
              <input
                className="w-full h-14 px-3 py-2 text-base focus:outline-0 placeholder:text-[#bcbcbc] placeholder:font-medium border border-[#bcbcbc] focus:border-[#222222] rounded-[10px]"
                type="text"
                name="location"
                value={formData.location || ""}
                placeholder="Enter Preferred Location"
                onChange={handleInput}
                autoComplete="off" 
              />
            </label>
            <label className="flex flex-1 flex-col font-bold mb-1.5">
              Job type
              {/* <input
                className="w-full h-14 px-3 py-2 text-base focus:outline-0 placeholder:text-[#bcbcbc] placeholder:font-medium border border-[#bcbcbc] focus:border-[#222222] rounded-[10px]"
                type="text"
                name="jobType"
                value={formData.jobType}
                placeholder="FullTime"
                onChange={handleInput}
                autoComplete="off" 
              /> */}
              <select
              name="jobType"
              value={formData.jobType || ""}
              onChange={handleInput}
              className="w-full h-14 px-3 py-2 text-base focus:outline-0 border border-[#bcbcbc] focus:border-[#222222] rounded-[10px] bg-white"
              >
              <option value="" hidden>Select Job Type</option>
              <option value="fullTime">Full Time</option>
              <option value="partTime">Part Time</option>
              <option value="internship">Internship</option>
              <option value="contract">Contract</option>
              </select>
            </label>
          </div>

          <div className="flex justify-center w-full gap-4 my-4">
            <label className="flex flex-1 flex-col font-bold mb-1.5">
              Salary Range
              <div className="w-full flex gap-3">
                <input
                  className="w-1/2 h-14 px-3 py-2 text-base focus:outline-0 placeholder:text-[#bcbcbc] placeholder:font-medium border border-[#bcbcbc] focus:border-[#222222] rounded-[10px]"
                  type="number"
                  name="min"
                  min={10000}
                  value={formData.salaryRange.min || ""}
                  placeholder="⇅ ₹0"
                  onChange={(e) =>
                  setFormData({ 
                  ...formData, 
                  salaryRange: { 
                  ...formData.salaryRange, 
                  min:e.target.value 
                  }})
                  }
                />
                <input
                  className="w-1/2 h-14 px-3 py-2 text-base focus:outline-0 placeholder:text-[#bcbcbc] placeholder:font-medium border border-[#bcbcbc] focus:border-[#222222] rounded-[10px]"
                  type="number"
                  name="max"
                  max={1200000}
                  value={formData.salaryRange.max || ""}
                  placeholder="⇅ ₹12,00,000"
                  onChange={(e) =>
                  setFormData({ 
                  ...formData, 
                  salaryRange: { 
                  ...formData.salaryRange, 
                  max:e.target.value 
                  }})
                  }
                />
              </div>
            </label>
            <label className="flex flex-1 flex-col font-bold mb-1.5 relative">
              Application Deadline
                <DatePicker
                name="deadline"
                selected={formData.deadline? new Date(formData.deadline) : null}
                onChange={(date) =>
                setFormData((f) => ({
                ...f,
                deadline: date.toISOString(),
                }))}
                className="h-14 w-full px-3 pr-10 py-2 text-base focus:outline-0 placeholder:text-[#bcbcbc] placeholder:font-medium border border-[#bcbcbc] focus:border-[#222222] rounded-[10px]"
                placeholderText=" "
                dateFormat="yyyy-MM-dd"
                autoComplete="off"
                />
              <MdOutlineDateRange className="absolute right-3 top-13 transform -translate-y-1/2 text-[#686868] pointer-events-none" />
            </label>
          </div>

          <div className="w-full flex-col my-4">
            <label htmlFor="description" className="flex flex-col font-bold mb-1.5">
              Job Description
              <textarea  
               rows={4}
               placeholder="Please share a description to let the candidate know more about the job role"
               className="w-full px-3 pr-10 py-2 text-base focus:outline-0 placeholder:text-[#bcbcbc] placeholder:font-medium border border-[#bcbcbc] focus:border-[#222222] rounded-[10px]"
               name="description" 
               value={formData.description || ""}
               id="description"
               onChange={handleInput}
               >
              </textarea>
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
            <button type="button" className="flex items-center flex-shrink-0  text-[#222222] border-2 border-[#222222] px-10 py-2 rounded-xl font-semibold shadow-md cursor-pointer hover:brightness-110 active:brightness-90
    transition duration-150 ease-in-out">Save Draft<span className="ml-2.5"><MdKeyboardDoubleArrowDown /></span></button>
            <button type="submit" className="flex items-center flex-shrink-0 bg-[#00AAFF] text-white px-10 py-2 rounded-xl font-semibold shadow-md cursor-pointer hover:brightness-110 active:brightness-90
    transition duration-150 ease-in-out">Publish<span className="ml-2.5"><MdKeyboardDoubleArrowRight /></span></button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default Modal;
