import { headers } from "next/headers";
import { UAParser } from "ua-parser-js";

import HorizontalScroll from "@/app/about/HorizontalScroll";

import CrossWordMobile from "@/components/CrossWordMobile";

export default function HeroIndex() {
  const headerList = headers();
  const agent = headerList.get("user-agent");
  const pAgent = new UAParser(agent!);
  const isMobile = pAgent.getDevice().type === "mobile";
  return isMobile ? <CrossWordMobile /> : <HorizontalScroll />;
}
