import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { parseHttpResponse } from 'selenium-webdriver/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  category:Category [];
  categorySelected: Category | string;

  constructor() { }

  ngOnInit() {
  this.category = [
    {categoryId:1, category: "Mobile Phones"},
    {categoryId:2, category: "Computers"},
    {categoryId:3, category: "Fans"}
  ];

  this.categorySelected= 'Computers';

  }

}
