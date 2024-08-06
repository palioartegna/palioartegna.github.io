export class Leaderboard{

  static fromScores(scores: any){
    return new Leaderboard(scores);
  }

  participants:{player: string, points: number; jolly?:boolean}[];
  constructor(participants: {player: string, points: number, jolly: boolean}[]){
    this.participants = participants;
  }
  getTopThree(){
    return this.participants
      .sort((a, b) => b.points - a.points)
      .slice(0, 3);
  }

  getWinner(){
    return this.participants
      .sort((a, b) => b.points - a.points)[0];
  }

  getSortedParticipants(){
    return this.participants
      .sort((a, b) => b.points)
  }


}
