import { useLocation } from "react-router-dom";

export default function Results() {
  const location = useLocation();
  console.log("params recieved are", location.state);
  return (
    <div>
      <p>
        Average co2 data at your born year was{" "}
        {location.state.data.data.bornYearData}ppm, now it is{" "}
        {location.state.data.data.currentData}ppm
      </p>
      <a
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        class="twitter-share-button"
        data-size="large"
        data-show-count="false"
      >
        Tweet
      </a>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>
    </div>
  );
}
