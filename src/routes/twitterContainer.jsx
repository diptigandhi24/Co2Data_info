import React, { useEffect } from "react";

const TwitterContainer = ({ bornYear, currentYear }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    script.setAttribute("charset", "utf-8");
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <>
      <section className="twitterContainer">
        <div className="twitter-embed">
          <a
            href="https://twitter.com/share?ref_src=twsrc%5Etfw"
            class="twitter-share-button"
            data-size="large"
            data-text={`Average co2 data at your born year was ${bornYear}ppm, now it is ${currentYear}ppm`}
            data-hashtags="ClimateChange ,ClimateChangeIsReal"
            data-show-count="false"
          >
            Tweet
          </a>
        </div>
      </section>
    </>
  );
};

export default TwitterContainer;
