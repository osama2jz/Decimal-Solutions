import { Container, Flex, Text, useMantineTheme } from "@mantine/core";
import { Mail, Phone } from "tabler-icons-react";
import fb from "../../assets/fb.svg";
import ig from "../../assets/ig.svg";
import li from "../../assets/li.svg";
import Button from "../Button/Button";
import { useStyles } from "./styles";

const TopHeader = () => {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  return (
    <Container fluid px="xl" className={classes.main}>
      <Flex
        gap={"lg"}
        p={"sm"}
        mx="xl"
        justify={"space-between"}
        align={"center"}
      >
        <Flex gap="50px">
          <Flex gap="sm">
            <Phone color={theme.primaryColor} />
            <Text>+92 345 5893337, +92 300 4257414</Text>
          </Flex>
          <Flex gap="sm">
            <Mail color={theme.primaryColor} />
            <Text>info@decimalsolutions.com</Text>
          </Flex>
        </Flex>
        <Flex gap="sm">
          <img src={fb} className={classes.img} />
          <img src={ig} className={classes.img} />
          <img src={li} className={classes.img} />
          <Button label={"Contact Us"} width={"200px"} />
        </Flex>
      </Flex>
    </Container>
  );
};
export default TopHeader;
