
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  deploy: string;
  repository?: string;
  technologie: {value: string; title: string}[];
}


