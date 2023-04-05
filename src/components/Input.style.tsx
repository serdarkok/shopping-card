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

export const Title = styled.span`
  width: 100px;
  flex-shrink: 0;
  color: inherit;
`;

export const TextBox = styled.input`
  width: 120px;
  height: 45px;
  padding: 10px;
  border: 1px solid #e0dfdb;
`;
