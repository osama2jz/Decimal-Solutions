import { Text, Container, Flex } from "@mantine/core";
import logo from "../../assets/logo.svg";
import { useStyles } from "./styles";
const BottomHeader = () => {
  const { classes } = useStyles();
  return (
    <Flex justify={"space-between"} align={"center"} px="70px">
      <img src={logo} width={"150px"} />
      <Flex gap={"lg"}>
        <Text className={classes.link}>Home</Text>
        <Text className={classes.link}>Services</Text>
        <Text className={classes.link}>Portfolio</Text>
        <Text className={classes.link}>Our Products</Text>
        <Text className={classes.link}>Careers</Text>
        <Text className={classes.link}>About Us</Text>
        <Text className={classes.link}>Blog</Text>
      </Flex>
    </Flex>
  );
};
export default BottomHeader;
