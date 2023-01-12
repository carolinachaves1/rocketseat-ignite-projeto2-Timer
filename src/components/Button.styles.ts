import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonVariantProps {
    variant: ButtonVariant
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green'
}

export const ButtonContainer = styled.button<ButtonVariantProps>`
  width: 100px;
  height: 40px;

  ${props => {
    return css`background-color: ${buttonVariants[props.variant]}`
  }}
`