import styles from '../styles/Home.module.css'
import Card from './cards';

const cardsData = [
  {
    titulo: "Card 1",
    contenido: "Contenido 1",
  },
  {
    titulo: "Card 2",
    contenido: "Contenido 2",
  },
  {
    titulo: "Card 3",
    contenido: "Contenido 3",
  },
  {
    titulo: "Card 4",
    contenido: "Contenido 4",
  },
];

function Micomponente(){
  return(
  <div className={styles.padre}>
  <div className={styles.hijo}>
    <div>
      <h1>Título</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit perferendis at temporibus laborum adipisci quo unde eligendi inventore expedita. Ipsam at quasi aperiam dolor vel voluptatibus dolorem, illo veritatis maxime!</p>
    </div>
  </div>
  </div>
  );
}

const IndexPage: React.FC = () => {
  return (
    
    <div className={styles.cardsContainer}>
      <Micomponente/>
      {cardsData.map((card) => (
        <Card key={card.titulo} titulo={card.titulo} contenido={card.contenido} />
      ))}
    </div>
    
  );
};

export default IndexPage;