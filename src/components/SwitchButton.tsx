import React from "react";
import styled from "styled-components";

// Props 인터페이스 정의
interface SwitchButtonProps {
  isOn: boolean; // 스위치의 상태
  toggleHandler: () => void; // 토글 핸들러 함수
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ isOn, toggleHandler }) => {
  return (
    <ToggleContainer onClick={toggleHandler} isOn={isOn}>
      <ToggleBall isOn={isOn} />
    </ToggleContainer>
  );
};

export default SwitchButton;

// ToggleContainer에서 isOn prop을 사용하기 위해 styled 컴포넌트 정의
const ToggleContainer = styled.div<{ isOn: boolean }>`
  width: 50px; /* 버튼의 너비 */
  height: 24px; /* 버튼의 높이 */
  background: ${(props) =>
    props.isOn ? "#4caf50" : "#ccc"}; /* 상태에 따른 배경색 */
  border-radius: 50px; /* 둥근 모서리 */
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.isOn ? "flex-end" : "flex-start"}; /* 스위치의 위치 */
  cursor: pointer;
  transition: background 0.3s; /* 배경색 전환 애니메이션 */

  &:hover {
    background: #bbb; /* 마우스 호버 시 색상 변경 */
  }
`;

// ToggleBall에서 isOn prop을 사용
const ToggleBall = styled.div<{ isOn: boolean }>`
  width: 20px; /* 스위치 볼의 너비 */
  height: 20px; /* 스위치 볼의 높이 */
  background: white; /* 스위치 볼의 색상 */
  border-radius: 50%; /* 둥근 모서리 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); /* 그림자 효과 */
  transition: transform 0.3s; /* 볼 전환 애니메이션 */

  transform: translateX(
    ${(props) => (props.isOn ? "100%" : "0")}
  ); /* 위치 전환 */
`;
