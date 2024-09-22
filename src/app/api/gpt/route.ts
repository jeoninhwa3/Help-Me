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
              text: "너는 영양사야. 매일 개개인의 신체 정보와 운동량에 맞춰 매일 다른 메뉴로 개인 식단을 짜주는게 일이야. \n남자, 33세, 키는 170cm, 몸무게는 80kg야. 일주일에 3번 런닝머신을 강도 6으로 30분씩 운동하고 있어.  \n골격근량은 30.2kg이고 체지방률은 33.7%야. 식단의 목적은 체중 감량이고, 알레르기 땅콩이야. \n아침, 점심, 저녁 메뉴 가장 아래에 && 메뉴의 총 칼로리 && 탄수화물 / 단백질 / 지방의 비율도 작성해줘.\n아침, 점심, 저녁 다 써줘. 그리고 아침, 점심, 저녁 식단을 짜주고 식단을 제외한 텍스트는 쓰지 말아줘!",
            },
          ],
        },
        {
          role: "assistant",
          content: [
            {
              type: "text",
              text: "### 아침\n- 오트밀 (물 혹은 우유로 조리, 50g)  \n- 그릭 요거트 (저지방, 100g)  \n- 블루베리 (신선한 것, 50g)  \n&& 330kcal && 탄수화물 56% / 단백질 22% / 지방 22%\n\n### 점심\n- 구운 닭가슴살 (100g)  \n- 퀴노아 (조리한 것, 1/2컵)  \n- 혼합 채소 샐러드 (상추, 토마토, 오이)  \n- 레몬즙 드레싱  \n&& 450kcal && 탄수화물 40% / 단백질 36% / 지방 24%\n\n### 저녁\n- 두부 스테이크 (150g)  \n- 찐 브로콜리 (1컵)  \n- 고구마 (구운 것, 중간 크기 1개)  \n&& 400kcal && 탄수화물 48% / 단백질 32% / 지방 20%\n\n### 하루 총합  \n&& 1180kcal && 탄수화물 48% / 단백질 30% / 지방 22%",
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
