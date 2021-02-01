/* eslint-disable object-curly-newline */
import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { ButtonContainer } from './ButtonStyles';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  background?: string;
  color?: string;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
}

const Button: FC<IProps> = ({
  children,
  background = '#000',
  color = '#fff',
  iconStart,
  iconEnd,
  ...rest
}) => (
  <ButtonContainer background={background} color={color} {...rest}>
    {iconStart && iconStart}
    {children}
    {iconEnd && iconEnd}
  </ButtonContainer>
);

export default Button;
