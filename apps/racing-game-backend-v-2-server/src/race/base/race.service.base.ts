/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Race as PrismaRace,
  Leaderboard as PrismaLeaderboard,
  Score as PrismaScore,
  Player as PrismaPlayer,
} from "@prisma/client";

export class RaceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.RaceCountArgs, "select">): Promise<number> {
    return this.prisma.race.count(args);
  }

  async races(args: Prisma.RaceFindManyArgs): Promise<PrismaRace[]> {
    return this.prisma.race.findMany(args);
  }
  async race(args: Prisma.RaceFindUniqueArgs): Promise<PrismaRace | null> {
    return this.prisma.race.findUnique(args);
  }
  async createRace(args: Prisma.RaceCreateArgs): Promise<PrismaRace> {
    return this.prisma.race.create(args);
  }
  async updateRace(args: Prisma.RaceUpdateArgs): Promise<PrismaRace> {
    return this.prisma.race.update(args);
  }
  async deleteRace(args: Prisma.RaceDeleteArgs): Promise<PrismaRace> {
    return this.prisma.race.delete(args);
  }

  async findLeaderboards(
    parentId: string,
    args: Prisma.LeaderboardFindManyArgs
  ): Promise<PrismaLeaderboard[]> {
    return this.prisma.race
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .leaderboards(args);
  }

  async findScores(
    parentId: string,
    args: Prisma.ScoreFindManyArgs
  ): Promise<PrismaScore[]> {
    return this.prisma.race
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .scores(args);
  }

  async getPlayer(parentId: string): Promise<PrismaPlayer | null> {
    return this.prisma.race
      .findUnique({
        where: { id: parentId },
      })
      .player();
  }
}
