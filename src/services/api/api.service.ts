import { Menti } from '../../interfaces/menti.interfaces';
import { httpService } from './http.service';

class ApiService {
  constructor(private readonly baseUrl: string) {}

  readonly getMentiList = (): Promise<Menti[]> => {
    const url = `${this.baseUrl}/menti`;
    return httpService.get(url);
  };
}

export const apiService = new ApiService('https://imkhl-mentoring-1.glitch.me');
