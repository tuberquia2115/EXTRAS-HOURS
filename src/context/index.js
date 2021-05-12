import {createContext} from 'react';
const HoursContext = createContext();
const ThemeContext = createContext();
HoursContext.displayName = "hoursContext";
ThemeContext.displayName = "ThemeContext";

export {
    HoursContext,
    ThemeContext
}