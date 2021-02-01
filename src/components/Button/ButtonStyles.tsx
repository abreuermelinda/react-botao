/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
import styled, { css } from 'styled-components';

interface IButtonContainerProps {
  background: string;
  color: string;
}

export const ButtonContainer = styled.button<IButtonContainerProps>`
  display: flex;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  outline: none;
  border: 0;
  padding: 12px 32px;
  border-radius: 4px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      background: #f7f7f7;
      color: #cccccc;
    `}
`;
