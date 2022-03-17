import { lazy, LazyExoticComponent } from "react";

type JSXCOMPONENT = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXCOMPONENT> | JSXCOMPONENT;
  name: string;
}

const lazy1 = lazy(() => import(/*webpackChunkName: "LazyPage1" */ "../01-lazyload/pages/LazyPage1"));

const lazy2 = lazy(() => import(/*webpackChunkName: "LazyPage2" */ "../01-lazyload/pages/LazyPage2"));

const lazy3 = lazy(() => import(/*webpackChunkName: "LazyPage3" */ "../01-lazyload/pages/LazyPage3"));

 const routes: Route[] = [
  { to: "/lazy1", path: "lazy1", Component: lazy1, name: "Lazy-1" },
  { to: "/lazy2", path: "lazy2", Component: lazy2, name: "Lazy-2" },
  { to: "/lazy3", path: "lazy3", Component: lazy3, name: "Lazy-3" }
];

export default routes;