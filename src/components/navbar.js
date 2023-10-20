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
                    <NavLink key="general" to='/general' className="p-1 mr-4 hover:text-yellow-600 " >Home</NavLink >
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
            </div>
        )
    }
}
