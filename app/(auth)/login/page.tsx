"use client";
import { LoginForm } from "@lambo/components/auth/login-form";
// import { Select, SelectItem } from "@nextui-org/select";

export default function LoginPage() {
  const colors: string[] = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];

  const animals = [
    { key: "cat", label: "Cat" },
    { key: "dog", label: "Dog" },
    { key: "elephant", label: "Elephant" },
    { key: "lion", label: "Lion" },
    { key: "tiger", label: "Tiger" },
    { key: "giraffe", label: "Giraffe" },
    { key: "dolphin", label: "Dolphin" },
    { key: "penguin", label: "Penguin" },
    { key: "zebra", label: "Zebra" },
    { key: "shark", label: "Shark" },
    { key: "whale", label: "Whale" },
    { key: "otter", label: "Otter" },
    { key: "crocodile", label: "Crocodile" },
  ];

  return (
    <div className="flex items-center justify-center bg-slate-200 py-5">
      <LoginForm />
      {/* <div className="w-full flex flex-row flex-wrap gap-4">
        {colors.map((color) => (
          <Select
            key={color}
            className="max-w-xs"
            // @ts-ignore
            color={color}
            defaultSelectedKeys={["cat"]}
            label="Favorite Animal"
            placeholder="Select an animal"
          >
            {animals.map((animal) => (
              <SelectItem key={animal.key}>{animal.label}</SelectItem>
            ))}
          </Select>
        ))}
      </div> */}
    </div>
  );
}
