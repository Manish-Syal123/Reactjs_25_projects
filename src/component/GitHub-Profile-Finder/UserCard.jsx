import React from "react";
import "./gitstyles.css";
const UserCard = ({ data }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = data;
  console.log(data);

  const createdDate = new Date(created_at);

  return (
    <div className="user">
      <div>
        <img src={avatar_url} alt="User" className="avatar" />
      </div>
      <div className="name-container">
        <a
          href={`http://github.com/${login}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name || login}
        </a>
        <p>
          User Joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div className="profile-info">
        <div>
          <p>Public Repos</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Followers</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Followings</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
