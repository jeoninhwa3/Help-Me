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
    allergy,
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
              text: "너는 영양사야. 매일 개개인의 신체 정보와 운동량에 맞춰 매일 다른 메뉴로 개인 식단을 짜주는게 일이야. \n남성, 33세, 키는 170cm, 몸무게는 50kg야. 일주일에 5번 고강도의 근력 운동하고 있어.  \n골격근량은 30.2kg이고 체지방률은 23.7%야. 식단의 목적은 근력 증진이니 목적과 하루 권장 칼로리(성인 여성의 하루 권장 칼로리 : 약 1,800 ~ 2,400 칼로리, 성인 남성의 하루 권장 칼로리: 약 2,200 ~ 3,000 칼로리)에 맞게 메뉴를 짜줘. 꼭 권장 칼로리 범위에 맞게 메뉴를 작성해줘.\n알레르기 땅콩이고, 모든 메뉴는 g 또는 ml 단위로 해줘. \n아침, 점심, 저녁 메뉴 가장 아래에 && 메뉴의 총 칼로리 && 탄수화물 / 단백질 / 지방의 비율도 작성해줘.\n메뉴는 주위에서 구하기 쉬운 것으로 해줘. 아침, 점심, 저녁 식단을 짜주고 식단을 제외한 텍스트는 쓰지 말아줘!",
            },
          ],
        },
        {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "### 아침\n- 스크램블 에그 (4개, 200g)  \n- 통곡물 토스트 (2조각, 60g)  \n- 아보카도 (50g)  \n- 오트밀 (30g)  \n&& 650kcal && 탄수화물 35% / 단백질 40% / 지방 25%\n\n### 점심\n- 현미밥 (250g)  \n- 구운 닭가슴살 (200g)  \n- 찐 브로콜리 (150g)  \n- 올리브유 (15ml)  \n&& 850kcal && 탄수화물 55% / 단백질 35% / 지방 10%\n\n### 저녁\n- 연어 (200g, 구운 것)  \n- 고구마 (250g, 찐 것)  \n- 시금치 (100g, 볶은 것)  \n&& 800kcal && 탄수화물 50% / 단백질 35% / 지방 15%\n\n### 하루 총합  \n&& 2300kcal && 탄수화물 48% / 단백질 36% / 지방 16%  ",
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
