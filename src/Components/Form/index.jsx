import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
  },
  root: {
    border: `1px solid ${theme.palette.secondary.dark}`,
    padding: theme.spacing(3),
    margin: theme.spacing(1),
    borderRadius: "10px",
  },
  title: {
    display: "inline-block",
    color: "transparent",
    backgroundImage: `linear-gradient(43deg, ${theme.palette.secondary.dark} 0%,${theme.palette.secondary.light} 46% ,${theme.palette.secondary.main} 100%)`,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    fontSize: "20px",
    fontWeight: 700,
  },
}));
export const Form = () => {
  const [values, SetValues] = useState({
    hours: 0,
    valueHour: 0,
    schedule: "",
  });
  const classes = useStyles();
  const handleChange = ({ target: { value, name } }) => {
    SetValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.title}>
          Calculando las horas extras
        </Typography>
      </div>
      <form onSubmit={handleSubmit} noValidate className={classes.form}>
        <TextField
          type="number"
          margin="dense"
          variant="outlined"
          color="primary"
          label="Horas Realizadas"
          name="hours"
        />
        <TextField
          type="number"
          margin="dense"
          variant="outlined"
          color="primary"
          label="Valor por hora"
          name="valueHour"
        />
        <FormGroup row>
          <FormControlLabel
            label="Diurna"
            control={
              <Checkbox
                name="schedule"
                value="diurna"
                checked={Boolean(values.schedule === "diurna")}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            }
          />
          <FormControlLabel
            label="Noturna"
            control={
              <Checkbox
                name="schedule"
                value="noturna"
                checked={Boolean(values.schedule === "noturna")}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            }
          />
        </FormGroup>
        <Button type="submit" color="secondary" variant="contained" fullWidth>
          Submit
        </Button>
      </form>
    </div>
  );
};
