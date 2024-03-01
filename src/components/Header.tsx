import { Box, Typography } from "@mui/material";
import React from "react";
import { tokens } from "../theme";
import { useTheme } from "@emotion/react";

type HeadingProps = {
  title: string;
  subtitle: string;
};

const Header = ({ title, subtitle }: HeadingProps) => {
  const theme: any = useTheme();
  const colors: any = tokens(theme.palette.mode);
  return (
    <Box sx={{ mb: "30px" }}>
      <Typography
        variant="h2"
        fontWeight="bold"
        sx={{ mb: "5px" }}
        color={colors.grey[100]}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
