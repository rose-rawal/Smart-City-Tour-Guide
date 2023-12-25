import React, { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import Response from "../components/Response";
import axios from "axios";

export const NearMe = () => {
  const [touch, setTouch] = useState();
  const [chatValue, setChatValue] = useState();
  const [response, setResponse] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  let locations = [
    {
      name: "Kathmandu",
      description: "Capital CIty of nepal",
    },
    {
      name: "Lumbini",
      description: "Birth Place Of Buddha",
    },
    {
      name: "Pokhara",
      description: "Night CLub",
    },
  ];

  const sendChatGpt = async () => {
    try {
      const result = await axios.post("http://localhost:8000/near/getData", {
        location: chatValue,
      });
      console.log("result", result.data);
      setResponse(result.data);
    } catch (err) {
      console.log("err in getting chat gpt", err);
    }
  };

  const requestLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser");
    }
  };

  const onTouchHandler = (e, index) => {
    e.preventDefault();
    setTouch(index);
    console.log(index);
    console.log(locations[index].description);
  };
  const onInputChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setChatValue(e.target.value);
  };
  return (
    <div>
      <div>
        {locations.map((items, index) => {
          // console.log(index)
          return (
            // <div></div>
            <div key={index} onClick={(e) => onTouchHandler(e, index)}>
              {items.name}
            </div>
          );
        })}
        {touch !== null && <div>{locations[touch]?.description}</div>}
      </div>
      <h1>Location Component</h1>
      <input onChange={(e) => onInputChangeHandler(e)} />
      <button onClick={sendChatGpt}>Send</button>
      <button onClick={requestLocation}>
        <FontAwesomeIcon icon={faMapMarker} style={{ color: "#cfc03a" }} /> Near
        Me
      </button>
      {/* <p>{response}</p> */}
      {userLocation && (
        <div>
          <p>Latitude: {userLocation.latitude}</p>
          <p>Longitude: {userLocation.longitude}</p>
        </div>
      )}
      <p>{response && <div>{response}</div>}</p>
    </div>
  );
};
