import React from "react";

export default function () {
  return (
    <main class="pageContent">
      <div id="space"></div>
      <div class="col contactIcons">
        <h1>Let's Talk!</h1>
        <a
          href="https://github.com/srsagehorn"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            class="contactImg"
            id="gitimg"
            src="pics/github.png"
            alt="Github Logo"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/shannonsagehorn"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            class="contactImg"
            src="pics/linkedIn.png"
            alt="Linked In Logo"
          />
        </a>
        <a
          href="mailto:srsagehorn@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img class="contactImg" src="pics/gmail.png" alt="Gmail Logo" />
        </a>
        <a
          href="https://www.facebook.com/shannon.sagehorn"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img class="contactImg" src="pics/fb.png" alt="facebook Logo" />
        </a>
        <a
          href="https://www.instagram.com/shannanagins_/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img class="contactImg" src="pics/insta.png" alt="Instagram logo" />
        </a>
      </div>
    </main>
  );
}
