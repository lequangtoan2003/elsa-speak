import p1_img from './product_5.jpg';

interface Product {
  id: number;
  title: string;
  image: string;
  time: string;
  level: string;
  major: string;
  topic: string;
  author: string;
  vocab: string;
  like: string;
}

const productData: Product[] = [
  {
    id: 1,
    title: "Family Game Night",
    image: p1_img,
    time: "3-5 minutes",
    level: "easy0",
    major: "ielts",
    topic: "phát âm",
    author: "bởi quangtoan2003",
    vocab: "32 từ vựng",
    like: "33.7k"
  },
  {
    id: 2,
    title: "Family Game Night",
    image: p1_img,
    time: "3-5 minutes",
    level: "easy1",
    major: "ielts",
    topic: "phát âm",
    author: "bởi quangtoan2003",
    vocab: "32 từ vựng",
    like: "33.7k"
  },
  {
    id: 3,
    title: "Family Game Night",
    image: p1_img,
    time: "3-5 minutes",
    level: "easy2",
    major: "ielts",
    topic: "phát âm",
    author: "bởi quangtoan2003",
    vocab: "32 từ vựng",
    like: "33.7k"
  },
  {
    id: 4,
    title: "Family Game Night",
    image: p1_img,
    time: "3-5 minutes",
    level: "easy3",
    major: "ielts",
    topic: "phát âm",
    author: "bởi quangtoan2003",
    vocab: "32 từ vựng",
    like: "33.7k"
  },
  {
    id: 5,
    title: "Family Game Night",
    image: p1_img,
    time: "3-5 minutes",
    level: "easy4",
    major: "ielts",
    topic: "phát âm",
    author: "bởi quangtoan2003",
    vocab: "32 từ vựng",
    like: "33.7k"
  },
];

export default productData;
