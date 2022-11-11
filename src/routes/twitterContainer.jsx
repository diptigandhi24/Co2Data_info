import React, { useEffect } from "react";

const TwitterContainer = ({ bornYear, currentYear }) => {
  useEffect(() => {
    const anchor = document.createElement("a");
    anchor.setAttribute("class", "twitter-share-button");
    anchor.setAttribute("data-size", "large");
    anchor.setAttribute("data-show-count", "false");
    anchor.setAttribute(
      "data-text",
      `Average co2 data at your born year was ${bornYear}ppm, now it is ${currentYear}ppm`
    );
    anchor.setAttribute(
      "href",
      "https://twitter.com/share?ref_src=twsrc%5Etfw"
    );
    document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);

    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    script.setAttribute("charset", "utf-8");
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  });

  return (
    <>
      <section className="twitterContainer">
        <div className="twitter-embed"></div>
      </section>
    </>
  );
};

export default TwitterContainer;
