"use client";

import { Carousel as C } from "flowbite-react";
import SectionWrapper from "../SectionWrapper";
// @ts-ignore
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

export const images: string[] = [
  "add_products",
  "admin_order_accepted",
  "confirm_order_1",
  "confirm_order_2_otp",
  "order_deets",
  "shipment_create",
  "shipping_labels",
];
const flickityOptions = {
  initialIndex: 0,
};

function Carousel() {
  return (
    <div className="pt-12">
      <Flickity
        className={"carousel max-w-2xl md:mx-auto mx-10"} // default ''
        elementType={"div"} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        {images.map((image, idx) => {
          return (
            <img
              key={idx}
              src={`/showcase/${image}.png`}
              className="rounded-lg"
              alt="showcase"
            />
          );
        })}
      </Flickity>
    </div>
  );
}
const CTA = () => {
  return (
    <div>
      <Carousel />
    </div>
  );
};

export default CTA;
