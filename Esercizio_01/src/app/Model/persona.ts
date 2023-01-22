export class persona{
  id:number;

  Nome:string;
  Cognome:string;

  Email:string;
  Sesso:string;
  Avatar:string;
  Mestiere:string;

  constructor(id:number,nome:string,cognome:string,email:string,sesso:string,avatar:string,mestiere:string) {
    this.id=id;
    this.Nome=nome;
    this.Cognome=cognome;
    this.Email=email;
    this.Sesso=sesso;
    this.Avatar=avatar;
    this.Mestiere=mestiere;

  }

}
