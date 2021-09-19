import { ReactNode } from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  font-weight: 700;
  border-radius: 4px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;

const PrimaryBtn = styled(Btn)<{ height: number }>`
  height: ${(props) => props.height}px;
  color: #fff;
  background-color: #0070f3;
  transition: background-color 300ms ease-in-out;

  &:not(:disabled):hover {
    background-color: #3186c4;
  }
`;

const OutlinedBtn = styled(Btn)<{ height: number }>`
  height: ${(props) => props.height}px;
  color: #3da5f5;
  background-color: #fff;
  border: 1px solid #3da5f5;
  transition: background-color 300ms ease-in-out;

  &:not(:disabled):hover {
    background-color: #ecf6fe;
  }
`;

const PrimaryButton = ({ onClick, height, children }: { onClick: () => void; height: number; children: ReactNode }) => {
  return (
    <PrimaryBtn type="button" onClick={onClick} height={height}>
      {children}
    </PrimaryBtn>
  );
};

const OutlinedButton = ({ onClick, height, children }: { onClick: () => void; height: number; children: ReactNode }) => {
  return (
    <OutlinedBtn type="button" onClick={onClick} height={height}>
      {children}
    </OutlinedBtn>
  );
};

export { PrimaryButton, OutlinedButton };
