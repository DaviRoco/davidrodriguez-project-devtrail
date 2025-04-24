import axios from 'axios';
import { Certifications } from '../types/types';

let cachedCertifications: Certifications[] | null = null;

export class CertificationService {
  public static async getAllCertifications(): Promise<Certifications[]> {
    if (cachedCertifications) {
      return cachedCertifications;
    }

    try {
      const response = await axios.get<Certifications[]>('/api/certifications');
      cachedCertifications = response.data;
      return response.data.sort(
        (a, b) => new Date(b._date).getTime() - new Date(a._date).getTime(),
      );
    } catch (error) {
      throw error;
    }
  }
}
