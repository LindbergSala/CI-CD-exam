import "./Shoes.scss";
import { nanoid } from "nanoid";
import Input from "../Input/Input";

function Shoes({ updateSize, addShoe, removeShoe, shoes }) {
  return (
    <section className="shoes">
      <header><h2 className="shoes__heading">Shoes</h2></header>
      {shoes.map((input, index) => (
        <article className="shoes__form" key={input.id}>
          <Input 
            label={`Shoe size / person ${index + 1}`} 
            type="text" 
            customClass="shoes__input" 
            name={input.id} 
            handleChange={updateSize} 
            maxLength={2} 
            /* För att kunna skriva in storlek på rätt sko i testet */
            data-testid={`shoe-input-${index}`} 
          />
          <button 
            className="shoes__button shoes__button--small" 
            onClick={() => removeShoe(input.id)} 
            /* Behövs för att kunna klicka på ta-bort-knappen */
            data-testid={`remove-shoe-${index}`}
          >-</button>
        </article>
      ))}
      <button 
        className="shoes__button" 
        onClick={() => addShoe(nanoid())} 
        /* Knapp för att lägga till skor i testet */
        data-testid="add-shoe"
      >+</button>
    </section>
  );
}
export default Shoes;