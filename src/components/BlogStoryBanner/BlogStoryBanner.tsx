export interface Props {
  title: string;
}

export default function BlogStoryBanner({title}: Props): JSX.Element {
  return (
    <div className="mt-5 group-hover:text-purple-300">
      <h3 className="text-3xl text-center md:text-left md:pl-8">{title}</h3>
    </div>
  );
}
