"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

import { authClient } from "@/lib/auth-client";

import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { GrGoogle } from "react-icons/gr";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirect = searchParams.get("redirect");

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    const { error } = await authClient.signIn.email({
      email,
      password,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Login Successful");

    router.push(redirect || "/");
  };

  const handleGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: redirect || "/",
    });
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
 
      <Card className="border w-full max-w-[500px] py-10 shadow-lg">
        <h1 className="text-center text-2xl md:text-3xl font-bold">
          Login
        </h1>

        <Form
        
          className="flex w-full px-6 md:px-10 flex-col gap-4 mt-5"
          onSubmit={onSubmit}
        >
          <TextField isRequired name="email" className="w-full">
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="password"
            type="password"
            className="w-full"
          >
            <Label>Password</Label>
            <Input placeholder="Enter password" />
            <FieldError />
          </TextField>

          <Button type="submit" className="w-full font-semibold" color="primary">
            Login
          </Button>

          <p className="text-center text-sm md:text-base">
            New here?
            <Link
              href="/register"
              className="text-blue-500 ml-1 font-medium hover:underline"
            >
              Register
            </Link>
          </p>

          <div className="relative my-2">
             <div className="absolute inset-0 flex items-center"><span className="w-full border-t"></span></div>
             <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-500">Or</span></div>
          </div>

          <Button
            type="button"
            variant="bordered"
            className="w-full flex items-center justify-center gap-2"
            onClick={handleGoogle}
          >
            <GrGoogle />
            Continue with Google
          </Button>
        </Form>
      </Card>
    </div>
  );
}