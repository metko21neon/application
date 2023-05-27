import { Pipe, PipeTransform } from '@angular/core';

import { WALLET_LIST, WalletInterface } from '../states/wallet.state';

@Pipe({
  name: 'imWalletName',
})
export class WalletNamePipe implements PipeTransform {

  transform(address: string): string {
    const wallet = WALLET_LIST.find((wallet: WalletInterface) => {
      return wallet.addresses.some((item: string) => item === address);
    });

    return `${wallet?.company} (${wallet?.name})`;
  }
}
