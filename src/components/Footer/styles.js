import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  main: {
    backgroundImage: `url(${
      new URL(`../../assets/footer.svg`, import.meta.url).href
    })`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "500px",
  },
  link: {
    cursor: "pointer",
    color: "white",
    paddingRight: "15px",
    borderRight: "1px solid white",
    ["@media (max-width:800px)"]: {
      fontSize: "12px",
    },
    "&:last-child": {
      cursor: "pointer",
      color: "white",
      border: "none",
    },
  },
}));
