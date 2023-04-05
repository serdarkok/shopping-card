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
  align-items: flex-start;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  margin-bottom: 10px;
`;

export const PriceContainer = styled.ul`
  display: block;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Price = styled.li`
  width: 100%;
  max-width: 120px;
  height: 40px;
  border-right: 0px;
  flex: 0 1 30%;

    &:not(:last-child) {
      border-right: 1px solid #e0dfdb;
    }
`;

export const Title = styled.span`
  width: 100px;
  flex-shrink: 0;
  color: inherit;
`;
