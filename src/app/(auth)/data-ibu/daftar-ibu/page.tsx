'use client'

import DynamicTable from '@/components/dynamic-table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Search, Table } from 'lucide-react'
import React from 'react'



const Page = () => {
    
const columns = [
  {header: "NIK", accessor: "nik"},
  { header: "Nama", accessor: "name" },
  { header: "Tanggal Lahir", accessor: "tanggal_lahir" },
  { header: "No Telp", accessor: "noTelp" },
  { header: "Alamat", accessor: "alamat" },
  { header: "Status Hamil", accessor: "is_hamil" },
];

const data = [
  { nik: "1234567890123456", name: "John Doe", tanggal_lahir: "01-01-2000", noTelp: "08123456789", alamat: "Jl. Contoh No. 1", is_hamil: "Ya" },
  { nik: "1234567890123457", name: "Jane Smith", tanggal_lahir: "02-02-1995", noTelp: "08123456780", alamat: "Jl. Contoh No. 2", is_hamil: "Tidak" },
  { nik: "1234567890123458", name: "Alice Johnson", tanggal_lahir: "03-03-1985", noTelp: "08123456781", alamat: "Jl. Contoh No. 3", is_hamil: "Ya" },
];

const formFields = [
  { name: "nik", label: "NIK", type: "text", placeholder: "Masukkan NIK", required: true },
  { name: "name", label: "Nama", type: "text", placeholder: "Masukkan Nama", required: true },
  { name: "tanggal_lahir", label: "Tanggal Lahir", type: "date", placeholder: "Masukkan Tanggal Lahir", required: true },
  { name: "noTelp", label: "No Telp", type: "text", placeholder: "Masukkan No Telp", required: true },
  { name: "alamat", label: "Alamat", type: "text", placeholder: "Masukkan Alamat", required: true },
  { name: "is_hamil", label: "Status Hamil", type: "text", placeholder: "Masukkan Status Hamil (Ya/Tidak)", required: true },
];
const handleAddSubmit = (data: Record<string, string>) => {
  console.log("Data submitted:", data);
  // Handle the data submission logic here
}

  return (
    <div className="container mx-auto py-6 space-y-6">
         <DynamicTable columns={columns} data={data} title='Data Ibu' formFieldsAdd={formFields} />

    </div>
  )
}

export default Page