import Author from "@/types/Author";

export default interface Props {
  authors: Author[];
  title: string;
  subtitle?: string;
}
