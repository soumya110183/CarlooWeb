// "use client";

// import { ComposableMap, Geographies, Geography } from "react-simple-maps";
// import { useState } from "react";

// const geoUrl = "https://code.highcharts.com/mapdata/custom/world-continents.topo.json";

// export default function WorldMap({ onCountryClick }) {
//   const [selectedCountry, setSelectedCountry] = useState(null);

//   const handleClick = (geo) => {
//     const name = geo.properties.name; 
//     setSelectedCountry(name);
//     onCountryClick(name);
//   };

//   return (
//     <div className="w-full h-auto">
//       <ComposableMap projection="geoEqualEarth" width={800} height={400}>
//         <Geographies geography={geoUrl}>
//           {({ geographies }) =>
//             geographies.map((geo) => (
//               <Geography
//                 key={geo.rsmKey}
//                 geography={geo}
//                 onClick={() => handleClick(geo)}
//                 style={{
//                   default: {
//                     fill:
//                       geo.properties.name === selectedCountry
//                         ? "#651FFF"
//                         : "#E0E0E0",
//                     outline: "none",
//                   },
//                   hover: {
//                     fill: "#B39DDB",
//                     outline: "none",
//                   },
//                   pressed: {
//                     fill: "#7E57C2",
//                     outline: "none",
//                   },
//                 }}
//               />
//             ))
//           }
//         </Geographies>
//       </ComposableMap>
//     </div>
//   );
// }
