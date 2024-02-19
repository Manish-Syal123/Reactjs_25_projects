import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DisplayContent from "./DisplayContent";

const SearchAutocomplete = () => {
  const [users, setUsers] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [filteredUserData, setFilteredUserData] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const fetchListOfUsers = async () => {
    setLoading(true);
    const resp = await fetch("https://dummyjson.com/users");
    const data = await resp.json();

    if (data && data.users && data.users.length > 0) {
      setUsers(data.users.map((item) => item.firstName));
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  const handleInput = (event) => {
    const inpText = event.target.value.toLowerCase();
    setUserInput(inpText);

    if (inpText.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(inpText) > -1)
          : [];
      setFilteredUserData(filteredData);
      setShowDropdown(true);
    } else setShowDropdown(false);
  };

  const handleClick = (event) => {
    setShowDropdown(false);
    setUserInput(event.target.innerText);
    setFilteredUserData([]);
  };
  console.log(users, filteredUserData);

  return (
    <div>
      {loading ? (
        <h1>Loadin Data............! Please Wait.</h1>
      ) : (
        <input
          type="text"
          value={userInput}
          placeholder="search user..."
          onChange={handleInput}
        />
      )}

      {showDropdown && (
        <DisplayContent data={filteredUserData} handleClick={handleClick} />
      )}
    </div>
  );
};

export default SearchAutocomplete;
