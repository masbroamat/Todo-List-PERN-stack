import React from 'react'
import '../App.css'

export const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full '>
        <div className="flex w-5/6 mx-auto items-center justify-between py-5">
            <h2 className='text-xl font-inter font-normal text-white'>masbroamat</h2>
            <button
            type='button'
            onClick={() => {window.open('https://github.com/adrianhajdin')}}
            className='black_btn bg-emerald-700 hover:bg-emerald-900'
            >
            Github
            </button>
        </div>
    </nav>
  )
}
