"use client";

//
import {
  type TransitionStartFunction,
  createContext,
  useTransition,
} from "react";

type GlobalTransitionContext = {
  isPending: boolean;
  startTransition: TransitionStartFunction;
};
export const GlobalTransitionContext = createContext<GlobalTransitionContext>({
  isPending: false,
  startTransition: () => {},
});

export const GlobalTransitionProvider: React.FCC = ({ children }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <GlobalTransitionContext.Provider value={{ isPending, startTransition }}>
      {children}
    </GlobalTransitionContext.Provider>
  );
};
