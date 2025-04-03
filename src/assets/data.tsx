import p1_img from './product_5.jpg';
import p2_img from './planet1.png';

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
  transcription: string;
  lessons: string;
  image2?: string;
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
    like: "33.7k",
    transcription: "/i/, /I/",
    lessons: "0/14 Bài học",
    image2: p2_img
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
    like: "33.7k",
    transcription: "/i/, /I/",
    lessons: "0/14 Bài học",
    image2: p2_img
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
    like: "33.7k",
    transcription: "/i/, /I/",
    lessons: "0/14 Bài học",
    image2: p2_img
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
    like: "33.7k",
    transcription: "/i/, /I/",
    lessons: "0/14 Bài học",
    image2: p2_img
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
    like: "33.7k",
    transcription: "/i/, /I/",
    lessons: "0/14 Bài học",
    image2: p2_img
  },
];

export default productData;
