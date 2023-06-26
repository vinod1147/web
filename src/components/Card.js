import React from 'react';
import Image from 'next/image';

function Card() {
    return (
        <div>
            <div className="card w-[300px] m-4">
                <div className="top">
                    <Image src='/sample.jpeg' height={100} width={100} alt='card-image'></Image >
                </div>
                <div className="bottom">
                    <div className="title">Iphone 14</div>
                    <div className="category">Mobile</div>
                    <div className="price">100</div>
                </div>
            </div>
        </div>
    );
}

export default Card;
