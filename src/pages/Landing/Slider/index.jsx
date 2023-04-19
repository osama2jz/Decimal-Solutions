import { Carousel } from "@mantine/carousel";
import { Image, Text, createStyles } from "@mantine/core";
import React from "react";
import Slide1 from "../../../assets/images/Slide1.png";
import Slide2 from "../../../assets/images/Slide2.png";
import Slide3 from "../../../assets/images/Slide3.png";
import Slide4 from "../../../assets/images/Slide4.png";

const useStyles = createStyles((theme) => ({
  text: {
    color: "white",
    fontSize: "clamp(0.8rem, 3vw, 3.5rem)",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
}));

const CustomSlide = ({ image, children }) => {
  return (
    <>
      <Image src={image} alt="1" fit="cover" />
      <div
        style={{
          position: "absolute",
          top: 0,
          width: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginLeft: "5%",
        }}
      >
        {children}
      </div>
    </>
  );
};

const Slider = () => {
  const { classes } = useStyles();

  return (
    <Carousel withIndicators>
      <Carousel.Slide
        style={{
          position: "relative",
        }}
      >
        <CustomSlide image={Slide1}>
          <Text className={classes.text}>Welcome to</Text>
          <Text className={classes.text}>Decimal Solutions</Text>
        </CustomSlide>
      </Carousel.Slide>
      <Carousel.Slide>
        <CustomSlide image={Slide2}>
          <Text className={classes.text}>Mobile app</Text>
          <Text className={classes.text}>development by</Text>
          <Text className={classes.text}>professionals</Text>
        </CustomSlide>
      </Carousel.Slide>
      <Carousel.Slide>
        <CustomSlide image={Slide3}>
          <Text className={classes.text}>Web Development</Text>
          <Text className={classes.text}>quality & cost-effective</Text>
        </CustomSlide>
      </Carousel.Slide>
      <Carousel.Slide>
        <CustomSlide image={Slide4}>
          <Text className={classes.text}>Best erp solutions</Text>
          <Text className={classes.text}>for online business</Text>
        </CustomSlide>
      </Carousel.Slide>
    </Carousel>
  );
};

export default Slider;
