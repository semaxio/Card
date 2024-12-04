import styled from 'styled-components';
import image from './images/cardImage.jpg'
import { theme } from './styles/Theme.styled';


function App() {
  return (
    <div className='app'>
      <Card>
        <img src={image} alt='cardImage' />
        <div className='cardContainer'>
          <p>Headline</p>
          <span>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</span>
          <div className='cardButtons'>
            <button>See more</button>
            <button>Save</button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default App;

const Card = styled.div`
  padding: 10px;
  width: 300px;
  height: 350px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 5px 5px 5px 5px #f3f2f2 ;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 280px;
    height: 170px;
    border-radius: 10px;
  }
  .cardContainer {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-family: Inter;
  }
  p {
    font-weight: bold;
    font-size: 16px;
  }
  span {
    font-size: 12px;
    color: #ABB3BA;
  }
  .cardButtons {
    display: flex;
    gap: 12px;
  }
  button {
    width: 86px;
    height: 30px;
    background-color: transparent;
    font-size: 10px;
    font-weight: bold;
    border: 2px solid ${theme.colors.blueButton};
    border-radius: 5px;
    color: ${theme.colors.blueButton};
    &:hover {
      color: #fff;
      background-color: ${theme.colors.blueButton};
    }
  }
`