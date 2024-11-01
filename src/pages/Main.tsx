import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DonationCard from "../components/DonationCard";
import { dummyData, DonationFormData } from "../data/dummyData"; // dummyData 가져오기
import styled from "styled-components";
import SwitchButton from "../components/SwitchButton";

const Main = () => {
  const location = useLocation();
  const donationData = location.state?.donationData;

  const [donations, setDonations] = useState<DonationFormData[]>([]);
  const [isRecruitingOnly, setIsRecruitingOnly] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    const filteredDonations = dummyData.filter((donation) => {
      const deadlineDate = new Date(donation.deadline);
      return deadlineDate >= new Date(); // 마감 기한이 오늘 이후인 경우만 포함
    });

    if (isRecruitingOnly) {
      // 모집중인 것만 필터링
      setDonations(
        filteredDonations.filter((donation) => donation.isRecruiting)
      );
    } else {
      setDonations(filteredDonations);
    }

    // 선택한 탭에 따라 추가 필터링
    if (currentTab === 1) {
      setDonations((prev) =>
        prev.filter((donation) => donation.devType === "single-parent")
      );
    } else if (currentTab === 2) {
      setDonations((prev) =>
        prev.filter((donation) => donation.devType === "multi-child")
      );
    }

    if (donationData) {
      const donationDeadline = new Date(donationData.deadline);
      if (donationDeadline >= new Date()) {
        setDonations((prevDonations) => [...prevDonations, donationData]);
      }
    }
  }, [donationData, isRecruitingOnly, currentTab]);

  const toggleHandler = () => {
    setIsRecruitingOnly(!isRecruitingOnly);
  };

  const activeMenuHandler = (idx: number) => {
    // idx에 타입 추가
    setCurrentTab(idx);
  };

  const filteredTabs = ["전체", "한부모", "다자녀"];

  return (
    <div>
      <Title>기부 공고 리스트(메인)</Title>
      <ConSortArea>
        <TabMenu>
          {filteredTabs.map(
            (
              el,
              idx: number // idx에 타입 추가
            ) => (
              <li
                key={idx}
                className={`${idx === currentTab ? "active" : ""}`}
                onClick={() => activeMenuHandler(idx)}
              >
                {el}
              </li>
            )
          )}
        </TabMenu>
        <SwitchGroup>
          <em>모집중만 보기</em>
          <SwitchButton isOn={isRecruitingOnly} toggleHandler={toggleHandler} />
        </SwitchGroup>
      </ConSortArea>
      {donations.length > 0 ? (
        <CardsContainer>
          {donations.map((donation, index) => (
            <DonationCard
              key={index}
              title={donation.title}
              description={donation.description}
              image={donation.image}
              deadline={donation.deadline}
              targetNum={donation.targetNum}
            />
          ))}
        </CardsContainer>
      ) : (
        <NoDonationsText>기부 공고가 없습니다.</NoDonationsText>
      )}
    </div>
  );
};

export default Main;

const Title = styled.h1`
  font-size: 2rem;
  margin: 20px 0;
  color: #333;
  text-align: center;
`;

const ConSortArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

const TabMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;

  li {
    cursor: pointer;
    padding: 10px 15px;
    border-radius: 5px;
    background: #f1f1f1;
    transition: background 0.3s;

    &.active {
      background: #007bff;
      color: white;
    }

    &:hover {
      background: #e2e2e2;
    }
  }
`;

const SwitchGroup = styled.div`
  display: flex;
  align-items: center;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* 여러 줄로 배치 */
  justify-content: center; /* 중앙 정렬 */
  gap: 15px; /* 카드 사이의 간격 */
  padding: 20px; /* 패딩 추가 */
  background-color: #f8f9fa; /* 배경색 추가 */
  border-radius: 8px; /* 둥근 모서리 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
`;

const NoDonationsText = styled.p`
  text-align: center;
  color: #666;
  font-size: 1.2rem;
`;
