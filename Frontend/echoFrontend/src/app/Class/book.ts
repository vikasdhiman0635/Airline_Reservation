export class Book {

    flightid:any;
    userid:any;
    email:any;
    ticketpaymentmethod:any;
    paymentstatus:{
        cardno:any,
        recardno:any,
        cvv:any,
        cardhldername:any,
        upiid:any,
        totalamount:any,
        paidamount:any,
        paymentstatus:any,
    } | any;
    bookseats=[
        {
            name:'',
            email:'',
            phoneno:'',
            passportno:'',
            country:'',
            gender:'',
            seattype:'',
            price: ''
        }
    ]


}
