export class ItemReservation {

    constructor(reservationDate, reservationPeriod, itemId) {
        this.reservationDate = reservationDate || "";
        this.reservationPeriod = reservationPeriod || 0;
        this.itemId = itemId || 0;
    }

    setValues(data) {
        this.reservationDate = new Date(data.reservationDate);
        this.reservationPeriod = data.reservationPeriod;
        this.itemId = data.id;
    }
}