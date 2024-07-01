"use client";
import { LoginForm } from "@lambo/components/auth/login-form";

export default function LoginPage() {
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
