export class Task{
    public id: number;
    public pavadinimas: string;
    public tipas: string;

    constructor(id: number, pavadinimas:string, tipas:string){
        this.id = id;
        this.pavadinimas = pavadinimas;
        this.tipas = tipas;
    }
}