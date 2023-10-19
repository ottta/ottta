import { useContext } from "react";
import { ContextAgent } from "@/components/_context/ContextAgent";

export default function useAgent() {
    const agent = useContext(ContextAgent);
    if (!agent) throw Error("Must be inside <ProviderAgent />");
    return agent;
}
