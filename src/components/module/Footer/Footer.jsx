import "./footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <section className="Footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12">
            <ul className="footer-items">
              <li className="footer-item">
                <h5 className="footer-title">منوی سریع</h5>
              </li>
              <li className="footer-item">
                <NavLink to="/" className="footer-item-link">
                  تازه رسیده ها
                </NavLink>
              </li>
              <li className="footer-item">
                <NavLink to="/" className="footer-item-link">
                  سبک زندگی
                </NavLink>
              </li>
              <li className="footer-item">
                <NavLink to="/" className="footer-item-link">
                  لهجه ها
                </NavLink>
              </li>
              <li className="footer-item">
                <NavLink to="/" className="footer-item-link">
                  جدوال
                </NavLink>
              </li>
              <li className="footer-item">
                <NavLink to="/" className="footer-item-link">
                  ناهار خوری
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="footer-newsletter">
              <h5 className="footer-title">خبرنامه</h5>
              <p className="footer-newsletter-paraph">
                بـرای دوره ویـدیـویی رایـگان و الهام بخش باغ شهری ما ثبت نام
                کنید
              </p>
              <form action="#" className="footer-newsletter-form">
                <input type="email" className="footer-newsletter-formInput" placeholder="ایمیل شما ..." />
                <button className="footer-newsletter-formBnt" type="submit">عضویت </button>
              </form>
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <ul className="footer-items">
              <li className="footer-item">
                <h5 className="footer-title">اطلاعات</h5>
              </li>
              <li className="footer-item">
                <NavLink to="/" className="footer-item-link">
                  سوالات متدوال
                </NavLink>
              </li>
              <li className="footer-item">
                <NavLink to="/" className="footer-item-link">
                  پیگیری سفارش
                </NavLink>
              </li>
              <li className="footer-item">
                <NavLink to="/" className="footer-item-link">
                  تحویل
                </NavLink>
              </li>
              <li className="footer-item">
                <NavLink to="/" className="footer-item-link">
                  با ما تماس بگیرید
                </NavLink>
              </li>
              <li className="footer-item">
                <NavLink to="/" className="footer-item-link">
                  برگشت
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
