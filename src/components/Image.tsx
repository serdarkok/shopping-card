import { MockContext } from "../context/MockContext";
import { useCallback, useState, useEffect, useContext } from "react";
import { Container, EmblaWrapper, EmblaContainer, EmblaSlider, EmblaThumbsContainer, EmblaThumbsWrapper } from "./Image.style";
import ImageThumbs from "./ImageThumbs";
import useEmblaCarousel from 'embla-carousel-react';
import { IProductVariants } from "../constants/MockData.interfaces";

export default function Image() {
  const [selectedImage, selectedImageApi] = useState(0);
  const { values, data } = useContext(MockContext);

  const getAllImage = data?.productVariants.reduce((acc: string[], value: IProductVariants) => {
    return acc = [...acc, ...value.images];
  }, []);

  const [images, setImages] = useState(getAllImage);

  const [emblaRef, emblaRefApi] = useEmblaCarousel();
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'trimSnaps',
    dragFree: true,
  });

  const handleThumbClick = useCallback(
    (index: number) => {
      if (!emblaRefApi || !emblaThumbsApi) return;
      if (emblaThumbsApi.clickAllowed()) emblaRefApi.scrollTo(index);
      selectedImageApi(index);
    },
    [emblaRefApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaRefApi || !emblaThumbsApi) return;
    selectedImageApi(emblaRefApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaRefApi.selectedScrollSnap());
  }, [emblaRefApi, emblaThumbsApi, selectedImageApi]);

  useEffect(() => {
    if (!emblaRefApi) return;
    onSelect();
    emblaRefApi.on('select', onSelect);
    emblaRefApi.on('reInit', onSelect);
  }, [emblaRefApi, onSelect]);

  useEffect(() => {
    let selectedByColor, selectedBySize;

    if(values.selected?.Renk && values.selected?.Beden) {
      selectedByColor = data?.productVariants.filter((v) => {
        return v.attributes.some((a) => a.value === values.selected?.Renk);
      });
      if(selectedByColor.length) {
        selectedBySize = selectedByColor.filter((v) => {
          return v.attributes.some((a) => a.value === values.selected?.Beden);
        });
      }
      if(selectedBySize) {
        setImages(selectedBySize.reduce((acc: string[], v) => acc = [...acc, ...v.images], []));
      }
    } else if (values.selected?.Renk) {
      selectedByColor = data?.productVariants.filter((v) => {
        return v.attributes.some((a) => a.value === values.selected?.Renk);
      });
      if(selectedByColor) {
        setImages(selectedByColor.reduce((acc: string[], v) => acc = [...acc, ...v.images], []));
      }
    }  else if (values.selected?.Beden) {
      selectedBySize = data?.productVariants.filter((v) => {
        return v.attributes.some((a) => a.value === values.selected?.Beden);
      });
      if(selectedBySize) {
        setImages(selectedBySize.reduce((acc: string[], v) => acc = [...acc, ...v.images], []));
      }
    }
    selectedImageApi(0);
    emblaRefApi?.scrollTo(0);
    emblaThumbsApi?.scrollTo(0);
  }, [JSON.stringify(values?.selected)]);

  return (
    <Container>
      <EmblaContainer ref={emblaRef}>
        <EmblaWrapper>
          { images?.map((image, index) => (
            <EmblaSlider src={image} key={index}></EmblaSlider>
          )) }
        </EmblaWrapper>
      </EmblaContainer>
      <EmblaThumbsContainer ref={emblaThumbsRef}>
        <EmblaThumbsWrapper>
        { images?.map((image, index) => (
          <ImageThumbs
            image={image}
            index={index}
            onClick={() => handleThumbClick(index)}
            selected={index === selectedImage}
            key={index}
          ></ImageThumbs>
          ))}
        </EmblaThumbsWrapper>
      </EmblaThumbsContainer>
    </Container>
  )
}
