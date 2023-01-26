import { IconType } from "react-icons";

interface Props {
    icon: IconType;
}

export const Technology = ({ icon }: Props) => {
    return (
        <li className="flex p-2">
                <span>{icon({ className: "h-6 w-6" })}</span>
        </li>
    );
};