export interface DonationFormData {
  title: string;
  description: string;
  image: string;
  deadline: string;
  targetNum: number;
  devType?: string; // devType 속성
  isRecruiting: boolean; // isRecruiting 속성 추가
  incomeBracket: string; // 추가된 incomeBracket 속성
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
    incomeBracket: "5th", // 소득분위 5분위
  },
  {
    title: "기부 2",
    description: "이것은 다른 기부 공고의 설명입니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2024-11-15",
    targetNum: 50,
    isRecruiting: false, // 모집중 아님
    devType: "single-parent", // 한부모
    incomeBracket: "3rd", // 소득분위 3분위
  },
  // 나머지 기부 데이터...
  {
    title: "기부 10",
    description: "열 번째 기부 공고입니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2024-11-05",
    targetNum: 25,
    isRecruiting: true, // 모집중
    devType: "single-parent", // 한부모
    incomeBracket: "1st", // 소득분위 1분위
  },
];
