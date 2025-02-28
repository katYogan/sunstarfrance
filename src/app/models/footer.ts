export class Footer {
    constructor( 
                public title: string, 
                public imageUrl: string,
                public description: string, 
                public urls: { id: string, name: string} [],
                ) {}
}