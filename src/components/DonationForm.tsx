import React, { useState } from "react";
import styled from "styled-components";
import FilterButton from "./filterbutton";

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

  
  const [click1, setClick1] = useState<boolean>(false);
  const [click2, setClick2] = useState<boolean>(false);
  const [click3, setClick3] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
  };

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
    <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex' }}>
  <FilterButton text="다자녀 가정" activite={click1} onClick={onClickFilterButtonHandler1}/>
  <FilterButton text="한부모 가정" activite={click2} onClick={onClickFilterButtonHandler2}/>
  <FilterButton text="소득분위 5등급이하" activite={click3} onClick={onClickFilterButtonHandler3}/>
    </div>
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
      {!formValid && <Message>모든 필드를 채워주세요.</Message>}
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

const Message = styled.p`
  margin-top: -4px;
  height: 16px;
  font-size: 13px;
  font-weight: 400;
`;
