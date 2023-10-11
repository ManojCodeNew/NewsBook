import React, { Component } from 'react'
import Navbar from './components/navbar'
import Mainarea from './components/Mainarea'
// import LoadingBar from 'react-top-loading-bar'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

  const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar/>}>
      <Route path='/' element={<Mainarea key='general' category="general"/>}/>
      <Route path='/:General' element={<Mainarea key='general' category="General"/>} />
      <Route path='/Business' element={<Mainarea key='Business' category="Business"/>} />
      <Route path='/Entertainment' element={<Mainarea key='Entertainment' category="Entertainment"/>} />
      <Route path='/Health' element={<Mainarea key='Health' category="Health"/>} />
      <Route path='/Science' element={<Mainarea key='Science' category="Science"/>} />
      <Route path='/Sports' element={<Mainarea key='Sports' category="Sports"/>} />
      <Route path='/Technology' element={<Mainarea  key='Technology' category="Technology"/>} />
    </Route>
  )
)

  
export default class App extends Component {
// LoadingBar=this.props.setProgress;
  render() {
    return (
        <div>
      {/* <LoadingBar/> */}
        <RouterProvider router={router}/>
      </div>
    )
  }
}
