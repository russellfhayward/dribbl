import * as React from 'react'
import styled from "styled-components";

interface Link1ButtonProps {
  children?: React.ReactNode;
  className?: string;
  color?: string; 
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = styled.button`
  background-color: blue;
`

const Link1Button: React.FC<Link1ButtonProps> = ({children, color, className, onClick}) => {
  return (
    <Button className={className} onClick={onClick} data-cy="link-1-button">Hello</Button>
  )
}

export default Link1Button;