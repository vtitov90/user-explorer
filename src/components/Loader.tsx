import { Loader2 } from "lucide-react";

function Loader() {
  return (
    <div className="flex items-center justify-center py-12">
      <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      <span className="ml-3 text-gray-600">Loading users...</span>
    </div>
  );
}

export default Loader;
