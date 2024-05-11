import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: `Hello World`,
      date: {
        year: new Date().getFullYear(),
        format: new Date().toLocaleDateString('pt'),
      },
      tasks: [
        {
          name: 'Tarefa 1',
          options: {
            createdAt: new Date().toLocaleDateString('pt', {
              dateStyle: 'full',
            }),
            status: 'pending',
          },
        },
      ],
    };
  }
}
