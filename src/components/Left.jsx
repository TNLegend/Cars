import React, { useState } from "react";
import "./Left.css";
import { Box, Typography, IconButton } from "@mui/material";
import {
  Search,
  Dashboard,
  DirectionsCar,
  SupervisedUserCircle,
  AirlineSeatReclineNormal,
  Hiking,
  DateRange,
  LibraryBooks,
  Settings,
} from "@mui/icons-material";

const Left = () => {
  const [position, setPosition] = useState(null);

  const positionChanged = (num) => {
    setPosition(num);
  };
  return (
    <Box className="left">
      <Typography className="logo">LOGO</Typography>
      <Box className="left-icons">
        <div className="rootElm">
          <IconButton
            className={`icon ${position === 1 && "selected"}`}
            onClick={positionChanged.bind(this, 1)}
          >
            <Search fontSize="inherit" />
          </IconButton>
          {position === 1 && <div className="rightelm" />}
        </div>

        <div className="rootElm">
          <IconButton
            className={`icon ${position === 2 && "selected"}`}
            onClick={positionChanged.bind(this, 2)}
          >
            <Dashboard fontSize="inherit" />
          </IconButton>
          {position === 2 && <div className="rightelm" />}
        </div>

        <div className="rootElm">
          <IconButton
            className={`icon ${position === 3 && "selected"}`}
            onClick={positionChanged.bind(this, 3)}
          >
            <DirectionsCar fontSize="inherit" />
          </IconButton>
          {position === 3 && <div className="rightelm" />}
        </div>

        <div className="rootElm">
          <IconButton
            className={`icon ${position === 4 && "selected"}`}
            onClick={positionChanged.bind(this, 4)}
          >
            <SupervisedUserCircle fontSize="inherit" />
          </IconButton>
          {position === 4 && <div className="rightelm" />}
        </div>

        <div className="rootElm">
          <IconButton
            className={`icon ${position === 5 && "selected"}`}
            onClick={positionChanged.bind(this, 5)}
          >
            <AirlineSeatReclineNormal fontSize="inherit" />
          </IconButton>
          {position === 5 && <div className="rightelm" />}
        </div>

        <div className="rootElm">
          <IconButton
            className={`icon ${position === 6 && "selected"}`}
            onClick={positionChanged.bind(this, 6)}
          >
            <Hiking fontSize="inherit" />
          </IconButton>
          {position === 6 && <div className="rightelm" />}
        </div>

        <div className="rootElm">
          <IconButton
            className={`icon ${position === 7 && "selected"}`}
            onClick={positionChanged.bind(this, 7)}
          >
            <DateRange fontSize="inherit" />
          </IconButton>
          {position === 7 && <div className="rightelm" />}
        </div>

        <div className="rootElm">
          <IconButton
            className={`icon ${position === 8 && "selected"}`}
            onClick={positionChanged.bind(this, 8)}
          >
            <LibraryBooks fontSize="inherit" />
          </IconButton>
          {position === 8 && <div className="rightelm" />}
        </div>

        <div className="rootElm">
          <IconButton
            className={`icon ${position === 9 && "selected"}`}
            onClick={positionChanged.bind(this, 9)}
          >
            <Settings fontSize="inherit" />
          </IconButton>
          {position === 9 && <div className="rightelm" />}
        </div>
      </Box>
    </Box>
  );
};

export default Left;