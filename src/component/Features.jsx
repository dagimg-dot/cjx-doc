import { features } from "../utils/data";

export default function Features() {
  return (
    <ul className="flex flex-col text-custom-pink list-none mt-5 font-consolas px-5">
      {features.map((feature) => (
        <li className="relative pl-5">
          <span className="absolute left-0 top-1/2 transform -translate-y-1/2">
            &#10003;
          </span>
          {feature}
        </li>
      ))}
    </ul>
  );
}
