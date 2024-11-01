import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface AppliedDonation {
  title: string;
  description: string;
  image: string;
  deadline: string;
  applyDate: string;
}

const IndividualMypage = () => {
  const [appliedDonations, setAppliedDonations] = useState<AppliedDonation[]>(
    []
  );

  useEffect(() => {
    // Retrieve the applied donations from local storage
    const storedDonations = JSON.parse(
      localStorage.getItem("appliedDonations") || "[]"
    );
    setAppliedDonations(storedDonations);
  }, []);

  const handleDelete = (index: number) => {
    // Create a new array excluding the deleted item
    const updatedDonations = appliedDonations.filter((_, i) => i !== index);
    setAppliedDonations(updatedDonations);
    // Update local storage with the new array
    localStorage.setItem("appliedDonations", JSON.stringify(updatedDonations));
  };

  return (
    <PageContainer>
      <h1>내 신청 내역</h1>
      {appliedDonations.length > 0 ? (
        <DonationList>
          {appliedDonations.map((donation, index) => (
            <DonationItem key={index}>
              <ItemContent>
                <h3>{donation.title}</h3>
                <p>신청 마감일: {donation.deadline}</p>
                <p>
                  신청일: {new Date(donation.applyDate).toLocaleDateString()}
                </p>
                <p>{donation.description}</p>
              </ItemContent>
              <DeleteButton onClick={() => handleDelete(index)}>
                삭제
              </DeleteButton>
            </DonationItem>
          ))}
        </DonationList>
      ) : (
        <p>신청한 공고가 없습니다.</p>
      )}
    </PageContainer>
  );
};

export default IndividualMypage;

const PageContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const DonationList = styled.div`
  margin-top: 20px;
`;

const DonationItem = styled.div`
  background-color: #fff;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  transition: box-shadow 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ItemContent = styled.div`
  flex-grow: 1;
  margin-right: 15px;
`;

const DeleteButton = styled.button`
  background-color: #ff4500;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #ff2b00;
  }
`;
