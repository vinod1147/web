import React from 'react';
import Image from 'next/image';

function Services() {
    return (
        <div className='bg-black text-white px-6 '>
            <div className='line p-[1px] mx-40 bg-zinc-800'></div>
            <div className='flex px-8 py-24'>
                <div className="left w-[50%] p-4 pl-28">
                    <p className='text-3xl'>Services.</p>
                    <p className='text-2xl mt-2 mb-7 text-[#868686]'>Cheap is expensive.</p>
                    <p className='text-lg text-[#f5f5f5]'>Build a powerful site and product with clean design. Unlike big agencies, work with a creative director one-on-one and collaborate to craft a unique project form start to finish</p>
                </div>
                <div className="right w-[50%] px-16 py-10">
                    <p className='mb-6'>What we do:</p>
                    <button className="text-[#f5f5f5] bg-transperent hover:text-black hover:bg-white transition-all border-2 border-[#f5f5f5] py-2 px-3 rounded-sm tracking-wider mr-3 mt-3">Web Design</button>
                    <button className="text-[#f5f5f5] bg-transperent hover:text-black hover:bg-white transition-all border-2 border-[#f5f5f5] py-2 px-3 rounded-sm tracking-wider mr-3 mt-3">UI UX Design</button>
                    <button className="text-[#f5f5f5] bg-transperent hover:text-black hover:bg-white transition-all border-2 border-[#f5f5f5] py-2 px-3 rounded-sm tracking-wider mr-3 mt-3">Brand Design</button>
                    <button className="text-[#f5f5f5] bg-transperent hover:text-black hover:bg-white transition-all border-2 border-[#f5f5f5] py-2 px-3 rounded-sm tracking-wider mr-3 mt-3">Mobile App Design</button>
                    <button className="text-[#f5f5f5] bg-transperent hover:text-black hover:bg-white transition-all border-2 border-[#f5f5f5] py-2 px-3 rounded-sm tracking-wider mr-3 mt-3">Marketing Design</button>
                    <button className="text-[#f5f5f5] bg-transperent hover:text-black hover:bg-white transition-all border-2 border-[#f5f5f5] py-2 px-3 rounded-sm tracking-wider mr-3 mt-3">WordPress</button>
                    <button className="text-[#f5f5f5] bg-transperent hover:text-black hover:bg-white transition-all border-2 border-[#f5f5f5] py-2 px-3 rounded-sm tracking-wider mr-3 mt-3">Webflow</button>
                    <button className="text-[#f5f5f5] bg-transperent hover:text-black hover:bg-white transition-all border-2 border-[#f5f5f5] py-2 px-3 rounded-sm tracking-wider mr-3 mt-3">Framer</button>
                </div>
            </div>
            <div className="down px-8">
                <div className="serviceone p-4 pl-28">
                    <p>There are few ways to work together.</p>
                </div>
                <div className="servicetwo px-16 pl-28">
                    <div className='flex'>
                        <div className="card w-[50%] bg-[#161616] text-white p-16 pt-20 mr-8 mb-8">
                            <div className='content logo pb-12'>
                                <Image src='/next.sv' alt="Image" width={100} height={100}></Image>
                            </div>
                            <div className="content text-[#949494]">Fixed Project Cost</div>
                            <div className="content heading pb-8 text-2xl ">Custom Design Project</div>
                            <div className="content description pb-10">Do you have a bigger project in mind and need a high-quality design service? First, we need to discuss your goals and define clear project scope. Then, we&apos;ll give you a fixed project cost proposal and we can schedule the work within 1 to 3 months</div>
                            <div className="content link hover:underline hover:underline-offset-8 cursor-pointer">Start a Project &rarr;</div>
                        </div>
                        <div className="card w-[50%] bg-[#161616] text-white p-16 pt-20 mr-8 mb-8">
                            <div className='content logo pb-12'>
                                <Image src='/next.sv' alt="Image" width={100} height={100}></Image>
                            </div>
                            <div className="content text-[#949494]">Fixed Project Cost</div>
                            <div className="content heading pb-8 text-2xl ">Sales Page Design</div>
                            <div className="content description pb-10">We specialize in designing high-conventing sales pages for digital products. We can help you design the entire page from scratch using our proven formulas.</div>
                            <div className="content link hover:underline hover:underline-offset-8 cursor-pointer">Start a Project &rarr;</div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className="card w-[50%] bg-[#161616] text-white p-16 pt-20 mr-8 mb-8">
                            <div className='content logo pb-12'>
                                <Image src='/next.sv' alt="Image" width={100} height={100}></Image>
                            </div>
                            <div className="content text-[#949494]">Monthly Retainer</div>
                            <div className="content heading pb-8 text-2xl ">Marketing Design</div>
                            <div className="content description pb-10">Need some marketing design help without hiring anyone full-time? This service is great for smaller ongoing design projects like landing pages, social media graphics, ads, banners, print design, and more. It&apos;s easy and flexible. You can start and cancel anytime. No long-term contracts</div>
                            <div className="content link hover:underline hover:underline-offset-8 cursor-pointer">Request Pricing &rarr;</div>
                        </div>
                        <div className="card w-[50%] bg-[#161616] text-white p-16 pt-20 mr-8 mb-8">
                            <div className='content logo pb-12'>
                                <Image src='/next.sv' alt="Image" width={100} height={100}></Image>
                            </div>
                            <div className="content text-[#949494]">Monthly Retainer</div>
                            <div className="content heading pb-8 text-2xl ">Agency Partnership</div>
                            <div className="content description pb-10">Tried of looking for reliable freelancers for you client projects? Partner up with our studio to get high-quality design work on regular basis. It&apos;s easy and flexible. You can start and cancel anytime. No long-term contracts.</div>
                            <div className="content link hover:underline hover:underline-offset-8 cursor-pointer">Request Pricing &rarr;</div>
                        </div>
                    </div >
                    <div className='flex'>
                        <div className="card"></div>
                        <div className="card"></div>
                    </div>
                </div >
            </div >
        </div >
    );
}

export default Services;
