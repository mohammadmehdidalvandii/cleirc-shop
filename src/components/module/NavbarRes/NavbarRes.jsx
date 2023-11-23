import { useState } from "react";
import "./navbarRes.css";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function NavbarRes() {
  const [orderMenu, setOrderMenu] = useState(false);
  const [itemMenu , setItemMenu] =useState(false)

  const handlerMenuOrder = () => {
    setOrderMenu(!orderMenu);
  };

  const handlerMenu=()=>{
    setItemMenu(!itemMenu)
  }
  return (
    <section className="navbarRes">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div
              className="navbarRes-menuOrder-wrapper"
              onClick={handlerMenuOrder}
            >
              {orderMenu ? (
                <span className="menuOrder-icon">
                <FaTimes />
              </span>
              ) : (
                <span className="menuOrder-icon">
                  <FaBarsStaggered />
                </span>
              )}
              <ul
                className="navbarRes-menuOrder-items"
                style={{ display: orderMenu ? "block" : "none" }}
              >
                <li className="navBarRes-menuOrder-item">
                  <NavLink to="/" className="navBarRes-order-item-Link">
                    تازه رسیده
                  </NavLink>
                </li>
                <li className="navBarRes-menuOrder-item">
                  <NavLink to="/" className="navBarRes-order-item-Link">
                    حراج فوق العاده
                  </NavLink>
                </li>
                <li className="navBarRes-menuOrder-item">
                  <NavLink to="/" className="navBarRes-order-item-Link">
                    تجهیزات جانبی
                  </NavLink>
                </li>
                <li className="navBarRes-menuOrder-item">
                  <NavLink to="/" className="navBarRes-order-item-Link">
                    لهجه ها
                  </NavLink>
                </li>
                <li className="navBarRes-menuOrder-item">
                  <NavLink to="/" className="navBarRes-order-item-Link">
                    جداول
                  </NavLink>
                </li>
                <li className="navBarRes-menuOrder-item">
                  <NavLink to="/" className="navBarRes-order-item-Link">
                    ناهار خوری
                  </NavLink>
                </li>
                <li className="navBarRes-menuOrder-item">
                  <NavLink to="/" className="navBarRes-order-item-Link">
                    نورپردازی
                  </NavLink>
                </li>
                <li className="navBarRes-menuOrder-item">
                  <NavLink to="/" className="navBarRes-order-item-Link">
                    دفتر
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="navbarRes-menu-wrapper" onClick={handlerMenu}>
                {itemMenu ?(
                        <span className="menuOrder-icon">
                        <FaTimes />
                      </span>
                ):(
                    <span className="menuOrder-icon">
                    <FaBarsStaggered />
                  </span>
                )}
                <ul
                className="navbarRes-menuOrder-items navbarRes-menu-items"
                style={{ display: itemMenu ? "block" : "none" }}
              >
                <li className="navBarRes-menuOrder-item">
                  <NavLink to="/" className="navBarRes-order-item-Link">
                    خانه
                  </NavLink>
                </li>
                <li className="navBarRes-menuOrder-item">
                  <NavLink to="/" className="navBarRes-order-item-Link">
                    محصولات
                  </NavLink>
                </li>
                <li className="navBarRes-menuOrder-item">
                  <NavLink to="/" className="navBarRes-order-item-Link">
                    وبلاگ
                  </NavLink>
                </li>
                <li className="navBarRes-menuOrder-item">
                  <NavLink to="/" className="navBarRes-order-item-Link">
                    درباه ما
                  </NavLink>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NavbarRes;
