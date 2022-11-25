import { useParams } from "react-router-dom";
import TwitterContainer from "./twitterContainer";
export default function Results() {
  const params = useParams();

  function calculatePercentage() {
    let co2 = ((params.currentYear - params.bornYear) / params.bornYear) * 100;
    return co2;
  }
  const co2 = calculatePercentage();
  return (
    <div>
      <p>
        There is {parseInt(co2)}% rise in the atmospheric co2 since the time of
        your born year
      </p>
      <TwitterContainer co2={parseInt(co2)} />
      <p>
        The source of this information is Global Monitoring Laboratory,{" "}
        <a href="https://gml.noaa.gov/ccgg/trends/gl_data.html">
          visit for more information
        </a>
      </p>
    </div>
  );
}
