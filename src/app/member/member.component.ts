import { Component, OnInit} from '@angular/core';
import { Member } from '../Membre';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  animations: [
    trigger('img', [
      state('print', style({
        top: '50%',
        left: '50%'
      })),
      state('hold',   style({
        top: '0%',
        left: '0%',
        height: '100%'
      })),
      transition('hold => print', animate('1000ms ease-in')),
      transition('print => hold', animate('1000ms ease-out'))
    ]),
    trigger('text', [
      state('print', style({
        opacity: 1
      })),
      state('hold',   style({
        opacity: 0
      })),
      transition('hold => print', animate('1000ms ease-in')),
      transition('print => hold', animate('1000ms ease-out'))
    ])

  ]
})

export class MemberComponent implements OnInit {

  index = 1;
  state = 'print';

  members: Member[] = [
    {fullname : 'Babacar Fall',
    description: 'hi guys i am a frontend master and i love javascript.',
    imageSrc: '/assets/img/header.jpg'},
    {fullname : 'Diadji Ndiaye',
    description: 'Hi guys i am a fullstack developer and i love java.',
    imageSrc: '/assets/img/header.jpg'},
    {fullname : 'Fatou Gaye',
    description: 'Hi guys i am a fullstack developer and i love java.',
    imageSrc: '/assets/img/header.jpg'}
  ];

    selectedMember: Member = {fullname : 'Babacar Fall',
    description: 'hi guys i am a frontend master and i love javascript.',
    imageSrc: '/assets/img/header.jpg'};

  constructor() { }

    nextMember() {
      this.state = 'hold';
     this.selectedMember = this.members[this.index];
    (this.index < this.members.length - 1) ? (this.index ++) : (this.index = 0);
    setTimeout(_ => this.state = 'print', 1000);
    }



  ngOnInit() {
  }

}
