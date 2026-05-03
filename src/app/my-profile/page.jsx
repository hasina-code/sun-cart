"use client";

import Image from "next/image";
import Link from "next/link";

import { authClient } from "@/lib/auth-client";

import {
  Card,
  Button,
} from "@heroui/react";

import ProtectedRoute from "@/Components/ProtectedRoute";

export default function MyProfilePage() {
  const { data: session, isPending } =
    authClient.useSession();

  const user = session?.user;

  if (isPending) {
    return (
      <p className="text-center mt-10">
        Loading...
      </p>
    );
  }

  return (
    <ProtectedRoute>
      <div className="max-w-md mx-auto py-10 px-4">
        
        <Card className="border shadow-xl rounded-2xl p-6 animate__animated animate__fadeInUp">
          
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-orange-400">
              
              <Image
                src={user?.image || "/profile.png"}
                alt="profile"
                fill
                className="object-cover"
                sizes="112px"
              />
            </div>
          </div>

          {/* User Info */}
          <div className="text-center mt-5 space-y-2">
            
            <h1 className="text-3xl font-bold">
              {user?.name}
            </h1>

            <p className="text-gray-500">
              {user?.email}
            </p>
          </div>

          {/* Update Button */}
          <Link
            href="/my-profile/update-profile"
            className="mt-6 block"
          >
            <Button
              color="primary"
              className="w-full"
            >
              Update Information
            </Button>
          </Link>
        </Card>
      </div>
    </ProtectedRoute>
  );
}