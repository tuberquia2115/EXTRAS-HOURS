import React, { useContext } from "react";
import { Brightness7Rounded, Brightness2Rounded } from "@material-ui/icons";
import {
  AppBar,
  Toolbar,
  Typography,
  Switch,
  makeStyles,
} from "@material-ui/core";
import { HoursContext, ThemeContext } from "../../context";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));
export const Header = () => {
  const {data, mutations} = useContext(HoursContext);

  console.log("data", data);
  console.log("mutrations", mutations);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary" elevation={false}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Horas - Extras
          </Typography>
          <ThemeContext.Consumer>
            {({ changeTypeTheme }) => (
              <Switch
                checkedIcon={<Brightness2Rounded color="error" />}
                onChange={(e) => changeTypeTheme(e.target.checked)}
                edge="end"
                icon={<Brightness7Rounded color="secondary" />}
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            )}
          </ThemeContext.Consumer>
        </Toolbar>
      </AppBar>
    </div>
  );
};
