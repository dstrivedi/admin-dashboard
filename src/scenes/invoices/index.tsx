import Header from "../../components/Header";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../data/mockData";
import { Box, Typography } from "@mui/material";

const Invoices = () => {
  const theme: any = useTheme();
  const colors: any = tokens(theme.palette.mode);
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => {
        return (
          <Typography color={colors.greenAccent[500]}>
            ${params.row.cost}
          </Typography>
        );
      },
    },
    { field: "date", headerName: "Date", flex: 1 },
  ];
  return (
    <Box sx={{ m: "20px" }}>
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.primary[400],
            borderBottom: "none",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.primary[400],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataInvoices}
          columns={columns}
        ></DataGrid>
      </Box>
    </Box>
  );
};

export default Invoices;
