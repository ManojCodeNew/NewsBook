import React, { Component } from 'react'
import loading from "./Spinner-5.gif";

export default class Spinner extends Component {
render() {
    return (
    <div className='flex flex-row justify-center m-3'>
        <img src={loading} alt='loading...' ></img>
    </div>
    )
}
}
