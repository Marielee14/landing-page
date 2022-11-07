import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "black",
        color: "white",
      },
    
    },
  },

  fonts: {
    body: ` "Aldrich", sans-serif; `, // 만약 font를 받아 오는것을 실패했을 때는 sans-serif를 써라. (뒤에 줄줄이 작성해 줄 수 있음.)
    heading: `"Aldrich", sans-serif;  `,
  },
});

export default theme;
