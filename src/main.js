import "./style.scss";
import "./components/header/header";
import "./components/filters/filters";
import "./components/sorting/sorting";
import "./components/slider/slider";

import colors from "../colors.json";

import { CardsRender } from "./components/product-card/product-card";

CardsRender(colors);

// console.log(window.innerWidth)
