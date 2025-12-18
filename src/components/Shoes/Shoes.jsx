import "./Shoes.scss";
import { nanoid } from "nanoid";
import Input from "../Input/Input";

function Shoes({ updateSize, addShoe, removeShoe, shoes }) {
  return (
    <section className="shoes">
      <header><h2 className="shoes__heading">Shoes</h2></header>
      {shoes.map((input, index) => (
        <article className="shoes__form" key={input.id}>
          <Input label={`Shoe size / person ${index + 1}`} type="text" customClass="shoes__input" name={input.id} handleChange={updateSize} maxLength={2} data-testid={`shoe-input-${index}`} />
          <button className="shoes__button shoes__button--small" onClick={() => removeShoe(input.id)} data-testid={`remove-shoe-${index}`}>-</button>
        </article>
      ))}
      <button className="shoes__button" onClick={() => addShoe(nanoid())} data-testid="add-shoe">+</button>
    </section>
  );
}
export default Shoes;