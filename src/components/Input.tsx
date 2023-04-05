import React, { useState, useContext, useEffect } from "react";
import { Container, Title, Wrapper, TextBox } from "./Input.style";
import { MockContext } from "../context/MockContext";

interface IProps {
  lowestPiece: number
}

export default function Input(props: IProps) {
  const [piece, setPiece] = useState<number | string>(props.lowestPiece);
  const [error, setError] = useState<boolean>(false)
  const { values, data, setValues } = useContext(MockContext);

  const checkLowestPiece = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.value && parseInt(event.target.value) >= props.lowestPiece) {
      const price = (parseInt(event.target.value) > props.lowestPiece) ? parseInt(event.target.value) : props.lowestPiece;
      setPiece(price);
      setError(false);
    } else {
      setError(true);
      setPiece(event.target.value);
    }
  }

  const calculateTotalPrice = (): number | undefined => {
    if(typeof piece === 'number') {
      const selectedBarem = data.baremList.filter((v) => {
        if(piece >= v.minimumQuantity && piece <= v.maximumQuantity) {
          return v;
        }
      });
      const price = selectedBarem[0].price * piece
      setValues({...values, price, barem: {...selectedBarem[0]} });
      return (price);
    }
  }

  useEffect(() => {
    if(typeof piece === 'number' && piece >= props.lowestPiece) {
      calculateTotalPrice();
    }
  }, [piece])

  return (
    <Wrapper>
      <Container>
        <Title>Adet</Title>
        <TextBox type="text" maxLength={4} pattern="[0-9]*" onChange={checkLowestPiece} value={piece}></TextBox>
        { error ? (
          <div style={{color: '#FF0000', fontSize: '11px'}}>Minumum {props.lowestPiece} adet sipariş vermeniz gerekmektedir</div> )
          : ''
        }
      </Container>
    </Wrapper>
  )
}
