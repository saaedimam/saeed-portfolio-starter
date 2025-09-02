import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

marked.setOptions({ gfm: true });

export interface Work {
  _id: string;
  _raw: {
    flattenedPath: string;
  };
  title: string;
  date: string;
  summary: string;
  tags?: string[];
  featured?: boolean;
  url: string;
  body: {
    html: string;
  };
}

export interface Post {
  _id: string;
  _raw: {
    flattenedPath: string;
  };
  title: string;
  date: string;
  summary: string;
  tags?: string[];
  url: string;
  body: {
    html: string;
  };
}

function loadMDX(dir: string, file: string) {
  const slug = file.replace(/\.mdx$/, "");
  const source = fs.readFileSync(path.join(dir, file), "utf8");
  const { data, content } = matter(source);
  const html = marked.parse(content);
  return { data, html, slug };
}

function loadWorks(): Work[] {
  const dir = path.join(process.cwd(), "content", "work");
  return fs
    .readdirSync(dir)
    .filter(f => f.endsWith(".mdx"))
    .map(file => {
      const { data, html, slug } = loadMDX(dir, file);
      return {
        _id: `work-${slug}`,
        _raw: { flattenedPath: `work/${slug}` },
        title: data.title as string,
        date: data.date as string,
        summary: data.summary as string,
        tags: data.tags as string[] | undefined,
        featured: data.featured as boolean | undefined,
        url: `/work/${slug}`,
        body: { html },
      } as Work;
    });
}

function loadPosts(): Post[] {
  const dir = path.join(process.cwd(), "content", "writing");
  return fs
    .readdirSync(dir)
    .filter(f => f.endsWith(".mdx"))
    .map(file => {
      const { data, html, slug } = loadMDX(dir, file);
      return {
        _id: `writing-${slug}`,
        _raw: { flattenedPath: `writing/${slug}` },
        title: data.title as string,
        date: data.date as string,
        summary: data.summary as string,
        tags: data.tags as string[] | undefined,
        url: `/writing/${slug}`,
        body: { html },
      } as Post;
    });
}

export const allWorks: Work[] = loadWorks();
export const allPosts: Post[] = loadPosts();
