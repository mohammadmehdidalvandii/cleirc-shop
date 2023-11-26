import "./HomeProduct.css";
import TitleCenter from "../../../module/TitleCenter/TitleCenter";
import ProductCard from "../../../module/ProductCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import db from "../../../../data/db.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function HomeProduct() {
  const [products] = useState(db.products);
  return (
    <section className="homeProduct">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <TitleCenter title="پیشنهاد ویژه" />
          </div>
        </div>

        <div className="row mt-5 mb-1">
          <Swiper
            slidesPerView={4}
            spaceBetween={50}
            loop={true}
            autoplay={{
              delay: 500,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            effect="Flip"
            modules={[Pagination]}
            className="mySwiper"
            style={{
              "--swiper-pagination-color": "var(--color-gray-1)",
              "--swiper-pagination-bullet-inactive-color": "#999999",
              // "--swiper-pagination-bullet-inactive-opacity": "2",
              "--swiper-pagination-bullet-size": "12px",
              "--swiper-pagination-bullet-horizontal-gap": "2px",
            }}
          >
            
            {products.slice(0,6).map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard {...product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="row mt-5">
          <div className="col-lg-6 col-md-12">
            <div className="homeProduct-banner">
              <img
                src="/assets/poster/banner-4.jpg"
                alt="banner"
                className="homeProduct-banner-img"
              />
              <div className="homeProduct-banner-content">
                <span className="homeProduct-banner-minTitle"></span>
                <h5 className="homeProduct-banner-bigTitle">
                  شایـد شما داشتـه باشیـد آن را به دست آورد
                </h5>
                <p className="homeProduct-banner-paraph">استفاده از کد: روحانی 25% تخفیف برای تمام اقلام لوازم جانبی !</p>
                <NavLink
                  to="/"
                  className="homeProduct-banner-link button_bg_white"
                >
                  اکنون خرید کنید
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="homeProduct-banner">
              <img
                src="/assets/poster/banner-3.jpg"
                alt="banner"
                className="homeProduct-banner-img"
              />
              <div className="homeProduct-banner-content">
                <span className="homeProduct-banner-minTitle">انتخاب کارکنان برتر</span>
                <h5 className="homeProduct-banner-bigTitle">بهتریـن مجموعـه</h5>
                <p className="homeProduct-banner-paraph">بینابینی میگنا شناسه اولیه نتیجه حکم</p>
                <NavLink
                  to="/"
                  className="homeProduct-banner-link button_bg_white"
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

export default HomeProduct;
