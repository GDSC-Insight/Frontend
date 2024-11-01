import image1 from "./1.jpeg";
import image2 from "./2.jpg";
import image3 from "./3.jpg";
import image4 from "./4.jpg";
import image5 from "./5.jpeg";

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
    title: "카카오 기부",
    description:
      "카카오는 지역 소외 아동의 교육을 지원하기 위해 장학금을 기부합니다. 이 기부를 통해 더 많은 아동이 꿈을 이룰 수 있도록 돕겠습니다.",
    image: "",
    deadline: "2024-11-20",
    targetNum: 50,
    isRecruiting: true,
    devType: "multi-child",
    incomeBracket: "3rd",
  },
  {
    title: "삼성 기부",
    description:
      "삼성전자는 지속 가능한 미래를 위해 친환경 프로젝트에 기부를 실시합니다. 저희와 함께 지구를 지키는 이 캠페인에 참여하세요.",
    image: "https://via.placeholder.com/150",
    deadline: "2024-11-25",
    targetNum: 30,
    isRecruiting: true,
    devType: "multi-child",
    incomeBracket: "2nd",
  },
  {
    title: "LG 기부",
    description:
      "LG그룹은 다문화 가정을 지원하기 위한 프로그램에 기부하고 있습니다. 다양한 문화가 공존하는 사회를 위해 여러분의 참여를 부탁드립니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2024-11-15",
    targetNum: 40,
    isRecruiting: true,
    devType: "single-parent",
    incomeBracket: "4th",
  },
  {
    title: "신세계 기부",
    description:
      "신세계는 지역 경제를 활성화하기 위한 기부 프로그램을 운영합니다. 많은 분들의 참여로 지역사회가 더 발전할 수 있도록 돕겠습니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2024-11-18",
    targetNum: 60,
    isRecruiting: true,
    devType: "multi-child",
    incomeBracket: "1st",
  },
  {
    title: "현대 기부",
    description:
      "현대자동차는 저소득층 가정을 위해 차량 지원 프로그램을 운영합니다. 기부를 통해 필요한 가정에 차량을 전달할 수 있도록 도와주세요.",
    image: "https://via.placeholder.com/150",
    deadline: "2024-11-22",
    targetNum: 25,
    isRecruiting: true,
    devType: "single-parent",
    incomeBracket: "5th",
  },
  {
    title: "SK 기부",
    description:
      "SK텔레콤은 디지털 소외계층을 위한 기부를 통해 모두가 디지털 사회에 포함될 수 있도록 지원하고 있습니다. 함께 참여해주세요.",
    image: "https://via.placeholder.com/150",
    deadline: "2024-11-10",
    targetNum: 70,
    isRecruiting: true,
    devType: "multi-child",
    incomeBracket: "3rd",
  },
  {
    title: "아모레 기부",
    description:
      "아모레퍼시픽은 여성의 자립을 지원하기 위한 프로그램에 기부합니다. 자립을 원하는 많은 여성들에게 희망을 전해주세요.",
    image: "https://via.placeholder.com/150",
    deadline: "2024-11-30",
    targetNum: 80,
    isRecruiting: true,
    devType: "single-parent",
    incomeBracket: "6th",
  },
  {
    title: "롯데 기부",
    description:
      "롯데마트는 지역 농산물의 직거래를 지원하기 위해 기부합니다. 신선한 농산물이 소비자에게 직접 전달될 수 있도록 도와주세요.",
    image: "https://via.placeholder.com/150",
    deadline: "2024-11-28",
    targetNum: 35,
    isRecruiting: true,
    devType: "multi-child",
    incomeBracket: "4th",
  },
  {
    title: "CJ 기부",
    description:
      "CJ는 저소득층 아동을 위한 식사 지원 프로그램에 기부하고 있습니다. 아동들이 건강하게 성장할 수 있도록 많은 관심 부탁드립니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2024-11-12",
    targetNum: 45,
    isRecruiting: true,
    devType: "single-parent",
    incomeBracket: "2nd",
  },
  {
    title: "한화 기부",
    description:
      "한화는 모든 아동에게 교육의 기회를 확대하기 위해 기부합니다. 여러분의 작은 관심이 큰 변화를 만들어냅니다.",
    image: "https://via.placeholder.com/150",
    deadline: "2024-11-05",
    targetNum: 20,
    isRecruiting: true,
    devType: "multi-child",
    incomeBracket: "1st",
  },
];
