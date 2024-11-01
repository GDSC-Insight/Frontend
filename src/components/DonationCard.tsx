import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface DonationCardProps {
  title: string;
  description: string;
  image: string;
  deadline: string;
  targetNum: number;
}

const DonationCard = ({
  title,
  description,
  image,
  deadline,
  targetNum,
}: DonationCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/donation-detail", {
      state: { title, description, image, deadline, targetNum },
    });
  };

  const handleApply = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent navigation when clicking "신청하기"

    const appliedDonation = {
      title,
      description,
      image,
      deadline,
      applyDate: new Date().toISOString(),
    };

    const existingApplications = JSON.parse(
      localStorage.getItem("appliedDonations") || "[]"
    );

    existingApplications.push(appliedDonation);
    localStorage.setItem(
      "appliedDonations",
      JSON.stringify(existingApplications)
    );

    alert("신청되었습니다.");
  };
  const [cookies, setcookies] = useCookies("corporationToken");

  return (
    <CardContainer onClick={handleCardClick}>
      <Image src={image} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Deadline>신청 마감일: {deadline}</Deadline>
        <Target>목표 인원: {targetNum}</Target>
      </Content>
      <ButtonContainer>
        {!cookies.corporationToken && (
          <ApplyButton onClick={handleApply}>신청하기</ApplyButton>
        )}
      </ButtonContainer>
    </CardContainer>
  );
};

export default DonationCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 300px; /* Increased width from 200px to 300px */
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 180px; /* Increased height from 120px to 180px */
  object-fit: cover;
`;

const Content = styled.div`
  padding: 15px; /* Increased padding for more space */
`;

const Title = styled.h3`
  font-size: 1.8em; /* Increased font size */
  margin: 0;
`;

const Description = styled.p`
  font-size: 1.2em; /* Increased font size */
  margin: 5px 0;
  overflow: hidden; /* Hide overflow */
  white-space: nowrap; /* Prevent line breaks */
  text-overflow: ellipsis; /* Add ellipsis for overflow text */
`;

const Deadline = styled.p`
  font-size: 1em; /* Increased font size */
  color: #666;
`;

const Target = styled.p`
  font-size: 1em; /* Increased font size */
  color: #666;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 15px; /* Adjusted for increased size */
  right: 15px; /* Adjusted for increased size */
`;

const ApplyButton = styled.button`
  background-color: rgba(0, 191, 122, 0.7);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px; /* Increased padding for button */
  font-size: 1em; /* Increased font size */
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
