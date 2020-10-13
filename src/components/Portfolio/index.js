import React from "react";

export default function () {
  return (
    <main class="pageContent">
      <div class="colorBlock">
        <span class="title">PORTFOLIO</span>
      </div>
      <div class="portContainer">
        <div class="container">
          {/* <!-- syligen --> */}
          <div class="portfolioCard">
            <div class="card">
              <div class="card-body portCard">
                <div class="row">
                  <div class="col-md-6 col-12">
                    <div class="img-square-wrapper">
                      <div
                        id="carousel-algo"
                        class="carousel slide"
                        data-interval="false"
                      >
                        <ol class="carousel-indicators">
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="0"
                            class="active"
                          ></li>
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="1"
                          ></li>
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="2"
                          ></li>
                        </ol>
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img
                              class="d-block w-100 img-fluid"
                              src={require("../../pics/code.png")}
                              alt="screenshot of codewars account stats"
                            />
                            <div class="carousel-item">
                              <img
                                class="d-block w-100 img-fluid"
                                src={require("../../pics/codeExample.jpg")}
                                alt="Example of a github repo entry"
                              />
                            </div>
                            <div class="carousel-item">
                              <img
                                class="d-block w-100 img-fluid"
                                src={require("../../pics/codewars.jpg")}
                                alt="Shannon's code wars account"
                              />
                            </div>
                          </div>
                          <a
                            class="carousel-control-prev"
                            href="#carousel-algo"
                            role="button"
                            data-slide="prev"
                          >
                            <span
                              class="carousel-control-prev-icon"
                              aria-hidden="true"
                            ></span>
                            <span class="sr-only">Previous</span>
                          </a>
                          <a
                            class="carousel-control-next"
                            href="#carousel-algo"
                            role="button"
                            data-slide="next"
                          >
                            <span
                              class="carousel-control-next-icon"
                              aria-hidden="true"
                            ></span>
                            <span class="sr-only">Next</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-12">
                    <h5 class="card-title">SyliGen</h5>
                    <p class="card-text">
                      This fullstack app is a syllabus generator designed for
                      college professors and currently being used by Arizona
                      State University Faculty. The user friendly fully
                      customizable syllabus creator automatically updates and
                      input university specific language on Title IX, Corona
                      Virus, and other mandatory sections. The final product is
                      an auto formatted pdf and embeddable html versions of the
                      syllabus. SyliGen is created with HTML/CSS, Bootstrap, JS,
                      Node, Express, MySQL. Deployed on Heroku.
                    </p>
                    <a
                      href="https://syligen.herokuapp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="card-link"
                    >
                      Live Site{" "}
                      <img
                        class="leave"
                        src={require("../../pics/leaveSite.png")}
                        alt="leave site icon"
                      />
                    </a>
                    <a
                      href="https://github.com/srsagehorn/syligen"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="card-link"
                    >
                      Github Repo{" "}
                      <img
                        class="leave"
                        src={require("../../pics/leaveSite.png")}
                        alt="leave site icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- notify --> */}
          <div class="portfolioCard">
            <div class="card">
              <div class="card-body portCard">
                <div class="row">
                  <div class="col-md-6">
                    <div class="img-square-wrapper">
                      <div
                        id="carousel-ffl"
                        class="carousel slide"
                        data-interval="false"
                      >
                        <ol class="carousel-indicators">
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="0"
                            class="active"
                          ></li>
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="1"
                          ></li>
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="2"
                          ></li>
                        </ol>
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img
                              class="d-block w-100 img-fluid"
                              src={require("../../pics/fflLogo.png")}
                              alt="portfolio piece"
                            />
                          </div>
                          <div class="carousel-item">
                            <img
                              class="d-block w-100 img-fluid"
                              src={require("../../pics/ffl1.png")}
                              alt="Example of a github repo entry"
                            />
                          </div>
                          <div class="carousel-item">
                            <img
                              class="d-block w-100 img-fluid"
                              src={require("../../pics/ffl2.png")}
                              alt="Shannon's code wars account"
                            />
                          </div>
                        </div>
                        <a
                          class="carousel-control-prev"
                          href="#carousel-ffl"
                          role="button"
                          data-slide="prev"
                        >
                          <span
                            class="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span class="sr-only">Previous</span>
                        </a>
                        <a
                          class="carousel-control-next"
                          href="#carousel-ffl"
                          role="button"
                          data-slide="next"
                        >
                          <span
                            class="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span class="sr-only">Next</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <h5 class="card-title">Notify</h5>
                    <p class="card-text">
                      Notify is a group project created as a neighborhood forum
                      app. Users can log in and select their chicago
                      neighborhood, then post and notify their neighbors or
                      crime, events, lost dogs and much more. Notify was created
                      by HTML/CSS, JS, Node, Express, Handlebars, MySQL, and
                      SVG.
                    </p>
                    <a
                      href="https://pacific-thicket-40936.herokuapp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="card-link"
                    >
                      Live Site{" "}
                      <img
                        class="leave"
                        src={require("../../pics/leaveSite.png")}
                        alt="leave site icon"
                      />
                    </a>

                    <a
                      href="https://github.com/klynch94/Notify"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="card-link"
                    >
                      Github Repo{" "}
                      <img
                        class="leave"
                        src={require("../../pics/leaveSite.png")}
                        alt="leave site icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- coCal --> */}
          <div class="portfolioCard">
            <div class="card">
              <div class="card-body portCard">
                <div class="row">
                  <div class="col-md-6">
                    <div class="img-square-wrapper">
                      <div
                        id="carousel-eei"
                        class="carousel slide"
                        data-interval="false"
                      >
                        <ol class="carousel-indicators">
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="0"
                            class="active"
                          ></li>
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="1"
                          ></li>
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="2"
                          ></li>
                        </ol>
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img
                              class="d-block w-100 img-fluid"
                              src={require("../../pics/eeiLogo.png")}
                              alt="portfolio piece"
                            />
                          </div>
                        </div>
                        <a
                          class="carousel-control-prev"
                          href="#carousel-eei"
                          role="button"
                          data-slide="prev"
                        >
                          <span
                            class="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span class="sr-only">Previous</span>
                        </a>
                        <a
                          class="carousel-control-next"
                          href="#carousel-eei"
                          role="button"
                          data-slide="next"
                        >
                          <span
                            class="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span class="sr-only">Next</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <h5 class="card-title">CollabCal</h5>
                    <p class="card-text">
                      CollabCal is a group project, and social networking meets
                      calendar app. Users can join calendar groups and chat on
                      each event to coordinate car pools or meeting time. Users
                      can also check if they are going or not. CollabCal was
                      made with HTML/CSS, JS, Node, Express, React, MySQL,
                    </p>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      class="card-link"
                    >
                      Live Site coming 9/20!
                    </a>
                    <a
                      href="https://github.com/srsagehorn/project3"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="card-link"
                    >
                      Github
                      <img
                        class="leave"
                        src={require("../../pics/leaveSite.png")}
                        alt="leave site icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- note taker --> */}
          <div class="portfolioCard">
            <div class="card">
              <div class="card-body portCard">
                <div class="row">
                  <div class="col-md-6">
                    <div class="img-square-wrapper">
                      <div
                        id="carousel-seo"
                        class="carousel slide"
                        data-interval="false"
                      >
                        <ol class="carousel-indicators">
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="0"
                            class="active"
                          ></li>
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="1"
                          ></li>
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="2"
                          ></li>
                        </ol>
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img
                              class="d-block w-100 img-fluid"
                              src={require("../../pics/musicnMovies.png")}
                              alt="portfolio piece"
                            />
                          </div>
                          <div class="carousel-item">
                            <img
                              class="d-block w-100 img-fluid"
                              src={require("../../pics/movic.png")}
                              alt="portfolio piece"
                            />
                          </div>
                          <div class="carousel-item">
                            <img
                              class="d-block w-100 img-fluid"
                              src={require("../../pics/movic2.jpg")}
                              alt="portfolio piece"
                            />
                          </div>
                        </div>
                        <a
                          class="carousel-control-prev"
                          href="#carousel-seo"
                          role="button"
                          data-slide="prev"
                        >
                          <span
                            class="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span class="sr-only">Previous</span>
                        </a>
                        <a
                          class="carousel-control-next"
                          href="#carousel-seo"
                          role="button"
                          data-slide="next"
                        >
                          <span
                            class="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span class="sr-only">Next</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <h5 class="card-title">Note Taker</h5>
                    <p class="card-text">
                      Note Taker is a full stack note taking app designed to
                      make creating saving and updating notes easy and user
                      friendly. The note taker is made with HTML/CSS Bootstrap,
                      JS, Node, and Express all deployed on Heroku.
                    </p>
                    <a
                      href="https://note-taker-anator-anator.herokuapp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="card-link"
                    >
                      Visit Application{" "}
                      <img
                        class="leave"
                        src={require("../../pics/leaveSite.png")}
                        alt="leave site icon"
                      />
                    </a>
                    <a
                      href="https://github.com/srsagehorn/noteTaker"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="card-link"
                    >
                      GitHub Repo{" "}
                      <img
                        class="leave"
                        src={require("../../pics/leaveSite.png")}
                        alt="leave site icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- team profile --> */}
          <div class="portfolioCard">
            <div class="card">
              <div class="card-body portCard">
                <div class="row">
                  <div class="col-md-6">
                    <div class="img-square-wrapper">
                      <div
                        id="carousel-cal"
                        class="carousel slide"
                        data-interval="false"
                      >
                        <ol class="carousel-indicators">
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="0"
                            class="active"
                          ></li>
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="1"
                          ></li>
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="2"
                          ></li>
                        </ol>
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img
                              class="d-block w-100 img-fluid"
                              src={require("../../pics/cal.png")}
                              alt="portfolio piece"
                            />
                          </div>
                          <div class="carousel-item">
                            <img
                              class="d-block w-100 img-fluid"
                              src={require("../../pics/calendar.gif")}
                              alt="gif of calendar animation"
                            />
                          </div>
                          <div class="carousel-item">
                            <img
                              class="d-block w-100 img-fluid"
                              src={require("../../pics/calWire.jpg")}
                              alt="gif of calendar animation"
                            />
                          </div>
                        </div>
                        <a
                          class="carousel-control-prev"
                          href="#carousel-cal"
                          role="button"
                          data-slide="prev"
                        >
                          <span
                            class="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span class="sr-only">Previous</span>
                        </a>
                        <a
                          class="carousel-control-next"
                          href="#carousel-cal"
                          role="button"
                          data-slide="next"
                        >
                          <span
                            class="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span class="sr-only">Next</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <h5 class="card-title">
                      Calendar and Scheduling Application
                    </h5>
                    <p class="card-text">
                      Online calendars are becomming the norm for busy
                      professionals but the iCal leaves something to be desired.
                      This app uses the moment.js API to provide real time
                      scheduling. Set reminders, create and check off to-do
                      lists, and create events, with an easy-to-use UI.
                    </p>
                    <a
                      href="https://srsagehorn.github.io/sagehornHW5/"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="card-link"
                    >
                      Visit Application{" "}
                      <img
                        class="leave"
                        src={require("../../pics/leaveSite.png")}
                        alt="leave site icon"
                      />
                    </a>
                    <a
                      href="https://github.com/srsagehorn/sagehornHW5"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="card-link"
                    >
                      Github Repo{" "}
                      <img
                        class="leave"
                        src={require("../../pics/leaveSite.png")}
                        alt="leave site icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
