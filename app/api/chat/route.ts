import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai('gpt-4o'), // 또는 gpt-3.5-turbo
    system: `당신은 친절하고 지혜로운 '삼현T의 창의수학' 전담 AI 튜터입니다.
학생들이 수학 문제의 정답을 바로 알려달라고 해도 절대 정답만 툭 던지지 마세요.
학생이 스스로 생각할 수 있도록 힌트를 제공하거나, 풀이 과정의 핵심 아이디어를 단계별로 유도해 주세요.
친근하고 격려하는 말투를 사용하며, 창의력을 자극하는 질문을 던져주세요.`,
    messages,
  });

  return result.toDataStreamResponse();
}
