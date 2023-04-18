import { Container, Divider, Flex, Text } from "@mantine/core";
import { useStyles } from "./styles";
import fb from "../../assets/fb2.svg";
import ig from "../../assets/ig2.svg";
import li from "../../assets/li2.svg";

const MyFooter = () => {
  const { classes } = useStyles();
  return (
    <Flex
      fluid
      direction={"column"}
      align={"center"}
      justify={"center"}
      gap="xl"
      px="xl"
      className={classes.main}
    >
      <Flex gap={"lg"}>
        <Text className={classes.link}>Home</Text>
        <Text className={classes.link}>Services</Text>
        <Text className={classes.link}>Portfolio</Text>
        <Text className={classes.link}>Our Products</Text>
        <Text className={classes.link}>Careers</Text>
        <Text className={classes.link}>About Us</Text>
        <Text className={classes.link}>Blog</Text>
      </Flex>
      <Text color="white" fw={"bolder"}>
        Contact Us
      </Text>
      <Text color="white">info@decimalsolutions.com</Text>
      <Text color="white">+92 345 5893337, +92 300 4257414</Text>
      <Text color="white">
        office No# 17, 2nd Floor, Zaki Center, I-8 Markaz Islamabad, 44000
      </Text>
      <Flex gap="sm">
        <img src={fb} />
        <img src={ig} />
        <img src={li} />
      </Flex>
      <Divider color="rgb(255,255,255,0.5)" w={"100%"} />
      <Text color="white">Copyright Ⓒ DECIMAL SOLUTIONS All Rights Reserved 2022</Text>
    </Flex>
  );
};
export default MyFooter;
