import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  projects: any = [
    {
      title: 'kanban board',
      subtitle: 'Project Managment',
      url: 'https://vilia-zeisig.com/kanban',
      githubURL: 'https://github.com/ViliaZ/join-kanbanBoard',
      count: '01',
      description: 'JOIN is a WebApp, inspired by the popular Kanban System for project and personal management. Implements drag and drop lists, creation of user boards and user dashboard. This project utilizes Firebase as backlog.',
      image: 'assets/img/projects/Join-layer1.png',
      tech: ['Angular / Typescript', 'HTML & CSS','Firebase' ]
    },
    {
      title: 'crypto converter',
      subtitle: 'API based Crypto Web-App',
      url: 'https://vilia-zeisig.com/kanban',
      githubURL: 'https://github.com/ViliaZ/tokenx',
      count: '02',
      description: 'Responsive WebApp based on the Coingecko-API (RestAPI). Users can search for Crytocurrencies & convert them to Fiat. Results are displayed as text, graph and table.',
      image: 'assets/img/projects/tokenx.png',
      tech: ['Angular / Typescript', 'RestAPI', 'HTML & CSS' ]
    },
    {
      title: 'jump and run game',
      subtitle: 'Object Oriented Javascript',
      url: 'https://github.com/ViliaZ/game-sharky',
      githubURL: 'https://github.com/ViliaZ/sharkygame',
      count: '03',
      description: 'SHARKY has been my first step to implement an object oriented approach with JavaScript. The result is a funny little game to play in your web browser or mobile device.',
      image: 'assets/img/projects/sharky-image.png',
      tech: ['VanillaJS (with OOP)', 'HTML & CSS' ]
    },
  ]
}
