import type { ReactNode } from "react";

interface ITableContainerProps {
  children: ReactNode;
}

function TableContainer({ children }: ITableContainerProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {children}
    </div>
  );
}

export default TableContainer;
