import logo from '../Logo/logo.svg';
import mythicIcon from './icons/mythicCircusIcon.png';
import farmIcon from './icons/farmGameIcon.png';
import peasantIcon from './icons/peasantPrinceKingIcon.png';

const gameList = [];

const defaultValues = {
    name:'Game', 
    rating:5, 
    playerMin:2, 
    playerMax:4, 
    lengthMin:20, 
    lengthMax:60, 
    mechanics:[], 
    description:'Cool', 
    imageUrl:logo
}

class Game {
    constructor(name, rating, playerMin, playerMax, lengthMin, lengthMax, mechanics, description, imageUrl) {
            this.name = name;
            this.rating = rating;
            this.playerMin = playerMin;
            this.playerMax = playerMax;
            this.lengthMin = lengthMin;
            this.lengthMax = lengthMax;
            this.mechanics = mechanics;
            this.description = description;
            this.imageUrl = imageUrl;
    }

    addToGameList() {
        gameList.push(this);
    }
}

const creatNewGame = (name, rating, playerMin, playerMax, lengthMin, lengthMax, mechanics, description, imageUrl) => {
    let newName = name? name : defaultValues.name;
    let newRating = rating? rating : defaultValues.rating;
    let newPlayerMin = playerMin? playerMin : defaultValues.playerMin;
    let newPlayerMax = playerMax? playerMax : defaultValues.playerMax;
    let newLengthMin = lengthMin? lengthMin : defaultValues.lengthMin;
    let newLengthMax = lengthMax? lengthMax : defaultValues.lengthMax;
    let newMechanics = mechanics? mechanics : defaultValues.mechanics;
    let newDescription = description? description : defaultValues.description;
    let newImageUrl = imageUrl? imageUrl : defaultValues.imageUrl;

    let newGame = new Game(newName, newRating, newPlayerMin, newPlayerMax, newLengthMin, newLengthMax, 
        newMechanics, newDescription, newImageUrl);
    newGame.addToGameList();
    return newGame;
}

const mythicCircus = creatNewGame('Mythic Circus', 5, 2, 5, 30, 90, 
    ['Deckbuilding'], 'Build your team to become the greatest Ringleader', mythicIcon);
const theFarmGame = creatNewGame('The Farm Game', 4.5, 2, 5, 30, 90, 
    ['Resource Management', 'Set Collection', 'Dice'], 
    'Plant, Water, Harvest, and Sell your produce to become the most renowned farm',
    farmIcon);
const peasantPrinceAndKing = creatNewGame('Peasant Prince & King', 2, 2, 2, 20, 40, 
    ['Resource Management', 'Duel'], "Develop your kingdom's 4 departments to defeat your opponent", 
    peasantIcon);
const theDiceGame = creatNewGame('The Dice Game', 4, 2, 4, 15, 40, 
    ['Dice', 'Cooperative'], 'Build your local town and work with those around you to overthrow the Tyrant');


export default gameList;
    //image
    //game title/name
    //game description
    //game rating
    //game player count
    //game length
    //game mechanics
    