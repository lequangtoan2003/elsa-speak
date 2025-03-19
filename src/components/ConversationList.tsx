import React from "react";
import Slider from "react-slick";
import { Product } from "../types";
import data_products from "../assets/data";
import Item from "./Item";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ConversationList: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    <div className="bg-primary bg-opacity-70 rounded-xl p-4">
      <div className="text-white font-bold mb-4">Elsa AI Conversation</div>
      <Slider {...settings}>
        {data_products.map((product: Product, i: number) => (
          <div key={i} className="px-2">
            <Item
              id={product.id}
              title={product.title}
              image={product.image}
              time={product.time}
              level={product.level}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ConversationList;
