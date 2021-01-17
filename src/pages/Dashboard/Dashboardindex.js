import React from "react";
import { Form, FormControl, Button, Table } from "react-bootstrap";

function Dashboardindex() {
  return (
    <div>
    <div className="panel-body-heading">
        <h2>Dashboard</h2>
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
          src="https://thingspeak.com/channels/1086648/charts/5?bgcolor=%23ffffff&color=%23d62020&dynamic=true&api_key=GGWEEBUUYX76UHZ3&results=60&title=Gyro+y+axis+data+in+degree&type=line"
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

export default Dashboardindex;
