import { Navbar, Container, Nav } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import './Navbar.css'
import { useNavigate, Outlet } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
    let navigate = useNavigate()
    return (
        <div>
            <Container className='container-valed-navbar' >
                <Navbar className='valed-navbar' >
                    <Nav className='nav'>
                        <img className='logoimage-header logoimage' src="easli.png" href="/" onClick={() => {
              navigate('/')
            }}>
                        </img>
                        <figure className='shop-count z-i'>
                            <img class="shop-count-image" src="carty.png" />
                            سبد خرید
                            <span className='shop-count-count' >
                                0
                            </span>
                        </figure>
                        <button className='button-register' onClick={() => {
                            navigate('/ثبت نام')
                        }}>
                            ورود / ثبت نام
                            <img class="userimage" />
                        </button>
                        <ul class="valed-ul">
                            <Link className='navbar-item  tr' to="/">
                                <li class=" parentnav ">
                                    دوره ها<MdKeyboardArrowDown class="arrow" />
                                    <ul class="inside-nav">
                                        <div class="left-nav">
                                            <Link className=' secondy underline-left tis'>
                

                                                دوره های عمومی
                                            </Link>


                                            <Link className='secondy  left-ch' to={`/e/${5}`}>
                                            <FontAwesomeIcon className='layer' icon={faLayerGroup} />
                                            بزرگسالان

                                       
                                            </Link>
                    
                                            <Link className=' secondy   left-ch' to={`/e/${6}`}>
                                            <FontAwesomeIcon className='layer' icon={faLayerGroup} />
                                            نوجوانان
                                              
                                            </Link>
                                    
                                            <Link className='secondy left-ch' to={`/e/${4}`}>
                                            <FontAwesomeIcon className='layer' icon={faLayerGroup} />
                                                کودکان
                                             
                                            </Link>
                                        </div>
                                        <div class="right-nav">
                                            <Link className=' secondy taf underline' >

                                                دوره های تخصصی
                                            </Link>

                                            <Link className=' secondy eng ' to={`/e/${3}`}>
                                            <FontAwesomeIcon className='layer' icon={faLayerGroup} />

                                                Speeking</Link>
                                 
                                            <Link className=' secondy eng' to={`/e/${1}`}>
                                            <FontAwesomeIcon className='layer' icon={faLayerGroup} />
                                            Tofel

                          
                                            </Link>
                                            <Link className='secondy eng' to={`/e/${2}`}>    
                                             <FontAwesomeIcon className='layer' icon={faLayerGroup} />
                                            
                                            
                                            TTC </Link>
                                        </div>
                                    </ul>
                                </li>

                            </Link>

                        </ul>
                        <Link className='navbar-item navf' to="/">خانه
                            <Link className='child-navy ' to="/">
                            </Link>
                        </Link>
                        <Link className='navbar-item online-shop' to="/فروشگاه" >
                            <Link className='child-navy navone' to="/">
                            </Link>
                            خرید آنلاین
                        </Link>

                        <Link className='navbar-item ' to="/چک لیست" >چک لیست
                            <Link className='child-navy navcheck' to="/">
                            </Link></Link>

                        <Link className='navbar-item ' to="/دوره ها" > دپارتمان ها
                            <Link className='child-navy navcourses' to="/">
                            </Link></Link>
                    </Nav>
                </Navbar>
            </Container>
        </div>
    )
}






























