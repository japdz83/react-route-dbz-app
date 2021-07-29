import React from "react";
import { useParams } from "react-router-dom";
import { Characters } from "../models/Characters";

const CharacterScreen = ({ history }) => {
  const { id } = useParams();

  const { type, name, description } = Characters.find(
    (character) => character.id === id
  );

  const path = `/assets/${type}-${id}.png`;

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            className="img-thumbnail mt-3"
            src={path}
            alt={id}
            style={{ width: "70%", height: "auto" }}
          />
        </div>
        <div className="col-md-6">
          <div className="mt-5">
            <h2>Nombre: {name}</h2>
            <p>Descripción: {description}</p>
            <button onClick={handleBack} className="btn btn-outline-primary">
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterScreen;
