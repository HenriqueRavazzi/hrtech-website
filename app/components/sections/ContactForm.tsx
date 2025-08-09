'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { sendContactEmail } from '../../lib/actions';
import { useEffect, useRef } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Loader2, CheckCircle, AlertTriangle } from 'lucide-react';

const initialState = {
  message: '',
  error: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Enviando...
        </>
      ) : (
        'Enviar Mensagem'
      )}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(sendContactEmail, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && !state.error) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-light/90">Nome</label>
        <Input id="name" name="name" type="text" placeholder="Seu nome completo" required />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-light/90">Email</label>
        <Input id="email" name="email" type="email" placeholder="seu.email@exemplo.com" required />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-light/90">Mensagem</label>
        <Textarea id="message" name="message" placeholder="Como podemos ajudar?" required rows={5} />
      </div>
      
      <SubmitButton />

      {state?.message && (
        <div className={`mt-4 flex items-center gap-3 rounded-md p-3 text-sm ${state.error ? 'bg-red-900/50 text-red-300' : 'bg-green-900/50 text-green-300'}`}>
          {state.error ? <AlertTriangle className="h-5 w-5" /> : <CheckCircle className="h-5 w-5" />}
          <p>{state.message}</p>
        </div>
      )}
    </form>
  );
}
