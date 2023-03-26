import styled from 'styled-components'
import { colors } from '@/theme/variables'

export const HamburgerItem = styled.div<{ active: boolean }>`
  width: 1.8rem;
  height: 0.3rem;
  border-radius: 0.2rem;
  ${({ active }) => (active ? `background-color: ${colors.$pink}` : `background-color: ${colors.$pink}`)};
  display: flex;
  flex-direction: column;
  transition: transform 200ms linear;

  &::before {
    width: 1.8rem;
    height: 0.3rem;
    border-radius: 0.2rem;
    ${({ active }) => active ? `background-color: ${colors.$white}` : `background-color: ${colors.$pink}`};
    ${({ active }) => (active ? `transform: rotate(-48deg);` : ``)};
    margin-top: -0.5rem;
    transition: transform 200ms linear;
    content: '';
  }

  &::after {
    width: 1.8rem;
    height: 0.3rem;
    border-radius: 0.2rem;
    ${({ active }) => (active ? `background-color: ${colors.$white}` : `background-color: ${colors.$pink}`)};
    ${({ active }) => (active ? `
      position: absolute;
      right: 16px;
      top: 21px;
      transform: rotate(49deg);
      ` : ``)};
    margin-top: -0.8rem;
    transition: transform 200ms linear;
    content: '';
  }
`

export const HamburgerMenu = styled.div<{ active: boolean }>`
  position: fixed;
  z-index: 4;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  cursor: pointer;

  &:hover {
    ${HamburgerItem} {
      &::before {
      width: 1.5rem;
      ${({ active }) => (active ? `transform: rotate(49deg);` : `transform: rotate(129deg);`)};
    }

    &::after {
      width: 1.5rem;
      position: absolute;
      right: 19px;
      top: 5px;
     ${({ active }) => (active ? `transform: rotate(130deg);` : `transform: rotate(50deg);`)};
    }
      ${({ active }) => (active ? `background: ${colors.$pink}` : `background: rgba(255, 255, 255, 0);`)};
      position: relative;
      right: -10px;
    }
  }
`

