'use client';
import React from 'react';
import Card from './Card';

function Projects() {

    const scrollLeft = () => {
        document.getElementById("content").scrollLeft -= 200;
    }
    const scrollRight = () => {
        document.getElementById("content").scrollLeft += 200;
        // document.getElementById{ "content" }.scrollLeft += 200;
    }

    return (
        <div className='relative p-24'>
            <div className='absolute right-0 top-5'>
                <button onClick={scrollLeft} className='p-2 m-4 bg-red-400'>left</button>
                <button onClick={scrollRight} className='p-2 m-4 bg-red-400'>right</button>
            </div>
            <div id='content' className='carousel flex items-center justify-start overflow-x-auto scroll-smooth'>
                <div><Card /></div>
                <div><Card /></div>
                <div><Card /></div>
                <div><Card /></div>
                <div><Card /></div>
            </div>
        </div>
    );
}

export default Projects;
