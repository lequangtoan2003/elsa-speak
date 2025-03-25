import { Product } from "../types";
import data_products from "../assets/data";
import ItemHome from "./ItemHome";

const  ConversationListHome = () => {
    return (
        <div className="flex flex-col gap-4">
             {data_products.map((product: Product, i: number) => (
          <div key={i} className="px-2">
            <ItemHome
              id={product.id}
              title={product.title}
              image={product.image}
              time={product.time}
              level={product.level}
            />
          </div>
        ))}
        </div>
    );
};
export default ConversationListHome;    