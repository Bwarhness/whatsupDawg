export class Category {
  id:number;
  name:string;
  elementCount:number;
  sub:string;
  constructor(id, name, elementcount)
  {
    this.id = id;
    this.name = name;
    this.elementCount = elementcount;
  }

}
