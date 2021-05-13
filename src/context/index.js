import {createContext} from 'react';
const HoursContext = createContext();
const ThemeContext = createContext();
const CartContext = createContext();
CartContext.displayName = "CartContext";
HoursContext.displayName = "hoursContext";
ThemeContext.displayName = "ThemeContext";

export {
    HoursContext,
    ThemeContext,
    CartContext
}