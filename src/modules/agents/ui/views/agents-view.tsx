"use client"

import {useTRPC} from "@/trpc/client";
import {useSuspenseQuery} from "@tanstack/react-query";
import LoadingState from "@/components/loading-state";
import ErrorState from "@/components/error-state";
import React from "react";

export default function AgentsView() {
  const trpc = useTRPC()
  const { data, isLoading, isError } = useSuspenseQuery(trpc.agent.getMany.queryOptions())

  return (
    <div>
      {JSON.stringify(data, null, 2)}
    </div>
  )
}

export function AgentsViewLoading() {
  return (
    <LoadingState title={"Loading Agents"} description={"This may take a few seconds"}/>
  )
}

export function AgentsViewError() {
  return (
    <ErrorState
      title={"Error Loading Agents"}
      description={"Something went wrong"}
    />
  )
}