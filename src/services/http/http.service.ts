import { Menti } from '../../interfaces/menti.interfaces';

export class HttpService {
  constructor() {}

  readonly get = (url: string): Promise<Menti[]> => {
    return fetch(url).then((response) => response.json());
  };
  readonly post = (url: string, payload: unknown) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then((response) => response.json());
  };
}
