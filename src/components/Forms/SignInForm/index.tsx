import { z } from 'zod';
import { SocialIcons, LoginContainer } from './styled';
import { FaGooglePlusG, FaFacebookF } from 'react-icons/fa';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import {
  loginUserAction,
  registerUserAction,
} from '@/data/actions/auth-actions';
import { getUserMeLoader } from '@/data/auth-service/get-user-me-loader';
import { useContextSelector } from 'use-context-selector';
import { UserContext } from '@/context/UserContext';
import { toast } from 'react-toastify';
import { redirect } from 'next/dist/server/api-utils';

const loginSchema = z.object({
  identifier: z.string().email({ message: 'Digite um email válido' }),
  password: z
    .string()
    .min(6, { message: 'A senha deve conter entre 6 e 50 caracteres' })
    .max(50, { message: 'A senha deve conter entre 6 e 50 caracteres' }),
});

export type LoginFields = z.infer<typeof loginSchema>;

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFields>({
    resolver: zodResolver(loginSchema),
  });
  const userContext = useContextSelector(UserContext, (ctx) => ctx);
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginFields> = async (data) => {
    try {
      const response: any = await loginUserAction(data);
      if (response) {
        userContext.updateUser({
          username: response.user.username,
          email: response.user.email,
          token: response.jwt,
          user_id: response.user.id,
          phone: response.user.phone,
          type: response.user.type,
        });
        toast.success('Login realizado.');
      }

      if (response.redirectTo) {
        router.push(response.redirectTo);
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
      <h1>Acessar Conta</h1>
      <SocialIcons>
        <a href="#" className="icon">
          <FaGooglePlusG size={20} color="black" />
        </a>
        <a href="#" className="icon">
          <FaFacebookF size={20} color="black" />
        </a>
      </SocialIcons>
      <span>use o seu email senha para acessar</span>
      <input type="email" placeholder="Email" {...register('identifier')} />
      <span className="error" style={{ color: 'red', alignSelf: 'flex-start' }}>
        {errors.identifier?.message}
      </span>
      <input type="password" placeholder="Senha" {...register('password')} />
      <span className="error" style={{ color: 'red', alignSelf: 'flex-start' }}>
        {errors.password?.message}
      </span>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Carregando...' : 'Acessar plataforma'}
      </button>{' '}
      <span className="error" style={{ color: 'red', alignSelf: 'center' }}>
        {errors.root?.message}
      </span>
    </form>
  );
}
