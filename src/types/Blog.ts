import Author from "@/types/Author";

export default interface Props {
  authors: Author[];
  namespaceId: string;
  title: string;
  subtitle?: string;
}
