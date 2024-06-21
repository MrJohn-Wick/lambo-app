'use client'

import { title } from "@lambo/components/primitives";
import { Button } from '@lambo/components/ui/button';
import { useFormState, useFormStatus } from 'react-dom';
import { userLogin } from '../actions';
// import { Select, SelectItem } from "@nextui-org/select";

export default async function LoginPage() {
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

  const { pending } = useFormStatus();
  const [ state, dispatch ] = useFormState(userLogin, {
    message: ''
  });

  return (
    <div>
      <h1 className={title()}>Login</h1>

      <form action={dispatch}>
        <div>
          { state.message }
        </div>
        <div>
          <label htmlFor="signin-email" className=''>Email</label>
          <input id="signin-email" name="email" type="text" required />
        </div>

        <div>
          <label htmlFor="signin-password">Password</label>
          <input id="signin-password" name="password" type="password" required />
        </div>

        <Button type="submit" disabled={pending}>Login</Button>
      </form>
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
