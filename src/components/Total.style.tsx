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

export const Price = styled.div`
  display: block;
  font-size: 1.6rem;
  font-weight: 600;
  color: #474747;
`;
