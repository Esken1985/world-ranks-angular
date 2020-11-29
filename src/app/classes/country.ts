export interface ICountry {
    id: number,
    name: string,
    population: number,
    area: number,
    gini: number,
    flag: string,
    capital: string,
    languages: string[],
    borders: string[],
    currencies: object[],
    nativeName: string
}