"use client";
import { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker, AdvancedMarker } from "@react-google-maps/api";
import { icon } from "leaflet";

export default function HomeMaptest() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

//   return <Map />;
return (<Map />)
}

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  const [markers, setMarkers] = useState([]);

  const onMapClick = (event) => {
    setMarkers([
      ...markers,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      },
    ]);
  };

  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName="map-container"
      onClick={onMapClick}
      >
      {/* {markers.map((marker, index) => (
          <Markers
          key={index} 
          position={{ lat: marker.lat, lng: marker.lng }}
          icon={icon({
              iconUrl: "https://www.svgrepo.com/show/379072/marker.svg",
              iconSize: [20, 20],
              
            })} />
        ))} */}

    <AdvancedMarker
        position={{lat: 53.58675649147477, lng: 10.045572975464376}}
        draggable={true}></AdvancedMarker>
    </GoogleMap>
  );
}

const Markers = ({points}) => {
    return(
        <>
            {points.map((point)=>(
                <AdvancedMarker key={point.key} position={point}>
                    <span>😄</span>
                </AdvancedMarker>
            ))}
        </>
    );
 }


// "use client";



// type Point = google.maps.LatLngLiteral & { key: string };
// type Props = { points: Point[] };

// const Markers = ({ points }) => {
//   const map = useMap();
//   const [markers, setMarkers] = useState({});
//   const clusterer = useRef(null);

//   useEffect(() => {
//     if (!map) return;
//     if (!clusterer.current) {
//       clusterer.current = new MarkerClusterer({ map });
//     }
//   }, [map]);

//   useEffect(() => {
//     clusterer.current?.clearMarkers();
//     clusterer.current?.addMarkers(Object.values(markers));
//   }, [markers]);

//   const setMarkerRef = (marker, key) => {
//     if (marker && markers[key]) return;
//     if (!marker && !markers[key]) return;

//     setMarkers((prev) => {
//       if (marker) {
//         return { ...prev, [key]: marker };
//       } else {
//         const newMarkers = { ...prev };
//         delete newMarkers[key];
//         return newMarkers;
//       }
//     });
//   };

//   return (
//     <>
//       {points.map((point) => (
//         <AdvancedMarker
//           position={point}
//           key={point.key}
//           ref={(marker) => setMarkerRef(marker, point.key)}
//         >
//           <span style={{ fontSize: "2rem" }}>🌳</span>
//         </AdvancedMarker>
//       ))}
//     </>
//   );
// };


// import {APIProvider, AdvancedMarker, Map, Pin} from '@vis.gl/react-google-maps';

// export const MapTest = ()=> {(
//     <div className='w-full h-full'>
//         <h1>Hola</h1>
//     <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
//       <Map
//         style={{width: '100vw', height: '100vh'}}
//         center={{lat: 22.54992, lng: 0}}
//         zoom={3}
//         gestureHandling={'greedy'}
//         disableDefaultUI={false}
//         >
//         <AdvancedMarker position={{lat: 53.54992, lng: 10.00678}}>
//             <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
//         </AdvancedMarker>
//       </Map>
//     </APIProvider>
//     </div>
//   );
// }
