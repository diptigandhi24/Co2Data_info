import React, { useEffect } from "react";

const TwitterContainer = ({ co2 }) => {
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
            className="twitter-share-button"
            data-size="large"
            data-text={`There is ${co2}% more CO2 in the air today than when I was born.`}
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
