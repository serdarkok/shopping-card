import { Wrapper, Container, Title, Price } from "./Total.style";
import { MockContext } from "../context/MockContext";
import { useContext } from "react";

export default function Total() {
  const { values } = useContext(MockContext);
  return (
    <Wrapper>
      <Container>
        <Title>Toplam</Title>
        <Price>{values.price?.toFixed(2)} TL</Price>
      </Container>
    </Wrapper>
  )
}
