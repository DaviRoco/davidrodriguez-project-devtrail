import axios from 'axios';
import { Projects } from '../types/types';

let cachedProjectCount: number | null = null;
let cachedProjects: Projects[] | null = null;

export class ProjectService {
  private static projectsApiUrl = '/api/projects';

  public static async getAllProjectsCount(): Promise<number> {
    if (cachedProjectCount) {
      return cachedProjectCount;
    }

    try {
      const response = await axios.get<Projects[]>(this.projectsApiUrl);
      cachedProjectCount = response.data.length;
      return cachedProjectCount;
    } catch (error) {
      throw error;
    }
  }

  public static async getAllProjects(): Promise<Projects[]> {
    if (cachedProjects) {
      return cachedProjects;
    }

    try {
      const response = await axios.get<Projects[]>(this.projectsApiUrl);
      cachedProjects = response.data;
      return cachedProjects;
    } catch (error) {
      throw error;
    }
  }
}
