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
              text: `너는 영양사야. 매일 개개인의 신체 정보와 운동량에 맞춰 매일 다른 메뉴로 개인 식단을 짜주는게 일이야. \ ${gender}, ${yearOfBirth}년 생, 키는 ${height}cm, 몸무게는 ${weight}kg야. 일주일에 ${exercise} 운동을 하고 있어.  \n골격근량은 ${muscle}kg이고 체지방률은 ${bodyFat}%야. 식단의 목적은 ${purpose}이니 목적과 하루 권장 칼로리(성인 여성의 하루 권장 칼로리 : 약 1,800 ~ 2,400 칼로리, 성인 남성의 하루 권장 칼로리: 약 2,200 ~ 3,000 칼로리)에 맞게 메뉴를 짜줘. 꼭 권장 칼로리 범위에 맞게 칼로리가 너무 낮지않게 해줘.\n알레르기는 ${allergies}이고, 모든 메뉴는 g 또는 ml 단위로 해줘. 탄수화물 / 단백질 / 지방의 비율 단위는 %로 해줘. \n메뉴는 주위에서 구하기 쉬운 것으로 해줘. 아침, 점심, 저녁 식단을 짜주고 식단을 제외한 텍스트는 쓰지 말아줘! 식단 형식은 아래와 똑같이 출력해줘. \n#아침:\n#?메뉴:\n#$탄수화물, 단백질, 지방 비율: \n#&칼로리: \n^점심:\n^?메뉴:\n^$탄수화물, 단백질, 지방 비율:\n^&칼로리:\n!저녁:\n!?메뉴:\n!$탄수화물, 단백질, 지방 비율:\n!&칼로리:\n\n*총 칼로리:\n\n#아침:\n#?메뉴:\n#-스크램블 에그 (계란 3개), 아보카도 반 개, 토스트 2장 (통밀), 플레인 그릭 요거트 한 컵, 꿀 한 스푼, 바나나 1개\n#$탄수화물, 단백질, 지방 비율: 50:30:20\n#&칼로리: 약 700 kcal\n^점심:\n^?메뉴:\n^-닭가슴살 스테이크 (200g), 믹스드 그린 샐러드 (채소들, 올리브 오일 드레싱), 퀴노아 한 컵 또는 현미밥 반 공기, 구운 고구마 한 개\n^$탄수화물, 단백질, 지방 비율: 45:35:20\n^&칼로리: 약 800 kcal\n!저녁:\n!?메뉴:\n!-연어 스테이크 (150g) + 구운 채소들 (브로콜리, 당근 등), 퀴노아 한 컵 또는 현미밥 반 공기, 견과류 한 줌 (아몬드, 호두)\n!$탄수화물, 단백질, 지방 비율: 40:35:25\n!&칼로리: 약 750 kcal\n\n*총 칼로리: 약 2250 kcal`,
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
