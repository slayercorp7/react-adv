import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";
import '../03-forms/styles/styles.css';
import logo from "../logo.svg";
import {DynamicForm, FormikAbstraction,FormikBasicPage,FormikComponents,FormikYoupPage,RegisterPage} from '../03-forms/pages';
import { RegisterFormikPage } from '../03-forms/pages/RegisterFormikPage';


export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                RegisterPage
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/registerFormik"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                RegisterFormikPage
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-basic"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik basic
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-youp"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Youp
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-components"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-abstract"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik abstraction
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dynamicForm"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                DynamicForm
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/formik-basic" element={<FormikBasicPage/>} />
          <Route path="/formik-youp" element={<FormikYoupPage/>} />
          <Route path="/formik-components" element={<FormikComponents/>} />
          <Route path="/formik-abstract" element={<FormikAbstraction/>} />
          <Route path="/" element={<h1>home</h1>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/registerFormik" element={<RegisterFormikPage/>} />
          <Route path="/dynamicForm" element={<DynamicForm/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
