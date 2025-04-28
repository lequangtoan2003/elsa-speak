import p1_img from './product_5.jpg';
import p2_img from './planet1.png';

interface Product {
  id: number;
  title: string;
  image: string;
  time: string;
  level: string;
  subject: string;
  major: string;
  topic: string;
  author: string;
  vocab: string;
  like: string;
  transcription: string;
  lessons: string;
  image2?: string;
  width?: string;
  height?: string;
  text?: string; // Prop để truyền class Tailwind cho chiều rộng (ví dụ: w-[320px])
  
}

const productData: Product[] = [
  {
    id: 1,
    title: "Family Game Night",
    image: p1_img,
    time: "3-5 minutes",
    level: "easy0",
    subject: "Cụm từ",
    major: "ielts",
    topic: "Phát âm",
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
    subject: "Cụm từ",
    major: "ielts",
    topic: "Văn hoá",
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
    subject: "Cụm từ",
    major: "ielts",
    topic: "IELTS",
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
    subject: "Cụm từ",
    major: "ielts",
    topic: "Công việc",
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
    subject: "Cụm từ",
    major: "ielts",
    topic: "Âm nhạc và phim ảnh",
    author: "bởi quangtoan2003",
    vocab: "32 từ vựng",
    like: "33.7k",
    transcription: "/i/, /I/",
    lessons: "0/14 Bài học",
    image2: p2_img
  },
  {
    id: 6,
    title: "Family Game Night",
    image: p1_img,
    time: "3-5 minutes",
    level: "easy4",
    subject: "Cụm từ",
    major: "ielts",
    topic: "Âm nhạc và phim ảnh",
    author: "bởi quangtoan2003",
    vocab: "32 từ vựng",
    like: "33.7k",
    transcription: "/i/, /I/",
    lessons: "0/14 Bài học",
    image2: p2_img
  },
];

export default productData;
