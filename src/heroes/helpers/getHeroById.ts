import { heroes } from "../data";
import {Hero} from "../interfaces";


export const getHeroById = (id:string | undefined): Hero | undefined => {
    return heroes.find(hero => hero.id === id);
}