import data from '../constants/mock-data.json';
import { MockContext, IValues } from '../context/MockContext';
import Basket from '../components/Basket';
import Image from '../components/Image';
import { Container } from './Homepage.style';
import { useState } from 'react';

export default function HomePage() {
  const [values, setValues] = useState<IValues>({});
  return (
    <MockContext.Provider value={{ values, data, setValues }}>
      <Container>
        <Image></Image>
        <Basket product={data}></Basket>
      </Container>
    </MockContext.Provider>
  )
}
