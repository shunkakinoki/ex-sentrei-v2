import Authors from "@/types/Author";

export type Pricing = "free" | "paid" | "subscription";

export default interface Article {
  authors: Authors[];
  body: string;
  date: Date;
  excerpt?: string;
  image?: string;
  pricing: Pricing;
  slug: string;
  time: number;
  title: string;
  subtitle?: string;
}
