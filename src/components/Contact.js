"use client";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Head from 'next/head';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hb53pgp', 'template_tiihc06', form.current, 'JK8tX538GPv2Pbj8J')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <div className='bg-black px-4 text-white'>
            <div className=' bg-[#0e0e0e]'>
                <div className='max-w-[1240px] m-auto p-4 py-24'>
                    <div className="box flex">
                        <div className='w-[30%] p-4 pl-24'>
                            <h3 className='text-3xl mb-5'>Contact Us</h3>
                            <p className='text-md mb-8 text-[#E2DFD2]'>Feel free to reach out to us with any question.</p>
                            <hr className='w-20' />
                            <p className='text-md text-[#FFF5EE] mt-8 mb-2'>Would you like to work with us?</p>
                            <p className='text-md text-[#FFF5EE] hover:underline hover:underline-offset-8 transition-transform cursor-pointer'>See our Services &#10132;</p>
                        </div>
                        <div className='w-[70%]'>
                            <form ref={form} onSubmit={sendEmail} className='max-w-[600px] m-auto'>
                                <p className='text-md mt-4'>Your Name</p>
                                <input className='bg-[#262626] outline-none p-3 w-full my-2' type="text" name='subject' />
                                <p className='text-md mt-4'>Email Address</p>
                                <input className='bg-[#262626] outline-none p-3 w-full my-2' type="text" name='subject' />
                                <p className='text-md mt-4 mb-2'>Message</p>
                                <textarea name="message" className='bg-[#262626] outline-none p-3 w-full' cols="30" rows="10"></textarea>
                                <button type='submit' value="send" className='hover:bg-white hover:text-black font-bold border p-3 w-36 mt-2 tracking-widest'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
