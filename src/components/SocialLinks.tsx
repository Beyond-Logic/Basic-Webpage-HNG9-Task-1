/** @format */

import React from "react";
import SlackIcon from "../assets/SlackIcon.svg";
import GitHubIcon from "../assets/GitHubIcon.svg";
import ReactTooltip from "react-tooltip";

const SocialLinks = () => {
  return (
    <>
      <ReactTooltip id="slackProfileTip" place="top" effect="solid">
        BeyondLogic
      </ReactTooltip>
      <ReactTooltip id="githubProfileTip" place="top" effect="solid">
        Beyond-Logic
      </ReactTooltip>
      <div className="flex justify-center space-x-[36.75px] mb-[136.55px] items-center">
        <img
          src={SlackIcon}
          alt="slack"
          id="slack"
          data-tip
          data-for="slackProfileTip"
        />

        <a href="https://github.com/Beyond-Logic" id="github">
          <img
            src={GitHubIcon}
            alt="github"
            data-tip
            data-for="githubProfileTip"
          />
        </a>
      </div>
    </>
  );
};

export default SocialLinks;
