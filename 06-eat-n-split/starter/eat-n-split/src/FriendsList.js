import Friend from "./Friend";

export default function FriendsList(props) {
  const { friends, selectedFriend, onSelection } = props;
  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            selectedFriend={selectedFriend}
            onSelection={onSelection}
          />
        ))}
      </ul>
    </div>
  );
}
