import {Team} from "./Team";

let teamsJson = [
    {
        "name": "Manchester United", "color": "red", "players": [
            {name: "Irhad", position: "att", ratings: ["10", "80", "45", "95"]},
            {name: "Melka", position: "mid", ratings: ["12", "80", "45", "95"]}, 
            {name: "Dennis", position: "def", ratings: ["50", "95", "35", "10"]}
        ]
    },
    {
        "name": "Real Madrid", "color": "blue", "players": [
            {name: "Irhad", position: "att", ratings: ["10", "80", "45", "95"]},
            {name: "Melka", position: "mid", ratings: ["12", "80", "45", "95"]},
            {name: "Dennis", position: "def", ratings: ["50", "95", "35", "10"]}
        ]
    }
];

class Game {
    constructor(teamsData) {
        this.data = teamsData;
        this.teams = [];
    }

    createTeams() {
        if (typeof(this.data) === "object") {
            this.data.forEach( (e, i,) => {
                console.log(e, i);
                this.teams.push(new Team({"name": e.name, "color": e.color}, e.players));
            });
        }
    }
    initStart(){
        let startBtn = document.querySelectorAll(".startBtn");
        startBtn.addEventListener("click",this.startGame());
    }
    startGame(){

    }
}


// let manUtd = new Team({"name": "Manchester United", "color": "red"}, [
//     {name: "Irhad", position: "att", ratings: ["10", "80", "45", "95"]},
//     {name: "Melka", position: "mid", ratings: ["12", "80", "45", "95"]}
// ]);
// let real = new Team({"name": "Real Madrid", "color": "blue"}, [
//     {name: "Ronaldo", position: "att", ratings: ["10", "80", "45", "95"]},
//     {name: "Bale", position: "mid", ratings: ["12", "80", "45", "95"]}
// ]);


window.game = new Game(teamsJson);
game.createTeams();

