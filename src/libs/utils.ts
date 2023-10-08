import moment from "moment";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function calculateDuration(start: string, end?: string): string {
    const dateStart = moment(start);
    const dateEnd = end ? moment(end) : moment(new Date().toISOString());
    const diff = dateEnd.diff(dateStart, "second", true);

    const minute = 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = day * 30;
    const year = month * 12;

    if (diff < day) {
        return Math.floor(diff / hour) + " hours";
    } else if (diff < day * 2) {
        return "yesterday";
    } else if (diff < week) {
        return week + " days";
    } else if (diff < month) {
        return Math.floor(diff / week) + " weeks";
    } else if (diff < year) {
        return Math.floor(diff / month) + " months";
    } else {
        return Math.floor(diff / year) + " years";
    }
}
