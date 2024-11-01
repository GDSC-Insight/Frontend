export interface DonationFormData {
  title: string;
  description: string;
  image: string;
  deadline: string;
  targetNum: number;
  devType?: string; // devType 속성
  isRecruiting: boolean; // isRecruiting 속성 추가
}

export const dummyData: DonationFormData[] = [
  {
    title: "기부 1",
    description: "이것은 기부 공고에 대한 설명입니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2024-11-31",
    targetNum: 100,
    isRecruiting: true, // 모집중
    devType: "multi-child", // 다자녀
  },
  {
    title: "기부 2",
    description: "이것은 다른 기부 공고의 설명입니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2024-11-15",
    targetNum: 50,
    isRecruiting: false, // 모집중 아님
    devType: "single-parent", // 한부모
  },
  {
    title: "기부 3",
    description: "세 번째 기부 공고입니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2024-11-30",
    targetNum: 75,
    isRecruiting: true, // 모집중
    devType: "multi-child", // 다자녀
  },
  {
    title: "기부 4",
    description: "네 번째 기부 공고입니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2025-02-28",
    targetNum: 30,
    isRecruiting: false, // 모집중 아님
    devType: "single-parent", // 한부모
  },
  {
    title: "기부 5",
    description: "다섯 번째 기부 공고입니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2024-11-15",
    targetNum: 20,
    isRecruiting: true, // 모집중
    devType: "multi-child", // 다자녀
  },
  {
    title: "기부 6",
    description: "여섯 번째 기부 공고입니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2025-03-31",
    targetNum: 40,
    isRecruiting: true, // 모집중
    devType: "single-parent", // 한부모
  },
  {
    title: "기부 7",
    description: "일곱 번째 기부 공고입니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2024-12-15",
    targetNum: 60,
    isRecruiting: false, // 모집중 아님
    devType: "multi-child", // 다자녀
  },
  {
    title: "기부 8",
    description: "여덟 번째 기부 공고입니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2025-04-01",
    targetNum: 80,
    isRecruiting: true, // 모집중
    devType: "single-parent", // 한부모
  },
  {
    title: "기부 9",
    description: "아홉 번째 기부 공고입니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2025-01-31",
    targetNum: 90,
    isRecruiting: false, // 모집중 아님
    devType: "multi-child", // 다자녀
  },
  {
    title: "기부 10",
    description: "열 번째 기부 공고입니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2024-11-05",
    targetNum: 25,
    isRecruiting: true, // 모집중
    devType: "single-parent", // 한부모
  },
  // ... (나머지 기부 공고들도 비슷하게 수정)
];
