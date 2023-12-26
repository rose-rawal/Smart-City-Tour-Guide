import React, { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Loader from "./Loader";

export const NearMe = () => {
  const [touch, setTouch] = useState();
  const [chatValue, setChatValue] = useState();
  const [response, setResponse] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const titleRegex = /\d+\.\s([^:]+)/g;
  let str;
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    try {
      const result = await axios.post("http://localhost:8000/near/getData", {
        location: chatValue,
      });
      console.log("result", result.data);
      setResponse(result.data.split("\n"));
    } catch (err) {
      console.log("err in getting chat gpt", err);
    } finally {
      setLoading(false);
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
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-4">Location Component</h1>
      <div className="flex items-center space-x-4 mb-4 justify-center">
        <input
          className="border border-gray-300 px-4 py-2 rounded-md w-64 focus:outline-none focus:border-blue-500"
          onChange={(e) => onInputChangeHandler(e)}
          placeholder="Enter location"
        />

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          onClick={sendChatGpt}
        >
          Send
        </button>
      </div>
      {loading && <Loader />}
      {userLocation && (
        <div>
          <p>Latitude: {userLocation.latitude}</p>
          <p>Longitude: {userLocation.longitude}</p>
        </div>
      )}
      <div className="flex flex-col space-y-4 bg-gray-100">
        {response.map((element, index) => (
          <div
            key={index}
            className="flex flex-row items-center p-4 bg-gray-100 rounded-lg shadow-md  justify-center"
          >
            <div>{element}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
