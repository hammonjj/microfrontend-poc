import { useEffect, useRef, useState } from "react";
import { mountRootParcel } from 'single-spa';

interface SuperbowlSquaresAdminAnalyticsWidgetProps {
}

export default function SuperbowlSquaresAdminAnalyticsWidget(props: SuperbowlSquaresAdminAnalyticsWidgetProps) {
  const [parcel, setParcel] = useState(null);
  const parcelContainerRef = useRef(null);

  useEffect(() => {
    // Dynamically import the parcel
    System.import('@crafted-solutions/superbowl-squares/admin-app-analytics')
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
    <div ref={parcelContainerRef} style={{width: "500px"}}></div>
  );
};