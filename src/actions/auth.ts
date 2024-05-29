'use server'

import { signIn, signOut } from "@lambo/auth";
import { revalidatePath } from "next/cache";

export async function actionSingIn(prevState: any, formData: FormData) {
  console.log("singIn action");
  console.log(formData);
  try {
    await signIn('credentials', formData);
  } catch (error) {
    return {
      message: "User signIn error"
    }
 }
}

export async function actionLogout() {
  await signOut();
}
