import { useState } from "react";
import Button from "./Button";
import Inputs from "./Inputs";

export default function SplitBillForm(props) {
  const { selectedFriend, onSplitBill } = props;
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split the bill with {selectedFriend.name}</h2>
      <Inputs value={bill} onSet={setBill}>
        💰 Bill value
      </Inputs>
      <Inputs value={paidByUser} onSet={setPaidByUser}>
        🧍‍♀️ Your expense{" "}
      </Inputs>
      <label>👫 {selectedFriend.name}'s expense:</label>
      <input type="text" disabled value={paidByFriend}></input>
      <label>🤑 Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      '<Button>Split bill</Button>
    </form>
  );
}
