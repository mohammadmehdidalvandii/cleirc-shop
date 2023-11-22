import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './TopBar.css'

function TopBar() {
    const [menuLang , setMenuLang] = useState('fa')
    const handlerMenuLang =(menuId)=>{
        setMenuLang(menuId)
    }
  return (
        <section className="topBar">
            <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <h6 className="topBar-title">به فروشگاه آنلاین ما خوش آمدید</h6>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="topBar-buttons">
                                        <button value="fa" className={`topBar-btn ${menuLang === 'fa' ?"topBar-btnActive":null}`} onClick={()=>handlerMenuLang("fa")}>فارسی </button>
                                        <button value="en" className={`topBar-btn ${menuLang === 'en' ?"topBar-btnActive":null}`} onClick={()=>handlerMenuLang("en")}>English</button>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="topBar-Links">
                                        <NavLink className="topBar_link">ورود </NavLink>
                                        |
                                        <NavLink className="topBar_link">ثبت نام</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default TopBar