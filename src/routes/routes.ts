import { lazy, LazyExoticComponent } from "react";
import { Nolazy } from "../01-lazyload/pages/Nolazy";


type JSXCOMPONENT = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXCOMPONENT> | JSXCOMPONENT;
  name: string;
}

const LazyLayout  = lazy(() => import(/*webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"));

// const lazy2 = lazy(() => import(/*webpackChunkName: "LazyPage2" */ "../01-lazyload/pages/LazyPage2"));

// const lazy3 = lazy(() => import(/*webpackChunkName: "LazyPage3" */ "../01-lazyload/pages/LazyPage3"));

 const routes: Route[] = [
  { to: "/lazyload/", path: "/lazyload/*", Component: LazyLayout, name: "LazyLayout" },
  { to: "/no-lazy", path: "no-lazy", Component: Nolazy, name: "no-lazy" },
 
];

export default routes;