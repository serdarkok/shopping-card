import styled from "styled-components";

export const Wrapper = styled.div`
  display: block;
  margin-top: 50px;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  font-size: .8rem;
  color: #474747;
  width: 100%;
  margin-bottom: 10px;
`

export const AttrName = styled.span`
  width: 100px;
  flex-shrink: 0;
  color: inherit;
`;

export const Button = styled.button<{selected: boolean, available: boolean}>`
  width: 100%;
  max-width: 120px;
  height: 40px;
  font-size: inherit;
  color: ${props =>
    props.selected
      ? '#FF0000'
      : 'inherit'
  };
  opacity: ${props =>
    props.available
      ? '1'
      : '0.3'
  };
  cursor: ${props =>
    props.available
      ? 'pointer'
      : 'default'
  };
  background-color: #f3f3f3;
  border: 1px solid #e0dfdb;
`;
