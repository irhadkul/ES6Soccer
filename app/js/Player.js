class PlayerInfo{
    constructor(name,position,ratings){
        this._name=name;
        this._position=position;
        this._ratings=this.orderRatings(ratings);
    }
    orderRatings(ratings){
        let all={};
        ratings.map((elem,index) =>{

            switch (index){
                case 0:
                    all["gk"]=PlayerInfo.asignRating(elem);
                    break;
                case 1:
                    all["def"]=PlayerInfo.asignRating(elem);
                    break;

                case 2:
                    all["mid"]=PlayerInfo.asignRating(elem);
                    break;

                case 3:
                    all["att"]=PlayerInfo.asignRating(elem);
                    break;
            }


        });
        return all;

    }
    static asignRating(rating){
        if(rating){
            return rating;
        }else{
            return "0"
        }

    }

}
export class Player extends PlayerInfo{

    constructor(name,position,ratings){
        super(name,position,ratings);
        this.getOverall();
    }
    changePosition(position){
        this._position = position;
        this.getOverall();
    }
    calculateRatings(){
        if(typeof(this._ratings)== "object"){
            return this._ratings;
        }
    }
    getOverall(){
        let allRatings = this.calculateRatings();
        this._overall =allRatings[this._position];
        return allRatings[this._position];
    }
}