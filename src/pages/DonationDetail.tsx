// DonationDetail.tsx
import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const DonationDetail = () => {
  const location = useLocation();
  const donationData = location.state;

  if (!donationData)
    return <NoDataMessage>해당 공고를 찾을 수 없습니다.</NoDataMessage>;

  return (
    <DetailContainer>
      <ContentWrapper>
        <Title>{donationData.title}</Title>
        <Image src={donationData.image} alt={donationData.title} />
        <DetailSection>
          <DetailItem>
            <strong>회사명:</strong> {donationData.name}
          </DetailItem>
          <DetailItem>
            <strong>소개:</strong> {donationData.description}
          </DetailItem>
          <DetailItem>
            <strong>마감일:</strong> {donationData.deadline}
          </DetailItem>
          <DetailItem>
            <strong>목표 인원:</strong> {donationData.targetNum}
          </DetailItem>
        </DetailSection>
      </ContentWrapper>
    </DetailContainer>
  );
};

export default DonationDetail;

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fafafa;
  padding: 20px;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.05);
`;

const ContentWrapper = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 600px;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #333;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const DetailSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const DetailItem = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
  padding: 8px 0;
  border-bottom: 1px solid #eee;

  & strong {
    color: #007bff;
    font-weight: 600;
  }
`;

const NoDataMessage = styled.p`
  font-size: 1.2rem;
  color: #888;
`;
