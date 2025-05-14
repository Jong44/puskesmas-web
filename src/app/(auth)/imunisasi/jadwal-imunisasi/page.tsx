'use client'

import DynamicTable from '@/components/dynamic-table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Search, Table } from 'lucide-react'
import React from 'react'



const Page = () => {
    
const columns = [
    { header: "ID Jadwal", accessor: "id_jadwal" },
    { header: "ID Posyandu", accessor: "id_posyandu" },
    { header: "Tanggal", accessor: "date" },
    { header: "Tempat", accessor: "tempat" },
    { header: "Deskripsi", accessor: "description" },
    { header: "Status", accessor: "status" }
  ];

const data = [
  {id_jadwal: "00492817", id_posyandu: "00348293", date: "15-05-2025", tempat: "Posyandu A",  description: "Imunisasi untuk bayi usia 0-6 bulan", status: "scheduled"},
  {id_jadwal: "00185647", id_posyandu: "00276384", date: "16-05-2025", tempat: "Posyandu B",  description: "Imunisasi untuk anak usia 7-12 bulan", status: "process"},
  {id_jadwal: "00529861", id_posyandu: "00763218", date: "17-05-2025", tempat: "Posyandu C",  description: "Imunisasi untuk balita usia 13-24 bulan", status: "completed"},
  {id_jadwal: "00391827", id_posyandu: "00674592", date: "18-05-2025", tempat: "Posyandu D",  description: "Imunisasi booster untuk anak usia 3-5 tahun", status: "canceled"},
  {id_jadwal: "00681472", id_posyandu: "00927483", date: "19-05-2025", tempat: "Posyandu E",  description: "Imunisasi tambahan untuk anak usia 6-12 tahun", status: "scheduled"}
];



const formFields = [
    { name: "id_posyandu", label: "ID Posyandu", type: "text", placeholder: "Masukkan ID Posyandu", required: true },
    { name: "date", label: "Tanggal", type: "datetime-local", placeholder: "Masukkan Tanggal", required: true },
    { name: "tempat", label: "Tempat", type: "text", placeholder: "Masukkan Tempat", required: true },
    { name: "description", label: "Deskripsi", type: "text", placeholder: "Masukkan Deskripsi", required: true },
    { name: "status", label: "Status", type: "select", options: ["scheduled", "process", "completed", "canceled"], required: true }
  ];
const handleAddSubmit = (data: Record<string, string>) => {
  console.log("Data submitted:", data);
  // Handle the data submission logic here
}

  return (
    <div className="container mx-auto py-6 space-y-6">
         <DynamicTable columns={columns} data={data} title='Jadwal Imunisasi' formFieldsAdd={formFields} />

    </div>
  )
}

export default Page