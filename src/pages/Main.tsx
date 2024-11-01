import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DonationCard from "../components/DonationCard";
import { dummyData, DonationFormData } from "../data/dummyData";
import styled from "styled-components";

const Main = () => {
  const location = useLocation();
  const donationData = location.state?.donationData;

  const [donations, setDonations] = useState<DonationFormData[]>([]);
  const [currentTab, setCurrentTab] = useState(0);
  const [incomeBracket, setIncomeBracket] = useState<string>("");

  useEffect(() => {
    const filteredDonations = dummyData.filter((donation) => {
      const deadlineDate = new Date(donation.deadline);
      return deadlineDate >= new Date();
    });

    const incomeFilteredDonations = incomeBracket
      ? filteredDonations.filter(
          (donation) =>
            parseInt(donation.incomeBracket) <= parseInt(incomeBracket)
        )
      : filteredDonations;

    let finalFilteredDonations = incomeFilteredDonations;
    if (currentTab === 1) {
      finalFilteredDonations = finalFilteredDonations.filter(
        (donation) => donation.devType === "single-parent"
      );
    } else if (currentTab === 2) {
      finalFilteredDonations = finalFilteredDonations.filter(
        (donation) => donation.devType === "multi-child"
      );
    }

    setDonations(finalFilteredDonations);

    if (donationData) {
      const donationDeadline = new Date(donationData.deadline);
      if (donationDeadline >= new Date()) {
        setDonations((prevDonations) => [...prevDonations, donationData]);
      }
    }
  }, [donationData, currentTab, incomeBracket]);

  const activeMenuHandler = (idx: number) => {
    setCurrentTab(idx);
  };

  const handleIncomeBracketChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setIncomeBracket(e.target.value);
  };

  const filteredTabs = ["전체", "한부모", "다자녀"];

  return (
    <div>
      <ConSortArea>
        <TabMenu>
          {filteredTabs.map((el, idx) => (
            <li
              key={idx}
              className={`${idx === currentTab ? "active" : ""}`}
              onClick={() => activeMenuHandler(idx)}
            >
              {el}
            </li>
          ))}
        </TabMenu>
        <IncomeBracketSelect onChange={handleIncomeBracketChange}>
          <option value="">소득 분위 선택</option>
          {Array.from({ length: 10 }, (_, i) => (
            <option key={i} value={(i + 1).toString()}>
              {i + 1}
            </option>
          ))}
        </IncomeBracketSelect>
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

const ConSortArea = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
`;

const TabMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;

  li {
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 25px;
    background: #f1f1f1;
    transition: background 0.3s, color 0.3s;

    &.active {
      background: #007bff;
      color: white;
    }

    &:hover {
      background: #e2e2e2;
    }
  }
`;

const IncomeBracketSelect = styled.select`
  padding: 10px;
  border-radius: 25px;
  border: 1px solid #ccc;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const NoDonationsText = styled.p`
  text-align: center;
  color: #666;
  font-size: 1.2rem;
`;
