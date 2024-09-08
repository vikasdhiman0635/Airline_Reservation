export class BookTicket {

    bookid:any;
    bookingdate:any;
    bookingtime:any;
    email:any;
    flightid:any;
    ticketpaymentmethod:any;
    totalnoofseats:any;
    userid:any;
    paymentstatus: {
        bookid:any,
        flightid:any,
        cardno:any,
        recardno:any,
        cvv:any,
        cardhldername:any,
        upiid:any,
        totalamount:any,
        paidamount:any,
        paymentstatus:any,
        paymentstatusid:any,
        userid:any
    } | any;

    bookseats= [
        {
            bookflightseatid:'',
            bookid:'',
            country:'',
            email:'',
            flightid:'',
            gender:'',
            name:'',
            passportno:'',
            phoneno:'',
            price:'',
            seatno:'',
            seattype:'',
            userid:''
        }
    ]

}
