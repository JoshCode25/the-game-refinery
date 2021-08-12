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
    status: 'Concept Phase',
    imageUrl:logo
}

class Game {
    constructor(gameObject) {
            this.name = gameObject.name;
            this.rating = gameObject.rating;
            this.playerMin = gameObject.playerMin;
            this.playerMax = gameObject.playerMax;
            this.lengthMin = gameObject.lengthMin;
            this.lengthMax = gameObject.lengthMax;
            this.mechanics = gameObject.mechanics;
            this.description = gameObject.description;
            this.status = gameObject.status;
            this.imageUrl = gameObject.imageUrl;
    }

    addToGameList() {
        gameList.push(this);
    }
}

const creatNewGame = (gameObject) => {
    let newGameObject = {};

    newGameObject.newName = gameObject.name? gameObject.name : defaultValues.name;
    newGameObject.newRating = gameObject.rating? gameObject.rating : defaultValues.rating;
    newGameObject.newPlayerMin = gameObject.playerMin? gameObject.playerMin : defaultValues.playerMin;
    newGameObject.newPlayerMax = gameObject.playerMax? gameObject.playerMax : defaultValues.playerMax;
    newGameObject.newLengthMin = gameObject.lengthMin? gameObject.lengthMin : defaultValues.lengthMin;
    newGameObject.newLengthMax = gameObject.lengthMax? gameObject.lengthMax : defaultValues.lengthMax;
    newGameObject.newMechanics = gameObject.mechanics? gameObject.mechanics : defaultValues.mechanics;
    newGameObject.newDescription = gameObject.description? gameObject.description : defaultValues.description;
    newGameObject.newStatus = gameObject.status? gameObject.status : defaultValues.status;
    newGameObject.newImageUrl = gameObject.imageUrl? gameObject.imageUrl : defaultValues.imageUrl;

    let newGame = new Game(newGameObject);
    newGame.addToGameList();
    return newGame;
}

const mythicCircus = {
    name:'Mythic Circus', 
    rating:4.8, 
    playerMin:2, 
    playerMax:5, 
    lengthMin:30, 
    lengthMax:90, 
    mechanics:['Deckbuilding'], 
    description:'Build your team to become the greatest Ringleader', 
    status: 'Proto V2.0',
    imageUrl:mythicIcon
} 
creatNewGame(mythicCircus);
const theFarmGame = creatNewGame('The Farm Game', 4.5, 2, 5, 30, 90, 
    ['Resource Management', 'Set Collection', 'Dice'], 
    'Plant, Water, Harvest, and Sell your produce to become the most renowned farm', 'Reworking',
    farmIcon);
const peasantPrinceAndKing = creatNewGame('Peasant Prince & King', 2, 2, 2, 20, 40, 
    ['Resource Management', 'Duel'], "Develop your kingdom's 4 departments to defeat your opponent", 'Inactive',
    peasantIcon);
const theDiceGame = creatNewGame('The Dice Game', 4, 2, 4, 15, 30, 
    ['Dice', 'Cooperative'], 'Build your local town and work with those around you to overthrow the Tyrant', 'Proto V1.0');


export default gameList;
    //image
    //game title/name
    //game description
    //game rating
    //game player count
    //game length
    //game mechanics
    