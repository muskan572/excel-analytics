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
} from "@mui/material";

const financeSummary = [
  { label: "Total Revenue", value: "₹12,50,000", color: "#8EB69B" },
  { label: "Expenses", value: "₹5,75,000", color: "#FFB74D" },
  { label: "Profit", value: "₹6,75,000", color: "#81C784" },
  { label: "Outstanding", value: "₹1,25,000", color: "#E57373" },
];

const transactions = [
  {
    id: 1,
    date: "2025-06-01",
    desc: "Client Payment",
    amount: "₹1,00,000",
    type: "Credit",
  },
  {
    id: 2,
    date: "2025-06-01",
    desc: "Office Rent",
    amount: "₹45,000",
    type: "Debit",
  },
  {
    id: 3,
    date: "2025-05-30",
    desc: "Utilities",
    amount: "₹12,500",
    type: "Debit",
  },
  {
    id: 4,
    date: "2025-05-29",
    desc: "New Project Revenue",
    amount: "₹3,50,000",
    type: "Credit",
  },
];

export default function Finance() {
  return (
    <Box>
      {/* Page Header */}
      <Typography
        variant="h4"
        sx={{ mb: 3, color: "#235347", fontWeight: "bold" }}
      >
        Finance Overview
      </Typography>

      {/* Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {financeSummary.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={3}
              sx={{
                padding: 2,
                backgroundColor: item.color,
                borderRadius: 3,
                color: "#235347",
                fontWeight: 600,
              }}
            >
              <Typography variant="subtitle1">{item.label}</Typography>
              <Typography variant="h6">{item.value}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Transaction Table */}
      <Paper elevation={3} sx={{ borderRadius: 3, p: 2 }}>
        <Typography
          variant="h6"
          sx={{ mb: 2, color: "#235347", fontWeight: "bold" }}
        >
          Recent Transactions
        </Typography>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#235347" }}>
              <TableCell sx={{ color: "#FFFFFF" }}>Date</TableCell>
              <TableCell sx={{ color: "#FFFFFF" }}>Description</TableCell>
              <TableCell sx={{ color: "#FFFFFF" }}>Amount</TableCell>
              <TableCell sx={{ color: "#FFFFFF" }}>Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((txn) => (
              <TableRow key={txn.id}>
                <TableCell>{txn.date}</TableCell>
                <TableCell>{txn.desc}</TableCell>
                <TableCell>{txn.amount}</TableCell>
                <TableCell
                  sx={{
                    color: txn.type === "Credit" ? "#388E3C" : "#D32F2F",
                    fontWeight: 600,
                  }}
                >
                  {txn.type}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}
