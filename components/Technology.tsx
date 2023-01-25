import { IconType } from "react-icons";
import { Tooltip } from "react-tippy";

interface Props {
    name: string;
    icon: IconType;
}

export const Technology = ({ name, icon }: Props) => {
    return (
        <li className="flex p-2">
            <Tooltip title={name} position={"top"} duration={250}>
                <span>{icon({ className: "h-6 w-6" })}</span>
            </Tooltip>
        </li>
    );
};