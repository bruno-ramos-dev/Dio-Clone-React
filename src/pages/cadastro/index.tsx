import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { MdPerson, MdEmail, MdLock } from 'react-icons/md';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { IFormData } from './types';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { api } from '../../services/api';
import { Button } from "../../components/Button";

import { Container, LoginText, SubtitleLogin, TermsText, Title, TitleLogin, Wrapper } from "./styles"


const schema = yup.object({
    name: yup.string().required('Campo obrigatório'),
    email: yup.string().email('Email inválido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
  }).required();

const Cadastro = () => {

    const navigate = useNavigate();
  
    const handleClickLogin = () => {
      navigate('/login')
    }

    const {control, handleSubmit, formState: { errors} } = useForm<IFormData>({
        resolver: yupResolver(schema), 
        mode: 'onChange'
      });
    
      const onCreateAccount = async (formData: IFormData) => {
        try {
          const { data } = await api.get(`users?name=${formData.name}&users?email=${formData.email}&senha=${formData.password}`);

          if (data.length === 1) {
            alert('Usuário já cadastrado.')
          } else {
            api.post('/users/', {
                name: formData.name, 
                email: formData.email, 
                password: formData.password
                })
          navigate('/feed')
          }
       
        } catch {
          alert('Houve um erro, tente novamente.')
        }
      }

    return (
        <>
            <Header />
            <Container>
                <Title>
                A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
                <Wrapper>
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onCreateAccount)}>
                        <Input name='name' errorMessage={errors?.name?.message} control={control} placeholder='Nome completo' leftIcon={<MdPerson color="#8647AD" />}/>
                        <Input name='email' errorMessage={errors?.email?.message} control={control} placeholder='E-mail' leftIcon={<MdEmail color="#8647AD" />}/>
                        <Input name='password' errorMessage={errors?.password?.message} control={control} placeholder='Senha' type='password' leftIcon={<MdLock color="#8647AD" />}/>
                        <Button title='Criar minha conta' variant='secondary' type='submit' />
                    </form>
                        <TermsText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</TermsText>
                        <LoginText>Já tenho conta. <button onClick={handleClickLogin}>Fazer login</button></LoginText>
                </Wrapper>
            </Container>
        </>
    )
}

export { Cadastro }