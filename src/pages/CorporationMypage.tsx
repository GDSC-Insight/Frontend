import { useState } from "react";
import DonationForm from "../components/DonationForm";
import Modal from "../components/Modal"; // 모달 컴포넌트 임포트

interface FormData {
  title: string;
  description: string;
  image: string;
  deadline: string;
  targetNum: number;
}

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

  return (
    <div>
      <h1>기업 마이페이지</h1>
      <button onClick={handleShowForm}>기부글 작성</button>
      {showForm && <DonationForm onSubmit={handleFormSubmit} />}

      {showModal && (
        <Modal onClose={handleCloseModal}>
          <p>기부 공고글이 제출되었습니다.</p>
          <button onClick={handleCloseModal}>닫기</button>
        </Modal>
      )}

      {donationList.length > 0 && (
        <div>
          <h2>작성한 기부 공고글 리스트</h2>
          <ul>
            {donationList.map((donation, index) => (
              <li key={index}>
                <h3>{donation.title}</h3>
                <p>{donation.description}</p>
                <p>마감일: {donation.deadline}</p>
                <p>모집 인원 수: {donation.targetNum}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CorporationMypage;
