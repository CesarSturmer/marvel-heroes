import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 80px;
  margin-bottom: 30px;
  align-items: center;
  justify-content: center;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    justify-content: start;
  }
`;

export const PaginationContainer = styled.ul`
  display: flex;
  list-style-type: none;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    max-width: 350px;
  }
`;

type PaginationItemProps = {
  isSelected?: boolean;
  disabled?: boolean;
};

export const PaginationItem = styled.li<PaginationItemProps>`
  padding: 0 16px;
  height: 40px;
  width: 40px;
  text-align: center;
  margin: auto 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  letter-spacing: 0.01071em;
  border-radius: 50%;
  line-height: 1.43;
  font-size: 16px;
  cursor: pointer;

  pointer-events: ${(props) => props.disabled && 'none'};
  background-color: ${(props) => props.isSelected && props.theme.colors.primary};

  color: ${(props) => (props.isSelected ? props.theme.comom.white : props.theme.text.primary)};

  &.dots:hover {
    background-color: transparent;
    cursor: default;
  }

  &.arrow {
    padding: 0;
    color: ${(props) => (props.disabled ? props.theme.text.primary : props.theme.colors.primary)};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    height: 35px;
    width: 35px;
    font-size: 12px;
    padding: 0 10px;
    margin: auto 2px;
  }
`;

export const ArrowRightIcon = styled(MdOutlineKeyboardArrowRight)``;

export const ArrowLeftIcon = styled(MdOutlineKeyboardArrowLeft)``;
