import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [about, setDescription] = React.useState("");

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about,
    });
  }
  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      textBtn="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
          value={name || ""}
          onChange={handleChangeName}
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
          value={about || ""}
          onChange={handleChangeDescription}
        />
        <span id="error-inputJob" className="popup__error" />
      </label>
    </PopupWithForm>
  );
}
