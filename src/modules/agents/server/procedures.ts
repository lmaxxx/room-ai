import {baseProcedure, createTRPCRouter, protectedProcedure} from "@/trpc/init";
import {db} from "@/db";
import {agent} from "@/db/schema";
import {agentInsertSchema} from "@/modules/agents/schemas";
import z from "zod";
import {eq} from "drizzle-orm";

export const agentRouter = createTRPCRouter({
  getOne: protectedProcedure.input(z.object({id: z.string()})).query(async ({input}) => {
    const [agentRecord] = await db.select().from(agent).where(eq(agent.id, input.id))
    return agentRecord;
  }),
  getMany: protectedProcedure.query(async () => {
    return db.select().from(agent);
  }),
  create: protectedProcedure
    .input(agentInsertSchema)
    .mutation(async ({input, ctx}) => {
      const [createdAgent] = await db
        .insert(agent)
        .values({...input, userId: ctx.auth.user.id})
        .returning();

      return createdAgent;
    })
})