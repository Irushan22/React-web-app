import React from "react";

function Bracelet() {
  return (
    <div>
      <div className="panel-body-heading">
        <h2>Arm motion detectors</h2>
      </div>
      <div className="ft-strick-chart ft-strick">
        <iframe
          width="450"
          height="260"
          src="https://thingspeak.com/channels/1094777/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&api_key=TFFMZRUJVXRG3QGA&results=60&type=line&update=15"
        ></iframe>
      </div>
      <div className="ft-strick-chart ft-strick">
        <iframe
          width="450"
          height="260"
          src="https://thingspeak.com/channels/1094777/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&api_key=TFFMZRUJVXRG3QGA&results=60&type=line&update=15"
        ></iframe>
      </div>
      <div className="ft-strick-chart ft-strick">
        <iframe
          width="450"
          height="260"
          src="https://thingspeak.com/channels/1094777/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&api_key=TFFMZRUJVXRG3QGA&results=60&type=line&update=15"
        ></iframe>
      </div>
      <div className="ft-strick-chart ft-strick">
        <iframe
          width="450"
          height="260"
          src="https://thingspeak.com/channels/1094777/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&api_key=TFFMZRUJVXRG3QGA&results=60&type=line&update=15"
        ></iframe>
      </div>
      <div className="ft-strick-chart ft-strick">
        <iframe
          width="450"
          height="260"
          src="https://thingspeak.com/channels/1094777/charts/5?bgcolor=%23ffffff&color=%23d62020&dynamic=true&api_key=TFFMZRUJVXRG3QGA&results=60&type=line&update=15"
        ></iframe>
      </div>
      <div className="ft-strick-chart ft-strick">
        <iframe
          width="450"
          height="260"
          src="https://thingspeak.com/channels/1094777/charts/6?bgcolor=%23ffffff&color=%23d62020&dynamic=true&api_key=TFFMZRUJVXRG3QGA&results=60&type=line&update=15"
        ></iframe>
      </div>
    </div>
  );
}

export default Bracelet;
