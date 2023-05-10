import React, { useState } from "react";
import axios from "axios";
import convertible1 from "../../assets/convertible1.jpg";
import convertible2 from "../../assets/convertible2.jpg";
import coupe1 from "../../assets/coupe1.jpg";
import coupe2 from "../../assets/coupe2.jpg";
import hatchback1 from "../../assets/hatchback1.jpg";
import hatchback2 from "../../assets/hatchback2.jpg";
import sedan1 from "../../assets/sedan1.jpg";
import sedan2 from "../../assets/sedan2.jpg";
import suv1 from "../../assets/suv1.jpg";
import suv2 from "../../assets/suv2.jpg";
import truck1 from "../../assets/truck1.jpg";
import truck2 from "../../assets/truck2.jpg";
import van1 from "../../assets/van1.jpg";
import van2 from "../../assets/van2.jpg";
import wagon1 from "../../assets/wagon1.jpg";
import wagon2 from "../../assets/wagon2.jpg";
import sport1 from "../../assets/sport1.jpg";
import sport2 from "../../assets/sport2.jpg";
import ute1 from "../../assets/ute1.jpg";
import ute2 from "../../assets/ute2.jpg";
import minivan1 from "../../assets/minivan1.jpg";
import minivan2 from "../../assets/minivan2.jpg";



const carData = [
  {
    id: 1,
    type: "Convertible",
    image: convertible1,
  },
    {
    id: 2,
    type: "Convertible",
    image: convertible2,
  },
      {
    id: 3,
    type: "Coupe",
    image: coupe1,
  },
        {
    id: 4,
    type: "Coupe",
    image: coupe2,
  },
          {
    id: 5,
    type: "Hatchback",
    image: hatchback1,
  },
            {
    id: 6,
    type: "Hatchback",
    image: hatchback2,
  },
              {
    id: 7,
    type: "Minivan",
    image: minivan1,
  },
                {
    id: 8,
    type: "Minivan",
    image: minivan2,
  },
                  {
    id: 9,
    type: "Sedan",
    image: sedan1,
  },
                    {
    id: 10,
    type: "Sedan",
    image: sedan2,
  },
                      {
    id: 11,
    type: "Sport",
    image: sport1,
  },
                        {
    id: 12,
    type: "Sport",
    image: sport2,
  },
                                                {
    id: 12,
    type: "SUV",
    image: suv1,
  },
                                                                        {
    id: 12,
    type: "SUV",
    image: suv2,
  },
                                                                                                {
    id: 12,
    type: "Truck",
    image: truck1,
  },
                                                                                                                        {
    id: 12,
    type: "Truck",
    image: truck2,
  },
                                                                                                                                                {
    id: 12,
    type: "Ute",
    image: ute1,
  },
                                                                                                                                                                        {
    id: 12,
    type: "Ute",
    image: ute2,
  },
                                                                                                                                                                                                {
    id: 12,
    type: "Van",
    image: van1,
  },
                                                                                                                                                                                                                        {
    id: 12,
    type: "Van",
    image: van2,
  },
                                                                                                                                                                                                                                                {
    id: 12,
    type: "Wagon",
    image: wagon1,
  },
                                                                                                                                                                                                                                                                        {
    id: 12,
    type: "Wagon",
    image: wagon2,
  },
]


export default function ImageUploader() {
  const [imageUrl, setImageUrl] = useState("");
  const [tag1, setTag1] = useState("");
  const [tag2, setTag2] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/analyze-image", {
        imageUrl: imageUrl,
      });

      console.log(response.data);
      setTag1(response.data.predictions[0].tagName);
      setTag2(response.data.predictions[1].tagName);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setImageUrl(e.target.value);
  };

 

  return (
    <div className="imageRecognition">
      <div className="imageRecognition__title">
        <h1>Search for your dream car here!</h1>
      </div>
      <div>
        <h2>Enter the URL of the car you want to search below!</h2>
      </div>
      <div className="imageRecognition__form">
        <form onSubmit={handleUpload}>
          <input
            type="text"
            placeholder="Enter URL"
            value={imageUrl}
            onChange={handleChange}
          />
          <button className="imageRecognition__form--submit" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="imageRecognition__result">
        <h2>Is this what you're looking for? {tag2}</h2>
        <div className="imageRecognition__result--images">
          {carData
            .filter((car) => car.type === tag2 && car.id !== 0)
            .map((car) => (
              <div key={car.id}>
                <img src={car.image} alt={car.type} />
                <h3>{car.type}</h3>
              </div>
            )
          )}

        </div>

      </div>
    </div>
  )
}