// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
var Work = defineDocumentType(() => ({
  name: "Work",
  filePathPattern: `work/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    summary: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" } },
    featured: { type: "boolean", default: false }
  },
  computedFields: {
    url: { type: "string", resolve: (doc) => `/work/${doc._raw.flattenedPath.replace("work/", "")}` }
  }
}));
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `writing/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    summary: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" } }
  },
  computedFields: {
    url: { type: "string", resolve: (doc) => `/writing/${doc._raw.flattenedPath.replace("writing/", "")}` }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Work, Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "wrap" }]
    ]
  }
});
export {
  Post,
  Work,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-SWZXKVI5.mjs.map
