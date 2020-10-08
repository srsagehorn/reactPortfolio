import React from "react";

export default function () {
  return ( <main class="pageContent">
  <!-- resume -->
  <div class="colorBlock">
    <span class="title">RESUME</span
    ><a href="downloads/res.pdf" download target = "_blank">
      <button type="button"class ="btn btn-outline-secondary" id = "download">
          PDF<i class="fa fa-download"></i> 
        </button>
      </a>
  </div>
  <div class="container resumeContainer">
    <div class="row">
      <!-- <div class="col-md-2">
        <div class="vl"></div>
      </div> -->
      <div class="col-md-12 resume">
        <div class = "box">
        <div class="h6">EDUCATION</div>
        <!-- ASU -->
        <div class="row resBlock">
          <div class="col-md-2 resIcon">
            <img
              class="resPic"
              src="pics/asu.png"
              alt="Arizona State University Logo"
            />
          </div>
          <div class="col-md-10">
            <!-- <p class="dates">
              August 2019 - December 2020
            </p> -->
            <p class="eduHead">Arizona State University <span class = "dates">August 2019 - December 2020</span></p>
            <p class="eduHead2">
              Bachelor of Science in Graphic Information Technology
            </p>
            <p class="info">Primary Focus - Front-End Web Design</p>
            <p class="info">Secondary Focus - Communication Studies</p>
            <p class="info">GPA - 3.91</p>
            <span class="cskill">HTML/CSS</span>
            <span class="cskill">JavaScript</span>
            <span class="gdskill">Photoshop</span>
            <span class="gdskill">Illusttrator</span>
            <span class="gdskill">After Effects</span>
            <span class="gdskill">Premier Pro</span>
            <span class="gdskill">Light Room</span>
          </div>
        </div>
        <!-- northwestern -->
        <div class="row resBlock">
          <div class="col-md-2 resIcon">
            <img
              class="resPic"
              src="pics/nu.png"
              alt="Northwestern University Logo"
            />
          </div>
          <div class="col-md-10">
            <p class="eduHead">Northwestern University <span class="dates">
              April 2020 - October 2020
            </span></p>
            <p class="eduHead2">
              Graduate Certificate - Full Stack Development
            </p>
            <span class="cskill">Python</span>
            <span class="cskill">Java</span>
            <span class="cskill">JavaScript</span>
            <span class="cskill">jQuery</span>
            <span class="cskill">Ajax/APIs</span>
            <span class="cskill">JSON</span>
            <span class="cskill">Bootstrap</span>
            <span class="cskill">Visual Studio</span>
            <span class="cskill">Git/GitHub</span>
            <span class="cskill">MongoDB</span>
            <span class="cskill">HTML/CSS</span>
            <span class="cskill">Node.js</span>
            <span class="cskill">Jest</span>
            <span class="cskill">MySQL</span>
            <span class="cskill">React</span>
          </div>
        </div>
        <!-- Nebraska -->
        <div class="row resBlock">
          <div class="col-md-2 resIcon">
            <img
              class="resPic"
              src="pics/nebraska.png"
              alt="University of Nebraska - Lincoln"
            />
          </div>

          <div class="col-md-10 neb">
            <p class="eduHead">University of Nebraska - Lincoln <span class="dates">
              August 2017 - May 2019
            </span></p>
          </div>
        </div>
      </div>
      <div class = "box">
        <div class="h6">INVOLVEMENT & AWARDS</div>
        <div class="row resBlock">
          <div class="col-md-2 resIcon">
            <img
              class="resPic"
              src="pics/asu.png"
              alt="Arizona State University Logo"
            />
          </div>
          <div class="col-md-10">
            <p class="eduHead">Dean's List <span class="dates">
              August 2019 - December 2020
            </span></p>
            <p class="eduHead2">Arizona State University</p>
          </div>
        </div>
        <!-- AKPsi -->
        <div class="row resBlock">
          <div class="col-md-2 resIcon">
            <img
              class="resPic"
              src="pics/akpsi.png"
              alt="Alpha Kappa Psi logo"
            />
          </div>
          <div class="col-md-10">
            <p class="eduHead">Alpha Kappa Psi - Zeta Chapter Alumni</p>
            <p class="eduHead2">Professional Business Fraternity</p>
            <p class="info">Pledge Educator 2017-2019</p>
            <p class="info">Chairman of Service 2017-2018</p>
          </div>
        </div>
        <!-- Kappa Delta -->
        <div class="row resBlock">
          <div class="col-md-2 resIcon">
            <img class="resPic" src="pics/kd.png" alt="Kappa Delta logo" />
          </div>
          <div class="col-md-10">
            <p class="eduHead">Kappa Delta - Pi Chapter Alumni</p>
          </div>
        </div>
        <div class="row resBlock">
          <div class="col-md-2 resIcon">
            <img
              class="resPic"
              src="pics/nebraska.png"
              alt="University of Nebraska - Lincoln"
            />
          </div>

          <div class="col-md-10">
            <p class="eduHead">
              Nomine - Undergraduate Excellence in Communication Award <span class = "dates">2018</span>
            </p>
            <p class="eduHead2">University of Nebraska - Lincoln</p>
          </div>
        </div>
      </div>
      <div class = "box">
        <div class="h6">WORK EXPERIENCE</div>
        <div class="row resBlock">
          <div class="col-md-2 resIcon">
            <img
              class="resPic"
              src="pics/vmm.png"
              alt="Vision Maker Media Logo"
            />
          </div>
          <div class="col-md-10">
            <p class="eduHead">Vision Maker Media <span class="dates">
              November 2017 - July 2018
            </span></p>
            <p class="eduHead2">Business Development Intern</p>
            <span class="skill">FileMaker Pro</span>
            <span class="skill">Salesforce</span>
            <span class="skill">Hootsuite</span>
            <span class="skill">Social Media</span>
            <span class="skill">Non-Profit</span>
          </div>
        </div>
        <div class="row resBlock">
          <div class="col-md-2 resIcon">
            <img
              class="resPic"
              src="pics/nebraska.png"
              alt="University of Nebraska - Lincoln"
            />
          </div>
          <div class="col-md-10">
            <p class="eduHead">
              University of Nebraska - Communications Department
              <span class="dates">
                January 2018 - May 2018
              </span>
            </p>
            <p class="eduHead2">Research Assistant</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  </main>)}