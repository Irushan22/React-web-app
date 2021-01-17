import React from "react";

function anklet() {
  return (
    <div>
      <div className="panel-body-heading">
        <h2>Lower limb motion detectors</h2>
      </div>
      <div className="ft-strick-chart ft-strick">
        <iframe
          width="450"
          height="260"
          src="https://thingspeak.com/channels/1086648/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&api_key=GGWEEBUUYX76UHZ3&results=60&title=Accelerometer+x+axis+data+in+g+unit&type=line"
        ></iframe>
      </div>
      <div className="ft-strick-chart ft-strick">
        <iframe
          width="450"
          height="260"
          src="https://thingspeak.com/channels/1086648/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&api_key=GGWEEBUUYX76UHZ3&results=60&title=+Accelerometer+y+axis+data+in+g+unit&type=line"
        ></iframe>
      </div>
      <div className="ft-strick-chart ft-strick">
        <iframe
          width="450"
          height="260"
          src="https://thingspeak.com/channels/1086648/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&api_key=GGWEEBUUYX76UHZ3&results=60&title=Accelerometer+z+axis+data+in+g+unit&type=line"
        ></iframe>
      </div>
      <div className="ft-strick-chart ft-strick">
        <iframe
          width="450"
          height="260"
          src="https://thingspeak.com/channels/1086648/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&api_key=GGWEEBUUYX76UHZ3&results=60&title=Gyro+x+axis+data+in+degree&type=line"
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
          src="https://thingspeak.com/channels/1086648/charts/6?bgcolor=%23ffffff&color=%23d62020&dynamic=true&api_key=GGWEEBUUYX76UHZ3&results=60&title=+Gyro+z+axis+data+in+degree&type=line"
        ></iframe>
      </div>
    </div>
  );
}

export default anklet;
