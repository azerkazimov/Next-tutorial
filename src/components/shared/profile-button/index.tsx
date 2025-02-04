"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Image from "next/image";
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
          {session?.user?.image && (
            <Image
              src={session.user.image}
              alt={session.user.name || "user"}
              width={32}
              height={32}
              className="rounded-full"
            />
          )}
        </div>
      )}
    </>
  );
}
