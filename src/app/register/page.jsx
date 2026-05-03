"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
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

export default function RegisterPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const image = form.get("image");
    const email = form.get("email");
    const password = form.get("password");

    const { error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Registration Successful");
    router.push("/login");
  };

  const handleGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
  
    <div className="flex items-center justify-center min-h-screen py-10 px-4">
      <Card className="border w-full max-w-[500px] py-8 md:py-10 shadow-lg">
        <h1 className="text-center text-2xl md:text-3xl font-bold">
          Register
        </h1>

        <Form
          
          className="flex w-full px-6 md:px-10 flex-col gap-4 mt-5"
          onSubmit={onSubmit}
        >
          <TextField isRequired name="name">
            <Label>Name</Label>
            <Input placeholder="Enter your name" className="w-full" />
            <FieldError />
          </TextField>

          <TextField isRequired name="image">
            <Label>Photo URL</Label>
            <Input placeholder="https://example.com/photo.jpg" className="w-full" />
            <FieldError />
          </TextField>

          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="john@example.com" className="w-full" />
            <FieldError />
          </TextField>

          <TextField isRequired name="password" type="password">
            <Label>Password</Label>
            <Input placeholder="Enter password" className="w-full" />
            <FieldError />
          </TextField>

          <Button type="submit" color="primary" className="w-full font-semibold mt-2">
            Register
          </Button>

          <p className="text-center text-sm md:text-base">
            Already have account?
            <Link
              href="/login"
              className="text-blue-500 ml-1 font-medium hover:underline"
            >
              Login
            </Link>
          </p>

         
          <div className="relative my-2">
             <div className="absolute inset-0 flex items-center"><span className="w-full border-t"></span></div>
             <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-400">Or</span></div>
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