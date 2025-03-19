import p1_img from './product_1.png';

interface Product {
  id: number;
  title: string;
  image: string;
  time: string;
  level: string;
}

const productData: Product[] = [
  {
    id: 1,
    title: "Family Game Night",
    image: p1_img,
    time: "3-5 minutes",
    level: "easy0",
  },
  {
    id: 2,
    title: "Family Game Night",
    image: p1_img,
    time: "3-5 minutes",
    level: "easy1",
  },
  {
    id: 3,
    title: "Family Game Night",
    image: p1_img,
    time: "3-5 minutes",
    level: "easy2",
  },
  {
    id: 4,
    title: "Family Game Night",
    image: p1_img,
    time: "3-5 minutes",
    level: "easy3",
  },
  {
    id: 5,
    title: "Family Game Night",
    image: p1_img,
    time: "3-5 minutes",
    level: "easy4",
  },
];

export default productData;
