import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersoneOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlined from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import Item from "./Item";

const SidebarPanel = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .ps-sidebar-root": {
          border: "none !important",
        },
        "& .ps-sidebar-container": {
          background: `${colors.primary[400]} !important`,
        },
        "& .ps-menu-label a": {
          color: `${colors.primary[100]} !important`,
          textDecoration: "none !important",
        },
        "& .ps-menu-button:hover, .ps-menu-label a:hover": {
          color: `${colors.blueAccent[600]} !important`,
          backgroundColor: "transparent !important",
        },
        "& .ps-active, .ps-active a": {
          color: `${colors.blueAccent[600]} !important`,
          backgroundColor: "transparent !important",
        },
      }}
    >
      <Sidebar collapsed={isCollapsed}>
        <Menu>
          {/* Logo and menu icon */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* User */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/profile.webp`}
                  style={{ cursor: "pointer", borderRadius: "50px" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Drashti
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Admin
                </Typography>
              </Box>
            </Box>
          )}

          {/* Menu Items */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              colors={colors}
            />

            {/* Data */}
            {!isCollapsed && (
              <Typography
                variant="h6"
                color={colors.grey[100]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Data
              </Typography>
            )}
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              colors={colors}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              colors={colors}
            />
            <Item
              title="Invoice Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              colors={colors}
            />

            {/* Pages */}
            {!isCollapsed && (
              <Typography
                variant="h6"
                sx={{ m: "15px 0 5px 20px" }}
                color={colors.grey[100]}
              >
                Pages
              </Typography>
            )}
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersoneOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              colors={colors}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlined />}
              selected={selected}
              setSelected={setSelected}
              colors={colors}
            />
            <Item
              title="FAQ"
              to="/faq"
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              colors={colors}
            />

            {/* Charts */}
            {!isCollapsed && (
              <Typography
                variant="h6"
                color={colors.grey[100]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Charts
              </Typography>
            )}
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              colors={colors}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              colors={colors}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              colors={colors}
            />
            <Item
              title="Geography Chart"
              to="/geo"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              colors={colors}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SidebarPanel;
