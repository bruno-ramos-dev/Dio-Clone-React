import { Header } from '../../components/Header';
import { Column, Container, Title, TitleHighlight } from './styles';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

const Feed = () => {
  return (<>
        <Header authenticated={true} />
        <Container>
          <Column flex={3}>
            <Title>Feed</Title>
            <Card name='Bruno Ramos' time={8} />
            <Card name='Bruno Ramos 2' time={9}/>
            <Card name='Bruno Ramos 3' time={10}/>
            <Card name='Bruno Ramos 4' time={11}/>
            <Card name='Bruno Ramos 5' time={12}/>
            <Card name='Bruno Ramos 6' time={20}/>
          </Column>
          <Column flex={1}>
            <TitleHighlight># ranking 5 top da semana</TitleHighlight>
            <UserInfo percentual={85} name='Bruno Ramos' image='https://hermes.digitalinnovation.one/users/student/d1e65e01-93e4-4785-8bbb-f987116b7c15.jpg' />
            <UserInfo percentual={25} name='Bruno Ramos 2' image='https://hermes.digitalinnovation.one/users/student/d1e65e01-93e4-4785-8bbb-f987116b7c15.jpg' />
            <UserInfo percentual={60} name='Bruno Ramos 3' image='https://hermes.digitalinnovation.one/users/student/d1e65e01-93e4-4785-8bbb-f987116b7c15.jpg' />
            <UserInfo percentual={80} name='Bruno Ramos 4' image='https://hermes.digitalinnovation.one/users/student/d1e65e01-93e4-4785-8bbb-f987116b7c15.jpg' />
            <UserInfo percentual={50} name='Bruno Ramos 5' image='https://hermes.digitalinnovation.one/users/student/d1e65e01-93e4-4785-8bbb-f987116b7c15.jpg' />
          </Column>
        </Container>
  </>)
}

export { Feed }