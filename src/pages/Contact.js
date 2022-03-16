import React, { useContext, useState, useEffect } from "react";
import Decoration from "../components/Decoration";
import { Data } from "../context/DataContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Axios from "axios";
toast.configure();
function Contact() {
  const [state, setstate] = useState({
    email: "",
    subject: "",
    name: "",
    message: "",
  });
  useEffect(() => {
    document.title = "Contact";
  }, []);
  const handleChange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, subject, name, message } = state;
    if (!email || !subject || !name || !message) {
      toast.error("all field are required", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      return 0;
    } else if (email) {
      if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        toast.error("invalid email", {
          position: toast.POSITION.BOTTOM_CENTER,
        });

        return 0;
      }
    }

    const res = await Axios.post("/api/mail", state);
    toast.success(res.data, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    setstate({
      email: "",
      subject: "",
      name: "",
      message: "",
    });
  };
  const data = useContext(Data).data;
  return (
    <div className="section-contact">
      <Decoration />
      <div className="contact">
        <h2 className="heading-secondary">Contact</h2>
        <div className="contact-content">
          <form action="" className="form">
            <h3 className="form__heading">GEt in touch</h3>
            <div className="form__group">
              <input
                type="text"
                className="form__input"
                id="name"
                name="name"
                onChange={(e) => handleChange(e)}
                value={state.name}
              />
              <label htmlFor="name" className="form__label">
                enter your name*
              </label>
            </div>
            <div className="form__group">
              <input
                type="text"
                className="form__input"
                id="email"
                name="email"
                onChange={(e) => handleChange(e)}
                value={state.email}
              />
              <label htmlFor="name" className="form__label">
                enter your email*
              </label>
            </div>
            <div className="form__group">
              <input
                type="text"
                className="form__input"
                id="subject"
                name="subject"
                onChange={(e) => handleChange(e)}
                value={state.subject}
              />
              <label htmlFor="subject" className="form__label">
                enter your Subject*
              </label>
            </div>
            <div className="form__group">
              <textarea
                name=""
                id="message"
                cols="30"
                rows="10"
                className="form__area"
                onChange={(e) => handleChange(e)}
                value={state.message}
              ></textarea>
              <label htmlFor="subject" className="form__label">
                enter your Message*
              </label>
            </div>
            <div className="form__controle">
              <a href="" className="btn--primary" onClick={handleSubmit}>
                {" "}
                SEND MAIL{" "}
              </a>
            </div>
          </form>

          <div className="contact-info">
            <div className="card__info">
              <div className="card__icon2">
                <i className="fa fa-phone" aria-hidden="true"></i>
              </div>
              <div className="card__text">
                <div className="card__heading">Phone</div>
                <p>
                  <a
                    href="tel:+216 56476529"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {data[0].contactPhone}
                  </a>
                </p>
              </div>
            </div>
            <div className="card__info">
              <div className="card__icon2">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
              </div>
              <div className="card__text">
                <div className="card__heading">Email</div>
                <p>
                  -{" "}
                  <a
                    href="mailto:sekrihoussem.work@gmail.com"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    sekrihoussem.work@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="card__info">
              <div className="card__icon2">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <div className="card__text">
                <div className="card__heading">Adress</div>
                <p>
                  {" "}
                  <span>{data[0].contactAdress}</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
