
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export type CategoryTranslations = Record<string, string>;
