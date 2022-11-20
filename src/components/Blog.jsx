import { useQuery } from "@apollo/client";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { GET_POST } from "./queries";
import { Remark } from "react-remark";
import remarkGemoji from "remark-gemoji";
import rehypeSlug from "rehype-slug";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";

export default function Blog() {
  const { blogID } = useParams();
  const { data } = useQuery(GET_POST, { variables: { id: blogID } });

  return (
    <div className="flex flex-col items-center justify-center mt-8 gap-6 bg-gray-200 p-8">
      <img
        className="sm:w-2/4 sm:h-80 w-3/4 h-60 xl:h-[28rem] rounded-xl  "
        src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="blog image"
      />
      <h1 className="text-2xl font-sans font-bold">{data?.Post?.title}</h1>
      <article className="prose prose-neutral ">
        <Remark
          remarkPlugins={[remarkGemoji]}
          remarkToRehypeOptions={{ allowDangerousHtml: true }}
          rehypePlugins={[rehypeSlug, rehypeAutoLinkHeadings]}
        >
          {data?.Post?.content}
        </Remark>
      </article>
      <div className=" border-b-2 border-gray-600 w-2/3"></div>
      <div className="flex sm:flex-row sm:gap-60 flex-col gap-5  my-4">
        <a
          href={data?.Post?.prev ? data.Post.prev : "#"}
          className={`flex items-center px-4 py-2 mx-1 text-gray-500 bg-gray-200 rounded-md  ${
            data?.Post?.prev ? "hover:bg-white " : "cursor-not-allowed hover:text-gray-500"
          }`}
        >
          {"<"} Prev
        </a>
        <p className=" px-2.5 py-2 text-gray-500 transition-colors duration-300 transform rounded-lg  md:mx-2">
          Page 1 of 1
        </p>
        <a
          href={data?.Post?.next ? data.Post.next : "#"}
          className={`${
            data?.Post?.next ? "hover:bg-white" : "cursor-not-allowed hover:text-gray-500"
          } flex items-center px-4 py-2 mx-1 text-gray-500 transition-colors duration-300 transform bg-gray-200 rounded-md   `}
        >
          Next {">"}
        </a>
      </div>
      <div className=" border-b-2 border-gray-600 w-2/3"></div>
      <div className="flex flex-row gap-8 items-start justify-start w-2/3 relative">
        <Link
          to={`/`}
          className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 md:mx-2"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Home
        </Link>
        <Link
          to={`/login`}
          className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 md:mx-2"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Login
        </Link>
        <p className="absolute right-0 px-2.5 py-2 text-gray-500 transition-colors duration-300 transform rounded-lg  md:mx-2 text-sm">
          ©2022. Responsive Blog.
        </p>
      </div>
    </div>
  );
}
