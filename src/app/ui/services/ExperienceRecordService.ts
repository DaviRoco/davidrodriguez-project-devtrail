import axios from 'axios';
import { ExperienceRecords } from '../types/types';

let cachedExperienceRecords: ExperienceRecords[] | null = null;

export class ExperienceService {
  private static experienceRecordsApiUrl = '/api/records?type=experience';

  public static async getAllExperienceRecords(): Promise<ExperienceRecords[]> {
    if (cachedExperienceRecords) {
      return cachedExperienceRecords;
    }

    try {
      const response = await axios.get<ExperienceRecords[]>(
        this.experienceRecordsApiUrl,
      );

      const sorted = response.data.sort((a, b) => {
        const endA =
          a._endDate && new Date(a._endDate).getFullYear() === 2000
            ? new Date()
            : a._endDate
              ? new Date(a._endDate)
              : new Date();

        const endB =
          b._endDate && new Date(b._endDate).getFullYear() === 2000
            ? new Date()
            : b._endDate
              ? new Date(b._endDate)
              : new Date();

        return endB.getTime() - endA.getTime();
      });

      cachedExperienceRecords = sorted;
      return sorted;
    } catch (error) {
      throw error;
    }
  }
}
