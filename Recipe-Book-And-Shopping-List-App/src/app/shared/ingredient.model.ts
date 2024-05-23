export class Ingredients {
  //   public name: String;
  //   public amount: String;

  //   constructor(name: String, amount: String) {
  //     this.name = name;
  //     this.amount = amount;
  //   }

  constructor(public name: String, public amount: number) {
    this.name = name;
    this.amount = amount;
  } //this will automatically will create the  field name and amount
}
