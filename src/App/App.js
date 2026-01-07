import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Courses from '../components/Courses'
import MainCourse from '../components/MainCourse'

import Select from '../components/Select/Select'
import Shop from '../Shop/Shop'
import TodoList from '../Todolist/TodoList';

import Main from '../Main'
import Slider from '../Slider/Slider';
import Form from '../Form/Form';
import Users from "../Users/Users";
import './App.css';
import { useLocation } from "react-router-dom";
import Navside from '../Navside/Navside';
export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div >
        <Routes>
          <Route path='/دوره ها' element={<Courses />} />
          <Route path='/e/:courseID' element={<MainCourse />} />
          <Route path='/لیست انجام وظایف' element={<Select />} />
          <Route path='/فروشگاه' element={<Shop />} />
          <Route path='/چک لیست' element={<TodoList />} />
          <Route path='/لیست دوره ها' element={<Select />} />
          <Route path='/' element={<Main />} />
          <Route path='/ثبت نام' element={<Form />} />
          <Route path='/m' element={<Users />} />
          <Route path='/فیلم های آموزشی' element={<Slider />} />
        </Routes>
        <div className="hide-navside">
          <Navside />
        </div>
      </div>
    </>
  )
}
