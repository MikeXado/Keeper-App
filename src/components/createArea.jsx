import React, { useState } from "react";
import autosize from "autosize";
function CreateArea(props) {
  const [items, setItems] = useState({
    text: "",
    content: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;

    setItems((prevItem) => {
      return {
        ...prevItem,
        [name]: value,
      };
    });
  };

  const submitHandler = (e) => {
    props.addNote(items);
  };

  autosize(document.querySelector(".inputs-kepper__description"));

  return (
    <div className="inputs">
      <div className="kepper-content__inputs inputs-kepper">
        <input
          name="text"
          className="inputs-kepper__title"
          value={items.title}
          onChange={inputHandler}
          placeholder="Enter note title"
        />
        <textarea
          name="content"
          className="inputs-kepper__description"
          value={items.content}
          onChange={inputHandler}
          placeholder="Enter note description"
        />
      </div>

      <div className="kepper-content__btn" onClick={submitHandler}>
        <a href="#">Add</a>
      </div>
    </div>
  );
}

export { CreateArea };
