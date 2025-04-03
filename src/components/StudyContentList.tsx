import React from "react";
import { Product } from "../types";
import data_products from "../assets/data";
import StudyItem from "./ItemStudy";

const StudyContentList: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      {data_products.map((product: Product, index: number) => (
        <div key={index} className="px-2">
          <StudyItem
            id={product.id}
            transcription={product.transcription} 
            lessons={product.lessons}            
            image2={product.image2}                
          />
        </div>
      ))}
    </div>
  );
};

export default StudyContentList;
