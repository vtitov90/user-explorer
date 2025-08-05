import { User } from "lucide-react";

function NoUsers() {
  return (
    <div className="text-center py-12">
      <User className="w-12 h-12 text-gray-400 mx-auto mb-4" />
      <p className="text-gray-600">No users found</p>
      <p className="text-gray-500 text-sm">Try adjusting your filters</p>
    </div>
  );
}

export default NoUsers;
