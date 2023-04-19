import { AppShell, Footer, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import MyHeeader from "../Header/index";
import MyFooter from "../Footer/index";

const Layout = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        root: {
          width: "100%",
        },
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
          padding: 0,
        },
      }}
      header={<MyHeeader />}
      footer={<MyFooter />}
    >
      <Outlet />
    </AppShell>
  );
};
export default Layout;
