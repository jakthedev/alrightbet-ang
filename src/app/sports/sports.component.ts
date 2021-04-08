import { Component, OnInit } from '@angular/core'; 
import { Sports } from '../shared/sports';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit { 

  leagues: Leagues[] =  [
    {
      id: '0',
      name: 'Basketball',
      image: '/assets/images/basketball.png',
      category: 'noncontact-sport',
      featured: true,
      label: 'Hot',
      price: '4.99',
      // tslint:disable-next-line:max-line-length
      description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
    },
    {
      id: '1',
      name: 'Soccer',
      image: '/assets/images/soccer.png',
      category: 'noncontact-sport',
      featured: false,
      label: 'New',
      price: '1.99',
      description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
    },
    {
      id: '2',
      name: 'Baseball',
      image: '/assets/images/baseball.png',
      category: 'noncontact-sport',
      featured: false,
      label: 'New',
      price: '1.99',
      description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
    },
    {
      id: '3',
      name: 'Football',
      image: '/assets/images/football.png',
      category: 'contact-sport',
      featured: false,
      label: 'Hot',
      price: '2.99',
      description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
   
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
