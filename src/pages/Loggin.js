import React, { Fragment, useEffect, useContext, useState } from "react";
import Particles from "../components/Particule";
import { Redirect } from "react-router-dom";
import Decoration from "../components/Decoration";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Data } from "../context/DataContext";
import Axios from "axios";
toast.configure();
function Loggin() {
  const [state, setstate] = useState();
  const loggin = useContext(Data).loggin;
  const setloggin = useContext(Data).setloggin;
  const tokenLoggin = useContext(Data).tokenLoggin;
  useEffect(() => {
    document.title = "Loggin";
  }, []);
  if (loggin.isLoggin) {
    return <Redirect to="/admin" />;
  }

  const handleChange = (e) => {
    setstate({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post("/api/admin", state);
      toast.success("Loggin with succes", {
        position: toast.POSITION.BOTTOM_CENTER,
      });

      localStorage.setItem("cvToken", res.data.token);

      tokenLoggin();
      setloggin({
        ...loggin,
        isLoggin: true,
      });
    } catch (error) {
      toast.error("invalid credentails", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      console.log(error.msg);
    }
  };
  return (
    <Fragment>
      <Particles />
      <div className="section-home h-flex-center">
        <div className="text-box h-text-center">
          <form onSubmit={(e) => handleSubmit(e)} className="form__login">
            <span
              className="h-text-center heading-3rd"
              style={{
                marginBottom: "4rem",
                display: "block",
                marginLeft: "-4rem",
              }}
            >
              loggin
            </span>
            <div className="form__group" style={{ marginBottom: "4rem" }}>
              <label className="form__label"> Email </label>
              <input
                type="text"
                className="form__input"
                name="email"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form__group">
              <label className="form__label"> Password </label>
              <input
                type="password"
                className="form__input"
                name="password"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <button className="btn-loggin" type="submit">
              {" "}
              loggin{" "}
            </button>
          </form>
        </div>
      </div>
      <Decoration />
    </Fragment>
  );
}

export default Loggin;
