"use client";

import { useState } from "react";
import { useInterval } from "usehooks-ts";

export default function useDate() {
  const [date, setDate] = useState(new Date());
  useInterval(() => setDate(new Date()), 1000);
  return {
    miliseconds: date.getMilliseconds(),
    seconds: date.getSeconds(),
    minutes: date.getMinutes(),
    hours: date.getHours()
  };
}
