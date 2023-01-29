import styled from 'styled-components'
import { colors } from '@/theme/variables'

export const HamburgerItem = styled.div<{ active: boolean }>`
  width: 1.8rem;
  height: 0.3rem;
  border-radius: 0.2rem;
  ${({ active }) => (active ? `background-color: ${colors.$white}` : `background-color: ${colors.$pink}`)};
  display: flex;
  flex-direction: column;
  transition: transform 200ms linear;

  &::before {
    width: 1.8rem;
    height: 0.3rem;
    border-radius: 0.2rem;
    ${({ active }) => active ? `background-color: ${colors.$white}` : `background-color: ${colors.$pink}`};
    margin-top: -0.5rem;
    transition: transform 200ms linear;
    content: '';
  }

  &::after {
    width: 1.8rem;
    height: 0.3rem;
    border-radius: 0.2rem;
    ${({ active }) => (active ? `background-color: ${colors.$white}` : `background-color: ${colors.$pink}`)};
    margin-top: -0.8rem;
    transition: transform 200ms linear;
    content: '';
  }
`

export const HamburgerMenu = styled.div`
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
      transform: rotate(129deg);
      width: 1.5rem;
    }

    &::after {
      transform: rotate(50deg);
      width: 1.5rem;
      position: absolute;
      right: 19px;
      top: 5px;
    }
      background: rgba(255, 255, 255, 0);
      position: relative;
      right: -10px;
    }
  }
`

