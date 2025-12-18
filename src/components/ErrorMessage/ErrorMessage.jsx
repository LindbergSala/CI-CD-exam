import "./ErrorMessage.scss";
function ErrorMessage({ message }) {
  return (
    <article 
        className="error-message" 
        /* Behövs för att kolla om felmeddelanden visas */
        data-testid="error-msg"
    >
      <p className="error-message__text">{message}</p>
    </article>
  );
}
export default ErrorMessage;