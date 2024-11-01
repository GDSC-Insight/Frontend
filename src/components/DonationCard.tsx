import React from "react";
import styled from "styled-components";

const DonationCard = ({
  title,
  description,
  image,
  deadline,
  targetNum,
}: DonationCardProps) => {
  return (
    <Card>
      <Image src={image} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
      <Footer>
        <Deadline>마감일: {deadline}</Deadline>
        <TargetNum>모집 인원 수: {targetNum}</TargetNum>
      </Footer>
    </Card>
  );
};

export default DonationCard;

const Card = styled.div`
  border: 1px solid #eee;
  border-radius: 6px;
  padding: 0;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`;

const Description = styled.p`
  font-size: 14px;
  margin: 8px 0;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  background-color: #f9f9f9;
`;

const Deadline = styled.p`
  font-size: 14px;
  color: red;
  margin: 0;
`;

const TargetNum = styled.p`
  font-size: 14px;
  margin: 0;
`;

interface DonationCardProps {
  title: string;
  description: string;
  image: string;
  deadline: string;
  targetNum: number;
}
