import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
`;

export const Button = styled.button`
  // height: 40px;
  // margin: 10px;
  // display: block;
  line-height: 43px;
  padding: 0 40px;
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  border-radius: 5px;
  border: 0px;
  cursor: pointer;

  &:nth-of-type(1) {
    background-color: #333;
    box-shadow: inset 0px 2px 4px rgba(0, 255, 23, 0.3),
      inset 0px 4px 8px rgba(0, 255, 23, 0.3),
      inset 0px 8px 16px rgba(0, 255, 23, 0.3);
  }
  &:nth-of-type(1):hover {
    box-shadow: inset 0px 2px 4px rgba(0, 255, 23, 0.6),
      inset 0px 4px 8px rgba(0, 255, 23, 0.6),
      inset 0px 8px 16px rgba(0, 255, 23, 0.6);
    transition: 0.2s;
    transform: translateY(2px);
  }

  &:nth-of-type(2) {
    background-color: #333;
    box-shadow: inset 0px 2px 4px rgba(255, 248, 0, 0.3),
      inset 0px 4px 8px rgba(255, 248, 0, 0.3),
      inset 0px 8px 16px rgba(255, 248, 0, 0.3);
  }
  &:nth-of-type(2):hover {
    box-shadow: inset 0px 2px 4px rgba(255, 248, 0, 0.5),
      inset 0px 4px 8px rgba(255, 248, 0, 0.5),
      inset 0px 8px 16px rgba(255, 248, 0, 0.5);
    transition: 0.2s;
    transform: translateY(2px);
  }

  &:nth-of-type(3) {
    background-color: #333;
    box-shadow: inset 0px 2px 4px rgba(255, 0, 33, 0.3),
      inset 0px 4px 8px rgba(255, 0, 33, 0.3),
      inset 0px 8px 16px rgba(255, 0, 33, 0.3);
  }
  &:nth-of-type(3):hover {
    box-shadow: inset 0px 2px 4px rgba(255, 0, 33, 0.5),
      inset 0px 4px 8px rgba(255, 0, 33, 0.5),
      inset 0px 8px 16px rgba(255, 0, 33, 0.5);
    transition: 0.2s;
    transform: translateY(2px);
  }
`;
