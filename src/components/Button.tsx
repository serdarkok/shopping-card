import { Wrapper, Container, SendButton } from "./Button.style";
import { MockContext } from "../context/MockContext";
import { useContext, useEffect, useState } from "react";

export default function Button() {
  const { values } = useContext(MockContext);
  const [disabled, setDisabled] = useState(true);

  const sendData = () => {
    console.log({barem: values?.barem, id: values?.id});
  };

  useEffect(() => {
    if(values.selected?.Beden && values.selected?.Renk && values.price) {
      setDisabled(false);
    }
  }, [values]);

  return (
    <Wrapper>
      <Container>
        <SendButton disabled={disabled} onClick={sendData}>Sepete Ekle</SendButton>
      </Container>
    </Wrapper>
  )
}
