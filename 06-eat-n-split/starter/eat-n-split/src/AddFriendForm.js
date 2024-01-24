import { useState } from "react";
import Button from "./Button";
import Inputs from "./Inputs";

export default function AddFriendForm(props) {
  const { onAddFriend } = props;
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handlerSubmitFriend = (e) => {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
    console.log(newFriend);
  };

  return (
    <form className="form-add-friend" onSubmit={handlerSubmitFriend}>
      <Inputs onSet={setName}> 👫Friend name</Inputs>
      <Inputs onSet={setImage} value={image}>
        🌄Image URL
      </Inputs>
      <Button>Add</Button>
    </form>
  );
}
