import { Promotion } from "./Promotion";
import { Purchase } from "./Purchase";
import { Salesman } from "./Salesman";

export class Person {
    id !: number;
    name !: string;
    last_name !: string;
    birth_date !: Date;
    role !: string;
    source !: string;
    salesman !: Salesman;
    promotions ?: Promotion[];
    purchases ?: Purchase[];
}
