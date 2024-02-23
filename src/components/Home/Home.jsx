import { Title, Img } from './Home.styled';
import Travel from '../../assets/fly.jpg';
export const Home = () => {
  return (
    <>
      <Title>If you want to create some trips, go my trips</Title>
      <Img src={Travel} width="700" alt="fly" />
    </>
  );
};
