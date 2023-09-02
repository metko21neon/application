import { Pipe, PipeTransform } from '@angular/core';

import { WALLET_LIST, WalletInterface } from '../modules/cryptocurrency/states/wallet.state';

@Pipe({
  name: 'imWalletName',
  standalone: true
})
export class WalletNamePipe implements PipeTransform {

  transform(address: string): string {
    const wallet = WALLET_LIST.find((wallet: WalletInterface) => {
      return wallet.addresses.some((item: { address: string }) => item.address === address);
    });

    return wallet ? `${wallet?.company} (${wallet?.name})` : '';
  }
}
