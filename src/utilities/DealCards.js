import shuffle from 'lodash.shuffle';
import FontAwesomeClasses from './fontAwesomeClasses';

const CARDS_NUMBER = 20;

export default () =>{
    const fontAwesomeClasses = FontAwesomeClasses;
    let cards = [];

    while(cards.length<CARDS_NUMBER){
        const index = Math.floor(Math.random()*fontAwesomeClasses.length);
        const card = {
            icon: fontAwesomeClasses[index],
            isMatch: false,
        }
        cards.push(card);
        cards.push({...card});
    }
    return shuffle(cards);
}