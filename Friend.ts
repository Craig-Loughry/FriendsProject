export class Friend{
    name: string;
     age: number;
    email: string;
    BestFriend: boolean;
    
constructor(inName: string, inAge: number, inEmail: string, inBestFriend: boolean) {
    this.name = inName;
    this.age = inAge;
    this.email = inEmail;
    this.BestFriend = inBestFriend;
}
      about(): string {
        return `Friend:  name=${this.name},
                          age=${this.age},
                          email=${this.email},
                          BestFriend=${this.BestFriend}`;  
    }
}