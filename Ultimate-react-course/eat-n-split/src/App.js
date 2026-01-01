import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);

  const [selectedFriend, setSelectedFriend] = useState(null);

  const [showAddFriend, setShowAddFriend] = useState(false);
  const toggleShowAddFriend = function () {
    setShowAddFriend((showAddFriend) => !showAddFriend);
  };
  const updateFriend = function (friend) {
    setFriends((friends) =>
      friends.map((f) => {
        if (f.id === friend.id) return { ...friend };
        else return f;
      })
    );
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
        />

        {showAddFriend && (
          <FormAddFriend friends={friends} setFriends={setFriends} />
        )}
        <Button onClick={toggleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend != null && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
          updateFriend={updateFriend}
        />
      )}
    </div>
  );
}

function FriendsList({ friends, selectedFriend, setSelectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, selectedFriend, setSelectedFriend }) {
  const isSelected = selectedFriend !== null && selectedFriend.id === friend.id;
  function handleClick() {
    if (selectedFriend == null || selectedFriend.id !== friend.id) {
      setSelectedFriend(friend);
    } else {
      setSelectedFriend(null);
    }
  }
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {" "}
          {friend.name} owes you {friend.balance}$
        </p>
      )}
      {friend.balance === 0 && <p>you and {friend.name} are even</p>}

      <Button onClick={handleClick}> {isSelected ? "Close" : "Select"}</Button>
    </li>
  );
}

function Button({ onClick, children }) {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}
function FormAddFriend({ friends, setFriends }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?");

  function handleSubmit(event) {
    event.preventDefault();
    if (!name || !image) return;

    const id = crypto.randomUUID();
    setFriends((friends) => [
      ...friends,
      { name, image: `${image}u=${id}`, balance: 0, id },
    ]);
    setName("");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👨🏽‍🤝‍👨🏽 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(evnt) => setName(evnt.target.value)}
      />

      <label>🌆 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(evnt) => setImage(evnt.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill({ selectedFriend, setSelectedFriend, updateFriend }) {
  const [bill, setBill] = useState("");
  const [expenses, setExpenses] = useState("");
  const [payer, setPayer] = useState("user");
  function handleSubmit(evnt) {
    evnt.preventDefault();
    if (!bill || !expenses) {
      setSelectedFriend(null);
      return;
    }
    let updatedUser;
    let balance;
    if (payer === "user") {
      balance = selectedFriend.balance - (bill - expenses);
      updatedUser = {
        ...selectedFriend,
        balance,
      };
    } else {
      balance = Number(selectedFriend.balance) + Number(expenses);
      updatedUser = {
        ...selectedFriend,
        balance,
      };
    }
    updateFriend(updatedUser);
    setSelectedFriend(null);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(evnt) => setBill(evnt.target.value)}
      />
      <label>🧍‍♂️ Your expenses</label>
      <input
        type="text"
        value={expenses}
        onChange={(evnt) => setExpenses(evnt.target.value)}
      />
      <label>👨🏽‍🤝‍👨🏽 {selectedFriend.name}'s expenses</label>
      <input type="text" value={bill - expenses} disabled />

      <label>🤑 Who is paying the bill</label>
      <select value={payer} onChange={(evnt) => setPayer(evnt.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
