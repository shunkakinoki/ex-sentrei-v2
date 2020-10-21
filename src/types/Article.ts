export type Pricing = "free" | "paid" | "subscription";

export default interface Article {
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
