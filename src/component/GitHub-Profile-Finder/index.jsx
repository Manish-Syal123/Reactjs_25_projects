import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
// import "./gitstyles.css";

const GitHubProfileFinder = () => {
  const [userName, setUserName] = useState("Manish-Syal123");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchGitHubUserData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://api.github.com/users/${userName}`);
      const data = await res.json();

      if (data) {
        setUserData(data);
        setLoading(false);
        // setUserName("");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubUserData();
  }, []);

  console.log(userData);

  const handleUserSearch = async () => {
    await fetchGitHubUserData();
    // setUserName("");
  };
  if (loading) {
    return <div>Loading user Data.....................</div>;
  }
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleUserSearch}>Search</button>
      </div>
      {userData !== null ? <UserCard data={userData} /> : null}
    </div>
  );
};

export default GitHubProfileFinder;
