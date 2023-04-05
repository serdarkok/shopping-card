import { EmblaThumbsSlider } from "./ImageThumbs.style";

interface IProp {
  image: string,
  index: number,
  selected: boolean,
  onClick: () => void
}
export default function ImageThumbs(props: IProp) {
  return (
    <EmblaThumbsSlider
      src={props.image}
      selected={props.selected}
      onClick={() => props.onClick()}
    ></EmblaThumbsSlider>
  );
}
