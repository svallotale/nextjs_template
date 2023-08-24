import {twMerge} from "tailwind-merge";
import {clsx, ClassArray} from "clsx";

export const cn = (...args: ClassArray) => {
	return twMerge(clsx(args))
}