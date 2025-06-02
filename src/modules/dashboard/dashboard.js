import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const salesData = [
  { month: "Jan", sales: 30000 },
  { month: "Feb", sales: 40000 },
  { month: "Mar", sales: 35000 },
  { month: "Apr", sales: 50000 },
  { month: "May", sales: 42000 },
  { month: "Jun", sales: 60000 },
  { month: "Jul", sales: 50640 },
  { month: "Aug", sales: 48000 },
  { month: "Sep", sales: 52000 },
  { month: "Oct", sales: 47000 },
  { month: "Nov", sales: 49000 },
  { month: "Dec", sales: 38000 },
];

const pieData = [
  { name: "Scissors", value: 40 },
  { name: "Forceps", value: 10 },
  { name: "Socks", value: 25 },
  { name: "Wounds", value: 20 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const productRows = [
  {
    name: "Scissors",
    id: "#1005",
    desc: "Hand Operated Tool",
    type: "Surgical",
    price: "$70",
  },
  {
    name: "Forceps",
    id: "#1006",
    desc: "For Grasping Tissue",
    type: "Surgical",
    price: "$300",
  },
  {
    name: "Socks",
    id: "#359",
    desc: "Short White Socks",
    type: "Hosiery",
    price: "$25",
  },
  {
    name: "Wound Retractors",
    id: "#1007",
    desc: "For Retracting and Protecting",
    type: "Surgical",
    price: "$600",
  },
];

export default function Dashboard() {
  return (
    <Box sx={{ padding: 3 }}>
      {/* Top Cards */}
      <Typography variant="h3" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={2}>
        {[
          {
            title: "Total Sales",
            value: "$62,425",
            change: "↑ 50%",
            color: "#6B9080",
          },
          {
            title: "Total Purchases",
            value: "$25,187",
            change: "↓ 30%",
            color: "#A4C3B2",
          },
          {
            title: "Total Paid",
            value: "$10,600",
            change: "↑ 15%",
            color: "#CCE3DE",
          },
          {
            title: "Profits",
            value: "$30,860",
            change: "↑ 45%",
            color: "#EAF4F4",
          },
        ].map((item, i) => (
          <Grid item xs={12} md={3} key={i}>
            <Paper sx={{ padding: 2, backgroundColor: item.color }}>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="h5" fontWeight="bold">
                {item.value}
              </Typography>
              <Typography>{item.change} from last month</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Charts */}
      <Grid container spacing={2} sx={{ marginTop: 3 }}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Sales Report</Typography>
            <LineChart width={600} height={250} data={salesData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#8884d8"
                strokeWidth={2}
              />
            </LineChart>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Most Sales</Typography>
            <PieChart width={250} height={250}>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </Paper>
        </Grid>
      </Grid>

      {/* Product Sales Table */}
      <Box sx={{ marginTop: 3 }}>
        <Paper sx={{ padding: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Product Sales</Typography>
            <Button variant="contained" sx={{ backgroundColor: "#235347" }}>
              Add Product
            </Button>
          </Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell>Product ID</TableCell>
                <TableCell>Product Description</TableCell>
                <TableCell>Product Type</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productRows.map((row, i) => (
                <TableRow key={i}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.desc}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>
                    <Button
                      size="small"
                      sx={{ backgroundColor: "#235347", color: "#FFFFFF" }}
                    >
                      Edit
                    </Button>{" "}
                    |{" "}
                    <Button
                      size="small"
                      sx={{ backgroundColor: "#235347", color: "#FFFFFF" }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Box>
    </Box>
  );
}
