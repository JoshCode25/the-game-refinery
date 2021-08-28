import logo from '../Components/Logo/Logo.js';
import mythicIcon from '../Images/mythicCircusIcon.png';
import farmIcon from '../Images/farmGameIcon.png';
import peasantIcon from '../Images/peasantPrinceKingIcon.png';

const gameList = [];

const defaultValues = {
    name: 'Game', 
    rating: 0, 
    playerMin: 2, 
    playerMax: 4, 
    lengthMin: 20, 
    lengthMax: 60, 
    mechanics: [], 
    description: 'A new game', 
    status: 'Concept Phase',
    imageUrl: logo
}

class Game {
    constructor({name, rating, playerMin, playerMax, lengthMin, lengthMax, mechanics, description, status, imageUrl}) {
            this.name = name;
            this.rating = rating;
            this.playerMin = playerMin;
            this.playerMax = playerMax;
            this.lengthMin = lengthMin;
            this.lengthMax = lengthMax;
            this.mechanics = mechanics;
            this.description = description;
            this.status = status;
            this.imageUrl = imageUrl;
    }

    addToGameList() {
        gameList.push(this);
    }
}

const creatNewGame = (gameObject) => {
    let newGameObject = {};

    newGameObject.name = gameObject.name? gameObject.name : defaultValues.name;
    newGameObject.rating = gameObject.rating? gameObject.rating : defaultValues.rating;
    newGameObject.playerMin = gameObject.playerMin? gameObject.playerMin : defaultValues.playerMin;
    newGameObject.playerMax = gameObject.playerMax? gameObject.playerMax : defaultValues.playerMax;
    newGameObject.lengthMin = gameObject.lengthMin? gameObject.lengthMin : defaultValues.lengthMin;
    newGameObject.lengthMax = gameObject.lengthMax? gameObject.lengthMax : defaultValues.lengthMax;
    newGameObject.mechanics = gameObject.mechanics? gameObject.mechanics : defaultValues.mechanics;
    newGameObject.description = gameObject.description? gameObject.description : defaultValues.description;
    newGameObject.status = gameObject.status? gameObject.status : defaultValues.status;
    newGameObject.imageUrl = gameObject.imageUrl? gameObject.imageUrl : defaultValues.imageUrl;
    
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
    status: 'Digital Development',
    imageUrl:mythicIcon
} 
creatNewGame(mythicCircus);

const theFarmGame = {
    name: 'The Farm Game', 
    rating: 4.5, 
    playerMin: 2, 
    playerMax: 5, 
    lengthMin: 30, 
    lengthMax: 90, 
    mechanics: ['Resource Management', 'Set Collection', 'Dice'], 
    description: 'Plant, Water, Harvest, and Sell your produce to become the most renowned farm', 
    status: 'Prototype Development',
    imageUrl: farmIcon
} 
creatNewGame(theFarmGame);

const peasantPrinceAndKing = {
    name: 'Peasant Prince & King', 
    rating: 2, 
    playerMin: 2, 
    lengthMin: 20,
    lengthMax: 40,
    mechanics: ['Resource Management', 'Duel'], 
    description: "Develop your kingdom's 4 departments to defeat your opponent", 
    status: 'Inactive',
    imageUrl: peasantIcon
}
creatNewGame(peasantPrinceAndKing);

const theDiceGame = {
    name: 'The Dice Game', 
    rating: 4, 
    playerMin: 2, 
    playerMax: 4, 
    lengthMin: 15, 
    lengthMax: 30,
    mechanics: ['Dice', 'Cooperative'], 
    description: 'Build your local town and work with those around you to overthrow the Tyrant', 
    status: 'Concept Development'
}
creatNewGame(theDiceGame);


export default gameList;
    //image
    //game title/name
    //game description
    //game rating
    //game player count
    //game length
    //game mechanics
    