import { PropsWithChildren, createContext } from "react";
import UAParser, { IBrowser } from "ua-parser-js";

type ContextAgentAttr = {
  isMobile: boolean;
  isSafari: boolean;
  browser: IBrowser;
};

export const ContextAgent = createContext<ContextAgentAttr>(undefined!);

export default function ProviderAgent(
  props: PropsWithChildren & { agent: string | null }
) {
  const { agent, children } = props;
  const pAgent = new UAParser(agent!);
  const isMobile = pAgent.getDevice().type === "mobile";
  const browser = pAgent.getBrowser();

  const isSafari =
    browser.name === "Safari" || browser.name === "Mobile Safari";

  return (
    <ContextAgent.Provider value={{ isMobile, isSafari, browser }}>
      {children}
    </ContextAgent.Provider>
  );
}
