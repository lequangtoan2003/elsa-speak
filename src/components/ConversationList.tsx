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
    speed: 800, // Tăng thời gian chuyển đổi để hiệu ứng rõ hơn
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200, // Chuyển slide mỗi 1 giây
    cssEase: "cubic-bezier(0.3, 0, 0.0, 0.8)", // Hiệu ứng nhanh lúc đầu, chậm lúc sau
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
    <div className="bg-primary bg-opacity-70 rounded-xl">
      <div className="text-color ml-24 font-bold mb-4">Trang chủ</div>
      <div className="flex flex-col justify-center">
        <Slider className="" {...settings}>
          {data_products.map((product: Product, i: number) => (
            <div key={i} className="px-[1px]">
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
      </div>
      <div className="mx-12 w-[63%] border-b border-gray-400 pt-5"></div>
      <div className="mx-auto text-color text-xl font-bold mb-4 p-4">
        Hôm nay chúng ta nên làm gì?
      </div>
    </div>
  );
};

export default ConversationList;