import Author from "@/types/Author";

export default interface Props {
  authors: Author[];
  namespace: string;
  title: string;
  subtitle?: string;
}
