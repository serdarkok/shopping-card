import { createContext, Dispatch, SetStateAction } from "react";
import MockData from '../constants/mock-data.json';
import { IProduct, IProductBaremList } from "../constants/MockData.interfaces";

interface ISelected {
  Renk?: string,
  Beden?: string
}

export interface IValues {
  availableSizes?: string[],
  selected?: ISelected,
  price?: number,
  barem?: IProductBaremList,
  id?: string
}

export interface IContextDefault {
  values: IValues,
  data: IProduct,
  setValues: Dispatch<SetStateAction<IValues>>
}

const contextDefault: IContextDefault = {
  values: {},
  data: MockData,
  setValues: () => {}
}

export const MockContext = createContext<IContextDefault>(contextDefault);
