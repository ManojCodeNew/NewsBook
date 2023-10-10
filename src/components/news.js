import React, { Component } from 'react'
// import Spinner from './Spinner';
class welcome extends Component{

render(){
let {urlImage,title,description,url,date,source_name}= this.props;
let notfoundimg="https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png";
    return(
        <>
        <div className='max-w-sm mx-auto bg-white rounded-lg shadow-md m-2' >
                <div className='w-70 h-100 bg-gray-200 p-4 m-4 '>
                    <div className='bg-gradient-to-r from-red-600 to-red-900 hover:from-black hover:to-black text-md'>
                    <h2 className='pl-3 font-semibold text-white'>  {source_name} </h2>
                    </div>
                    <img src={!urlImage?notfoundimg:urlImage} className="w-full h-48" alt='Loading...'/>
                    <div className="p-2 m-1">
                        <h1 className=""><strong>{title}</strong></h1>
                        <p className=" m-2 ">{description}...</p>
                        <p className='pb-3 text-gray-600'><small>By {!source_name?"Unknown":source_name} on {new Date(date).toGMTString()}</small></p>
                        <a href={url} className="bg-gray-600 text-white p-2 rounded mb-9 hover:bg-gradient-to-r from-blue-600 to-red-900 hover:rounded-2xl">Read More</a>
                    </div>
            </div>
        </div>
    </>
    ) 
}
}
export default welcome;