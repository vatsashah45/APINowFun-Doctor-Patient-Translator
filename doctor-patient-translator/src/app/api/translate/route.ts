import { NextResponse } from "next/server";
import apiNow from "apinow-sdk";

const endpointUrl = "https://apinow.fun/api/endpoints/apinowfun/translate-TRANSLATE";

export async function POST(req: Request) {
  try {
    const { text, selectedLanguage } = await req.json();
    const privateKey = process.env.APINOW_WALLET_PKEY as string;

    if (!text) {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    const response = await apiNow.execute(endpointUrl, privateKey, {
      method: "POST",
      data: { text, selectedLanguage },
    });

    return NextResponse.json(response);
  } catch (error: any) {
    console.error("Translation error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
