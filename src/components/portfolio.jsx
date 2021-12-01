import React from "react";

//import images
import eggplant from "../img/eggplant.png";
import marvel from "../img/marvel.jpg";
import checkout from "../img/checkout.png";
import baggage from "../img/baggage.jpg";
import underthink from "../img/underthinkv3.png";
import crystal from "../img/crystals.jpg";
import hangman from "../img/hangman.png";
import stock from "../img/image1.jpg";
import stock1 from "../img/image2.jpg";
import stock2 from "../img/image3.jpg";
import stock3 from "../img/image4.jpg";
import stock4 from "../img/image5.jpg";
import stock5 from "../img/image6.jpg";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Different websites, apps, and systems I have made
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://jeremygill87.github.io/reacthangman/">
                  <div className="work-img">
                    <img src={hangman} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Hangman</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Classic Hangman game built with React and Bootstrap
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://jeremygill87.github.io/ClickyGame/">
                  <div className="work-img">
                    <img src={eggplant} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Click-A-Dick</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Hilariously Immature Clicking Game using React
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://jeremygill87.github.io/RPS/">
                  <div className="work-img">
                    <img src={marvel} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Marvel Conquest</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Unlicensed (don't sue me!) Marvel Rock-Paper-Scissors game using Javascript and jQuery
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://www.youtube.com/watch?v=KuCyatluYr8&list=PL6A0JK15PZw4ZYtHcLa_mjgEcVeVDosHH">
                  <div className="work-img">
                    <img src={checkout} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Bamazon</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Amazon-style storefront and inventory management system using Node and MySQL.  Video Demonstration with Youtube.
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="">
                  <div className="work-img">
                    <img src={underthink} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Underthink</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Tinder for movies, using JavaScript, jQuery, and an API call to IDMB.</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://jeremygill87.github.io/crystal-clicker/">
                  <div className="work-img">
                    <img src={crystal} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Crystal Clicker</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Math Game.  Click the crystals to reach the total...but don't go over!
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
