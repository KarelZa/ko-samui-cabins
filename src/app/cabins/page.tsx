import { UserList } from "@/src/components/UserList";
import React from "react";

export const Page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return (
    <div>
      <h2>CABINS</h2>
      <UserList users={data} />
    </div>
  );
};

export default Page;
