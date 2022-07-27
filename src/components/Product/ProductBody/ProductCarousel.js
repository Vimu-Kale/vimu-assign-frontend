import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css";
import "./ProductCarousel.css";
import "swiper/css/autoplay";

const ProductCarousel = ({ product }) => {
  const { ProductImages } = product;
  return (
    <div className="swiperContainer">
      <Swiper
        modules={[EffectFade, Pagination, Autoplay]}
        autoplay
        effect={"fade"}
        pagination={true}
        speed={100}
        slidesPerView={1}
        loop
        className="mySwiper"
      >
        {ProductImages &&
          ProductImages.map((image, i) => {
            return (
              <SwiperSlide key={i} className="swiperSlide">
                <img src={image} alt="" />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
