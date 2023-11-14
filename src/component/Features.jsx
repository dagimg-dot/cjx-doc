import { features } from "../utils/data";
import Check from "./Check";

export default function Features() {
  return (
    <ul className="flex flex-col text-custom-pink list-none mt-5 font-consolas px-5">
      {features.map((feature) => (
        <li className="relative pl-2 flex gap-2 items-center">
          <Check />
          {feature}
        </li>
      ))}
    </ul>
  );
}
