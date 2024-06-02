import { Menti } from '../../interfaces/menti.interfaces';

class HttpService {
  constructor() {}

  readonly get = (url: string): Promise<Menti[]> => {
    return fetch(url).then((response) => response.json());
  };
  readonly post = (url: string, data: Record<string, string>) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  };
}

export const httpService = new HttpService();
