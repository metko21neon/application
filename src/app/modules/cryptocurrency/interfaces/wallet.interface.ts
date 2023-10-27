import { WalletAddressInterface } from "./wallet-address.interface";

export interface WalletInterface {
  addresses: WalletAddressInterface[];
  company: string;
  name: string;
}