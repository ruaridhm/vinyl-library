import styled from 'styled-components';

export const ToggleContainer = styled.div`
  position: relative;
  width: 75px;
  display: inline-block;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  text-align: left;
`;

export const ToggleLabel = styled.label`
  display: block;
  overflow: hidden;
  cursor: pointer;
  border: 0 solid ${({ theme }) => theme.grey};
  border-radius: 20px;
  margin: 0;
`;

export const ToggleSpanInner = styled.span`
  display: block;
  width: 200%;
  margin-left: -100%;
  transition: margin 0.3s ease-in 0s;
  &::before,
  &::after {
    display: block;
    float: left;
    width: 50%;
    height: 34px;
    padding: 0;
    line-height: 34px;
    font-size: 14px;
    color: ${({ theme }) => theme.white};
    font-weight: bold;
    box-sizing: border-box;
  }
  &::before {
    content: attr(data-on);
    text-transform: uppercase;
    padding-left: 10px;
    background-color: ${({ theme }) => theme.DarkModeGrey};
    color: ${({ theme }) => theme.white};
  }
  &::after {
    content: attr(data-off);
    text-transform: uppercase;
    padding-right: 10px;
    background-color: #f90;
    color: ${({ theme }) => theme.white};
    text-align: right;
  }
`;

export const ToggleSpanOuter = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  margin: 5px;
  background: ${({ theme }) => theme.white};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 40px;
  border: 0 solid ${({ theme }) => theme.grey};
  border-radius: 20px;
  transition: all 0.3s ease-in 0s;
`;

export const Toggle = styled.input`
  display: none;
  &:checked + ${ToggleLabel} ${ToggleSpanInner} {
    margin-left: 0;
  }
  &:checked + ${ToggleLabel} ${ToggleSpanOuter} {
    right: 0px;
  }
`;
