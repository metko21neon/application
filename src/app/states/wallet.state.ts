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
      'rLoEMuZG3EnhTSVHpo4vVEHu1QH3gMYxcA',
      'ledger_1'
    ]
  },
  {
    name: "Metamask wallet",
    company: "Metamask",
    addresses: [
      '0x2387Eb22e73F85d80966CEd83C323482122Ccf92',
      'metamask_1'
    ]
  },
  {
    name: "Koala wallet",
    company: "Kadena",
    addresses: [
      'k:dc626bb50c84c0e700e7a3eaa11486267a8598b79e14fd7df965bb5e191c9fe6',
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
      '0xDc56ed4117C7d1350e9c7164220f6342F85BEA95',
      'bnb1puldy0etv45fa5s9c5jn23e8pxt86eze7uv35k',
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