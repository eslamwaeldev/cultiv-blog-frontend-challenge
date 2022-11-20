import React from "react";
import { Remark } from "react-remark";
import remarkGemoji from "remark-gemoji";
import rehypeSlug from "rehype-slug";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";

export default function Markdown(props) {
  return (
    <>
      <article className="prose">
        <Remark
          remarkPlugins={[remarkGemoji]}
          remarkToRehypeOptions={{ allowDangerousHtml: true }}
          rehypePlugins={[rehypeSlug, rehypeAutoLinkHeadings]}
        >
          {props.content.substring(0, 200)}
        </Remark>
      </article>
    </>
  );
}
