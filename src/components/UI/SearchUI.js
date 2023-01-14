import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const SearchUI = ({ setSearchTxt }) => {
  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1 },
        borderBottom: "2px #2dc3b6 solid",
        padding: "0px 40px",
        borderBottomLeftRadius: "40px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <SearchIcon sx={{ color: "action.active", mr: 5, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label="Recherche"
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          sx={{ color: "#0177ba" }}
          onChange={(e) => setSearchTxt(e.target.value)}
        />
      </Box>
    </Box>
  );
};

export default SearchUI;