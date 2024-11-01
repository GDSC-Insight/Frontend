import React from "react";
import styled from "styled-components";

interface DonationCardProps {
  title: string;
  description: string;
  image: string;
  deadline: string;
  targetNum: number;
}

const DonationCard: React.FC<DonationCardProps> = ({
  title,
  description,
  image,
  deadline,
  targetNum,
}) => {
  return (
    <CardContainer>
      <Image src={image} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Deadline>신청 마감일: {deadline}</Deadline>
        <Target>목표 인원: {targetNum}</Target>
      </Content>
      <ButtonContainer>
        <ApplyButton>신청하기</ApplyButton>
      </ButtonContainer>
    </CardContainer>
  );
};

export default DonationCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 200px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 10px;
`;

const Title = styled.h3`
  font-size: 1.2em;
  margin: 0;
`;

const Description = styled.p`
  font-size: 0.9em;
  margin: 5px 0;
`;

const Deadline = styled.p`
  font-size: 0.8em;
  color: #666;
`;

const Target = styled.p`
  font-size: 0.8em;
  color: #666;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const ApplyButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 0.9em;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
