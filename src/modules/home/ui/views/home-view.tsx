"use client"

import {authClient} from "@/lib/auth-client";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

export default function HomeView() {
  const {data: session} = authClient.useSession()
  const router = useRouter()

  return (
    <div>
      <h1>{session?.user.name}</h1>

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