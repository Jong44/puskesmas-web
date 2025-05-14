"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Appointment {
  time: string;
  title: string;
  doctor: string;
  date: string;
}



export function CalendarVaksin() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const appointments: Appointment[] = [
  { time: "10:20 - 11:00 AM", title: "Medical Checkup", doctor: "Dr Darlene Robertson", date: "2022-05-10" },
  { time: "15:20 - 14:00 PM", title: "Improve Stress Management", doctor: "Dr Esther Howard", date: "2022-05-10" },
];

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex flex-col space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Jadwal Vaksin</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="flex justify-center items-center m-auto">
          <Calendar selectedDate={selectedDate} onChange={handleDateChange} />

            </div>
          <div className="mt-4 grid grid-cols-1 gap-4">
            <div className="py-2 px-4 border-l-4 border-l-blue-500 rounded-md">
                <p>Selasa, 11 Juni 2025 (10.20 - 11.00)</p>
                <p className="font-semibold my-1">Vaksin Polio</p>
                <p className="text-sm text-muted-foreground">Bojongsari, Semarang</p>
            </div>
            <div className="py-2 px-4 border-l-4 border-l-blue-500 rounded-md">
                <p>Selasa, 11 Juni 2025 (10.20 - 11.00)</p>
                <p className="font-semibold my-1">Vaksin Polio</p>
                <p className="text-sm text-muted-foreground">Bojongsari, Semarang</p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
