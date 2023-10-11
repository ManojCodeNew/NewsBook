import React, { Component } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default class navbar extends Component {
    render() {
        return (
            <div>
                <nav className="bg-gray-600 rounded-md hover:bg-gradient-to-r from-blue-600 to-red-900">
                    <div className="p-5">
                        <h2 className='text-white text-xl hover:text-black'><span className='text-yellow-400 font-bold text-2xl'>N</span>ews<span className='font-bold text-yellow-400 text-2xl hover:underline'>B</span>ook</h2>
                    </div>
                </nav>
                <div className='flex flex-row text-black' >
                    <NavLink key="Home" to='/' className="p-1 mr-4 hover:text-yellow-600 " >Home</NavLink >
                    <NavLink key="business" to='/business' className="p-1 mr-4  hover:text-yellow-600">Business</NavLink>
                    <NavLink key="Entertainment" to='/Entertainment' className="p-1 mr-4 hover:text-yellow-600">Entertainment</NavLink >
                    <NavLink key="General" to='/General' className="p-1 mr-4 hover:text-yellow-600">General</NavLink >
                    <NavLink key="Health" to='/Health' className="p-1 mr-4 hover:text-yellow-600">Health</NavLink >
                    <NavLink key="Science" to='/Science' className="p-1 mr-4 hover:text-yellow-600">Science</NavLink >
                    <NavLink key="sports" to='/Sports' className="p-1 mr-4 hover:text-yellow-600">Sports</NavLink >
                    <NavLink key="technology" to='/Technology' className="p-1 mr-4 hover:text-yellow-600">Technology</NavLink >
                </div>

                <div>
                    <Outlet />
                </div>
                <div className="relative inline-block text-left">
                    <div>
                        <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            Options
                        </button>
                    </div>
                    {/* <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1"> */}
                        {/* <div className="py-1" role="">
                            {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                            {/* <p className="text-gray-900 block px-4 py-2 text-sm" role="menuitem" tabIndex="1" id="menu-item-0">Account settings</p>
                            <p className="text-gray-900 block px-4 py-2 text-sm" role="menuitem" tabIndex="1" id="menu-item-1">Support</p>
                            <p className="text-gray-900 block px-4 py-2 text-sm" role="menuitem" tabIndex="1" id="menu-item-2">License</p> */}
                            {/* <form method="POST" action="#" role="none"> */}
                                {/* <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabIndex="-1" id="menu-item-3">Sign out</button> */}
                            {/* </form> */}
                        {/* </div> */} */
                    {/* </div> */}
                </div>
            </div>
        )
    }
}
