import {Box} from "@mui/material";

// importing components
import Right from "./components/Right";
import Left from "./components/Left";
import "./App.css"
function App() {
  return (
    <Box className="app">
      <Left/>
      <Right/>
    </Box>
  );
}

export default App;
