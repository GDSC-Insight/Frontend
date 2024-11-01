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
  height: 80vh; /* Reduced height */
  background-color: #fafafa;
  padding: 10px; /* Reduced padding */
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.05);
`;

const ContentWrapper = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 15px; /* Reduced padding */
  width: 100%;
  max-width: 500px; /* Reduced max-width */
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 1.6rem; /* Slightly reduced font size */
  margin-bottom: 10px; /* Reduced margin */
  color: #333;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 15px; /* Reduced margin */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const DetailSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; /* Reduced gap */
`;

const DetailItem = styled.p`
  font-size: 1.1rem; /* Increased font size for better readability */
  color: #444; /* Darkened color for contrast */
  line-height: 1.5; /* Increased line height for better spacing */
  padding: 6px 0; /* Reduced padding */
  border-bottom: 1px solid #eee;
  margin: 0; /* Remove default margin */

  & strong {
    color: #007bff; /* Retain highlight color for strong text */
    font-weight: 600;
  }
`;

const NoDataMessage = styled.p`
  font-size: 1rem; /* Reduced font size */
  color: #888;
`;
