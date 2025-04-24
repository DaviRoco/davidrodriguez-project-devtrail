import axios from 'axios';
import { EducationalRecords } from '../types/types';

let cachedEducationalRecords: EducationalRecords[] | null = null;

export class EducationRecordService {
  private static educationalRecordsApiUrl = '/api/records?type=education';

  public static async getAllEducationalRecords(): Promise<
    EducationalRecords[]
  > {
    if (cachedEducationalRecords) {
      return cachedEducationalRecords;
    }

    try {
      const response = await axios.get<EducationalRecords[]>(
        this.educationalRecordsApiUrl,
      );
      cachedEducationalRecords = response.data;
      return response.data.sort(
        (a, b) => new Date(b._startDate).getTime() - new Date(a._startDate).getTime()
      );
    } catch (error) {
      throw error;
    }
  }

}
