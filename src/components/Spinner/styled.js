import styled, { keyframes } from "styled-components";

const clip = keyframes`
	0% { transform: rotate(0); }
	100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 3px solid;
  animation: frames 0.8s linear 0s infinite;

  &:after {
    content: "";
    position: absolute;
    width: 60px;
    height: 30px;
    background-color: red;
    border-bottom: 4px solid;
    top: -4px;
  }
  &:before {
    content: "";
    position: absolute;
    background-color: #fff;
    width: 10px;
    height: 10px;
    border: 4px solid;
    border-radius: 50%;
    bottom: 18px;
    right: 18px;
    z-index: 1;
  }
  animation: ${clip} 1s linear infinite;
  animation-fill-mode: both;
`;

export const ContainerLoader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
