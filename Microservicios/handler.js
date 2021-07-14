'use strict';
//const tilesProvider="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";


module.exports.helloUser = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Aveeeeer',
        input: event,
      },
      null,
      2
    ),
  };

};

  module.exports.GetCoordsDistance = async (event) => {
  var lat1 = event.pathParameters.lat1; //-17.357585912165828
  var lon1 = event.pathParameters.lon1;//-66.17569232061294
  var lat2 = event.pathParameters.lat2; //-17.38281530599989 
  var lon2 = event.pathParameters.lon2; //-66.18176671250603 
  var rad = function(x) {return x*Math.PI/180;}
  var R = 6378.137; //Radio de la tierra en km
  var dLat = rad( lat2 - lat1 );
  var dLong = rad( lon2 - lon1 );
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: d.toFixed(2),
        input: event,
      },
      null,
      2
    ),
  };
};


  module.exports.KmCost = async (event) => {
  var km = event.pathParameters.km
  var coin = event.pathParameters.coin
  switch(coin) {
  case '0':
    coin = 0.58;
    break;
  case '1':
    coin = 4;
    break;
  }
  var res = km * coin;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: res.toFixed(2),
        input: event,
      },
      null,
      2
    ),
  };

};

module.exports.StepCount = async (event) => {
  var steps;
  var km = event.pathParameters.km;
  var steplength = 72; //altura promedio por 0,415
  steps = (100000 * km )/ steplength;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: steps.toFixed(0),
        input: event,
      },
      null,
      2
    ),
  };

};

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
