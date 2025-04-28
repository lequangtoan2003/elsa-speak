import React, { useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import data_products from "../assets/data";
import { Product } from "../types";
import Item from "./Item";
import leftIcon from "../assets/left-arrow.png";
import productData from "../assets/data";
import ItemTopics from "./ItemTopics";

const ListTopics = [
  { title: "Mới nhất", topic: "all" },
  { title: "Văn hoá", topic: "Văn hoá" },
  { title: "IELTS", topic: "IELTS" },
  { title: "Công việc", topic: "Công việc" },
  { title: "Âm nhạc và phim ảnh", topic: "Âm nhạc và phim ảnh" },
  { title: "Phát âm", topic: "Phát âm" },
];

const PronounceDetails: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>("all");
  const { id } = useParams<{ id: string }>();
  const product = data_products.find((p: Product) => p.id === parseInt(id || ""));

  // Sử dụng useMemo để tối ưu hóa lọc sản phẩm
  const filteredProducts = useMemo(
    () =>
      selectedTopic === "all"
        ? productData
        : productData.filter(
            (p: Product) =>
              p.topic && p.topic.toLowerCase() === selectedTopic.toLowerCase()
          ),
    [selectedTopic]
  );

  if (!product) {
    return <div className="p-4">Không tìm thấy sản phẩm với ID: {id}</div>;
  }

  return (
    <div className="bg-home h-screen overflow-y-auto scrollbar-hide mx-auto">
      <div className="py-[56px]">
        <div className="relative">
          <div className="absolute -top-4 left-14">
            <Link to="/">
              <img className="w-10 h-10" src={leftIcon} alt="Quay lại" />
            </Link>
          </div>

          <div className="px-[1px] flex justify-center items-center">
            <Item
              id={product.id}
              author={product.author}
              like={product.like}
              major={product.major}
              topic={product.topic}
              vocab={product.vocab}
              width="w-[80%]"
              height="h-[300px]"
              text="text-[30px]"
            />
          </div>
        </div>
      </div>
      <div className="mx-6 py-3 border-[1px] border-gray-400 rounded-lg mb-4">
        <div className="p-5">
          <div className="text-3xl font-bold">Duyệt qua</div>
          <div className="grid grid-cols-3 pt-4 gap-4">
            {ListTopics.map((item, index) => (
              <div
                key={index}
                className={`w-[300px] flex items-center justify-start p-3 rounded-xl transition-all duration-300 text-xl font-bold cursor-pointer
                  ${
                    selectedTopic === item.topic
                      ? "bg-yellow-400 text-color-hover shadow-md scale-105"
                      : "hover:bg-primary text-color hover:scale-105 hover:shadow-md"
                  }`}
                onClick={() => setSelectedTopic(item.topic)}
              >
                <div>{item.title}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center p-5">
          <div className="grid grid-cols-3 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item: Product) => (
                <ItemTopics
                  key={item.id}
                  id={item.id}
                  author={item.author}
                  major={item.major}
                  subject={item.subject}
                  topic={item.topic}
                  width="w-[100%]"
                  height="h-[200px]"
                  text="text-[20px]"
                />
              ))
            ) : (
              <div>Không có sản phẩm nào cho chủ đề này.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PronounceDetails;