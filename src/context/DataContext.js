import React, { useEffect, createContext, useState } from "react";
import axios from "axios";
import { GridLoader } from "react-spinners";
import { css } from "@emotion/core";
import Loggin from "../pages/Loggin";

export const Data = createContext();
const override = css`
  display: block;
  margin: 0 auto;
  border-color: green;
  color: green;
`;
function DataContext(props) {
  const [loggin, setloggin] = useState({
    isLoggin: false,
    token: "",
  });
  const [state, setstate] = useState({
    loading: true,
    error: "",
    data: [],
    education: [],
  });
  useEffect(() => {
    const k = localStorage.getItem("cvToken");

    setloggin({
      ...loggin,
      token: k,
    });
    const h = async () => {
      if (loggin.token) {
        try {
          const res = await axios.post("/api/loggin", { token: loggin.token });
          if (res) {
            setloggin({
              ...loggin,
              isLoggin: true,
            });
          }
        } catch (error) {
          localStorage.setItem("cvToken", "");
        }
      }
    };

    h();
  }, [loggin.token]);
  const tokenLoggin = () => {
    const k = localStorage.getItem("cvToken");
    setloggin({
      ...loggin,
      token: k,
    });
  };

  const fetchData = async () => {
    try {
      const data = await axios.get("basic.json");
      const education = await axios.get("education.json");
      const project = await axios.get("project.json");
      setTimeout(() => {
        setstate({
          loading: false,
          error: "",
          data: data.data,
          education: education.data,
          project: project.data,
        });
      });
    } catch (error) {
      setstate({
        loading: false,
        error: error,
        data: [],
      });
    }
  };
  useEffect(() => {
    fetchData();
  }, [state.loading]);
  const data = state.data;
  const education = state.education;
  const project = state.project;

  return (
    <Data.Provider
      value={{
        education,
        data,
        project,
        fetchData,
        loggin,
        setloggin,
        tokenLoggin,
      }}
    >
      {state.loading === false && props.children}
    </Data.Provider>
  );
}

export default DataContext;
