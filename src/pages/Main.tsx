import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DonationCard from "../components/DonationCard";

interface FormData {
  title: string;
  description: string;
  image: string;
  deadline: string;
  targetNum: number;
}

const Main = () => {
  const location = useLocation();
  const donationData = location.state?.donationData; // 전달된 데이터

  const [donations, setDonations] = useState<FormData[]>([]);

  useEffect(() => {
    if (donationData) {
      setDonations((prevDonations) => [...prevDonations, donationData]);
    }
  }, [donationData]);

  return (
    <div>
      <h1>기부 공고 리스트(메인)</h1>

      <div>
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
      </div>
    </div>
  );
};

export default Main;
