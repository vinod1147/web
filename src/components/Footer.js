import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import '../app/globals.css'

function Footer() {
    return (
        <div>
            <footer className="bg-black">
                <div className="top flex text-white px-20">
                    <div className="one w-1/3">
                        <div className="p-10 m-8">Logo</div>
                    </div>
                    <div className="two w-1/3">
                        <div className="p-10 m-8"><p className='cursor-pointer text-[#e3eaec] hover:text-white transition-all tracking-wider text-[15px]'>©2023 • Vinod Vyavhare</p></div>
                    </div>
                    <div className="three w-1/3">
                        <div className="p-10 m-8 flex justify-end">
                            <FontAwesomeIcon icon={faTwitter} className='icon icon1 hover:cursor-pointer hover:text-white' color='#e3eaec' />
                            <FontAwesomeIcon icon={faInstagram} className='icon2 icon hover:cursor-pointer hover:text-white' color='#e3eaec' />
                            <FontAwesomeIcon icon={faFacebook} className='icon3 icon hover:cursor-pointer hover:text-white' color='#e3eaec' />
                        </div>
                    </div>
                </div>
                <div className='line p-[1px] mx-40 bg-zinc-800'></div>
                <div className="bg-black text-white p-24 text-center">
                    <p className='text-4xl'>
                        &quot;Simplicity is the ultimate sophistication&quot;
                    </p>
                    <p className='mt-5 text-gray-300'>
                        - Leonardo da Vinci
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
