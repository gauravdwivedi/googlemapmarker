import faker from 'faker';
import { Mapable } from './CustomMap';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: 'brown';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  getContent(): string {
    return `<div>
              <h3>${this.name}</h3>
              
      </div>`;
  }
}
