import "./HomeBanner.css";
import { NavLink } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function HomeBanner() {
  return (
    <section className="homeBanner">
      <div className="container">
        <div className="row ">
          <div className="col-lg-8 col-md-12 mb-4">
            <div className="homeBanner-slider">
              <Swiper
                loop={true}
                autoplay={{
                  delay: 500,
                }}
                pagination={{
                  dynamicBullets: true,
                }}
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
                <SwiperSlide>
                  <div className="homeBanner-card">
                    <img
                      src="/assets/poster/slider-1.jpg"
                      alt="poster"
                      className="homeBanner-card-img"
                    />
                    <div className="homeBanner-card-content">
                      <span className="homeBanner-card-minTitle">
                        مبلمان زیبا را بردارید
                      </span>
                      <h4 className="homeBanner-card-bigTitle">
                        تا 25 % تخفیف اکنون سفارش دهید
                      </h4>
                      <span className="homeBanner-card-price">
                        1,700,000 تومان
                      </span>
                      <NavLink to="/" className="homeBanner-card-btn button_bg_white">
                        اکنون خرید کنید
                      </NavLink>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="homeBanner-card">
                    <img
                      src="/assets/poster/slider-2.jpg"
                      alt="poster"
                      className="homeBanner-card-img"
                    />
                    <div className="homeBanner-card-content">
                      <span className="homeBanner-card-minTitle">
                        فروش تا 40 % تخفیف !
                      </span>
                      <h4 className="homeBanner-card-bigTitle">
                        لوستر زیبای سقفی با رنگ بندی
                      </h4>
                      <span className="homeBanner-card-price">
                        2,500,000 تومان
                      </span>
                      <NavLink to="/" className="homeBanner-card-btn button_bg_white">
                        اکنون خرید کنید
                      </NavLink>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="homeBanner-card">
                    <img
                      src="/assets/poster/slider-3.jpg"
                      alt="poster"
                      className="homeBanner-card-img"
                    />
                    <div className="homeBanner-card-content">
                      <span className="homeBanner-card-minTitle">
                        بهترین مجموع روحانی
                      </span>
                      <h4 className="homeBanner-card-bigTitle">
                        مبلمان شکفت انگیزی در سایز بندی
                      </h4>
                      <span className="homeBanner-card-price">3,000,000 تومان</span>
                      <NavLink to="/" className="homeBanner-card-btn button_bg_white">
                        اکنون خرید کنید
                      </NavLink>
                    </div>
                  </div>
                </SwiperSlide>
                {/* <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
              </Swiper>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 ">
            <div className="row">
              <div className="col-12">
                <div className="bannerHome-card">
                  <img
                    src="/assets/poster/banner-1.jpg"
                    alt="banner"
                    className="bannerHome-card-img"
                  />
                  <div className="bannerHome-card-content">
                    <h5 className="bannerHome-card-title">
                      بهترین محصولات را انتخاب کنید
                    </h5>
                    <span className="bannerHome-card-productName">
                      آدیپیسینگ نخبه
                    </span>
                    <NavLink to="/" className="bannerHome-card-btn button_bg_white">
                      اکنون خرید کنید
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="bannerHome-card">
                  <img
                    src="/assets/poster/banner-2.jpg"
                    alt="banner"
                    className="bannerHome-card-img"
                  />
                  <div className="bannerHome-card-content">
                    <h5 className="bannerHome-card-title">
                      بهتـرین محصولات فروشگاه
                    </h5>
                    <span className="bannerHome-card-productName">ساعت رومیزی لورسوم</span>
                    <NavLink to="/" className="bannerHome-card-btn button_bg_white">
                      اکنون خرید کنید
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;
