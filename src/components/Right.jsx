import React from "react";
import "./Right.css";
import { Box, IconButton, Typography, Tooltip } from "@mui/material";
import { Menu, Delete, AddCircleOutline } from "@mui/icons-material";
import SearchUI from "./UI/SearchUI";
import FilterBtn from "./UI/FilterBtn";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const Right = () => {
  return (
    <Box className="right">
      {/* Define top right button */}
      <Box className="top-right-btn">
        <IconButton className="icon-btn">
          <Menu />
        </IconButton>
      </Box>
      {/* Define the right top side */}
      <Box className="top-side">
        <Typography className="top-title">Liste des véhicules</Typography>
        <Box className="top-bottom ">
          <Box className="top-bottom-left">
            <SearchUI />
            <FilterBtn />
          </Box>

          <Box className="top-bottom-right">
            <Tooltip title="Supprimer" placement="top-end" arrow>
              <IconButton>
                <Delete style={{ fontSize: "30px", color: "#0177ba" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Ajouter une vehicule" placement="bottom-end" arrow>
              <IconButton>
                <AddCircleOutline
                  style={{ fontSize: "30px", color: "#0177ba" }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Box>
      {/* Define the right bottom side */}
      <Box className="right-bottom">
      
      </Box>
    
    </Box>
  );
};

export default Right;