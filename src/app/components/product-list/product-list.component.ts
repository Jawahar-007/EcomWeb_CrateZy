import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pupils = [
    {
      name: 'G Carter',
      description: 'Sales Head : Working for past 8 years with us for his sincerity and dedication and helped to maintain the coardination to go for surplus exports towards the markets. ',
      image: 'https://media.gettyimages.com/id/1388642682/photo/businessman-talking-during-video-call-in-the-office.jpg?s=612x612&w=0&k=20&c=gpdBGWyv8dW4ra75DE76Yep0Y6tpCgcZwiLXSUhxbZw='            
    },
    {
      name: 'G Carter',
      description: 'Sales Head : Working for past 8 years with us abound with his sincerity and dedication and helped to maintain the coardination to go for surplus exports towards the markets. ',
      image: 'https://media.gettyimages.com/id/1388642682/photo/businessman-talking-during-video-call-in-the-office.jpg?s=612x612&w=0&k=20&c=gpdBGWyv8dW4ra75DE76Yep0Y6tpCgcZwiLXSUhxbZw='
    },
    {
      name: 'G Carter',
      description: 'Sales Head : Working for past 8 years with us abound with his sincerity and dedication and helped to maintain the coardination to go for surplus exports towards the markets. ',
      image: 'https://media.gettyimages.com/id/1388642682/photo/businessman-talking-during-video-call-in-the-office.jpg?s=612x612&w=0&k=20&c=gpdBGWyv8dW4ra75DE76Yep0Y6tpCgcZwiLXSUhxbZw='
    },
    {
      name: 'G Carter',
      description: 'Sales Head : Working for past 8 years with us for his sincerity and dedication and helped to maintain the coardination to go for surplus exports towards the markets. ',
      image: 'https://media.gettyimages.com/id/1388642682/photo/businessman-talking-during-video-call-in-the-office.jpg?s=612x612&w=0&k=20&c=gpdBGWyv8dW4ra75DE76Yep0Y6tpCgcZwiLXSUhxbZw='
    }];
  products = [
    {
      name: 'Product 1',
      description: 'Description of Product 1',
      price: 100,
      image: 'https://5.imimg.com/data5/SELLER/Default/2021/1/XH/OZ/WO/122464219/crate-sunglasses-500x500.jpeg'
    },
    {
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 150,
      image: 'https://media.istockphoto.com/id/1213143632/photo/shes-a-beauty-queen-who-knows-how-to-rule.jpg?s=612x612&w=0&k=20&c=59o0wieM01ls2bUdWZ5XqSTXI6of9kT201tphoq7Z80='
    },
    {
      name: 'Product 3',
      description: 'Description of Product 3',
      price: 200,
      image: 'https://www.thestylecrate.com/cdn/shop/files/ENJOYEVERYRIDET-ShirtTheStyleCrate_Black.png?v=1714822920&width=533'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
