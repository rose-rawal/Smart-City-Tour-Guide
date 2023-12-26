import React, { useEffect, useState } from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import axios from "axios";

const Hotels = () => {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const [details, setDetails] = useState([
    {
      name: "Patan house cafe",
      place: "85.32646 27.67127",
      rating: 4.2,
      food: { name: "Chicken", price: 200 },
    },
    // Add more details as needed
  ]);

  useEffect(() => {
    const getFoodData = async () => {
      try {
        const resp = await axios.get("http://localhost:8000/getFoodData");
        const data = resp.data;
        // Now you can do something with the fetched data, e.g., update state
        console.log("Food data:", data);
      } catch (err) {
        console.error("Error:", err);
      }
    };

    // Call the function to fetch food data
    getFoodData();
  }, []);
  const [userLocation, setUserLocation] = useState();
  const position = { lat: 27.6712, lng: 85.32646 };

  const haversineDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };

  const requestLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ latitude, longitude });
            resolve({ latitude, longitude });
          },
          (error) => {
            console.error("Error getting location:", error.message);
            reject(error);
          }
        );
      } else {
        console.error("Geolocation is not supported by your browser");
        reject("Geolocation not supported");
      }
    });
  };

  const distanceCalculation = async () => {
    try {
      const userLocationData = await requestLocation();
      const distances = details.map((point) => {
        const distance = haversineDistance(
          userLocationData.latitude,
          userLocationData.longitude,
          point.place.split(" ")[0],
          point.place.split(" ")[1]
        );
        return parseFloat(distance.toFixed(2));
      });
      setDetails(
        details.map((point, index) => ({
          ...point,
          distance: distances[index],
        }))
      );
    } catch (error) {
      console.error("Error getting location or calculating distances:", error);
    }
  };

  useEffect(() => {
    distanceCalculation();
  }, []);

  return (
    <div className="w-screen h-screen">
      <div className="fixed top-36 left-4 z-50 font-bold text-lg bg-white px-4 py-2 rounded-md">
        {userLocation?.longitude + "---- " + userLocation?.latitude}
      </div>
      <div className="fixed bottom-0 right-10 w-64 h-1/2 bg-white z-50 px-2 py-2 text-center">
        <div>Hotels Near Me:</div>
        {details.map((point, index) => (
          <div key={index}>
            {`${point.name}: ${point.distance ? `${point.distance} m` : "N/A"}`}
          </div>
        ))}
      </div>
      <APIProvider apiKey="AIzaSyDUXR8DqW6aFdu5wwy7osB0eb4NTrOVhfQ">
        <Map zoom={16} center={position}>
          <AnyReactComponent
            lat={27.6470034}
            lng={85.3239504}
            text="My Marker"
          />
        </Map>
      </APIProvider>
    </div>
  );
};

export default Hotels;
