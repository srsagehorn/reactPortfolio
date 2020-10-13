import React from "react";

export default function () {
  return (
    <header class="navbar navbar-expand-lg">
      <div class="logoName navbar-text">
        <a class="navbar-brand" href="/">
          <img
            class="navImg"
            src={require("../../pics/logo.png")}
            alt="SS logo"
          />
        </a>
        <a href="/" class="name">
          Shannon Sagehorn
        </a>
      </div>
      <div class="navBtns navbar-text ml-auto">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon ">
            <img src={require("../../pics/menu.png")} alt="" class="menu" />
          </span>
        </button>
        <div class="toggler-example collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home<span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/portfolio">
                Portfolio <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/resume">
                Resume <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/contact">
                Contact Me <span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
