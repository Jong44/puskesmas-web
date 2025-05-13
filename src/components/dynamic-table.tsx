import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface TableColumn {
  header: string;
  accessor: string;
  align?: 'left' | 'right' | 'center';
}

interface TableRowData {
  [key: string]: any;
}

interface DynamicTableProps {
  columns: TableColumn[];
  data: TableRowData[];
  searchPlaceholder?: string;
}

const DynamicTable: React.FC<DynamicTableProps> = ({ columns, data, searchPlaceholder = "Search expenses..." }) => {
  return (
     <Card className="shadow-lg rounded-xl border border-gray-200 overflow-hidden">
      <CardHeader className="bg-gray-100 dark:bg-gray-800 border-b">
        <div className="flex justify-between items-center py-4 px-6">
          <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white">All Expenses</CardTitle>
          <div className="relative w-64">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={searchPlaceholder}
              className="pl-8 rounded-md shadow-sm"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Table className="min-w-full table-auto border-collapse">
          <TableHeader>
            <TableRow className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-white">
              {columns.map((column, index) => (
                <TableHead key={index} className={`px-6 py-3 text-sm font-medium ${column.align ? `text-${column.align}` : ''} whitespace-nowrap`}>
                  {column.header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex} className="border-t hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200">
                {columns.map((column, colIndex) => (
                  <TableCell key={colIndex} className={`px-6 py-3 text-sm ${column.align ? `text-${column.align}` : ''}`}>
                    {row[column.accessor]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default DynamicTable;
