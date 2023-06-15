export interface WalletInterface {
  name: string;
  company: string;
  addresses: { network: NETORK_COIN_ENUM, address: string }[];
}

export enum NETORK_COIN_ENUM {
  ADA = 'ADA',
  ALGO = 'ALGO',
  AMP = 'AMP',
  APT = 'APT',
  ATOM = 'ATOM',
  AVAX = 'AVAX',
  BNB = 'BNB',
  BSC = 'BSC',
  BTC = 'BTC',
  DOGE = 'DOGE',
  DOT = 'DOT',
  FIL = 'FIL',
  ETH = 'ETH',
  ICP = 'ICP',
  INCH = '1INCH',
  KDA = 'KDA',
  MINA = 'MINA',
  SOL = 'SOL',
  SUI = 'SUI',
  XLM = 'XLM',
  XRP = 'XRP',
  NOT_KNOWN = 'NOT_KNOWN'
}

export const WALLET_LIST: WalletInterface[] = [
  {
    name: "Binance wallet",
    company: "Binance",
    addresses: [
      { network: NETORK_COIN_ENUM.NOT_KNOWN, address: 'binance_1' },
    ]
  },
  {
    name: "WhiteBit wallet",
    company: "WhiteBit",
    addresses: [
      { network: NETORK_COIN_ENUM.NOT_KNOWN, address: 'whitebit_1' },
    ]
  },
  {
    name: "Ledger wallet",
    company: "Ledger",
    addresses: [
      { network: NETORK_COIN_ENUM.ADA, address: 'addr1q98z2sksmtnmepf7a6gpteqfuwa5z8ffah34mnnx8ne0dl8sssl3xjnx5jt60hak7267cy6c9svuc2ntfpd722szkpgqgcxf24' },
      { network: NETORK_COIN_ENUM.BTC, address: 'bc1qg59jlc2cwazzjvean5ms8y36n4l3my053w7pq7' },
      { network: NETORK_COIN_ENUM.XRP, address: 'rLoEMuZG3EnhTSVHpo4vVEHu1QH3gMYxcA' },
    ]
  },
  {
    name: "Metamask wallet",
    company: "Metamask",
    addresses: [
      { network: NETORK_COIN_ENUM.AMP, address: '0x2387Eb22e73F85d80966CEd83C323482122Ccf92' },
      { network: NETORK_COIN_ENUM.NOT_KNOWN, address: 'metamask_1' },
    ]
  },
  {
    name: "Koala wallet",
    company: "Kadena",
    addresses: [
      { network: NETORK_COIN_ENUM.KDA, address: 'k:dc626bb50c84c0e700e7a3eaa11486267a8598b79e14fd7df965bb5e191c9fe6' },
    ]
  },
  {
    name: "YouHolder wallet",
    company: "YouHolder",
    addresses: [
      { network: NETORK_COIN_ENUM.NOT_KNOWN, address: 'you_holder_1' },
    ]
  },
  {
    name: "Internet Computer wallet",
    company: "Internet Computer",
    addresses: [
      { network: NETORK_COIN_ENUM.NOT_KNOWN, address: 'internet_computer_1' },
    ]
  },
  {
    name: "Avalanche wallet",
    company: "Avalanche",
    addresses: [
      { network: NETORK_COIN_ENUM.AVAX, address: 'X-avax1sxnpzqdk5g7etd9853fvn4gcxjj4wl98vlx52z' },
    ]
  },
  {
    name: "Mina wallet",
    company: "Mina",
    addresses: [
      { network: NETORK_COIN_ENUM.MINA, address: 'B62qpigbgFCsbt4kGiBVU6B4LsjzJUeB26zay9FKWkbdw9eKSgYr2x8' },
    ]
  },
  {
    name: "Additional wallet",
    company: "Trust Wallet",
    addresses: [
      { network: NETORK_COIN_ENUM.BSC, address: '0x02c18f708358887cb4993a9608e37216b71fe2a2' },
    ]
  },
  {
    name: "Main wallet",
    company: "Trust Wallet",
    addresses: [
      { network: NETORK_COIN_ENUM.BSC, address: '0xDc56ed4117C7d1350e9c7164220f6342F85BEA95' },
      { network: NETORK_COIN_ENUM.BNB, address: 'bnb1puldy0etv45fa5s9c5jn23e8pxt86eze7uv35k' },
    ]
  },
  {
    name: "Savings wallet",
    company: "Trust Wallet",
    addresses: [
      { network: NETORK_COIN_ENUM.SUI, address: '0xded7199632cc4973a7da37d84fee1b20971e267c5b9a8f47441e1ca93916169b' },
      { network: NETORK_COIN_ENUM.XLM, address: 'GAE7COVEPYBUFPZYPO65CRZ2DZRPAH6AJJNQSVFGRZHGVX5I4HK3MHDX' },
      { network: NETORK_COIN_ENUM.ALGO, address: 'LBHRI7C3IY6LBWNGHU7MZR5PJFNQXDMGXKCVPVAB4NEY36ZWU5QKNBMBVE' },
      { network: NETORK_COIN_ENUM.ETH, address: '0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3' },
      { network: NETORK_COIN_ENUM.FIL, address: 'f1xl7ztmwdmmqs6i6tfcfhkwn6mix35yiqkf2rdmq' },
      { network: NETORK_COIN_ENUM.SOL, address: '5zLnGa8VoxjabLMgB7vWxb5mwaq2jACz3xzCvVq3YyQe' },
      { network: NETORK_COIN_ENUM.APT, address: '0x894c54c013cb4822fb70c540684ec921935019bc216e19a5440d302905f5e9e7' },
      { network: NETORK_COIN_ENUM.ATOM, address: 'cosmos19da59dqs6anv68rtrum660nzg9turgcqsmxzv5' },
      { network: NETORK_COIN_ENUM.DOT, address: '13tWubJx5KK36MDVTWYAVoEXa8Ks7cciBfvkLsep77NkEA2w' },
      { network: NETORK_COIN_ENUM.INCH, address: '3PPKVawkKTm2eW5TDdh7z495BYVAKtA4im2' },
      { network: NETORK_COIN_ENUM.DOGE, address: 'DHKCoFbtYhh6VmxHwy9sf1gmSqMLxm8aRp' },
    ]
  },
];