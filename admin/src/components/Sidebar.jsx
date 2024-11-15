import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { FaRegUserCircle } from "react-icons/fa";
import { IoAnalytics } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa6";
import { IoAddCircleOutline } from "react-icons/io5";


const Sidebar = () => {
  return (
    <div className='w-48 min-h-screen border-r-2  bg-blue-600'>
        <div className='flex flex-col gap-4 pt-6 text-[15px] text-white'>

            <NavLink className='flex items-center gap-3  hover:bg-orange-500  px-3 py-2 rounded-l' to="/">
                <MdDashboard />
                <p className='hidden md:block'>Dashboard</p>
            </NavLink>

            <NavLink className='flex items-center gap-3  hover:bg-orange-500  px-3 py-2 rounded-l' to="/add">
                <IoAddCircleOutline />
                <p className='hidden md:block'>Add Items</p>
            </NavLink>

            <NavLink className='flex items-center gap-3  hover:bg-orange-500 px-3 py-2 rounded-l' to="/list">
                <FaListUl />
                <p className='hidden md:block'>List Items</p>
            </NavLink>

            <NavLink className='flex items-center gap-3  hover:bg-orange-500  px-3 py-2 rounded-l' to="/orders">
                <FaBoxOpen />
                <p className='hidden md:block'>Orders</p>
            </NavLink>

            <NavLink className='flex items-center gap-3  hover:bg-orange-500 px-3 py-2 rounded-l' to="/analytics">
                <IoAnalytics />
                <p className='hidden md:block'>Analytics</p>
            </NavLink>
            
            <NavLink className='flex items-center gap-3  hover:bg-orange-500 px-3 py-2 rounded-l' to="/account">
                <FaRegUserCircle className='text-2xl' />

                <p className='hidden md:block'>Account</p>
            </NavLink>

        </div>

    </div>
  )
}

export default Sidebar