import React from "react";
import myImage from "../img/me.jpg";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "85%", value: "85" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "70%", value: "70" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "95%",
          value: "95"
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "NodeJS-skill",
          content: "NodeJS",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "MongoDB_skill",
          content: "MongoDB",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "ExpressJS_skill",
          content: "Express",
          porcentage: "85%",
          value: "80"
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "Athletics",
          content: "Athletics",
          porcentage: "10%",
          value: "10"
        },
        {
          id: "Video_Games",
          content: "Video Games",
          porcentage: "100%",
          value: "100"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "My name is Jeremy Gill and I am a NYC-based full stack web developer, focusing heavily on backend development and database management."
        },
        {
          id: "second-p-about",
          content:
            "My primary passions in the tech world are creating e-commerce systems and platforms, game development, and Y2K compliance.  I also really like dogs."
        },
        {
          id: "third-p-about",
          content:
            "TL;DR: I write awesome code, from front to back and everywhere in between."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
