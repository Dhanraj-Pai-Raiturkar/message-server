import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  messages: Message[] = [];
  clientUserMap = {};

  create(createMessageDto: CreateMessageDto) {
    const message = { ...createMessageDto };
    this.messages.push(createMessageDto);
    return message;
  }

  findAll() {
    return this.messages;
  }

  getClientName(id: string) {
    return this.clientUserMap[id];
  }

  identify(name: string, id: string) {
    this.clientUserMap[id] = name;
    return Object.values(this.clientUserMap);
  }
}
