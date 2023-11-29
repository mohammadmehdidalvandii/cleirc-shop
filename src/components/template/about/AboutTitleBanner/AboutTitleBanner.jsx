import { NavLink } from "react-router-dom";
import "./AboutTitleBanner.css";

function AboutTitleBanner() {
  return (
    <section className="aboutTitleBanner">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h5 className="about-title">دربارما</h5>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <div className="about-banner-content">
              <img
                src="/assets/poster/banner-5.jpg"
                alt="about banner"
                className="about-banner-img"
              />
              <div className="about-content">
                <h6 className="about-content-title">
                  مجمـوعـه جـدیـد بـرای شمـا
                </h6>
                <p className="about-content-description">
                    جدیدترین محصولات را درست بخرید
                    ما لوازم خانگی برتر داریم 
                </p>
                <NavLink
                  to="/"
                  className="about-content-btn button_bg_white"
                >
                    اکنون خرید کنید
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutTitleBanner;
