import { headers } from "next/headers";
import { UAParser } from "ua-parser-js";

import CrossWordMobile from "@/components/Accents/CrossWordMobile";
import HorizontalScroll from "@/components/Accents/HorizontalScroll";

export default function HeroIndex() {
  const headerList = headers();
  const agent = headerList.get("user-agent");
  const pAgent = new UAParser(agent!);
  const isMobile = pAgent.getDevice().type === "mobile";
  return isMobile ? <CrossWordMobile /> : <HorizontalScroll />;
}
