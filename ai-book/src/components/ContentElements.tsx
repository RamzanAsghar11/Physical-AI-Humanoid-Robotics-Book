import React from 'react';

// Custom components for consistent content rendering
interface ContentProps {
  children: React.ReactNode;
}

// Standardized heading components
export const H1: React.FC<ContentProps> = ({ children }) => (
  <h1 className="text-3xl font-bold mb-4 mt-6">{children}</h1>
);

export const H2: React.FC<ContentProps> = ({ children }) => (
  <h2 className="text-2xl font-semibold mb-3 mt-5">{children}</h2>
);

export const H3: React.FC<ContentProps> = ({ children }) => (
  <h3 className="text-xl font-medium mb-2 mt-4">{children}</h3>
);

// Standardized list components
export const UnorderedList: React.FC<ContentProps> = ({ children }) => (
  <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>
);

export const OrderedList: React.FC<ContentProps> = ({ children }) => (
  <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>
);

export const ListItem: React.FC<ContentProps> = ({ children }) => (
  <li className="ml-4">{children}</li>
);

// Standardized table component
interface TableProps {
  children: React.ReactNode;
  className?: string;
}

export const Table: React.FC<TableProps> = ({ children, className = '' }) => (
  <div className="overflow-x-auto my-4">
    <table className={`min-w-full border border-gray-300 ${className}`}>
      {children}
    </table>
  </div>
);

export const TableRow: React.FC<ContentProps> = ({ children }) => (
  <tr className="border-t border-gray-300">{children}</tr>
);

export const TableHeader: React.FC<ContentProps> = ({ children }) => (
  <th className="py-2 px-4 text-left bg-gray-100 font-semibold border-b border-gray-300">{children}</th>
);

export const TableCell: React.FC<ContentProps> = ({ children }) => (
  <td className="py-2 px-4 border-b border-gray-300">{children}</td>
);

// Standardized blockquote for important notes
export const Blockquote: React.FC<ContentProps> = ({ children }) => (
  <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-50 italic">{children}</blockquote>
);

// Export all components as a single object for easy import
const ContentElements = {
  H1,
  H2,
  H3,
  UnorderedList,
  OrderedList,
  ListItem,
  Table,
  TableRow,
  TableHeader,
  TableCell,
  Blockquote,
};

export default ContentElements;