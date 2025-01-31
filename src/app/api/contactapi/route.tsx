import { ContactApiData } from "@/app/ApiData/ContactApiData";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  return NextResponse.json(ContactApiData);
};
