import { Carousel } from "@mantine/carousel";
import { Button, Image, Text, createStyles } from "@mantine/core";
import React from "react";
import Slide1 from "../../../assets/images/Slide1.png";
import Slide2 from "../../../assets/images/Slide2.png";
import Slide3 from "../../../assets/images/Slide3.png";
import Slide4 from "../../../assets/images/Slide4.png";
import SendIcon from "../../../assets/send-icon.png";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  container: {
    position: "absolute",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "5%",
    bottom: "33%",

    ["@media (max-width: 1000px)"]: {
      bottom: "25%",
    },
  },
  text: {
    color: "white",
    fontSize: "clamp(0.8rem, 3vw, 3.5rem)",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  button: {
    width: "clamp(100px, 20vw, 250px)",
    fontSize: "clamp(0.6rem, 2vw, 1.655rem)",
    height: "clamp(20px, 6vw, 80px)",
    width: "clamp(120px, 25vw, 335px)",
    color: "#a4238c",
    paddingInline: 0,
    // paddingBlock: "clamp(0.8rem, 3vw, 1.5rem)",
  },
  rightIcon: {
    height: "clamp(16px, 2vw, 30px)",
  },
}));

const CustomSlide = ({ image, children }) => {
  const isTablet = useMediaQuery("(max-width: 1000px)");
  const isMobile = useMediaQuery("(max-width: 600px)");

  const { classes } = useStyles();
  return (
    <>
      <Image src={image} alt="1" fit="cover" />
      <div className={classes.container}>
        <>{children}</>
        <Button
          variant="light"
          className={classes.button}
          radius={"md"}
          rightIcon={
            <Image
              src={SendIcon}
              alt="1"
              fit="cover"
              height={isMobile ? 16 : isTablet ? 20 : 30}
            />
          }
        >
          Get A Quote
        </Button>
      </div>
    </>
  );
};

const Slider = () => {
  const { classes } = useStyles();

  return (
    <Carousel withIndicators loop>
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
