import {
  Container,
  Flex,
  SimpleGrid,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { Mail, Phone } from "tabler-icons-react";
import fb from "../../assets/fb.svg";
import ig from "../../assets/ig.svg";
import li from "../../assets/li.svg";
import Button from "../Button/Button";
import { useStyles } from "./styles";
import { useMediaQuery } from "@mantine/hooks";

const TopHeader = () => {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const isTab = useMediaQuery("(max-width: 1100px)");
  const isMobile = useMediaQuery("(max-width: 760px)");
  return (
    <Container fluid={true} px="xl" className={classes.main}>
      <Flex
        gap={"lg"}
        p={"sm"}
        mx="xl"
        justify={"space-between"}
        align={"center"}
        direction={isTab ? "column" : "row"}
      >
        <SimpleGrid
          cols={1}
          breakpoints={[
            { minWidth: "sm", cols: 2 },
          ]}
          // spacing="50px"
        >
          <Flex gap="sm">
            <Phone color={theme.primaryColor} size={isMobile?'18px':'24px'}/>
            <Text fz={isMobile?'12px':'16px'}>+92 345 5893337, +92 300 4257414</Text>
          </Flex>
          <Flex gap="sm">
            <Mail color={theme.primaryColor} size={isMobile?'18px':'24px'}/>
            <Text fz={isMobile?'12px':'16px'}>info@decimalsolutions.com</Text>
          </Flex>
        </SimpleGrid>
        <Flex gap="sm">
          <img src={fb} className={classes.img} width={isMobile?"50px":'60px'}/>
          <img src={ig} className={classes.img} width={isMobile?"50px":'60px'}/>
          <img src={li} className={classes.img} width={isMobile?"50px":'60px'}/>
          <Button label={"Contact Us"} width={isMobile?"150px":"200px"} />
        </Flex>
      </Flex>
    </Container>
  );
};
export default TopHeader;
