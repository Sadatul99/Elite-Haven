import { Navigation, Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



import img1 from '../../../public/pool-with-hammock-area.jpg'
import img2 from '../../../public/3d-rendering-abstract-building.jpg'
import img3 from '../../../public/3d-rendering-house-model.jpg'


const Banner = () => {


    return (
        <div>
            <div className="bg-base-200 p-20  rounded-xl ">
                <div className="flex items-center justify-center">
                    <div className="w-1/2  flex items-start justify-center flex-col mr-6">
                        <h1 className="text-5xl text-[#ebcfa7] font-bold">Find Your Dream Home with Elite Haven</h1>
                        <p className="py-6">
                            Elite Haven is a leading real estate company dedicated to helping you find your dream home. Our team of experts is committed to providing top-notch services to meet your real estate needs.
                        </p>
                        <button className="btn btn-outline text-lg px-7  text-[#ebcfa7] shadow-[#ebcfa7] shadow-md hover:bg-[#c49452] hover:text-white">Our Services</button>
                    </div>
                    {/* slider */}
                    <div className="w-1/2 ">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={3}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            
                        >
                            <SwiperSlide><img className='h-[400px] w-[600px]' src={img1} alt="" /></SwiperSlide>
                            <SwiperSlide><img className='h-[400px] w-[600px]' src={img2} alt="" /></SwiperSlide>
                            <SwiperSlide><img className='h-[400px] w-[600px]' src={img3} alt="" /></SwiperSlide>
                            
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;