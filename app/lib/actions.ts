"use server"; // Essencial para definir que este é um módulo de Server Actions

import { z } from "zod";
import { Resend } from "resend";

// Inicializa o cliente do Resend com a chave da API
const resend = new Resend(process.env.RESEND_API_KEY);

// Define o schema de validação com Zod
const ContactSchema = z.object({
  name: z.string().min(2, { message: "O nome precisa ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
  message: z.string().min(10, { message: "A mensagem precisa ter pelo menos 10 caracteres." }),
});

// Define o tipo de estado que a nossa action retornará
export type State = {
  message: string;
  error: boolean;
};

// A Server Action
export async function sendContactEmail(
  prevState: State | null,
  formData: FormData
): Promise<State> {
  // Extrai os dados do formulário
  const validatedFields = ContactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  // Se a validação falhar, retorna os erros
  if (!validatedFields.success) {
    // A biblioteca useFormState lida com a exibição desses erros
    // Mas retornamos uma mensagem genérica para o estado geral
    return {
      message: "Falha na validação. Por favor, verifique os campos.",
      error: true,
    };
  }

  const { name, email, message } = validatedFields.data;

  // Bloco Try/Catch para o envio do e-mail
  try {
    // Envia o e-mail usando Resend
    await resend.emails.send({
      from: "Contato Site <onboarding@resend.dev>", // IMPORTANTE: Este domínio precisa ser verificado na sua conta Resend
      to: ["hrtechautomation@gmail.com"], // SUBSTITUA pelo seu e-mail
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

    // Retorna uma mensagem de sucesso
    return {
      message: "Sua mensagem foi enviada com sucesso! Obrigado.",
      error: false,
    };
  } catch (error) {
    console.error(error);
    // Retorna uma mensagem de erro genérica
    return {
      message: "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.",
      error: true,
    };
  }
}
