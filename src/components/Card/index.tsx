import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles';
import { FiThumbsUp } from 'react-icons/fi';
import backgroundImage from '../../assets/background.png';
import { ICard } from './types';

const Card = ({name, time}: ICard) => {
    return (
        <CardContainer>
            <ImageBackground src={backgroundImage} />
            <Content>
                <UserInfo>
                    <UserPicture src='https://hermes.digitalinnovation.one/users/student/d1e65e01-93e4-4785-8bbb-f987116b7c15.jpg' />
                    <div>
                        <h4>{name}</h4>
                        <p>Há {time} minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de React</h4>
                    <p>Projeto feito para o curso de React da Dio <strong>Saiba Mais...</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#React #CSS #JavaScript</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card }