import { z } from 'zod';
import { SocialIcons, RegisterContainer } from './styled';
import { FaGooglePlusG, FaFacebookF } from 'react-icons/fa';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { registerUserAction } from '@/data/actions/auth-actions';
import { UserContext } from '@/context/UserContext';
import { useContextSelector } from 'use-context-selector';
import { toast } from 'react-toastify';

const registerSchema = z.object({
  username: z
    .string()
    .min(3, {
      message: 'Nome precisa ter entre 3 e 20 caracteres',
    })
    .max(20, {
      message: 'Nome precisa ter entre 3 e 20 caracteres',
    }),
  password: z
    .string()
    .min(6, { message: 'A senha deve conter entre 6 e 50 caracteres' })
    .max(50, { message: 'A senha deve conter entre 6 e 50 caracteres' }),
  email: z.string().email({
    message: 'Digite um email válido',
  }),
  phone: z
    .string()
    .transform((data) => data.replace(/\D/g, ''))
    .refine((data) => data.length >= 10 && data.length <= 11, {
      message: 'O número de telefone deve ter entre 10 e 11 dígitos.',
    }),
});
export type RegisterFields = z.infer<typeof registerSchema>;

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFields>({
    resolver: zodResolver(registerSchema),
  });

  const maskPhoneNumber = (value: string) => {
    let cleanNumber = removeNonNumber(value);

    // DDD + Número de 9 dígitos : (99) 99999-9999
    if (cleanNumber.length >= 11) {
      return `(${cleanNumber.substring(0, 2)}) ${cleanNumber.substring(2, 7)}-${cleanNumber.substring(7, 11)}`;
    }

    // DDD + Número de 8 dígitos : (99) 99999-9999
    if (cleanNumber.length >= 7) {
      return `(${cleanNumber.substring(0, 2)}) ${cleanNumber.substring(2, 6)}-${cleanNumber.substring(6)}`;
    }

    // Escreveu apenas o DDD : (99)
    if (removeNonNumber(cleanNumber).length >= 3) {
      return `(${cleanNumber.substring(0, 2)}) ${cleanNumber.substring(2)}`;
    }

    return cleanNumber;
  };

  const removeNonNumber = (string: string) => {
    let numberSubstring = string.replace(/\D/g, '').substring(0, 15) || '';

    return numberSubstring;
  };

  const userContext = useContextSelector(UserContext, (ctx) => ctx);

  const onSubmit: SubmitHandler<RegisterFields> = async (data) => {
    try {
      const response: any = await registerUserAction(data);
      if (response) {
        userContext.updateUser({
          username: response.user.username,
          email: response.user.email,
          token: response.jwt,
          user_id: response.user.id,
          phone: response.user.phone,
          type: response.user.type,
        });
        toast.success('Conta registrada.');
      }
      if (response.strapiErrors) {
        toast.error(response.strapiErrors.message);
        setError('root', {
          type: 'manual',
          message: response.strapiErrors.message,
        });
      }
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Criar Conta</h1>
      <SocialIcons>
        <a href="#" className="icon">
          <FaGooglePlusG size={20} color="black" />
        </a>
        <a href="#" className="icon">
          <FaFacebookF size={20} color="black" />
        </a>
      </SocialIcons>
      <span>ou use o seu email para cadastrar</span>
      <input type="text" placeholder="Nome" {...register('username')} />
      <span className="error" style={{ color: 'red', alignSelf: 'flex-start' }}>
        {errors.username?.message}
      </span>
      <input type="email" placeholder="Email" {...register('email')} />
      <span className="error" style={{ color: 'red', alignSelf: 'flex-start' }}>
        {errors.email?.message}
      </span>
      {/* <input type="text" placeholder="CPF: 000.000.000-00" /> */}
      <input
        type="text"
        placeholder="WhatsApp: (00) 0 0000-0000"
        {...register('phone')}
        onChange={(event) => {
          const { value } = event.target;
          event.target.value = maskPhoneNumber(value);
        }}
      />
      <span className="error" style={{ color: 'red', alignSelf: 'flex-start' }}>
        {errors.phone?.message}
      </span>
      <input type="password" placeholder="Senha" {...register('password')} />
      <span className="error" style={{ color: 'red', alignSelf: 'flex-start' }}>
        {errors.password?.message}
      </span>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Carregando...' : 'Cadastrar'}
      </button>
      <span className="error" style={{ color: 'red', alignSelf: 'center' }}>
        {errors.root?.message}
      </span>
    </form>
  );
}
