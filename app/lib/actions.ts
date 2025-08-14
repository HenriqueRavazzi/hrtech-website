"use server";

import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactSchema = z.object({
  name: z.string().min(2, { message: "O nome precisa ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
  message: z.string().min(10, { message: "A mensagem precisa ter pelo menos 10 caracteres." }),
});

export type State = {
  message: string;
  error: boolean;
};

export async function sendContactEmail(
  prevState: State | null,
  formData: FormData
): Promise<State> {
  const validatedFields = ContactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });
  if (!validatedFields.success) {
    return {
      message: "Falha na validação. Por favor, verifique os campos.",
      error: true,
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    await resend.emails.send({
      from: "Contato Site <onboarding@resend.dev>", // IMPORTANTE: Este domínio precisa ser verificado na sua conta Resend
      to: ["hrtechautomation@gmail.com"],
      subject: `Nova mensagem de ${name} via site HRTech`,
      html: `
        <h1>Nova Mensagem do Site HRTech</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    });

    return {
      message: "Sua mensagem foi enviada com sucesso! Obrigado.",
      error: false,
    };
  } catch (error) {
    console.error(error);
    return {
      message: "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.",
      error: true,
    };
  }
}
