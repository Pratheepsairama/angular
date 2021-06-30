export class CustomerData{
    private first_name:string;
    private last_name:string;
    private phone_number:string;
    private email:string;
    private password:string;
    private password_confirmation:string;
    constructor(first_name:string,last_name:string,email:string ,password:string,phone_number:string,password_confirmation:string){
       this.first_name=first_name;
       this.last_name=last_name;
        this.email=email;
        this.password=password;
        this.phone_number=phone_number;
        this.password_confirmation=password_confirmation;
    }
    getFisrt_name():string
    {
        return this.first_name;
    }
    getLast_name():string
    {
        return this.last_name;
    }
    getEmail():string{
        return this.email;
    }
    getPhone_number():string{
        return this.phone_number;
    }
    getPassword():string{
        return this.password;
    }
    getPassword_confirmation():string{
        return this.password_confirmation;
    }
}