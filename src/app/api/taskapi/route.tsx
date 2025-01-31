import { TaskApiData } from "@/app/ApiData/TaskApiData";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  return NextResponse.json(TaskApiData);
};
