'use client'

import DynamicTable from '@/components/dynamic-table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Search, Table } from 'lucide-react'
import React from 'react'



const Page = () => {
    
const columns = [
  { header: "Nama", accessor: "name" },
  { header: "Tanggal Lahir", accessor: "tanggal_lahir" },
  { header : "Nama Ibu", accessor: "nama_ibu" },
  { header : "Alamat", accessor: "alamat" },

  
];

const data = [
  { name: "Andi Pratama", tanggal_lahir: "15-03-1990", nama_ibu: "Rina Suryani", alamat: "Jl. Raya No. 12" },
  { name: "Dina Wijaya", tanggal_lahir: "28-11-1985", nama_ibu: "Kartini Wijaya", alamat: "Jl. Merdeka No. 8" },
  { name: "Santi Kusuma", tanggal_lahir: "22-07-1995", nama_ibu: "Siti Fatimah", alamat: "Jl. Pahlawan No. 50" },
  { name: "Rudi Hartono", tanggal_lahir: "10-09-1988", nama_ibu: "Desi Anggraeni", alamat: "Jl. Anggrek No. 20" },
  { name: "Ferianto Lestari", tanggal_lahir: "01-05-1992", nama_ibu: "Lina Sari", alamat: "Jl. Cendana No. 33" },




  
];

const formFields = [
  { name: "name", label: "Nama", type: "text", placeholder: "Masukkan Nama Anak", required: true },
  { name: "tanggal_lahir", label: "Tanggal Lahir", type: "text", placeholder: "Masukkan Tanggal Lahir", required: true },
  { name: "nama_ibu", label: "Nama Ibu", type: "text", placeholder: "Masukkan Nama Ibu", required: true },
  { name: "alamat", label: "Alamat", type: "text", placeholder: "Masukkan Alamat", required: true },
];
const handleAddSubmit = (data: Record<string, string>) => {
  console.log("Data submitted:", data);
  // Handle the data submission logic here
}

  return (
    <div className="container mx-auto py-6 space-y-6">
         <DynamicTable columns={columns} data={data} title='Daftar Anak' formFieldsAdd={formFields} />

    </div>
  )
}

export default Page