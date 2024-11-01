export interface DonationFormData {
  title: string;
  description: string;
  image: string;
  deadline: string;
  targetNum: number;
}

export const dummyData: DonationFormData[] = [
  {
    title: "기부 1",
    description: "이것은 기부 공고에 대한 설명입니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2024-12-31",
    targetNum: 100,
  },
  {
    title: "기부 2",
    description: "이것은 다른 기부 공고의 설명입니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2025-01-15",
    targetNum: 50,
  },
  {
    title: "기부 3",
    description: "세 번째 기부 공고입니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2024-11-30",
    targetNum: 75,
  },
  {
    title: "기부 4",
    description: "네 번째 기부 공고입니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2025-02-28",
    targetNum: 30,
  },
  {
    title: "기부 5",
    description: "다섯 번째 기부 공고입니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2024-10-15",
    targetNum: 20,
  },
  {
    title: "기부 6",
    description: "여섯 번째 기부 공고입니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2025-03-31",
    targetNum: 40,
  },
  {
    title: "기부 7",
    description: "일곱 번째 기부 공고입니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2024-12-15",
    targetNum: 60,
  },
  {
    title: "기부 8",
    description: "여덟 번째 기부 공고입니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2025-04-01",
    targetNum: 80,
  },
  {
    title: "기부 9",
    description: "아홉 번째 기부 공고입니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2025-01-31",
    targetNum: 90,
  },
  {
    title: "기부 10",
    description: "열 번째 기부 공고입니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2024-11-01",
    targetNum: 25,
  },
];
