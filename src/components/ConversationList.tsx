import React from "react";
import Slider from "react-slick";
import { Product } from "../types";
import data_products from "../assets/data";
import Item from "./Item";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ConversationList: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-primary bg-opacity-70 rounded-xl py-4">
      <div className="text-color ml-24 font-bold mb-4">Trang chủ</div>
      <Slider {...settings}>
        {data_products.map((product: Product, i: number) => (
          <div key={i} className="px-2">
            <Item
              id={product.id}
              author={product.author}
              like={product.like}
              major={product.major}
              topic={product.topic}
              vocab={product.vocab}
            />
          </div>
        ))}
      </Slider>
      <div className="mx-10 w-[60%] border-b border-gray-400 pt-5"></div>
      <div className="mx-6 text-color font-bold mb-4n pt-5">Hôm nay chúng ta nên làm gì?</div>
    </div>
  );
};

export default ConversationList;
