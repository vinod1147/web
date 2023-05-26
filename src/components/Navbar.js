"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <>
            <div className='sticky left-0 top-0 w-full ease-in duration-300 bg-black z-50 py-3'>
                <div className='max-w-[1240px] mx-12 m-auto flex justify-between items-center py-3 text-[#e3eaec]'>
                    <div href='/'>
                        <h1 className='font-bold text-3xl hover:text-white cursor-pointer'>
                            {/* <Image src="/favicon.ico" width={50} height={50}></Image> */}
                            lOGO
                        </h1>
                    </div>
                    <ul className='hidden sm:flex'>
                        <li className='p-3'>
                            <Link className='text-[#e3eaec] hover:text-white transition-all tracking-wider text-[15px]' href='/' >Featured Work</Link>
                        </li>
                        <li className='p-3'>
                            <Link className='text-[#e3eaec] hover:text-white transition-all tracking-wider text-[15px]  ' href='/about'>Services</Link>
                        </li>
                        <li className='p-3'>
                            <Link className='text-[#e3eaec] hover:text-white transition-all tracking-wider text-[15px]  ' href='/contact'>About</Link>
                        </li>
                        <button className='rounded-none font-semibold text-[#e3eaec] ml-5 px-7 py-1 transition-colors bg-transparent hover:bg-white hover:text-black border tracking-wider'>Contact</button>
                    </ul>


                    {/* Mobile Button */}
                    <div onClick={handleNav} className='block sm:hidden z-10 '>
                        {nav ? (
                            <AiOutlineClose size={20} />
                        ) : (
                            <AiOutlineMenu size={20} />
                        )}
                    </div>
                    {/* Mobile Menu */}
                    <div
                        className={
                            nav
                                ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 text-white'
                                : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                        }
                    >
                        <ul>
                            <li onClick={handleNav} className='py-3 text-3xl text-[#e3eaec] hover:text-white font-semibold transition-all tracking-wider'>
                                <Link href='/'>Featured Work</Link>
                            </li>
                            <li onClick={handleNav} className='py-3 text-3xl text-[#e3eaec] hover:text-white font-semibold transition-all tracking-wider'>
                                <Link href='/about'>Services</Link>
                            </li>
                            <li onClick={handleNav} className='py-3 text-3xl text-[#e3eaec] hover:text-white font-semibold transition-all tracking-wider'>
                                <Link href='/contact'>About</Link>
                            </li>
                            <button className='rounded-none font-semibold text-[#e3eaec] my-3 px-10 py-2 transition-colors bg-transparent hover:bg-white hover:text-black border tracking-wider'>Contact</button>
                        </ul>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Navbar;
