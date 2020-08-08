/** @jsx jsx */
import React from "react";
import { jsx, Text } from "theme-ui";
import theme from "../../theme";

const AppFooter = () => {
  return (
    <footer
      sx={{
        display: "flex",
        width: "100%",
        flexWrap: "wrap",
        flexDirection: "column",
        padding: "50px",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        variant: "styles.footer",
        backgroundColor: (theme) => theme.colors.text,
        color: (theme) => theme.colors.background,
      }}
    >
      <Text
        variant="code"
        sx={{ textAlign: "center", margin: "20px", marginTop: "30px", marginBottom: "10px" }}
      >
        Copyright © PANDICA | Sva prava zadržana, zabranjeno je kopiranje fotografija, tekstova i
        delova ili web sajta u celosti
      </Text>

      <div sx={{ p: 2, margin: "20px" }}>
        © 2020{" "}
        <a
          href="https://www.linkedin.com/in/ranko-ostojic-front-end-developer/"
          target="_blank"
          sx={{
            cursor: "pointer",
            ":hover": {
              color: (theme) => theme.colors.primary,
            },
          }}
        >
          Ranko Ostojić
        </a>
      </div>
    </footer>
  );
};

export default AppFooter;
