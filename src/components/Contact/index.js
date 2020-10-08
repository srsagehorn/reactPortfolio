import React from "react";

export default function () {
  return (
    <main class="pageContent">
      <div id="space"></div>
      <div class="col contactIcons">
        <h1>Let's Talk!</h1>
        <a href="https://github.com/srsagehorn" target="_blank">
          <img
            class="contactImg"
            id="gitimg"
            src="pics/github.png"
            alt="Github Logo"
          />
        </a>
        <a href="https://www.linkedin.com/in/shannonsagehorn" target="_blank">
          <img
            class="contactImg"
            src="pics/linkedIn.png"
            alt="Linked In Logo"
          />
        </a>
        <a href="mailto:srsagehorn@gmail.com" target="_blank">
          <img class="contactImg" src="pics/gmail.png" alt="Gmail Logo" />
        </a>
        <a href="https://www.facebook.com/shannon.sagehorn" target="_blank">
          <img class="contactImg" src="pics/fb.png" alt="facebook Logo" />
        </a>
        <a href="https://www.instagram.com/shannanagins_/" target="_blank">
          <img class="contactImg" src="pics/insta.png" alt="Instagram logo" />
        </a>
      </div>
    </main>
  );
}
