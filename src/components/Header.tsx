import { Users } from "lucide-react";

function Header() {
  return (
    <div className="mb-8 text-center">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Users className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-900">User Directory</h1>
      </div>
      <p className="text-gray-600">
        Browse through our user database with filtering and pagination
      </p>
    </div>
  );
}

export default Header;
