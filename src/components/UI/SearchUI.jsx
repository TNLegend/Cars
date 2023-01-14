import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const SearchUI = () => {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
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
        />
      </Box>
    </Box>
  );
};

export default SearchUI;