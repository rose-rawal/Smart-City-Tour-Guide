import React, { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export const NearMe = () => {
  const [touch, setTouch] = useState();
  const [chatValue, setChatValue] = useState();
  const [response, setResponse] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const titleRegex = /\d+\.\s([^:]+)/g;
  let str;

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
      setResponse(result.data.split("\n"));
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
        {/* {matches.map((match) => {
          const title = match.replace(/\d+\.\s/, "").trim();

          return <div>{match}</div>;
        })} */}
        {touch !== null && <div>{locations[touch]?.description}</div>}
      </div>
      <h1>Location Component</h1>
      <input onChange={(e) => onInputChangeHandler(e)} />
      <button onClick={sendChatGpt}>Send</button>
      <button onClick={requestLocation}>
        <FontAwesomeIcon icon={faMapMarker} style={{ color: "#cfc03a" }} /> Near
        Me
      </button>

      {userLocation && (
        <div>
          <p>Latitude: {userLocation.latitude}</p>
          <p>Longitude: {userLocation.longitude}</p>
        </div>
      )}
      {response.map((element) => (
        <div className="flex flex-row space-x-2">{element}</div>
      ))}
    </div>
  );
};
