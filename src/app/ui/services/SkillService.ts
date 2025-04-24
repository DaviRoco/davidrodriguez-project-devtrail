import axios from 'axios';
import { Skills } from '../types/types';

let cachedSkills: { [categoryName: string]: Skills[] } | null = null;

export class SkillService {
  private static skillsApiUrl = '/api/skills';

  public static async getAllSkillsByCategory(): Promise<{ [categoryName: string]: Skills[] }> {
    if (cachedSkills) {
      return cachedSkills;
    }

    try {
      const response = await axios.get<{ [categoryName: string]: Skills[] }>(this.skillsApiUrl);
      cachedSkills = response.data;
      return cachedSkills;
    } catch (error) {
      throw error;
    }
  }
}
