import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, context: any) {
    const { email } = await request.json();

    const result = await fetch(process.env.ID_PROVIDER_RESOLVER_URL as string, { method: 'POST', body: JSON.stringify({ email }) });
    const {
        IDProvider,
        kc_idp_hint
    } = await result.json();
    return NextResponse.json({
        IDProvider,
        kc_idp_hint
    }, { status: 200 });
};