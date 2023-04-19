import { Text, Container, Flex, Burger } from "@mantine/core";
import logo from "../../assets/logo.svg";
import { useStyles } from "./styles";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
const BottomHeader = () => {
  const { classes } = useStyles();
  const isMobile = useMediaQuery("(max-width: 900px)");
  const [opened, setOpened] = useState(false);
  return (
    <Container>
      <Flex
        justify={"space-between"}
        align={"center"}
        px={isMobile ? "0px" : "70px"}
      >
        <img src={logo} width={isMobile ? "120px" : "150px"} />
        {isMobile ? (
          <Burger opened={opened} onClick={() => setOpened((o) => !o)} />
        ) : (
          <Flex gap={"lg"}>
            <Text className={classes.link}>Home</Text>
            <Text className={classes.link}>Services</Text>
            <Text className={classes.link}>Portfolio</Text>
            <Text className={classes.link}>Our Products</Text>
            <Text className={classes.link}>Careers</Text>
            <Text className={classes.link}>About Us</Text>
            <Text className={classes.link}>Blog</Text>
          </Flex>
        )}
      </Flex>
      {opened && (
        <Flex mt="sm" gap={"sm"} direction={"column"} className={classes.dropDown}>
          <Text className={classes.link2}>Home</Text>
          <Text className={classes.link2}>Services</Text>
          <Text className={classes.link2}>Portfolio</Text>
          <Text className={classes.link2}>Our Products</Text>
          <Text className={classes.link2}>Careers</Text>
          <Text className={classes.link2}>About Us</Text>
          <Text className={classes.link2}>Blog</Text>
        </Flex>
      )}
    </Container>
  );
};
export default BottomHeader;
