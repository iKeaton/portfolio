import { IconType } from "react-icons";
import { Tooltip } from "react-tippy";

interface Props {
  title: string;
  when: string;
  description: string;
}

export const Job = ({ title, when, description }: Props) => {
  return (
    <div className="text-center p-2 w-4/6">
      <a className="underline underline-offset-4">{title}</a>
      <p>{when}</p>
      <p className="mt-2">{description}</p>
    </div>
  );
};
