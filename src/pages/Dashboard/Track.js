import React from "react";

function Track() {
  return (
    <div>
       <div className="panel-body-heading">
        <h2>Track Sensor System</h2>
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

export default Track;
