import React from 'react';
import Image from 'next/image';

function About() {
    return (
        <div className='px-6 bg-black'>
            <div className='line p-[1px] mx-40 bg-zinc-800'></div>
            <div className='text-white px-8'>
                <div className="all p-4 py-24">
                    <div className="up flex">
                        <div className="two w-[30%] p-4 pl-24">
                            <h1 className='text-4xl font-semibold'>About Us.</h1>
                            <h2 className='text-[#828282] text-4xl'>Small is big.</h2>
                        </div>
                        <div className="one w-[70%] p-4 px-16">
                            <div className="aboutone p-4 px-9 text-2xl">
                                <p className=''>We are small team of creative people who value minimalism and simplicity in everything we do. We get work done and take pride in helping your business grow.</p>
                            </div>
                            <div className="abouttwo p-4 px-9 text-base pt-6">
                                <p className=''>Some designers are great with art, bad with business. Others know what you want to accomplish, but are limited in their design skill. Few know the developemnt abilities needed under the hood to make it all run fast and clean. We&apos;ve got over a decade of experience helping leaders like you have websites worthy of their grand vision</p>
                            </div>
                            <div className="aboutthree p-4 px-9 text-base pt-6">
                                <p className=''>Our websites are designed to look good and deliver world-class user experience at every step, and that grow your audience along the way. Readablity, clean honest design, are all tools we use to help you reach and serve the customers you most want to satisfy</p>
                            </div>
                        </div>
                    </div>
                    <div className="down flex">
                        <div className="four w-[30%] p-4 pl-24 mt-24">
                            <h3 className='text-[24px] font-semibold'>Core design team.</h3>
                            <h3 className='text-[24px] text-[#828282]'>No managers.</h3>
                            <h3 className='text-[24px] text-[#828282]'>Doers only.</h3>
                        </div>
                        <div className="three w-[70%] mt-24 p-4">
                            <div className="peoples mx-16">
                                <div className="row flex">
                                    <div className='images p-4 px-8'>
                                        <div className="photo">
                                            <Image alt="Profile Photo" src='/sample.jpeg' width={5000} height={150}></Image >
                                        </div>
                                        <div className="text">
                                            <p className='pt-3 pb-[4px] text-white text-[15px]'>Rafal Tomal</p>
                                            <p className='text-[14px] text-[#828282] mb-4'>Creative Direction and UI/UX Design</p>
                                        </div>
                                    </div>
                                    <div className='images p-4 px-8'>
                                        <div className="photo">
                                            <Image alt="Profile Photo" src='/sample.jpeg' width={5000} height={150}></Image >
                                        </div>
                                        <div className="text">
                                            <p className='pt-3 pb-[4px] text-white text-[15px]'>Chris Hufnagel</p>
                                            <p className='text-[14px] text-[#828282] mb-4'>UX Design and Stratergy</p>
                                        </div>
                                    </div>
                                    <div className='images p-4 px-8'>
                                        <div className="photo">
                                            <Image alt="Profile Photo" src='/sample.jpeg' width={5000} height={150}></Image >
                                        </div>
                                        <div className="text">
                                            <p className='pt-3 pb-[4px] text-white text-[15px]'>Marta Makowsha</p>
                                            <p className='text-[14px] text-[#828282] mb-4'>Creative Direction and UI/UX Design</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row flex">
                                    <div className='images p-4 px-8'>
                                        <div className="photo">
                                            <Image alt="Profile Photo" src='/sample.jpeg' width={5000} height={150}></Image >
                                        </div>
                                        <div className="text">
                                            <p className='pt-3 pb-[4px] text-white text-[15px]'>Paulina Jarosz</p>
                                            <p className='text-[14px] text-[#828282] mb-4'>Webflow Development</p>
                                        </div>
                                    </div>
                                    <div className='images p-4 px-8'>
                                        <div className="photo">
                                            <Image alt="Profile Photo" src='/sample.jpeg' width={5000} height={150}></Image >
                                        </div>
                                        <div className="text">
                                            <p className='pt-3 pb-[4px] text-white text-[15px]'>Mat Mokrzycki</p>
                                            <p className='text-[14px] text-[#828282] mb-4'>Marketing Design</p>
                                        </div>
                                    </div>
                                    <div className='images p-4 px-8'>
                                        <div className="photo">
                                            <Image alt="Profile Photo" src='/sample.jpeg' width={5000} height={150}></Image >
                                        </div>
                                        <div className="text">
                                            <p className='pt-3 pb-[4px] text-white text-[15px]'>Kevin Hechavarria</p>
                                            <p className='text-[14px] text-[#828282] mb-4'>Marketing Design</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default About;
