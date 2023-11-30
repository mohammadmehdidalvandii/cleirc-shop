import './MainNav.css'
import {MdOutlineSearch ,MdOutlinePerson4} from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import {FiShoppingCart} from 'react-icons/fi'
function MainNav() {
  return (
    <section className="mainNav">
        <div className="container">
            <div className="row">
                <div className="col-lg-2 col-md-12">
                    <img src="/assets/images/logo 1.png" alt="logo" className="mainNav-imagesLogo" />
                </div>
                <div className="col-lg-8 col-md-12 d-flex ">
                    <div className="mainNav-searchBar">
                        <input type="text" placeholder='جستجو...'/>
                    <button className="mainNav-searchBar-btn">
                    <MdOutlineSearch className='mainNav-searchBar-icon'/>
                    </button>
                    </div>
                </div>
                <div className="col-lg-2 col-md-12">
                    <div className="mainNav-Links">
                        <NavLink to='/' className='mainNav-Link mainNav-Link-shopping'>
                            <FiShoppingCart className='mainNav-link-icon'/>
                            <span className="mainNav-Link-shopping-num">0</span>
                        </NavLink>
                        {/* <NavLink to='/' className='mainNav-Link'>
                            <MdOutlinePerson4 className='mainNav-link-icon'/>
                        </NavLink> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MainNav