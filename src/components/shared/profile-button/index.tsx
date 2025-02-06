"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function ProfileButton() {
  const { data: session } = useSession();
  return (
    <>
      {!session ? (
        <Button>
          <Link href="/auth/signin">Sign in </Link>
        </Button>
      ) : (
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage
              src={
                session.user?.image ??
                "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3396.jpg?semt=ais_hybrid"
              }
              alt={session.user?.name ?? "user"}
            />
            <AvatarFallback>
              {session.user?.name?.[0]?.toUpperCase() ?? "user"}
            </AvatarFallback>
          </Avatar>
          <Button variant="destructive" onClick={() => signOut()}>
            Sign Out
          </Button>
        </div>
      )}
    </>
  );
}
