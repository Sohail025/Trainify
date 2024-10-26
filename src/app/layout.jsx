"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { MuiMainPart } from "@/components/MUIStyled/mui-layout-components";
import fileTheme from "../theme/theme";
import { Stack } from "@mui/material";
import { Provider } from "react-redux";
import store from "@/store/store";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <Provider store={store}>
          <AppRouterCacheProvider>
            <ThemeProvider theme={fileTheme}>
              <Stack direction={"row"}>
                <Sidebar></Sidebar>
                <MuiMainPart>
                  <Header></Header>
                  <Stack sx={{ mx: 7 }}>{children}</Stack>
                </MuiMainPart>
              </Stack>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </Provider>
      </body>
    </html>
  );
}
/*

*/
