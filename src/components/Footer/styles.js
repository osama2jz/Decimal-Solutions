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
    ":hover": {
    //   color: theme.colors.purple,
    },
  },
}));
