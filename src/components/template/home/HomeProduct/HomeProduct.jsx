import "./HomeProduct.css";
import TitleCenter from "../../../module/TitleCenter/TitleCenter";
import ProductCard from "../../../module/ProductCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
// import db from "../../../../data/db.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";

import productContext from '../../../../contexts/productContext'
function HomeProduct() {
  const productData = useContext(productContext)
  // const [products] = useState(db.products);
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
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            // 1100: {
            //   slidesPerView: 3,
            //   spaceBetween: 50,
            // },
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
            

            {
              productData.products.slice(0,6).map(product=>(
                <SwiperSlide key={product.id}>
                <ProductCard {...product}
                     addToBasket={()=>{
                      swal({title:"محصول اضافه شد", icon:"success", buttons:"باشه"})
                      let newUserBasket = {
                          id:product.id,
                          name:product.name,
                          img:product.img,
                          price: product.price,
                          count: product.count
                      }
                      productData.setUserBasket((prevProducts)=>[...prevProducts,newUserBasket])
                    }}
                />
              </SwiperSlide>
              ))
            }
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
