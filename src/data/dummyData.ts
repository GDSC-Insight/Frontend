export interface DonationFormData {
  title: string;
  description: string;
  image: string;
  deadline: string;
  targetNum: number;
  devType?: string;
  isRecruiting: boolean;
  incomeBracket: string;
}

export const dummyData: DonationFormData[] = [
  {
    title: "기부 1",
    description: "이것은 기부 공고에 대한 설명입니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2024-11-31",
    targetNum: 100,
    isRecruiting: true,
    devType: "multi-child",
    incomeBracket: "5th",
  },
  {
    title: "기부 2",
    description: "이것은 다른 기부 공고의 설명입니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2024-11-15",
    targetNum: 50,
    isRecruiting: false,
    devType: "single-parent",
    incomeBracket: "3rd",
  },
  {
    title: "기부 3",
    description: "세 번째 기부 공고입니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2024-11-20",
    targetNum: 30,
    isRecruiting: true,
    devType: "multi-child",
    incomeBracket: "2nd",
  },
  {
    title: "기부 4",
    description: "네 번째 기부 공고입니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2024-11-10",
    targetNum: 40,
    isRecruiting: true,
    devType: "single-parent",
    incomeBracket: "4th",
  },
  {
    title: "기부 5",
    description: "다섯 번째 기부 공고입니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2024-11-25",
    targetNum: 60,
    isRecruiting: true,
    devType: "multi-child",
    incomeBracket: "6th",
  },
  {
    title: "기부 6",
    description: "여섯 번째 기부 공고입니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2024-11-12",
    targetNum: 20,
    isRecruiting: false,
    devType: "single-parent",
    incomeBracket: "7th",
  },
  {
    title: "기부 7",
    description: "일곱 번째 기부 공고입니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2024-11-18",
    targetNum: 15,
    isRecruiting: true,
    devType: "multi-child",
    incomeBracket: "1st",
  },
  {
    title: "기부 8",
    description: "여덟 번째 기부 공고입니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2024-11-30",
    targetNum: 35,
    isRecruiting: true,
    devType: "single-parent",
    incomeBracket: "8th",
  },
  {
    title: "기부 9",
    description: "아홉 번째 기부 공고입니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2024-11-28",
    targetNum: 45,
    isRecruiting: false,
    devType: "multi-child",
    incomeBracket: "9th",
  },
  {
    title: "기부 10",
    description: "열 번째 기부 공고입니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2024-11-05",
    targetNum: 25,
    isRecruiting: true,
    devType: "single-parent",
    incomeBracket: "1st",
  },
  {
    title: "기부 11",
    description: "열한 번째 기부 공고입니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2024-11-22",
    targetNum: 70,
    isRecruiting: true,
    devType: "multi-child",
    incomeBracket: "10th",
  },
  {
    title: "기부 12",
    description:
      "열두 번째 기부 공고입니다.열두 번째 기부 공고입니다.열두 번째 기부 공고입니다.열두 번째 기부 공고입니다.열두 번째 기부 공고입니다.열두 번째 기부 공고입니다.열두 번째 기부 공고입니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2024-11-29",
    targetNum: 80,
    isRecruiting: false,
    devType: "single-parent",
    incomeBracket: "2nd",
  },
];
