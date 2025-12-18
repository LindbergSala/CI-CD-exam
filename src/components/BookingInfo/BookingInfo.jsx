import "./BookingInfo.scss";
import Input from "../Input/Input";

function BookingInfo({ updateBookingDetails }) {
  return (
    <section className="booking-info">
      <header><h2 className="booking-info__heading">When, WHAT & Who</h2></header>
      <form className="booking-info__details">
        <section className="booking-info__when">
          <Input 
            label="Date" 
            type="date" 
            customClass="booking-info__date" 
            name="when" 
            handleChange={updateBookingDetails} 
            /* Behövs för att kunna välja datum i testet */
            data-testid="date" 
          />
          <Input 
            label="Time" 
            type="time" 
            name="time" 
            handleChange={updateBookingDetails} 
            /* Behövs för att kunna välja tid i testet */
            data-testid="time" 
          />
        </section>
        <Input 
            label="Number of awesome bowlers" 
            type="number" 
            customClass="booking-info__who" 
            name="people" 
            handleChange={updateBookingDetails} 
            maxLength={2} 
            /* Måste kunna hitta fältet för antal spelare */
            data-testid="players" 
        />
        <Input 
            label="Number of lanes" 
            type="number" 
            customClass="booking-info__lanes" 
            name="lanes" 
            handleChange={updateBookingDetails} 
            maxLength={2} 
            /* Måste kunna hitta fältet för antal banor */
            data-testid="lanes" 
        />
      </form>
    </section>
  );
}
export default BookingInfo;