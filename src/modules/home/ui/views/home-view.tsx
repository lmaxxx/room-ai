"use client"

import {authClient} from "@/lib/auth-client";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

export default function HomeView() {
  const router = useRouter()

  return (
    <div>
      Home view

      <div>
        <Button onClick={() => {
          authClient.signOut({
            fetchOptions: {
              onSuccess: () => router.push("/sign-in")
            }
          })
        }}>
          Sign out</Button>
      </div>
    </div>
  );
}