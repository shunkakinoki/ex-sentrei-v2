import remark from "remark";
import html from "remark-html";

// eslint-disable-next-line import/prefer-default-export
export async function remarkToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
