import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
// import 'swiper/modules/pagination/pagination.min.css';
// import 'swiper/modules/scrollbar/scrollbar.min.css';

import "./Swiper.scss";

const SwiperContainer = ({ children }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView='auto'
            navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
        >
            {children}
        </Swiper>
    );
};

export default SwiperContainer;