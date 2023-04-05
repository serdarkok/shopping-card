import { useState, useContext, useEffect } from "react";
import { IProductSelectableAttribute } from "../constants/MockData.interfaces";
import { AttrName, Container, Wrapper, Button } from "./Attributes.style";
import { MockContext } from "../context/MockContext";

type IProps = {
  attributes: IProductSelectableAttribute[];
}

type ISelected = {
  [key: string]: string
}

export default function Attributes(props: IProps) {
  const { values, data, setValues } = useContext(MockContext);
  const [ selectedAttr, setSelectedAttr ] = useState<ISelected>({});

  const handleSelectedAttr = (value: ISelected) => {
    setSelectedAttr(value.Renk ? { ...value } : { ...selectedAttr, ...value });
    setValues((prevValues) => ({...prevValues, selected: value.Renk ? { ...value } : { ...selectedAttr, ...value }}));
  }

  const availableAttributes = () => {
    if(values.selected?.Renk) {
      const selectedByColor = data?.productVariants.filter((v) => {
        return v.attributes.some((a) => a.value === values.selected?.Renk);
      });
      if(selectedByColor.length) setValues((prevValues) => ({...prevValues, availableSizes: selectedByColor.map(v => v.attributes[0].value)}));
    }
  }

  const checkAvailableAttributes = (val: string, attr: IProductSelectableAttribute) => {
    return values.availableSizes && attr.name === 'Beden' ? values.availableSizes.some(v => v === val): true
  }

  useEffect(() => {
    availableAttributes();
  }, [JSON.stringify(selectedAttr)]);

  return (
    <Wrapper>
      { props.attributes.map((attr, index) => {
        return (
          <Container key={index}>
            <AttrName> { attr.name } </AttrName>
            { attr.values.map((val, index) =>
              <Button
                key={index}
                onClick={() => checkAvailableAttributes(val, attr) && handleSelectedAttr({[attr.name]: val})}
                selected={val === selectedAttr[attr.name]}
                available={checkAvailableAttributes(val, attr)}
              >
                { val }
              </Button>
            )}
          </Container>
        )
      }) }
    </Wrapper>
  )
}
