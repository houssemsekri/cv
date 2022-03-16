import React, { useContext, useEffect } from "react";
import Decoration from "../components/Decoration";
import { AiFillGithub, AiOutlineYoutube } from "react-icons/ai";
import { MdOpenInBrowser } from "react-icons/md";
import { Data } from "../context/DataContext";

function Portfolio() {
  const project = useContext(Data).project;
  useEffect(() => {
    document.title = "Projects";
  }, []);
  return (
    <section className="section-project">
      <Decoration />
      <div className="project">
        <h2 className="heading-secondary">Projects</h2>

        <div className="card-project">
          {project.map((element) => {
            return (
              <div className="project__card" key={element._id}>
                {" "}
                <div className="project__image">
                  <a href={element.live ? element.live : ""} target="_blank">
                    <img
                      src={element.image}
                      alt=""
                      className="project__photo"
                      style={{ minHeight: "300px", objectFit: "cover" }}
                    />
                  </a>
                </div>{" "}
                <h3 className="project__heading">{element.desc}</h3>
                <ul className="project__text">
                  {element.teck.map((a, index) => {
                    return (
                      <li key={index}>
                        <span>
                          <i
                            className="fa fa-caret-right"
                            aria-hidden="true"
                          ></i>
                        </span>{" "}
                        {a}
                      </li>
                    );
                  })}
                </ul>
                <div
                  className="div"
                  style={{ textAlign: "center", marginTop: "2rem" }}
                >
                  {element.live ? (
                    <a
                      href={element.live}
                      target="_blank"
                      className="btn-cercle"
                    >
                      <span>
                        <i
                          className="fa fa-eye"
                          aria-hidden="true"
                          style={{ position: "relative", top: "-3px" }}
                        ></i>
                      </span>
                    </a>
                  ) : null}
                  {element.github ? (
                    <a
                      href={element.github}
                      target="_blank"
                      className="btn-cercle"
                    >
                      <AiFillGithub title="view code " />
                    </a>
                  ) : null}

                  {element.youtube ? (
                    <a
                      href={element.youtube}
                      target="_blank"
                      className="btn-cercle"
                    >
                      <AiOutlineYoutube title="youtube demo" />
                    </a>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
