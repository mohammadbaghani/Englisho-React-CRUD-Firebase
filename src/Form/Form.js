import React, { useState, useEffect } from "react";
import "./Form.css";
import Button from 'react-bootstrap/Button';
import swal from "sweetalert";
import Users from "../Users/Users";
import Header from '../components/Header';
export default function Form() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [users, setUsers] = useState([])
    const registerHandler = event => {
        event.preventDefault()
        let userInfo = {
            firstName,
            lastName,
            email
        }
        fetch('https://data-storage-ddab9-default-rtdb.firebaseio.com/users.json', {
            method: 'POST',
            body: JSON.stringify(userInfo)
        }).then(response => console.log(response))
    }
    return (<>
        <Header />
        <div className="register-body"  >
            <li className='moshakhasat  title-info'>
                ثبت نام کاربر
            </li>
            <li className='moshakhasat'>          
                زبان آموز گرامی
                با ثبت نام در سایت از مزایای آن بهره مند شوید
            </li>
            <li className='moshakhasat'>
       
                با گزینه های حذف و ویرایش حساب خود را حذف کرده یا ویرایش نمایید
            </li>
            <li className='moshakhasat'>
                 برای مشاهده مشخصات خود در جدول زیر , فیلترشکن را روشن نمایید
            
            </li>
            <div className="form-container">
                <form className="register-form" autoComplete="on" onSubmit={registerHandler}>
                    <input
                        id="first-name"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                        className="form-field"
                        type="text"
                        placeholder="نام کاربری"
                  />

                    <input
                        id="last-name"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                        className="form-field"
                        type="password"
                        placeholder="رمز عبور" />
                    <input
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="form-field"
                        type="email"
                        placeholder="ایمیل" />
                    <Button variant="outline-primary" className="form-enter" type="submit" onClick={() => swal({
                        title: "حساب  کاربری شما ساخته شد",
                        icon: "success",
                        buttons: "باشه !",
                    })}>      ثبت نام</Button>
                </form>
            </div>
            <Users />
        </div >
    </>
    )
}