'use client'

import { AreaChartAnak } from '@/components/area-chart-anak'
import { AreaChartIbu } from '@/components/area-chart-ibu'
import { CalendarVaksin } from '@/components/calendar-vaksin'
import DynamicTable from '@/components/dynamic-table'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Baby, Calendar, Frown, HandPlatter, PersonStanding, StickerIcon, User } from 'lucide-react'
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
    <div className='p-4 flex gap-6'>
      <div className="flex-1">
        <div className="grid grid-cols-4 gap-4 flex-1">
        <Card className='h-fit'>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="">
                <h1 className="text-lg font-semibold">Total Ibu</h1>
                <CardDescription>
                  <p className="text-sm text-muted-foreground">Total ibu dalam pengawasan</p>
                </CardDescription>
              </div>
              <PersonStanding className="h-6 w-6" />
            </CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">
            <p>100</p>
          </CardContent>
        </Card>
        <Card className='h-fit'>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="">
                <h1 className="text-lg font-semibold">Total Anak</h1>
                <CardDescription>
                  <p className="text-sm text-muted-foreground">Total anak dalam pengawasan</p>
                </CardDescription>
              </div>
              <Baby className="h-6 w-6" />
            </CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">
            <p>100</p>
          </CardContent>
        </Card>
        <Card className='h-fit'>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="">
                <h1 className="text-lg font-semibold">Total Bayi Berisiko</h1>
                <CardDescription>
                  <p className="text-sm text-muted-foreground">Total anak beresiko</p>
                </CardDescription>
              </div>
              <HandPlatter className="h-6 w-6" />
            </CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">
            <p>100</p>
          </CardContent>
        </Card>
        <Card className='h-fit'>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="">
                <h1 className="text-lg font-semibold">Total Ibu Berisiko</h1>
                <CardDescription>
                  <p className="text-sm text-muted-foreground">Total ibu berisiko</p>
                </CardDescription>
              </div>
              <Frown className="h-6 w-6" />
            </CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-semibold">
            <p>100</p>
          </CardContent>
        </Card>
      </div>
      <div className="flex gap-4 mt-4">
        <AreaChartAnak />
        <AreaChartIbu />
      </div>
      <div className="mt-4">
        <DynamicTable columns={columns} data={data} title='Data Ibu' formFieldsAdd={formFields} />
      </div>
      </div>
      <div className="w-1/4">
      <CalendarVaksin />
      </div>
    </div>
  )
}

export default Page