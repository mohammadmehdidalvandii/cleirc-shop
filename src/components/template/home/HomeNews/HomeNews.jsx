
import TitleCenter from '../../../module/TitleCenter/TitleCenter'
import NewsCard from '../NewsCard/NewsCard'
import './HomeNews.css'
import db from '../../../../data/db.json'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useState } from 'react';

function HomeNews() {
    const [theNews , serTheNews] =useState(db.TheNews)
  return (
    <section className="homeNews">
        <div className="container">
            <div className="row ">
                <div className="col-12">
                    <TitleCenter
                        title='آخرین اخبار'
                    />
                </div>
                <div className="row mt-5" >
                <Swiper
            slidesPerView={3}
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
            {theNews.map(news=>(
                <SwiperSlide  key={news.id}>
                    <NewsCard {...news}/>
              </SwiperSlide>
            ))}
              
          </Swiper>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeNews