import React, { useState } from "react";
import styled from "styled-components";

interface FormData {
  title: string;
  description: string;
  image: string;
  deadline: string;
  targetNum: number;
}

interface DonationFormProps {
  onSubmit: (data: FormData) => void;
}

const DonationForm = ({ onSubmit }: DonationFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [deadline, setDeadline] = useState("");
  const [targetNum, setTargetNum] = useState(0);
  const [formValid, setFormValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const today = new Date().toISOString().split("T")[0];

    if (deadline < today) {
      setErrorMessage("마감일은 현재 날짜 이후로 설정해야 합니다.");
      return;
    }

    const formData: FormData = {
      title,
      description,
      image,
      deadline,
      targetNum,
    };
    onSubmit(formData);
  };

  const handleInputChange = () => {
    setFormValid(
      !!title && !!description && !!image && !!deadline && !!targetNum
    );
    setErrorMessage("");
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <form onSubmit={handleSubmit}>
      <InputBox>
        <Label htmlFor="title">게시글 제목</Label>
        <Input
          id="title"
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            handleInputChange();
          }}
          required
        />
      </InputBox>

      <InputBox>
        <Label htmlFor="description">공고 내용</Label>
        <Input
          id="description"
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            handleInputChange();
          }}
          required
        />
      </InputBox>

      <InputBox>
        <Label htmlFor="image">이미지 파일 (Base64)</Label>
        <Input
          id="image"
          type="text"
          placeholder="Enter image base64"
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
            handleInputChange();
          }}
          required
        />
      </InputBox>

      <InputBox>
        <Label htmlFor="deadline">마감일</Label>
        <Input
          id="deadline"
          type="date"
          min={today}
          value={deadline}
          onChange={(e) => {
            setDeadline(e.target.value);
            handleInputChange();
          }}
          required
        />
      </InputBox>

      <InputBox>
        <Label htmlFor="targetNum">모집 인원 수</Label>
        <Input
          id="targetNum"
          type="number"
          placeholder="Enter target number"
          value={targetNum}
          onChange={(e) => {
            setTargetNum(Number(e.target.value));
            handleInputChange();
          }}
          required
        />
      </InputBox>

      <Button type="submit" active={formValid}>
        제출
      </Button>

      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </form>
  );
};

export default DonationForm;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 400;
  color: var(--gray-color);
`;

const Input = styled.input`
  flex: 1;
  background: none;
  border: none;
  outline: none;
  border: 1px solid rgba(238, 238, 238, 1);
  border-radius: 6px;
  padding: 8px 16px;
  background-color: rgba(255, 255, 255, 1);
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 175%;
  color: var(--default-color);

  &::placeholder {
    color: var(--gray-color);
  }
`;

const Button = styled.button<{ active: boolean }>`
  border-radius: 6px;
  padding: 8px 0;
  width: 110px;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
  color: ${({ active }) =>
    active ? "var(--primary-color)" : "var(--gray-color)"};
  background-color: ${({ active }) =>
    active ? "var(--primary-10-color)" : "rgba(238, 238, 238, 1)"};

  &:hover {
    background-color: ${({ active }) =>
      active ? "var(--primary-20-color)" : "inherit"};
    cursor: ${({ active }) => (active ? "pointer" : "default")};
  }
`;

const ErrorMessage = styled.p`
  margin-top: 8px;
  color: red;
  font-size: 13px;
  font-weight: 400;
`;
