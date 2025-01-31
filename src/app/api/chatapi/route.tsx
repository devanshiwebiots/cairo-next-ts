import { ChatApiData } from "@/app/ApiData/ChatApiData";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  return NextResponse.json(ChatApiData);
};
