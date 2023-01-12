import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonVariantProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonVariantProps>`
  width: 100px;
  height: 40px;

  background-color: ${(props) => props.theme['green-500']};
`
