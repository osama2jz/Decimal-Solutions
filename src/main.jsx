import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: "Poppins, sans-serif",
          colors: {
            purple: [
              "#F8F0FC",
              "#F3D9FA",
              "#EEBEFA",
              "#E599F7",
              "#DA77F2",
              "#CC5DE8",
              "#BE4BDB",
              "#AE3EC9",
              "#9C36B5",
              "#9C36B5",
            ],
            container: ["#F8F9FA"],
          },
          primaryColor: "purple",
          globalStyles: (theme) => ({
            ".mantine-Modal-title": {
              margin: "auto",
              fontWeight: "bold",
              color: "rgb(0,0,0,0.5)",
            },
          }),
        }}
      >
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
