import type { IUser } from "../types/user";
import { getNationalityName } from "../utils/getNationalityName";

interface ITableProps {
  users: IUser[];
}

function Table({ users }: ITableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
              First Name
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
              Last Name
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
              Gender
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
              Email
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
              Nationality
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {users.map((user: IUser, index: number) => (
            <tr
              key={`${user.email}-${index}`}
              className="hover:bg-gray-50 transition-colors duration-150"
            >
              <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                {user.name.first}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                {user.name.last}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    user.gender === "male"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-pink-100 text-pink-800"
                  }`}
                >
                  {user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                <a
                  href={`mailto:${user.email}`}
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {user.email}
                </a>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {getNationalityName(user.nat)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
