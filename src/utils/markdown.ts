import fs from "fs";
import {resolve} from "path";
import {promisify} from "util";

const readFile = promisify(fs.readFile);

export default async function markdown(slug: string): Promise<string> {
  const realSlug = slug.replace(/\.md$/, "");
  const body = await readFile(
    resolve(process.cwd(), `./blog/${realSlug}`),
    "utf8",
  );
  return body;
}
