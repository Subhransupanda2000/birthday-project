// import React, { useEffect, useState } from "react";
// import Data from "../Data";
// const Card = () => {
//   const [data, setData] = useState(Data);
//   useEffect(() => {
//     setData(Data);
//   }, []);

//   return (
//     <div>
//       <div>
//         <h1>{Data.length} birthdays today</h1>
//         {data.map((val) => {
//           return (
//             <div
//               key={val.id}
//               className="card"
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 marginBottom: 10,
//                 backgroundColor: "pink",
//                 width: 300,
//                 height: 200,
//                 marginLeft: 200,
//                 borderRadius: 15,
//               }}
//             >
//               <img
//                 className="card_images"
//                 src={val.image}
//                 alt=""
//                 style={{ width: 150, height: 100 }}
//               />

//               <ruby>
//                 {val.age}
//                 <rt>{val.name}</rt>
//               </ruby>
//               <br />
//             </div>
//           );
//         })}
//         <button
//           onClick={() => {
//             setData([]);
//           }}
//         >
//           Clear All
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Card;
import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
export default function Card() {
  let [Date, setdate] = useState([]);

  useEffect(() => {
    let api = axios.get("http://localhost:3000/arr");
    api.then((values) => setdate(values.data)).catch((e) => console.error(e));
  }, []);

  let ClearAll = () => {
    setdate([]);
  };

  return (
    <>
      <h2 id="Heading-1">{Date.length} Birthdays Today</h2>
      <div id="Birth-Cards-P">
        <div id="Birth-Cards">
          {Date.map((x) => {
            return (
              <div className="card" key={x.name}>
                <img src={x.image} alt="not found" id="imagesB" />
                <ruby id="ruby1">
                  {x.name} <rt>{x.Age}</rt>
                </ruby>
                <span id="dob">{x.Dob}</span>
              </div>
            );
          })}
        </div>
        <div>
          <button id="clear-all" onClick={ClearAll}>
            Clear All
          </button>
        </div>
      </div>
    </>
  );
}
