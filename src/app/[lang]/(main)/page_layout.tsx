import { classNames } from "@/utils/class_names";

interface PageLayout {
  bodyAsCard?: boolean;
  size?: "container" | "full-width";
}
export const PageLayout: React.FCC<PageLayout> = ({
  bodyAsCard = true,
  children,
  size = "full-width",
}) => {
  return (
    <div
      className={classNames(
        "h-full p-4",
        size === "container" && "container",
        size === "full-width" && "w-full"
      )}
    >
      <div
        className={classNames(
          "min-h-full",
          bodyAsCard && "rounded-sm bg-white p-4"
        )}
      >
        {children}
      </div>
    </div>
  );
};
