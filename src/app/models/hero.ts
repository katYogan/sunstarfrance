export class Hero {
    constructor(public id: string, 
                public title: string, 
                public description: string, 
                public imageUrl: string,
                public urls: { id: string, name: string} [],
                public images: string[],
                ) {}
}