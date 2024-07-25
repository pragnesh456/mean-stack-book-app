export class Book {
  constructor(
    public _id: string,
    public title: string,
    public author: string,
    public description: string,
    public price: number,
    public creationDate?: Date,
    public currentRating?: number,
  ) { }
}
