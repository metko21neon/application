import { NETORK_COIN_ENUM } from "../enums/network-coin.enum";

export interface WalletAddressInterface {
  network: NETORK_COIN_ENUM;
  address: string;
}