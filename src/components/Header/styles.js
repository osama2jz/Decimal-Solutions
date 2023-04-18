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
  },
  link2:{
    cursor:'pointer',
    borderBottom:`1px solid ${theme.primaryColor}`,
    paddingBottom:'8px',
    ':hover':{
        color:theme.colors.purple
    }
  },
  dropDown:{
    transition:"0.5s ease-in-out"
  }
}));
