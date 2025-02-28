export class Navbar {
    constructor( 
        public title: string, 
        public logoUrl: string,
        public urls: { id: string, name: string} []
    ) {}
}