const fdk=require('@fnproject/fdk');
import axios from 'axios'; 

fdk.handle(function(input){

  let name = 'World';
  if (input.name) {
    name = input.name;
  }
  return {'message': 'Hello ' + name}
})

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

// fdk.handle(address => {

//   const data = {
//     key: "AIzaSyCStbyWxRNj8OmCa-10WND4dFxH11ZQPNA",
//     origins: ["1600 26th St. Santa Monica, CA 90403"], 
//     destinations: [
//       "3730 May St. Los Angeles, CA 90066", 
//       "955 2nd St. Santa Monica, CA 90403",
//       "10450 Eastborne Ave. Los Angeles, CA 90024"
//     ]
//   }
//   axios.get("https://maps.googleapis.com/maps/api/distancematrix/json", data).then(
//     response => console.log(response),
//     error => console.log(error)
//   );
  //return returnedTimes; 
// })
