import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  React.useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeLink(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({ name, link });
  }
  return (
    <PopupWithForm
      name="addCard"
      title="Новое место"
      textBtn="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
          onChange={handleChangeName}
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
          onChange={handleChangeLink}
        />
        <span id="error-linkImg" className="popup__error" />
      </label>
    </PopupWithForm>
  );
}
