import { Component, OnInit } from '@angular/core';
import { Service } from '../Service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  animations: [
    trigger('switch', [
      state('changed', style({
        opacity: 1
      })),
      state('changing',   style({
        opacity: 0
      })),
      transition('changed => changing', animate('1000ms ease')),
      transition('changing => changed', animate('2000ms ease'))

    ])
  ]
})
export class ServicesComponent implements OnInit {
  state = 'changed';
  index = 1;

  services: Service[] = [
    {
      imgSrc: '/assets/img/header.jpg',
      title: 'Nous développons des applis mobiles',
      description: 'Obtenez une appli mobile pour votre business en un rien de temps et pour toutes les platformes.',
      techno: ['React Native', 'Ionic', 'Android']
    },
      {
      imgSrc: '/assets/img/header.jpg',
      title: 'Nous développons des applis web',
      description: 'Obtenez une platforme web en un rien de temps pour plus de visibilité.',
      techno: ['ReactJS', 'Angular', 'Laravel', 'Django', 'Wordpress']
    }
  ];

  selectedService: Service =  {
    imgSrc: '/assets/img/header.jpg',
    title: 'Nous développons des applis web',
    description: 'Obtenez une platforme web en un rien de temps pour plus de visibilité.',
    techno: ['ReactJS', 'Angular', 'Laravel', 'Django', 'Wordpress']
  };
  constructor() { }

  ngOnInit() {

  }

  nextService() {
    this.state = 'changing';
    setTimeout(_ => {
 this.selectedService = this.services[this.index];
  (this.index < this.services.length - 1) ? (this.index ++) : (this.index = 0);
  this.state = 'changed';

    }, 1000);
  }



}
