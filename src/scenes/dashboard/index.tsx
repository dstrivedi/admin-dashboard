import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <Box sx={{ m: "20px" }}>
      <Box display="flex" justifyContent="space-between">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
    </Box>
  );
};

export default Dashboard;
