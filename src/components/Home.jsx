import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "./queries";
import Preview from "./Preview";

export default function Home() {
  const { data } = useQuery(GET_POSTS);

  return (
    <>
      <div className="flex items-start sm:justify-start justify-center px-6 mt-4">
        <h1 className="text-2xl self-start text-gray-900 mt-4">Blogs</h1>
      </div>
      <div className="mt-1 grid sm:grid-cols-3 gap-x-6 gap-y-6 items-start p-6 bg-gray-200">
        {data?.allPosts?.map((post, index) => {
          return <Preview post={post} key={index} />;
        })}
      </div>
    </>
  );
}
