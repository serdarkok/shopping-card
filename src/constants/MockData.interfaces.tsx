export interface IProduct {
  productTitle: string,
  selectableAttributes: IProductSelectableAttribute[],
  productVariants: IProductVariants[],
  baremList: IProductBaremList[]
}

export interface IProductSelectableAttribute {
  name: string,
  values: string[]
}

export interface IProductBaremList {
  minimumQuantity: number,
  maximumQuantity: number,
  price: number
}

export interface IProductVariants {
  id: string,
  attributes: IProductAttributes[],
  images: string[]
}

export interface IProductAttributes {
  name: string,
  selectable: boolean,
  value: string
}
