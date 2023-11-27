import { useState, useEffect } from 'react'
import './Navbar.css'
import {HiBars3BottomRight} from 'react-icons/hi2'
import { NavLink,useLocation } from 'react-router-dom'

function Navbar() {
    const [activeMenu , setActiveMenu] = useState(false)
    const [activeMenuNav ,SetActiveMenuNav]= useState('/')
    const handlerMenuOrder = ()=>{
        setActiveMenu(!activeMenu)
    }

    const location= useLocation()
    useEffect(()=>{
        const pathName = location.pathname
        SetActiveMenuNav(pathName)
        window.scroll(0,0)
    },[location])


  return (
    <section className="navBar">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="navBar-wrapper" onClick={handlerMenuOrder}>
                        <span className="navBar-menuIcon">
                            <HiBars3BottomRight/>
                        </span>
                        <span className="navBar-menuText">
                            همه دسته بندی 
                        </span>
                        <ul className="navBar-items" style={{display:activeMenu?"block":"none"}}>
                            <li className="navBar-item">
                                <NavLink to='/'className="navBar-item-Link">تازه رسیده</NavLink>
                            </li>
                            <li className="navBar-item">
                                <NavLink to='/'className="navBar-item-Link">حراج فوق العاده</NavLink>
                            </li>
                            <li className="navBar-item">
                                <NavLink to='/'className="navBar-item-Link">تجهیزات جانبی</NavLink>
                            </li>
                            <li className="navBar-item">
                                <NavLink to='/'className="navBar-item-Link">لهجه ها</NavLink>
                            </li>
                            <li className="navBar-item">
                                <NavLink to='/'className="navBar-item-Link">جداول</NavLink>
                            </li>
                            <li className="navBar-item">
                                <NavLink to='/'className="navBar-item-Link">ناهار خوری</NavLink>
                            </li>
                            <li className="navBar-item">
                                <NavLink to='/'className="navBar-item-Link">نورپردازی</NavLink>
                            </li>
                            <li className="navBar-item">
                                <NavLink to='/'className="navBar-item-Link">دفتر</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-9 col-md-6">
                    <ul className="navbar-menus">
                        <li className="navbar-menu">
                            <NavLink to='/' className={`navbar-menu-Link ${activeMenuNav === '/' ?'navbar-menu-LinkActive':null}`}>خانه</NavLink>
                        </li>
                        <li className="navbar-menu">
                            <NavLink to='/Product' className={`navbar-menu-Link ${activeMenuNav === '/Product' ?'navbar-menu-LinkActive':null}`}>محصولات</NavLink>
                        </li>
                        <li className="navbar-menu">
                            <NavLink to='/' className={`navbar-menu-Link ${activeMenuNav === '/article' ?'navbar-menu-LinkActive':null}`}>وبلاگ</NavLink>
                        </li>
                        <li className="navbar-menu">
                            <NavLink to='/' className={`navbar-menu-Link ${activeMenuNav === '/about' ?'navbar-menu-LinkActive':null}`}>درباه ما</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar