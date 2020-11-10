import fs from "fs";
import {resolve} from "path";
import {promisify} from "util";

const readFile = promisify(fs.readFile);

export default async function markdown(slug: string): Promise<string> {
  return readFile(resolve(process.cwd(), `./legal/${slug}.md`), "utf8");
}
