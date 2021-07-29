import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, name, type }) => {
  const path = `/assets/${type}-${id}.png`;
  return (
    <div
      className="card m-3 col-xs-12 col-md-4 col-lg-4 text-center "
      style={{ width: "250px" }}
    >
      <img className="card-img-top" src={path} alt={id} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <Link className=" btn btn-primary" to={`/character/${id}`}>
            Ver Más
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Card;
