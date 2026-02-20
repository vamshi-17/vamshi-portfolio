import { FC } from "react";
import { Loader2 } from "lucide-react";

interface Props {
  isLoading: boolean;
}

const LoadingScreen: FC<Props> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-gray-950 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-16 h-16 text-cyan-500 animate-spin mx-auto mb-4" />
        <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          Loading Portfolio...
        </h2>
      </div>
    </div>
  );
};

export default LoadingScreen;