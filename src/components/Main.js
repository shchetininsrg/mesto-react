import React from "react";
import { api } from "../utils/Api.js";
import Card from "./Card.js";

export default function Main({
  onEditProfile,
  onEditAvatar,
  onAddCard,
  onCardClick,
}) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserAvatar(data.avatar);
        setUserName(data.name);
        setUserDescription(data.about);
      })
      .catch((error) => console.log(error));
  }, []);

  React.useEffect(() => {
    api
      .getDefaultCard()
      .then((data) => {
        setCards(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="content">
      <section className="content__profile profile">
        <div className="profile__avatar-container" onClick={onEditAvatar}>
          <div
            style={{ backgroundImage: `url(${userAvatar})` }}
            className="profile__avatar"
          />
          <div className="profile__figure">
            <div className="profile__icon" />
          </div>
        </div>
        <div className="profile-info">
          <div className="profile-info__container">
            <h1 className="profile-info__fullname"> {userName} </h1>
            <p className="profile-info__description"> {userDescription} </p>
          </div>
          <button
            type="button"
            className="profile-info__edit-btn"
            onClick={onEditProfile}
          />
        </div>
        <button
          type="button"
          className="profile__add-btn"
          onClick={onAddCard}
        />
      </section>
      <section className="photo-cards">
        {cards.map((card) => (
          <Card onCardClick={onCardClick} key={card._id} card={card} />
        ))}
      </section>
    </main>
  );
}
