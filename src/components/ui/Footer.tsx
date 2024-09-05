import React from 'react'

export default function Footer() {
    return (
        <div className='w-full p-2 place-content-center gap-4 md:p-3 xl:p-4 h-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
            <div className='col-span-1 w-full flex flex-col justify-center items-center'>
                <div className='text-xl font-bold'>About us</div>
                <p className='text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque, incidunt. 
                    The Next.js framework for web development.


                </p>
            </div>
            <div className='col-span-1 w-full flex flex-col  items-center'>
                <div className='text-xl font-bold'>Features</div>
                <ul className='list-disc text-gray-400'>
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                </ul>
            </div>
            <div className='col-span-1 w-full flex flex-col  items-center'>
                <div className='text-xl font-bold'>Courses</div>
                <ul className='list-disc text-gray-400'>
                    <li>Course 1</li>
                    <li>Course 2</li>
                    <li>Course 3</li>
                </ul>
            </div>
            <div className='col-span-1'>
                <div className='text-xl font-bold'>Contact us</div>
                <ul className='list-disc text-gray-400'>
                    <li>Phone: 123-456-7890</li>
                    <li>Email: 0RQr7@example.com</li>
                </ul>
            </div>
        </div>
    )
}
