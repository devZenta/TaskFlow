import { NextRequest, NextResponse } from "next/server";
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env.MISTRAL_API_KEY || "",
});

export async function POST(req: NextRequest) {
  try {
    const { description } = await req.json();

    if (!description) {
      return NextResponse.json({ message: "Merci de fournir une description du projet" }, { status: 400 });
    }

    const result = await mistral.chat.complete({
      model: "open-mistral-7b",
      stream: false,
      messages: [
        {
          content: `Génère des composants React pour ce projet : ${description}`,
          role: "user",
        },
      ],
    });

    if (!result.choices || result.choices.length === 0) {
      throw new Error("No choices returned from Mistral API");
    }
    return NextResponse.json({ components: result.choices[0].message.content });
  } catch (error) {
    console.error("Erreur API Mistral:", error);
    return NextResponse.json({ message: "Erreur lors de l'appel à Mistral AI" }, { status: 500 });
  }
}

