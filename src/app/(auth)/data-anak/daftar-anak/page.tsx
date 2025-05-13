'use client'

import DynamicTable from '@/components/dynamic-table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Search, Table } from 'lucide-react'
import React from 'react'



const Page = () => {
    
const columns = [
  { header: "Receipt Code", accessor: "receiptCode" },
  { header: "Date", accessor: "date" },
  { header: "Supplier", accessor: "supplier" },
  { header: "Total Amount", accessor: "totalAmount", align: 'right' },
  { header: "Tax", accessor: "tax", align: 'right' },
  { header: "Actions", accessor: "actions", align: 'right' },
];

const data = [
  { receiptCode: "id1", date: "2025-05-10", supplier: "Supplier A", totalAmount: "100.00", tax: "10.00", actions: "Edit" },
  { receiptCode: "id2", date: "2025-05-11", supplier: "Supplier B", totalAmount: "200.00", tax: "20.00", actions: "Edit" },
  // Add more rows as needed
];
  return (
    <div className="container mx-auto py-6 space-y-6">
        <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Expense Records</h1>
        </div>

         <DynamicTable columns={columns} data={data} />

    </div>
  )
}

export default Page