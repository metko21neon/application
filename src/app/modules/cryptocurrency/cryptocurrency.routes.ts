import { Routes } from "@angular/router";

import { WalletCoinDetailsComponent } from "./pages/wallet-coin-details/wallet-coin-details.component";
import { WalletCoinsComponent } from "./pages/wallet-coins/wallet-coins.component";
import { CoinListComponent } from "./pages/coin-list/coin-list.component";
import { CryptocurrencyComponent } from "./cryptocurrency.component";
import { WalletsComponent } from "./pages/wallets/wallets.component";

export const CRYPTOCURRENCY_ROUTES: Routes = [{
  path: '',
  component: CryptocurrencyComponent,
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'wallets'
    },
    {
      path: 'coins',
      component: CoinListComponent
    },
    {
      path: 'wallets',
      component: WalletsComponent,
    },
    {
      path: 'wallets/:walletAddress',
      component: WalletCoinsComponent,
    },
    {
      path: 'wallets/:walletAddress/coins/:symbol',
      component: WalletCoinDetailsComponent
    }
  ]
}];