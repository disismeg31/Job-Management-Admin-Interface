import React from 'react'
import { RiUserAddLine } from "react-icons/ri";
import { BiUserPlus } from "react-icons/bi";
import userexp from './../assets/userexp.png';
import work from './../assets/work.png';
import lpa from './../assets/lpa.png';
import amazon from './../assets/img1.png';
import swiggy from './../assets/img2.png';
import tesla from './../assets/img3.png';

function Card({item}) {
  const points = item.description.split('.').filter(item=>item.trim() !== '');
  const companyLogos = {
    amazon:amazon,
    swiggy:swiggy,
    tesla:tesla
  }
  return (
    <div className='w-79 h-90 bg-[#FFFFFF] text-[#555555] rounded-2xl m-2 p-4'>
      <div className='flex justify-between'>
        <span>
          {
          // <img className={`${ item.company === 'Tesla' ? 'm-2' : 'fontSize:30px'}`} src={companyLogos[item.company]} alt="image" />
          <img className='m-2' src={companyLogos[item.company.toLowerCase()] || amazon} alt="image" />
          }
          </span>
        <span className='m-2 bg-[#B0D9FF] text-[#000000] h-8 text-sm py-2 px-2.5 rounded-lg leading-[1rem]'>24h Ago</span>
      </div>
      <div>
        <p className='text-[#000000] text-xl font-bold'>{item.title}</p>
        <div className='flex justify-between items-center text-[#5A5A5A] mt-4 mb-5 mr-4'>
           <span className='flex items-center font-medium text-base'><img className='w-4.5 h-4 mr-1' src={userexp} alt="user" />1-3 yr Exp</span>
           <span className='flex items-center font-medium text-base'><img className='w-4.5 h-4 mr-1' src={work} alt="work" />Onsite</span>
           <span className='flex items-center font-medium text-base'><img className='w-4.5 h-4 mr-1' src={lpa} alt="lpa" />12LPA</span>
        </div>
        <ul className='ml-4'>
          {points.map((bullet,i)=>(
            <li className='list-disc text-sm font-medium' key={i}>{bullet.trim()}</li>
          ))}
        </ul>
      </div>
      <button className='w-full h-11.5 rounded-xl mt-5 mb-4 bg-[#00AAFF] text-white cursor-pointer'>Apply Now</button>
    </div>
  )
}

export default Card