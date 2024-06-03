import { Menti } from '../../interfaces/menti.interfaces';
import { HttpService } from '../http/http.service';

class ApiService {
  constructor(
    private readonly baseUrl: string,
    private readonly httpService: HttpService,
  ) {}

  readonly getMentiList = (): Promise<Menti[]> => {
    const url = `${this.baseUrl}/menti`;
    return this.httpService.get(url);
  };
}

export const apiService = new ApiService('https://imkhl-mentoring-1.glitch.me', new HttpService());
