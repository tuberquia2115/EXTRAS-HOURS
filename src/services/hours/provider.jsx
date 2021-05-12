import React from "react";
import { HoursContext } from "../../context";
import { useStateContainer } from "./actions";

const initialState = {
  hours: 0,
  valueHoursExtras: 0,
  ValuesHoursDiurna: 0,
  ValueHoursNoturno: 0,
};
export const HoursProvider = ({ children }) => {
  const contextValue = useStateContainer(initialState);

  return (
    <HoursContext.Provider value={contextValue}>
      {children}
    </HoursContext.Provider>
  );
};
