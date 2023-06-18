import { Spinner } from "@/assets/icons";

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <Spinner className="h-6 w-6 animate-spin" />
    </div>
  );
};
export default Loading;
