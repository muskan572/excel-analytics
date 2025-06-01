import { Stack, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Navbars() {
  return (
    <>
    <Stack>
        <Typography variant="h4">Navbar section</Typography>
        
    </Stack>
    <Outlet />

 </> 
 );
}