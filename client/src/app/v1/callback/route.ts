import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, context: any) {
    // const response = await request.json();
    // console.log(response);
    return NextResponse.json({ok: 'foobar'}, {status: 200});
};