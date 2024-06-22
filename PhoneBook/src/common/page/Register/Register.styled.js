import styled from "styled-components";
import { IoCloseCircleOutline } from "react-icons/io5";

const colors = {
    primary: "#18ffff",
    primaryLight: "#adffff",
    primaryDark: "#091034",
    gray100: "#f9fbff",
    gray150: "#f4f6fb",
    gray200: "#eef1f6",
    gray300: "#e1e5ee",
    gray400: "#767b91",
    gray500: "#4f546c",
    gray600: "#2a324b",
    gray700: "#161d34",
    bg: "#060b23",
  };

export const FormWrapper = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
  background: gray;
  height: 300px;
  border-radius: 5px;
  padding: 20px;
`;
export const CloseIcon = styled(IoCloseCircleOutline)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: black;
  font-size: 24px;

  &:hover {
    color: #cc0000;
  }
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 30px;
  height: 20px;
  appearance: none;
  padding: 5px 10px;
  font-size: 14px;
  border: 3px solid ${colors.gray300};
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;
  height: 40px;
  color: black;

  &:hover {
    border-color: ${colors.primaryLight};
  }

  &:focus {
    border: none;
    border-color: 1px solid green;
  }
  &:focus {
    border-color: ${colors.primary};
  }

  &:focus + label,
  &:not(:placeholder-shown):not(:focus) + label {
    top: 30px;
    font-size: 20px;
    left: 35px;
    color: black;
  }
`;

export const Label = styled.label`
  position: absolute;
  left: 30px;
  top: 50px;
  padding: 0 0.5rem;
  color: white;
  cursor: text;
  transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
  background-color: $clr-bg;
`;

export const WrapperInputPassword = styled.div`
  position: relative;
  width: 100%;
`;
export const TogglePassword = styled.button`
  position: absolute;
  background: none;
  border: none;
  cursor: pointer;
  right: 0;
  top: 33%;
  transform: translateY(-50%);
`;

export const ButtonSubmit = styled.button`
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  margin-bottom: 10px;
  padding: 10px 10px;
  width: 100%;
  border: none;
  outline: none;

  &:hover {
    background: #adffff;
    color: #091034;
  }
`;
