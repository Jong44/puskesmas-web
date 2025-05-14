"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";

type FieldType = "text" | "number" | "email" | "password";

interface FormField {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  required?: boolean;
}

interface DynamicFormDialogProps {
  formFields: FormField[];
  onSubmit: (data: Record<string, string>) => void;
  triggerLabel?: string;
  title?: string;
  description?: string;
}

export function DynamicFormDialog({
  formFields,
  onSubmit,
  triggerLabel = "Open Form",
  title = "Form Dialog",
  description = "Please fill out the form below."
}: DynamicFormDialogProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{triggerLabel}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          {formFields.map((field) => (
            <div key={field.name}>
              <Label htmlFor={field.name} className="mb-2">{field.label}</Label>
              <Input
                id={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
                value={formData[field.name] || ""}
                onChange={handleChange}
              />
            </div>
          ))}
          <Button className="mt-4 w-full" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
