import fs from "fs";
import {join} from "path";

const postsDirectory = join(process.cwd(), "legal");

export default function getPostBySlug(slug: string): string {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const body = fs.readFileSync(fullPath, "utf8");
  return body;
}
