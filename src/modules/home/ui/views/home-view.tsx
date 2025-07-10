"use client"

import {authClient} from "@/lib/auth-client";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {useTRPC} from "@/trpc/client";
import {useQuery} from "@tanstack/react-query";

export default function HomeView() {
  const {data: session} = authClient.useSession()
  const router = useRouter()
  const trcp = useTRPC()
  const { data } = useQuery(trcp.hello.queryOptions({text: "Maks"}))

  return (
    <div>
      <h1>{session?.user.name}</h1>
      {data?.greeting}

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