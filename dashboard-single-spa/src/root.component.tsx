import React, { useEffect, useRef, useState } from 'react';
import { mountRootParcel } from 'single-spa';
import SuperbowlSquaresAnalyticsWidget from './incomingParcels/superbowlSquaresAnalyticsWidget';
import SuperbowlSquaresAdminAnalyticsWidget from './incomingParcels/superbowlSquaresAdminAnalyticsWidget';

export default function Root(props) {
  const [parcel, setParcel] = useState(null);
  const parcelContainerRef = useRef(null);

  useEffect(() => {
    // Dynamically import the parcel
    System.import('@crafted-solutions/superbowl-squares/app-analytics')
      .then(parcelModule => {
        const parcelProps = { gameId: 15 };
        const parcelInstance = mountRootParcel(parcelModule.default, {
          domElement: parcelContainerRef.current,
          ...parcelProps
        });

        setParcel(parcelInstance);
      })
      .catch(err => {
        console.error('Error loading parcel', err);
      });

    return () => {
      if (parcel) {
        parcel.unmount();
      }
    };
  }, []);

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      flexDirection: "column" 
    }}>
      <h1>Dashboard Route</h1>
      <section>This is coming from the Root component of {props.name}</section>
      {/* <div ref={parcelContainerRef} style={{maxWidth: "500px"}}></div> */}
      <SuperbowlSquaresAnalyticsWidget />
      <div style={{marginTop: "10px"}}></div>
      <SuperbowlSquaresAdminAnalyticsWidget />
    </div>);
}
