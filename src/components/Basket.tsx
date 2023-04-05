import { Container, Title } from "./Basket.style";
import { IProduct } from "../constants/MockData.interfaces";
import Attributes from "./Attributes";
import PriceList from "./PriceList";
import Input from "./Input";
import { IProductBaremList } from "../constants/MockData.interfaces";
import Total from "./Total";
import Button from "./Button";

interface IProps {
  product: IProduct
}

export default function Basket(props: IProps) {

  const sortPricesByMaximum = (): IProductBaremList[] => {
    return props.product.baremList.sort((a, b) => a.maximumQuantity - b.maximumQuantity);
  };

  const sortedPrices = sortPricesByMaximum();

  return (
    <Container>
      <Title>{ props.product.productTitle }</Title>
      <Attributes attributes={props.product.selectableAttributes} />
      <PriceList prices={sortedPrices}></PriceList>
      <Input lowestPiece={props.product.baremList[0].minimumQuantity}></Input>
      <Total />
      <Button />
    </Container>
  )
}
