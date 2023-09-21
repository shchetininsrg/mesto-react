import React from "react";
import { api } from "../utils/Api.js";
import Card from "./Card.js";

export default function Main({ onEditProfile, onEditAvatar, onAddCard }) {
  const [userInfo, setUserInfo] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getDefaultCard()])
      .then(([dataUser, dataCard]) => {
        setUserInfo(dataUser);
        setCards(dataCard);
        console.log(dataCard);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="content">
      <section className="content__profile profile">
        <div className="profile__avatar-container" onClick={onEditAvatar}>
          <div
            style={{ backgroundImage: `url(${userInfo.avatar})` }}
            className="profile__avatar"
          />
          <div className="profile__figure">
            <div className="profile__icon" />
          </div>
        </div>
        <div className="profile-info">
          <div className="profile-info__container">
            <h1 className="profile-info__fullname"> {userInfo.name} </h1>
            <p className="profile-info__description"> {userInfo.about} </p>
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
          <Card key={card._id} card={card} />
        ))}
      </section>
    </main>
  );
}
