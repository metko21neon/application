export interface WalletInterface {
  addresses: string[];
  company: string;
  name: string;
}

export const WALLET_LIST: WalletInterface[] = [
  {
    name: "Binance wallet",
    company: "Binance",
    addresses: [
      'binance_1'
    ]
  },
  {
    name: "WhiteBit wallet",
    company: "WhiteBit",
    addresses: [
      'whitebit_1'
    ]
  },
  {
    name: "Ledger wallet",
    company: "Ledger",
    addresses: [
      'ledger_1'
    ]
  },
  {
    name: "Metamask wallet",
    company: "Metamask",
    addresses: [
      'metamask_1'
    ]
  },
  {
    name: "YouHolder wallet",
    company: "YouHolder",
    addresses: [
      'you_holder_1'
    ]
  },
  {
    name: "Internet Computer wallet",
    company: "Internet Computer",
    addresses: [
      'internet_computer_1'
    ]
  },
  {
    name: "Avalanche wallet",
    company: "Avalanche",
    addresses: [
      'X-avax1sxnpzqdk5g7etd9853fvn4gcxjj4wl98vlx52z'
    ]
  },
  {
    name: "Additional wallet",
    company: "Trust Wallet",
    addresses: [
      '0x02c18f708358887cb4993a9608e37216b71fe2a2'
    ]
  },
  {
    name: "Main wallet",
    company: "Trust Wallet",
    addresses: [
      '0xDc56ed4117C7d1350e9c7164220f6342F85BEA95'
    ]
  },
  {
    name: "Savings wallet",
    company: "Trust Wallet",
    addresses: [
      'LBHRI7C3IY6LBWNGHU7MZR5PJFNQXDMGXKCVPVAB4NEY36ZWU5QKNBMBVE',
      '0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3',
      'f1xl7ztmwdmmqs6i6tfcfhkwn6mix35yiqkf2rdmq',
      '3PPKVawkKTm2eW5TDdh7z495BYVAKtA4im2',
      'DHKCoFbtYhh6VmxHwy9sf1gmSqMLxm8aRp',
    ]
  },
];