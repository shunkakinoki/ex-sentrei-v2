export interface Props {
  title: string;
}

export default function BlogStoryBanner({title}: Props): JSX.Element {
  return <div className="group-hover:text-purple-300">{title}</div>;
}
