import { Box, Button, Stack, useTheme, Typography } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { Outlet } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { PATH_DASH } from "../../routes/path";

export default function Navbars() {
  const [input, setInput] = useState("");
  const theme = useTheme();
  const buttonNames = [
    { name: "Dashboard", image: "/assets/images/Slice.png" },
    { name: "Finance", image: "/assets/images/Invoice.png" },
    { name: "Orders", image: "/assets/images/Shopping Cart.png" },
    { name: "Products", image: "/assets/images/Basket.png" },
    { name: "Sales", image: "/assets/images/Profitability.png" },
    { name: "Users", image: "/assets/images/User Account.png" },
    { name: "Report", image: "/assets/images/Document.png" },
    { name: "Help & Support", image: "/assets/images/Help.png" },
    { name: "Settings", image: "/assets/images/Settings.png" },
  ];
  return (
    <>
      <Box sx={{ display: "flex", height: "100vh" }}>
        {/* Sidebar - 20% */}
        <Box
          sx={{
            width: "20%",
            bgcolor: "#235347",
            borderRadius: "20px",
            margin: 2,
            height: "100vh",
            position: "fixed", // Make it fixed
            left: 0,
            top: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 1000, // Optional: keeps it on top
          }}
        >
          <Button
            disableElevation
            disableFocusRipple
            disableRipple
            disableTouchRipple
            sx={{
              margin: 3,
              fontSize: "1.5rem",
              color: "#FFFFFF",
              backgroundColor: "transparent",
            }}
            endIcon={
              <img
                src="/assets/images/Positive Dynamic.png"
                alt="Logo"
                style={{ width: 50, height: 40 }}
              />
            }
          >
            Excel Analytics
          </Button>
          {/* Add your vertical nav content here */}
          {buttonNames.map((button, index) => {
            const pathMap = {
              Dashboard: PATH_DASH.dashboard,
              Finance: PATH_DASH.finance,
              Orders: PATH_DASH.orders,
              // add others here...
            };
            return (
              <Button
                key={index}
                component={NavLink}
                to={pathMap[button.name] || "/"}
                startIcon={
                  <img
                    src={button.image}
                    alt={button.name}
                    style={{ width: 24, height: 24 }}
                  />
                }
                disableElevation
                sx={{
                  marginTop: 2,
                  backgroundColor: "transparent",
                  color: "#FFFFFF",
                  borderRadius: "25px",
                  "&.active": {
                    backgroundColor: "#8EB69B",
                    color: "#235347",
                  },
                  "&:hover": {
                    backgroundColor: "#8EB69B",
                    color: "#235347",
                  },
                }}
              >
                {button.name}
              </Button>
            );
          })}
          ;
        </Box>

        {/* Main Content - 80% */}
        <Box sx={{ width: "80%", padding: 2, marginLeft: "20%" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ margin: 1 }}
          >
            {/* Search */}
            <Stack sx={{ display: { xs: "none", md: "block" } }}>
              <Button
                variant="contained"
                startIcon={<SearchIcon />}
                sx={{
                  backgroundColor: "#CECECE",
                  borderRadius: "10px",
                  color: theme.palette.grey[900],
                  width: "170px",
                }}
                disableElevation
                disableRipple
              >
                <input
                  type="text"
                  placeholder="Search Here"
                  style={{
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    width: "90px",
                    color: theme.palette.grey[100],
                  }}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              </Button>
            </Stack>

            {/* LogIn */}
            <Stack>
              <Button
                endIcon={<PersonIcon />}
                sx={{ color: "#000000", background: "transparent" }}
              >
                <Typography>LogIn</Typography>
              </Button>
            </Stack>
          </Stack>

          {/* Main section content below if needed */}
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
