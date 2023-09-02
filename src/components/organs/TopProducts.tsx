import { useCallback, useRef } from "react";
import { Text } from "../atoms/Text";
import { ProductsTexts, TopProductsTexts } from "../particles/DataLists";
import Slider from "react-slick";
import { Card } from "../molecules/Card";
import Product1 from "../../assets/gloves/top1.webp";
import Product2 from "../../assets/gloves/top2.jpg";
import Product3 from "../../assets/gloves/top3.png";
import Product4 from "../../assets/gloves/top4.png";
import Product5 from "../../assets/gloves/top5.png";
import Product6 from "../../assets/gloves/top6.png";

import P1 from "../../assets/gloves/Canadian-Working-Gloves.png";
import cow_split from "../../assets/gloves/cow-split.png";
import cow_split_2 from "../../assets/gloves/cow-split-2.png";
import cow_split_3 from "../../assets/gloves/cow-split-3.png";
import cow_split_4 from "../../assets/gloves/cow-split-4.png";
import leather_glove from "../../assets/gloves/leather-glove.png";
import goat_skin from "../../assets/gloves/Goatskin Working Gloves.png";
import leather_grain from "../../assets/gloves/leather-grain-working-gloves.png";
import leather_grain2 from "../../assets/gloves/leather-grain.png";

import { Button } from "../atoms/Button";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

const TopProducts = () => {
  const sliderRef = useRef<Slider | null>();

  // Function for next button
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  // function for previous button
  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const renderTopProducts = useCallback((element: number) => {
    switch (element) {
      case 0:
        return Product1;
      case 1:
        return Product2;
      case 2:
        return Product3;
      case 3:
        return Product4;
      case 4:
        return Product5;
      case 5:
        return Product6;
      default:
        return "";
    }
  }, []);

  const renderProducts = useCallback((element: number) => {
    switch (element) {
      case 0:
        return P1;
      case 1:
        return cow_split;
      case 2:
        return cow_split_2;
      case 3:
        return cow_split_3;
      case 4:
        return cow_split_4;
      case 5:
        return leather_glove;
      case 6:
        return goat_skin;
      case 7:
        return leather_grain;
      case 8:
        return leather_grain2;
      default:
        return "";
    }
  }, [])

  return (
    <section
      id="top-products"
      className="w-full h-auto flex flex-col items-center justify-center relative lg:px-24 md:px-20 px-6 my-20"
      style={{ marginTop: "100px !important" }}
    >
      <Text
        as="p"
        className="font-light text-base text-color3/80 tracking-widest"
      >
        {TopProductsTexts.firstText}
      </Text>
      <Text
        as="h2"
        className="md:text-4xl text-2xl font-medium capitalize text-color3"
      >
        {TopProductsTexts.secondText}
      </Text>

      {/* Controllers  */}
      <div className="mt-12 w-full flex justify-end gap-5 items-center md:px-6 px-3">
        <Button
          onClick={previous}
          className="cursor-pointer outline-none border-none bg-color2/30 text-color3 hover:bg-color2 p-2 rounded-full"
          type="button"
        >
          <CaretLeft size={18} color="currentColor" weight="fill" />
        </Button>
        <Button
          onClick={next}
          className="cursor-pointer outline-none border-none bg-color2/30 text-color3 hover:bg-color2 p-2 rounded-full"
          type="button"
        >
          <CaretRight size={18} color="currentColor" weight="fill" />
        </Button>
      </div>

      {/* Slides  */}
      <div className="w-full h-auto mt-4">
        <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
          {TopProductsTexts.cards.map((card, index) => (
            <div key={index} className="md:px-6 px-3">
              <Card
                cardClass="overflow-hidden shadow-md rounded-lg cursor-pointer group"
                imageAlt={card.title}
                imageSrc={renderTopProducts(index)}
                imageWrapperClass="w-full h-[250px] overflow-hidden"
                cover="group-hover:scale-125 transition duration-500 ease"
                textWrapperClass="flex flex-col gap-4 w-full px-5 py-5"
              >
                <div className="flex justify-between items-center">
                  <Text as="h4" className="text-base font-medium text-color3">
                    {card.title}
                  </Text>
                  {/* <Text as="small" className=" text-color3 font-light text-sm">
                    {card.price}
                  </Text> */}
                </div>
                {/* <div className="w-full flex gap-4 items-center text-color3">
                  <Timer size={20} color="currentColor" weight="fill" />
                  <Text as="p" className=" text-color3 font-light text-base">
                    {card.duration}
                  </Text>
                </div> */}
              </Card>
            </div>
          ))}
        </Slider>
      </div>

      <Text
        as="p"
        className="font-light text-base text-color3/80 tracking-widest mt-10"
      >
        {ProductsTexts.firstText}
      </Text>
      <Text
        as="h2"
        className="md:text-4xl text-2xl font-medium capitalize text-color3"
      >
        {ProductsTexts.secondText}
      </Text>

      <div className="w-full h-auto mt-4 flex justify-center items-center flex-wrap">
        {ProductsTexts.cards.map((card, index) => (
          <div key={index} className="md:px-6 px-3 my-4">
            <Card
              cardClass="overflow-hidden shadow-md rounded-lg cursor-pointer group"
              imageAlt={card.title}
              imageSrc={renderProducts(index)}
              imageWrapperClass="w-full h-[250px] overflow-hidden"
              cover="group-hover:scale-125 transition duration-500 ease"
              textWrapperClass="flex flex-col gap-4 w-full px-5 py-5"
            >
              <div className="flex justify-center items-center">
                <Text as="h4" className="text-base font-medium text-color3">
                  {card.title}
                </Text>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopProducts;
