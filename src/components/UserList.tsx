"use client";
import React, { FC } from "react";

type UserListProps = {
  users: { id: number; name: string }[];
};

export const UserList: FC<UserListProps> = ({ users }) => {
  console.log("client", users);

  return (
    <ul>
      {users.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};
