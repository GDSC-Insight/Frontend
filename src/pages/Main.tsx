import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DonationCard from "../components/DonationCard";
import { dummyData, DonationFormData } from "../data/dummyData"; // dummyData 가져오기
import styled from "styled-components";

const Main = () => {
  const location = useLocation();
  const donationData = location.state?.donationData;

  const [donations, setDonations] = useState<DonationFormData[]>([]); // 타입 수정

  useEffect(() => {
    setDonations(dummyData); // 더미 데이터 설정

    if (donationData) {
      setDonations((prevDonations) => [...prevDonations, donationData]);
    }
  }, [donationData]);

  return (
    <div>
      <h1>기부 공고 리스트(메인)</h1>
      {donations.length > 0 ? (
        <CardsContainer>
          {" "}
          {/* 카드 목록을 감싸는 컨테이너 추가 */}
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
        <p>기부 공고가 없습니다.</p>
      )}
    </div>
  );
};

export default Main;

const CardsContainer = styled.div`
  display: flex;

  gap: 10px;
`;
