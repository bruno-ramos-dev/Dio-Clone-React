
import { BuscarInputContainer, Container, Input, Menu, MenuRight, Row, UserPicture, Wrapper } from './styles';
import { Button } from '../Button';
import logo from '../../assets/logo-dio.png'
import { IHeader } from './types';

const Header = ({authenticated}: IHeader) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt='Logo da DIO' />
                {authenticated ? (
                    <>
                        <BuscarInputContainer>
                        <Input placeholder='Buscar...'/>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
            </Row>
            <Row>
                {authenticated ? (
                    <UserPicture src='https://hermes.digitalinnovation.one/users/student/d1e65e01-93e4-4785-8bbb-f987116b7c15.jpg' />
                ) : (
                    <>
                        <MenuRight href='#'>Home</MenuRight>
                        <Button title='Entrar'></Button>
                        <Button title='Cadastrar'></Button>
                    </>
                )}

            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }