import React from "react";
import { useParams } from "react-router-dom";
import PronounceDetails from "../components/PronounceDetails";
import FoodDetails from "../components/FoodDetails";

const ConversationRouter: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  switch (id) {
    case "1":
      return <PronounceDetails />;
    case "2":
      return <FoodDetails />;
    default:
      return <div>Không tìm thấy trang cho ID: {id}</div>; // Trang mặc định cho id không xác định
  }
};

export default ConversationRouter;