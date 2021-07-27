import * as S from './styles';

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled-Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Logo do site, sendo uma imagem de um átomo e React Avançado escrito ao lado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com códigos"
    ></S.Illustration>
  </S.Wrapper>
);

export default Main;
