import { Routes } from "@angular/router";

import { CoinListComponent } from "./pages/coin-list/coin-list.component";
import { CryptocurrencyComponent } from "./cryptocurrency.component";

export const CRYPTOCURRENCY_ROUTES: Routes = [{
  path: '',
  component: CryptocurrencyComponent,
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'coins'
    },
    {
      path: 'coins',
      component: CoinListComponent
    }
  ]
}];