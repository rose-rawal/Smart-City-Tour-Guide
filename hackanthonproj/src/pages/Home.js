import React, { useEffect, useState, useRef } from "react";

import "./Home.css";
const Home = () => {
  const [showSections, setShowSections] = useState(Array(3).fill(false));
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setShowSections((prev) => {
              const updatedArray = [...prev];
              updatedArray[index] = true;
              return updatedArray;
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div class="background-image">
      <div class="content-container">
        <section>
          <h1 className="text-5xl w-2/4">
            CityConnect: Where Every Stay Unlocks Urban Adventures
          </h1>
        </section>

        <section>
          <h2 className="text-4xl">
            Explore Nearby Wonders: Locations Near Me
          </h2>
          <p className="w-1/2 mt-10">
            CityConnect's Locations Near Me feature unveils a handpicked
            selection of local attractions, restaurants, and cultural hotspots,
            all within easy reach. Access detailed info, directions, and
            user-rated recommendations, ensuring your stay is a gateway to the
            city's vibrant tapestry. Unlock urban adventures effortlessly,
            tailored to your preferences.
          </p>
        </section>

        <section>
          <h2 className="text-4xl">
            Optimize Your Urban Journey: Premium Route Recommender
          </h2>

          <p className="w-1/2 mt-10">
            Upgrade to CityConnect's Premium Subscription for an unparalleled
            travel experience. Our Route Recommender feature crafts tailored
            itineraries, guiding you through the city's best sights, minimizing
            travel time and maximizing your exploration.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;
