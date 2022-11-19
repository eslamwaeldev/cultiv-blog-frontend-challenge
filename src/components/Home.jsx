import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "./queries";

export default function Home() {
  const { data } = useQuery(GET_POSTS);
  console.log(data);
  return (
    <>
      <div className="mt-8 grid grid-cols-3 gap-x-2 gap-y-3 items-start p-4 ">
        {data?.allPosts?.map((post) => {
          return (
            <>
              <div className="max-w-l px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-light text-gray-600 dark:text-gray-400">
                    {post.date.day}/{post.date.month}/{post.date.year}
                  </span>
                </div>
                <div className="mt-2">
                  <a
                    href="#"
                    className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
                    tabindex="0"
                    role="link"
                  >
                    Accessibility tools for designers and developers
                  </a>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur
                    doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis
                    facere in modi ratione libero!
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline" tabindex="0" role="link">
                    Read more
                  </a>
                  <div className="flex items-center">
                    <a
                      className="font-bold text-gray-700 cursor-pointer dark:text-gray-200"
                      tabindex="0"
                      role="link"
                    >
                      {post.author.name}
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
