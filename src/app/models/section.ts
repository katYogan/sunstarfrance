import { Links } from './links';

export class Section {
  constructor(
    public id: string,
    public title: string,
    public subtitle: string,
    public description: string,
    public images: { url: string, title: string, subtitle: string }[],
    public subsections?: {
      title: string,
      subtitle: string,
      description: string,
      images: { url: string, title: string, subtitle: string }[],
      components?: any[] 
    }[],
    public components: any[] = [],
    public links?: Links[]
  ) {}
}