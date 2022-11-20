import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "./queries";
import Preview from "./Preview";

export default function Home() {
  const { data } = useQuery(GET_POSTS);

  return (
    <>
      <div className="mt-8 grid grid-cols-3 gap-x-2 gap-y-3 items-start p-4 bg-gray-200">
        {data?.allPosts?.map((post, index) => {
          return <Preview post={post} key={index} />;
        })}
      </div>
    </>
  );
}
