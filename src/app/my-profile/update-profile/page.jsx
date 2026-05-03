"use client";

import { useRouter } from "next/navigation";

import {
  Card,
  Button,
  Input,
} from "@heroui/react";

import toast from "react-hot-toast";

import { authClient } from "@/lib/auth-client";

import ProtectedRoute from "@/Components/ProtectedRoute";

export default function UpdateProfilePage() {
  const router = useRouter();

  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const image = form.get("image");

    const { error } =
      await authClient.updateUser({
        name,
        image,
      });

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Profile Updated");

    router.push("/my-profile");
  };

  return (
    <ProtectedRoute>
      <div className="max-w-md mx-auto py-10 px-4">

        <Card className="border shadow-xl rounded-2xl p-6 animate__animated animate__fadeInUp">
          
          <h1 className="text-3xl font-bold text-center mb-6">
            Update Profile
          </h1>

          <form
            onSubmit={handleUpdate}
            className="space-y-5"
          >
           <div className="flex gap-2">
             <Input
              name="name"
              placeholder="Enter new name"
            />

            <Input
              name="image"
              placeholder="Enter image URL"
            />
           </div>

            <Button
              type="submit"
              color="primary"
              className="w-full"
            >
              Update Profile
            </Button>
          </form>
        </Card>
      </div>
    </ProtectedRoute>
  );
}