import {Player} from "./Player";

export class Team {
    constructor(info, players) {
        this.info = info;
        this.players = Team.createPlayers(players);
        this.showPlayersInHtml();
        this.overall = 0;
    }

    static createPlayers(elem) {
        let players = [];
        for (const p of elem) {
            let o = null;
            o = new Player(p.name, p.position, p.ratings);
            players.push(o);
        }
        return players;
    }

    set Players(elem) {
        this.players = Team.createPlayers(elem);
    }

    get Players() {
        return this.showPlayers();
    }
    getOverall(){
        for (let play of this.players) {
            this.overall += parseInt(play._overall);
        }
       return this.overall /= this.players.length
    }


    showPlayers() {
        if (typeof(this.players) == "object") {
            return this.players;
        }

    }

    showPlayersInHtml() {
        if (typeof(this.players) == "object") {
            let elemDiv = document.createElement("div");
            let playersHtml = `<div style='width: 100%;background-color: ${this.info.color};color: white;padding: 20px;margin: 20px'><div class='row'><div class='col-12'><h2 class="text-center">${this.info.name}</h2></div></div>`;
            for (let play of this.players) {
                playersHtml += `<div class="row"><div class="col-xl"><b>player name:</b></div><div class="col-xl"> ${play._name} (${play._overall})</div> </div>`;
            }
            playersHtml += `</div>`;
            elemDiv.innerHTML = playersHtml;

            document.body.appendChild(elemDiv);
        }

    }
}