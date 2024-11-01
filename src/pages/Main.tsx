import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DonationCard from "../components/DonationCard";
import FilterButton from "../components/filterbutton";

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
  const [click1, setClick1] = useState<boolean>(false);
  const [click2, setClick2] = useState<boolean>(false);
  const [click3, setClick3] = useState<boolean>(false);


  useEffect(() => {
    if (donationData) {
      setDonations((prevDonations) => [...prevDonations, donationData]);
    }
  }, [donationData]);

  const onClickFilterButtonHandler1 = () => {
    if (click1 === true) {
      setClick1(false)
      return;
    }
    setClick1(true)
}

  const onClickFilterButtonHandler2 = () => {
    if (click2 === true) {
      setClick2(false)
      return;
    }
    setClick2(true)
}

  const onClickFilterButtonHandler3 = () => {
    if (click3 === true) {
      setClick3(false)
      return;
    }
    setClick3(true)
}

  return (
    <div>
      <h1>기부 공고 리스트(메인)</h1>
      <div style={{ display: 'flex' }}>
        <FilterButton text="다자녀 가정" activite={click1} onClick={onClickFilterButtonHandler1}/>
        <FilterButton text="한부모 가정" activite={click2} onClick={onClickFilterButtonHandler2}/>
        <FilterButton text="소득분위 5등급이하" activite={click3} onClick={onClickFilterButtonHandler3}/>
      </div>
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
