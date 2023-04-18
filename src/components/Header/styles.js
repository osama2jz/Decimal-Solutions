import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  main: {
    borderBottom: `1px solid ${theme.primaryColor}`,
  },
  img: {
    borderLeft: `1px solid ${theme.primaryColor}`,
    paddingInline: "10px",
  },
  link:{
    cursor:'pointer',
    ':hover':{
        color:theme.colors.purple
    }
  }
}));
