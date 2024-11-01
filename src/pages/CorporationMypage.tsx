import { useState } from "react";
import styled from "styled-components"; // styled-components 임포트
import DonationForm from "../components/DonationForm";
import Modal from "../components/Modal"; // 모달 컴포넌트 임포트

interface FormData {
  title: string;
  description: string;
  image: string;
  deadline: string;
  targetNum: number;
}

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #333;
  font-size: 24px;
  text-align: center;
`;

const Button = styled.button`
  background-color: #0079d3;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;

  &:hover {
    background-color: #005fa3;
  }
`;

const DonationList = styled.div`
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const DonationItem = styled.li`
  list-style: none;
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;

  &:last-child {
    border-bottom: none;
  }

  h3 {
    color: #0079d3;
  }

  p {
    color: #555;
  }

  button {
    background-color: #ff4500;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
    margin-right: 10px;

    &:hover {
      background-color: #d03400;
    }
  }
`;

const CorporationMypage = () => {
  const [showForm, setShowForm] = useState(false);
  const [, setDonationData] = useState<FormData | null>(null);
  const [showModal, setShowModal] = useState(false); // 모달 표시 상태
  const [donationList, setDonationList] = useState<FormData[]>([]); // 기부 공고글 리스트 상태

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (data: FormData) => {
    setDonationData(data);
    setShowModal(true); // 제출 시 모달 표시
    setShowForm(false);

    // 공고글 리스트에 추가
    setDonationList((prevList) => [...prevList, data]);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleEdit = (index: number) => {
    const donationToEdit = donationList[index];
    setDonationData(donationToEdit);
    setShowForm(true); // 수정 폼 표시
    setDonationList((prevList) => prevList.filter((_, i) => i !== index)); // 수정할 항목 삭제
  };

  const handleDelete = (index: number) => {
    setDonationList((prevList) => prevList.filter((_, i) => i !== index)); // 해당 항목 삭제
  };

  return (
    <Container>
      <Title>기업 마이페이지</Title>
      <Button onClick={handleShowForm}>기부글 작성</Button>
      {showForm && <DonationForm onSubmit={handleFormSubmit} />}

      {showModal && (
        <Modal onClose={handleCloseModal}>
          <p>기부 공고글이 제출되었습니다.</p>
          <Button onClick={handleCloseModal}>닫기</Button>
        </Modal>
      )}

      {donationList.length > 0 && (
        <DonationList>
          <h2>작성한 기부 공고글 리스트</h2>
          <ul>
            {donationList.map((donation, index) => (
              <DonationItem key={index}>
                <h3>{donation.title}</h3>
                <p>{donation.description}</p>
                <p>마감일: {donation.deadline}</p>
                <p>모집 인원 수: {donation.targetNum}</p>
                <button onClick={() => handleEdit(index)}>수정</button>
                <button onClick={() => handleDelete(index)}>삭제</button>
              </DonationItem>
            ))}
          </ul>
        </DonationList>
      )}
    </Container>
  );
};

export default CorporationMypage;
