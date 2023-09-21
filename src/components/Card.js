import React from "react";
export default function Card({ card, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(card);
  };

  return (
    <div className="photo-cards__item">
      <button type="button" className="photo-cards__bucket" />
      <img
        className="photo-cards__img"
        src={card.link}
        alt={card.name}
        onClick={handleCardClick}
      />
      <div className="photo-cards__text-container">
        <h2 className="photo-cards__title">{card.name}</h2>
        <div className="photo-card__container-like">
          <button type="button" className="photo-cards__like" />
          <p className="photo-card__like-count">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}
