import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DonationForm from "../components/DonationForm";

interface FormData {
  title: string;
  description: string;
  image: string;
  deadline: string;
  targetNum: number;
}

const Auth = () => {
  const [showForm, setShowForm] = useState(false);
  const [donationData, setDonationData] = useState<FormData | null>(null); // 기부 데이터 상태
  const navigate = useNavigate();

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (data: FormData) => {
    console.log("Form submitted with data:", data);
    setDonationData(data); // 기부 데이터를 상태에 저장
    setShowForm(false);

    // Main 페이지로 이동하며 기부 데이터 전달
    navigate("/main", { state: { donationData: data } });
  };

  return (
    <div>
      <h1>기업 마이페이지</h1>
      <button onClick={handleShowForm}>기부글 작성</button>{" "}
      {showForm && <DonationForm onSubmit={handleFormSubmit} />}
      {/* donationData가 null이 아닐 경우 메시지 표시 */}
      {donationData && <p>기부 공고글이 제출되었습니다.</p>}
    </div>
  );
};

export default Auth;
