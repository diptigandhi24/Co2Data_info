import { useParams } from "react-router-dom";
import TwitterContainer from "./twitterContainer";
export default function Results() {
  const params = useParams();

  console.log("params recieved are", params);
  return (
    <div>
      <p>
        Average co2 data at your born year was {params.bornYear}ppm, now it is{" "}
        {params.currentYear}ppm
      </p>
      <TwitterContainer
        bornYear={params.bornYear}
        currentYear={params.currentYear}
      />
      <p>
        The source of this information is Global Monitoring Laboratory,{" "}
        <a href="https://gml.noaa.gov/ccgg/trends/gl_data.html">
          visit for more information
        </a>
      </p>
    </div>
  );
}
