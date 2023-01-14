import React, { useState, useEffect } from "react";
import "./Right.css";
import {
  Box,
  IconButton,
  Typography,
  Tooltip,
  Pagination,
  PaginationItem,
  Button,
} from "@mui/material";
import {
  Menu,
  Delete,
  AddCircleOutline,
  SkipNext,
  SkipPrevious,
} from "@mui/icons-material";
import SearchUI from "./UI/SearchUI";
import FilterBtn from "./UI/FilterBtn";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./util/data";

const Right = () => {
  const [data, setData] = useState(rows); // Handle the data before and after search
  const [filter, setFilter] = useState("Filtres"); // Handle the filter type
  const [searchTxt, setSearchTxt] = useState(""); // Handle the search text
  let row = rows.length % 6 === 0 ? rows.length/6 : Math.floor(rows.length/6) +1; 
  const [rowsCount,setRowsCount]=useState(row);
  // handle searchFiltering
  useEffect(() => {
    if (!filter) {
      return;
    }
    const newData = rows.filter((item) => {
      switch (filter) {
        case "Type": {
          return item.type.toLowerCase().includes(searchTxt);
        }
        case "Num de vehicule": {
          return item.numVehicule.toLowerCase().includes(searchTxt);
        }
        case "Matricule": {
          return item.matricule.toLowerCase().includes(searchTxt);
        }
        case "Marque": {
          return item.marque.toLowerCase().includes(searchTxt);
        }
        case "Modéle": {
          return item.modele.toLowerCase().includes(searchTxt);
        }
        case "Puissance": {
          return item.puissance.toLowerCase().includes(searchTxt);
        }
        case "Nb de cheveaux": {
          return item.nbCheveaux.toLowerCase().includes(searchTxt);
        }
        case "Couleur": {
          return item.couleur.toLowerCase().includes(searchTxt);
        }
        case "Annee": {
          return item.annee.toLowerCase().includes(searchTxt);
        }
        default:
          return true;
      }
    });
    setData(newData);
    setRowsCount(newData.length % 6 === 0 ? newData.length/6 : Math.floor(newData.length/6) +1)
  }, [searchTxt,filter]);

  const handleSearchTextChange = (e) => {
    setSearchTxt(e.toLowerCase());
  };
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
            <SearchUI setSearchTxt={handleSearchTextChange} />
            <FilterBtn setFilter={setFilter} filter={filter} />
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
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={6}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          getRowClassName={() => "row-bg"}
          components={{
            Pagination: () => {
              return (
                <Box className="pagination-bottom">
                  <Pagination
                    count={rowsCount}
                    size="small"
                    renderItem={(item) => (
                      <PaginationItem
                        slots={{
                          previous: () => (
                            
                              <SkipPrevious size="small" />
                            
                          ),
                          next: () => (
                            
                              <SkipNext size="small" />
                            
                          ),
                        }}
                        {...item}


                      />
                    )}
                  />
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ color: "#075d8f" }}>
                      Aller a la page
                    </Typography>
                    <Typography
                      sx={{
                        backgroundColor: "#fff",
                        padding: "5px 7px",
                        margin: "0 10px",
                        borderRadius: "7px",
                        border: "2px solid #075d8f",
                      }}
                    >
                      20
                    </Typography>
                    <Button endIcon={<SkipNext />}>Aller</Button>
                  </Box>
                </Box>
              );
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Right;