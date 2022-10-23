import { Stock } from "./Stock";

export class Product {
    idProduct !: number;
    code !: string;
    name !: string ;
    price !: number;
    description!:string;
    stock !: Stock;

}
