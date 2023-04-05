import styled from "styled-components";

interface IProp {
  selected?: boolean,
}

export const EmblaThumbsSlider = styled.img<IProp>`
  flex: 0 0 20%;
  cursor: pointer;
  min-width: 0;
  border: ${props => props.selected === true
    ? '1px solid #faa55a'
    : '1px solid #e0dfdb'
  };
  object-fit: contain;
  margin-right: 15px;
  border-radius: 10px;

  &:not(nth-child(-1)) {
    margin-right: 0px;
  }
`
