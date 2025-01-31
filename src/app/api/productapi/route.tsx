
import { ProductApiData } from "@/app/ApiData/ProductApiData";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  return NextResponse.json(ProductApiData);
};
