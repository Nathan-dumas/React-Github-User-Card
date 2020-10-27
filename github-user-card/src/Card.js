import React from "react";

export default function Card(props) {
  const {
    name,
    html_url,
    avatar_url,
  } = props;

  return (
    <div className="userCard">
      <h1>{name}</h1>
      <img src={avatar_url} alt={name} />
      <a href={html_url}>My Github Profile</a>
    </div>
  );
}
