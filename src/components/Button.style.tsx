import styled from "styled-components";

export const Wrapper = styled.div`
  display: block;
  margin-top: 50px;
  font-size: .8rem;
  color: #474747;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  margin-bottom: 10px;
`;

export const SendButton = styled.button`
  color: #ffffff;
  font-size: 20px;
  border: 0px;
  background: ${props => props.disabled ? '#dfdfdf' :'#faa55a'};
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  cursor: pointer;
`;
