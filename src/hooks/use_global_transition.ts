//
import { useContext } from "react";

//
import { GlobalTransitionContext } from "@/contexts";

export const useGlobalTransition = () => {
  const { isPending, startTransition } = useContext(GlobalTransitionContext);

  return { isPending, startTransition };
};
