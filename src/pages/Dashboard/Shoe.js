import React from "react";

function Shoe() {
  return (
    <div>
      <div className="panel-body-heading">
        <h2>Foot Strick Analysis</h2>
      </div>
      <div className="ft-strick-chart ft-strick">
        <iframe
          width="450"
          height="260"
          src="https://thingspeak.com/channels/1093464/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&api_key=UDODNQK3QZ5C82R3&results=60&type=line&update=15"
        ></iframe>
      </div>
      <div className="ft-strick-chart ft-strick">
        <iframe
          width="450"
          height="260"
          src="https://thingspeak.com/channels/1093464/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&api_key=UDODNQK3QZ5C82R3&results=60&type=line&update=15"
        ></iframe>
      </div>
      <div className="ft-strick-chart ft-strick">
        <iframe
          width="450"
          height="260"
          src="https://thingspeak.com/channels/1093464/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&api_key=UDODNQK3QZ5C82R3&results=60&type=line&update=15"
        ></iframe>
      </div>
    </div>
  );
}

export default Shoe;
