import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MessageService } from '../services/message.service';
import { Message } from '../shared/models/message';
@Component({
  selector: 'app-message-feed',
  templateUrl: './message-feed.component.html',
  styleUrls: ['./message-feed.component.css'],
})
export class MessageFeedComponent implements OnInit {
  public messagesObservable: Observable<Message[]>;

  constructor(
    private route: ActivatedRoute,
    private messageService: MessageService,
  ) {}

  ngOnInit() {
    this.messagesObservable = this.route.paramMap.pipe(
      switchMap(params => this.messageService.fetch(params.get('name'))),
    );
  }
}
