import shuffle from 'lodash.shuffle';
import FontAwesomeClasses from './fontAwesomeClasses';

const CARDS_NUMBER = 20;

const DealCards = () =>{
    const fontAwesomeClasses = FontAwesomeClasses;
    let cards = [];

    while(cards.length<CARDS_NUMBER){
        const index = Math.floor(Math.random()*fontAwesomeClasses.length);
        const card = {
            icon: fontAwesomeClasses[index],
            isMatch: false,
            flipped: false
        }
        cards.push(card);
        cards.push({...card});
    }
    return shuffle(cards);
}
export default DealCards