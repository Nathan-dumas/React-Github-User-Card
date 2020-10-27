import React from "react";

export default function Card(props) {
  const {
    name,
    location,
    bio,
    html_url,
    avatar_url,
    followers,
    following,
  } = props;

  return (
    <div className="userCard">
      <h1>{name}</h1>
      <img src={avatar_url} alt={name} />
      <p>{bio}</p>
      <p>Location: {location}</p>
      <a href={html_url}>My Github Profile</a>
      <p>
        Followed by: {followers} {followers === 1 ? "user." : "users."}
      </p>
      <p>
        Following: {following} {following === 1 ? "user." : "users."}
      </p>
    </div>
  );
}
