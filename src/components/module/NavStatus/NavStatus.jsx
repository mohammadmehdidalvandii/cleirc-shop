import './NavStatus.css'
import { NavLink } from 'react-router-dom'
import {MdOutlineKeyboardDoubleArrowLeft} from 'react-icons/md'
function NavStatus() {
  return (
    <section className="navStatus">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="navStatus-wrapper">
                        <NavLink to='/' className='navStatus-link'>صفحه اصلی</NavLink>
                        <span className="navStatus-icon">
                            <MdOutlineKeyboardDoubleArrowLeft/>
                        </span>
                        <h6 className="navStatus-status">محصولات</h6>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NavStatus