import { Routes } from "@angular/router";

import { HomeIndexComponent } from "./layout/home/home-index/home-index.component";
import { ShopIndexComponent } from "./layout/shop/shop-index/shop-index.component";

export const routes: Routes = [
   {
      path: "",
      component: HomeIndexComponent,
   },
   {
      path: "shop",
      component: ShopIndexComponent,
   },
];
