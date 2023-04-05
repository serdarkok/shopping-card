import { Wrapper, Container, SendButton } from "./Button.style";
import { MockContext } from "../context/MockContext";
import { useContext, useEffect, useState } from "react";

export default function Button() {
  const { values, data } = useContext(MockContext);
  const [disabled, setDisabled] = useState(true);

  const sendData = () => {
    let id: string = '';
    const selectedByColor = data?.productVariants.filter((v) => {
      return v.attributes.some((a) => a.value === values.selected?.Renk);
    });
    if(selectedByColor.length) {
      const selectedBySize = selectedByColor.filter((v) => {
        return v.attributes.some((a) => a.value === values.selected?.Beden);
      });
      id = selectedBySize[0].id;
    }
    console.log({barem: values?.barem, id});
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
