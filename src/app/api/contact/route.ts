import { sendEmail } from '@/app/service/email';
import { object, string } from 'yup';

const bodySchema = object({
  from: string().email().required(),
  subject: string().required(),
  message: string().required(),
});

export async function POST(req: Request) {
  const body = await req.json();

  if (!bodySchema.isValidSync(body)) {
    return new Response(
      JSON.stringify({ message: '포맷이 유효하지 않습니다.' }),
      {
        status: 400,
      }
    );
  }

  return sendEmail(body) //
    .then(
      () =>
        new Response(
          JSON.stringify({ message: '메일을 성공적으로 보냈습니다.' }),
          {
            status: 200,
          }
        )
    )
    .catch((error) => {
      console.error(error);
      return new Response(
        JSON.stringify({ message: '메일 전송을 실패했습니다.' }),
        {
          status: 500,
        }
      );
    });
}
