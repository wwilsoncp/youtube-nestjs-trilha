import { Injectable } from '@nestjs/common';

@Injectable()
export class FirstService {
  public firstMethod() {
    return 'First method of the service working';
  }
}
