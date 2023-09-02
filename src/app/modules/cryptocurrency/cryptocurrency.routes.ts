import { Routes } from "@angular/router";

import { WalletCoinDetailsComponent } from "./pages/wallet-coin-details/wallet-coin-details.component";
import { WalletCoinsComponent } from "./pages/wallet-coins/wallet-coins.component";
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
    },
    {
      path: 'wallet/:walletAddress',
      component: WalletCoinsComponent,
    },
    {
      path: 'wallet/:walletAddress/coin/:symbol',
      component: WalletCoinDetailsComponent
    }
  ]
}];