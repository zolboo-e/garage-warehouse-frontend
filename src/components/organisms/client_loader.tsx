"use client";

//
import { Spinner } from "@/icons/spinner";
import { useClientLoader, useGlobalTransition } from "@/hooks";
import { Alert, AlertDescription, AlertTitle } from "@/shared/alert";

export const ClientLoader: React.FC = () => {
  const isLoading = useClientLoader((state) => state.isLoading);
  const { isPending } = useGlobalTransition();

  if (!isLoading && !isPending) {
    return null;
  }

  return (
    <Alert className="fixed bottom-4 right-4 max-w-fit">
      <Spinner className="h-6 w-6 animate-spin" />
      <AlertTitle>Loading!</AlertTitle>
      <AlertDescription>Please wait...</AlertDescription>
    </Alert>
  );
};
