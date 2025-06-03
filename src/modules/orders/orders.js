import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  Divider,
} from "@mui/material";

// Summary data
const orderSummary = [
  { label: "Total Orders", value: 1200, color: "#2196f3" },
  { label: "Pending Orders", value: 150, color: "#ff9800" },
  { label: "Shipped Orders", value: 950, color: "#4caf50" },
  { label: "Cancelled Orders", value: 100, color: "#f44336" },
];

// Table data
const orders = [
  {
    id: "#ORD1001",
    customer: "Ankit Sharma",
    date: "2025-06-01",
    status: "Pending",
    total: "₹4,500",
  },
  {
    id: "#ORD1002",
    customer: "Priya Verma",
    date: "2025-05-31",
    status: "Shipped",
    total: "₹3,200",
  },
  {
    id: "#ORD1003",
    customer: "Rahul Singh",
    date: "2025-05-30",
    status: "Cancelled",
    total: "₹1,800",
  },
  {
    id: "#ORD1004",
    customer: "Sneha Gupta",
    date: "2025-05-29",
    status: "Shipped",
    total: "₹6,750",
  },
];

const statusColor = {
  Pending: "warning",
  Shipped: "success",
  Cancelled: "error",
};

export default function Orders() {
  return (
    <Box sx={{ p: 4, backgroundColor: "#f9fafb", minHeight: "100vh" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 4, color: "#235347", textAlign: "center" }}
      >
        Orders Dashboard
      </Typography>

      {/* Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {orderSummary.map(({ label, value, color }, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                borderRadius: 3,
                textAlign: "center",
                bgcolor: color,
                color: "#fff",
                boxShadow: `0 4px 20px ${color}99`,
              }}
            >
              <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
                {label}
              </Typography>
              <Typography variant="h5" fontWeight="bold" sx={{ mt: 1 }}>
                {value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Orders Table */}
      <Paper elevation={4} sx={{ borderRadius: 3, p: 3 }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ mb: 2, color: "#235347" }}
        >
          Recent Orders
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#235347" }}>
              <TableCell sx={{ color: "#fff" }}>Order ID</TableCell>
              <TableCell sx={{ color: "#fff" }}>Customer</TableCell>
              <TableCell sx={{ color: "#fff" }}>Date</TableCell>
              <TableCell sx={{ color: "#fff" }}>Status</TableCell>
              <TableCell sx={{ color: "#fff", textAlign: "right" }}>
                Total
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} hover>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <Chip
                    label={order.status}
                    color={statusColor[order.status]}
                    variant="outlined"
                  />
                </TableCell>
                <TableCell sx={{ textAlign: "right", fontWeight: "bold" }}>
                  {order.total}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}
