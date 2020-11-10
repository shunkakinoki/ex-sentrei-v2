import fs from "fs";
import {join} from "path";

export default function getPostBySlug(slug: string): string {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join("legal", `${realSlug}.md`);
  const body = fs.readFileSync(fullPath, "utf8");
  return body;
}
