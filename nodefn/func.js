const fdk=require('@fnproject/fdk');
//import axios from 'axios'; 
const axios=require("axios");
// fdk.handle(function(input){

//   let name = 'World';
//   if (input.name) {
//     name = input.name;
//   }
//   return {'message': 'Hello ' + name}
// })

/*

const address = {
  origins: ["1600 26th St. Santa Monica, CA 90403"], 
  destinations: [
    "3730 May St. Los Angeles, CA 90066", 
    "955 2nd St. Santa Monica, CA 90403",
    "10455 Eastborne Ave. Los Angeles, CA 90024"
  ]
}

RETURN: 
const optimizedTime = [
  {
    address: "3730 May St. Los Angeles, CA 90066",
    timeInSecs: 3432,  
  }, 
    address: "955 2nd St. Santa Monica, CA 90403",
    timeInSecs: 3553
]
*/

fdk.handle(() => {

  // const data = {
  //   origins: ["1600 26th St. Santa Monica, CA 90403"], 
  //   destinations: [
  //     "3730 May St. Los Angeles, CA 90066", 
  //     "955 2nd St. Santa Monica, CA 90403",
  //     "10450 Eastborne Ave. Los Angeles, CA 90024"
  //   ]
  // }
  axios.get("https://maps.googleapis.com/maps/api/distancematrix/json?origins=40.6655101,-73.89188969999998&destinations=40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.659569%2C-73.933783%7C40.729029%2C-73.851524%7C40.6860072%2C-73.6334271%7C40.598566%2C-73.7527626%7C40.659569%2C-73.933783%7C40.729029%2C-73.851524%7C40.6860072%2C-73.6334271%7C40.598566%2C-73.7527626&key=AIzaSyCStbyWxRNj8OmCa-10WND4dFxH11ZQPNA");
  // axios.get("https://maps.googleapis.com/maps/api/distancematrix/json", {params: data}).then(
  //   response => console.log(response),
  //   error => console.log(error)
  // );
  return "Hello";
})
