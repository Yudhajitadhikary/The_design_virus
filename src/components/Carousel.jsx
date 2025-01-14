'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { testimony } from '@/constant';
const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        arrows:false,
        autoplay: true,
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1/5,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h2 className="text-2xl font-bold text-center mb-4">Responsive Carousel</h2>
            <Slider {...settings}>
                {testimony.map((item) => (
                    <div key={item.name} className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="flex items-center p-5">
                            <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-full" />
                            </div>
                            <div className="ml-4">
                                <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                                <p className="mt-2 text-gray-600 text-base">
                                    {item.comment}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;