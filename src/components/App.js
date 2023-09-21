import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleAddCardClick() {
    setIsAddCardPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopup() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddCardPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddCard={handleAddCardClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      {/* Попап редактирования профиля */}
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        textBtn="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopup}
      >
        <label className="popup__label">
          <input
            name="name"
            className="popup__input"
            id="inputFullname"
            type="text"
            required=""
            minLength={2}
            maxLength={40}
          />
          <span id="error-inputFullname" className="popup__error" />
        </label>
        <label className="popup__label">
          <input
            name="job"
            className="popup__input"
            id="inputJob"
            type="text"
            required=""
            minLength={2}
            maxLength={200}
          />
          <span id="error-inputJob" className="popup__error" />
        </label>
      </PopupWithForm>
      {/* Попап редактирования автара */}
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        textBtn="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopup}
      >
        <label className="popup__label">
          <input
            placeholder="Ссылка на аватар"
            defaultValue=""
            name="link"
            className="popup__input popup__input_avatar"
            id="linkAvatar"
            type="url"
            required=""
          />
          <span id="error-linkAvatar" className="popup__error" />
        </label>
      </PopupWithForm>
      {/* Попап добавления карточки */}
      <PopupWithForm
        name="addCard"
        title="Новое место"
        textBtn="Создать"
        isOpen={isAddCardPopupOpen}
        onClose={closeAllPopup}
      >
        <label className="popup__label">
          <input
            placeholder="Название"
            defaultValue=""
            name="name"
            className="popup__input popup__input_name"
            id="nameMesto"
            type="text"
            required=""
            minLength={2}
            maxLength={30}
          />
          <span id="error-nameMesto" className="popup__error" />
        </label>
        <label className="popup__label">
          <input
            placeholder="Ссылка на картинку"
            defaultValue=""
            name="link"
            className="popup__input popup__input_link"
            id="linkImg"
            type="url"
            required=""
          />
          <span id="error-linkImg" className="popup__error" />
        </label>
      </PopupWithForm>

      {/* Попап картинки */}

      <ImagePopup card={selectedCard} onClose={closeAllPopup} />

      <div className="popup" id="confirmPopup">
        <div className="popup__container">
          <button type="button" className="popup__close-btn" />
          <h2 className="popup__title">Вы уверены?</h2>
          <form
            name="deleteCard"
            className="popup__form"
            action=""
            noValidate=""
          >
            <button
              type="submit"
              id="delete-button-submit"
              className="popup__save-btn"
            >
              Да
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
