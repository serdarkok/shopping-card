import { Container, Wrapper, Title, Price, PriceContainer } from "./PriceList.style";
import { IProductBaremList } from "../constants/MockData.interfaces";

interface IProps {
  prices: IProductBaremList[]
}

export default function PriceList(props: IProps) {

  const sortPricesByMaximum = (): IProductBaremList[] => {
    return props.prices.sort((a, b) => a.maximumQuantity - b.maximumQuantity);
  };

  const sortedPrices = sortPricesByMaximum();

  return (
    <Wrapper>
      <Container>
        <Title>Toptan Fiyat</Title>
        <PriceContainer>
          {sortedPrices.map((price, index) => {
            return (
              <Price key={index}>
                {
                  (sortedPrices.length - 1) == index
                  ? (<div>{price.minimumQuantity}+ <br/> <span style={{color: '#666666', fontSize: '.7rem'}}>{price.price} TL / Adet</span></div>)
                  : (<div>{price.minimumQuantity} - {price.maximumQuantity} <br/> <span style={{color: '#666666', fontSize: '.7rem'}}>{price.price} TL / Adet</span></div>)
                }
              </Price>
            )
          })}
        </PriceContainer>
      </Container>
    </Wrapper>
  )
}
