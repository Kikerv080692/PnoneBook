import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;

  background-color: black;
`;

export const Inner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  max-width: 1200px;
  max-height: auto;
  background-color: ${p => p.theme.colors.modalBackground};
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 250ms linear;

  :hover {
    color: red;
  }
`;