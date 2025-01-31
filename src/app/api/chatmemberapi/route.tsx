import { ChatMemberApiData } from "@/app/ApiData/ChatMemberApiData";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  return NextResponse.json(ChatMemberApiData);
};
