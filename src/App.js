import React from "react";
import Header from "../src/components/Header.js";
import Main from "../src/components/Main.js";
import Footer from "../src/components/Footer.js";
import PopupWithForm from "../src/components/PopupWithForm.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleAddCardClick() {
    setIsAddCardPopupOpen(true);
  }

  function closeAllPopup() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddCardPopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddCard={handleAddCardClick}
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
      <div className="popup popup_type_image" id="imgPopup">
        <div className="popup__container popup__container_img">
          <img className="popup__img" alt="" />
          <p className="popup__text" />
          <button type="button" className="popup__close-btn" />
        </div>
      </div>
    </div>
  );
}

export default App;
