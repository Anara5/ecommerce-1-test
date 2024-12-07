import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// turn of draft mode
export async function GET(request: NextRequest) {
    (await draftMode()).disable();
    return NextResponse.redirect(new URL("/", request.url));
}