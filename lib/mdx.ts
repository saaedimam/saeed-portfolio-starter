import { allPosts, allWorks } from "./data";
import { compareDesc } from "date-fns";

export function getAllPosts() {
  return allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
}

export function getAllWorks() {
  return allWorks.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
}

export function getFeaturedWorks() {
  return allWorks.filter(work => work.featured).sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
}

export function getPostBySlug(slug: string) {
  return allPosts.find(post => post._raw.flattenedPath === `writing/${slug}`);
}

export function getWorkBySlug(slug: string) {
  return allWorks.find(work => work._raw.flattenedPath === `work/${slug}`);
}
