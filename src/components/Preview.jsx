import React from "react";
import Markdown from "./Markdown";

export default function Preview(props) {
  return (
    <>
      <>
        <div className="max-w-l px-8 py-4 bg-white rounded-lg shadow-md ">
          <div className="flex items-center justify-between">
            <span className="text-sm font-light text-gray-600 ">
              {props.post.date.day}/{props.post.date.month}/{props.post.date.year}
            </span>
          </div>
          <div className="mt-2 flex flex-col gap-3">
            <a
              href={`/blogs/${props.post.id}`}
              className="text-2xl font-bold text-gray-700  hover:text-gray-600  hover:underline"
              tabIndex="0"
              role="link"
            >
              {props.post.title}
            </a>
            <Markdown content={props.post.content} />
          </div>

          <div className="flex items-center justify-between mt-4">
            <a href={`/blogs/${props.post.id}`} className="text-blue-600  hover:underline" tabIndex="0" role="link">
              Read more
            </a>
            <div className="flex items-center">
              <a className="font-bold text-gray-700 cursor-pointer " tabIndex="0" role="link">
                {props.post.author.name}
              </a>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
