import React, { useContext, useEffect } from "react";

import Decoration from "../components/Decoration";
import { Data } from "../context/DataContext";
function Skills() {
  const data = useContext(Data).data;
  const education = useContext(Data).education;
  useEffect(() => {
    document.title = "Skills";
  }, []);

  return (
    <div className="section-skills">
      <div className="skills">
        <h2 className="heading-secondary">Skills</h2>
        <h2 className="skills__heading">
          Here are a few technologies I've been working with recently:
        </h2>
        <ul className="skills__list">
          {data[0].skills.map((element, index) => {
            return (
              <li className="skills__item" key={index}>
                {" "}
                <span>
                  {" "}
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                </span>
                {element}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="education">
        <h2 className="heading-secondary">Experience</h2>
        {education.map((element) => {
          return (
            <div className="education__card" key={element._id}>
              <div className="education__time">{element.year}</div>
              <div className="education__info">
                <div className="education__title1"> {element.title} </div>
                <div className="education__title2">
                  {element.desc.map((el) => (
                    <li> {el} </li>
                  ))}{" "}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Decoration />
    </div>
  );
}

export default Skills;
