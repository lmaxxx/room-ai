import {baseProcedure, createTRPCRouter} from "@/trpc/init";
import {db} from "@/db";
import {agent} from "@/db/schema";
import {TRPCError} from "@trpc/server";

export const agentRouter = createTRPCRouter({
  getMany: baseProcedure.query(async () => {

    throw new TRPCError({message: "UPS", code: "BAD_REQUEST"});

    return db.select().from(agent);
  })
})