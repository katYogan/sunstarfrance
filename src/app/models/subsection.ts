export class Subsection {
    constructor(
      public title: string,
      public subtitle: string,
      public description: string,
      public images: { url: string, title: string, subtitle: string }[] 
    ) {}
  }
  