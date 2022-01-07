export class Profile {


    "userid": string = '';

    "firstname": string = '';

    "lastname": string = '';

    "mobileno": string = '';

    "email": string = '';

    "gender": string = '';

    "dob": string = '';

    "avatar": string = ''

    "address": [{

        "userhouseno": string;

        "userStreet": string;

        "userhometype": string;

        "usercity": string;

        "userstate": string;

        "usercountry": string;

        "userpincode": string;

    }];

    "passport": [{

        "passportno": string;

        "issuedate": string;

        "expiredate": string;

    }];
}
