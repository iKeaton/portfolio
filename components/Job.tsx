import { IconType } from "react-icons";
import { Tooltip } from "react-tippy";

interface Props {
  url: string;
  title: string;
  when: string;
  description: string;
  icon: IconType;
}

export const Job = ({ title, url, when, description }: Props) => {
  return (
    <div className="text-center p-2 w-4/6">
      <a className="underline underline-offset-4 cursor-pointer" href={url}>{title}</a>
      <p>{when}</p>
      <p className="mt-2">{description}</p>
    </div>
  );
};
