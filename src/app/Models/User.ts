import { Role } from "./Role";


export class User {
    idUser !: number;
    username !: string;
    email!: string;
    password!: string;
    birthdate !: Date;
    phoneNumber !: number;
    address !: string;
    roles ?: Role[];
}
