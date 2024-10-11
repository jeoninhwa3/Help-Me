import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request: NextRequest) {
  const SurveyData = await request.json();
  const {
    yearOfBirth,
    gender,
    height,
    weight,
    muscle,
    bodyFat,
    exercise,
    purpose,
    allergies,
  } = SurveyData;

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `너는 영양사야. 매일 개개인의 신체 정보와 운동량에 맞춰 매일 다른 메뉴로 개인 식단을 짜주는게 일이야. \ ${gender}, ${yearOfBirth}년 생, 키는 ${height}cm, 몸무게는 ${weight}kg야. 일주일에 ${exercise} 운동을 하고 있어.  \n골격근량은 ${muscle}kg이고 체지방률은 ${bodyFat}%야. 식단의 목적은 ${purpose}이니 목적과 하루 권장 칼로리(성인 여성의 하루 권장 칼로리 : 약 1,800 ~ 2,400 칼로리, 성인 남성의 하루 권장 칼로리: 약 2,200 ~ 3,000 칼로리)에 맞게 메뉴를 짜줘. 꼭 권장 칼로리 범위에 맞게 칼로리가 너무 낮지않게 해줘.\n알레르기는 ${allergies}이고, 모든 메뉴는 g 또는 ml 단위로 해줘. \n아침, 점심, 저녁 메뉴 아래에 각각 아침, 점심, 저녁 메뉴의 총 칼로리, 탄수화물, 단백질, 지방의 비율을 이런 형식으로 작성해줘. 탄수화물 / 단백질 / 지방의 비율 단위는 %로 해줘. && 메뉴의 총 칼로리 && 탄수화물 / 단백질 / 지방의 비율 \n메뉴는 주위에서 구하기 쉬운 것으로 해줘. 아침, 점심, 저녁 식단을 짜주고 식단을 제외한 텍스트는 쓰지 말아줘!`,
            },
          ],
        },
      ],
      temperature: 1,
      max_tokens: 2766,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      response_format: {
        type: "text",
      },
    });

    return NextResponse.json({ data: response.choices[0].message.content });
  } catch (error) {
    console.error("Error calling OpenAI:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
