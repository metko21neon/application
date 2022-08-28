export interface ResponseInterface {
  status: Status;
  data: CoinSettingsInterface[];
}

export interface CoinSettingsInterface {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  num_market_pairs: number;
  date_added: string;
  tags: string[];
  max_supply: number | null;
  circulating_supply: number;
  total_supply: number;
  platform: Platform | null;
  cmc_rank: number;
  self_reported_circulating_supply: number | null;
  self_reported_market_cap: number | null;
  last_updated: string;
  quote: Quote;
}

export interface Platform {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  token_address: string;
}

export enum Name {
  Algorand = "Algorand",
  Arbitrum = "Arbitrum",
  Aurora = "Aurora",
  AvalancheCChain = "Avalanche C-Chain",
  AvalancheDFK = "Avalanche DFK",
  BNBBeaconChainBEP2 = "BNB Beacon Chain (BEP2)",
  BNBSmartChainBEP20 = "BNB Smart Chain (BEP20)",
  BitcoinCash = "Bitcoin Cash",
  BobaNetwork = "Boba Network",
  Cardano = "Cardano",
  Celo = "Celo",
  Chiliz = "Chiliz",
  Cosmos = "Cosmos",
  Cronos = "Cronos",
  EOS = "EOS",
  Elrond = "Elrond",
  Ethereum = "Ethereum",
  Fantom = "Fantom",
  Fuse = "Fuse",
  Harmony = "Harmony",
  Heco = "HECO",
  IoTex = "IoTex",
  Kcc = "KCC",
  Klaytn = "Klaytn",
  Kusama = "Kusama",
  Meter = "Meter",
  MetisAndromeda = "Metis Andromeda",
  Milkomeda = "Milkomeda",
  Moonbeam = "Moonbeam",
  Moonriver = "Moonriver",
  Neo = "Neo",
  OKExChain = "OKExChain",
  Ont = "ONT",
  Polygon = "Polygon",
  RskRbtc = "RSK RBTC",
  Secret = "Secret",
  Solana = "Solana",
  SongbirdNetwork = "Songbird Network",
  Stellar = "Stellar",
  Terra = "Terra",
  Tezos = "Tezos",
  Tron10 = "Tron10",
  Tron20 = "Tron20",
  VeChain = "VeChain",
  Wanchain = "Wanchain",
  Waves = "Waves",
  XDai = "xDai",
  XRPLedger = "XRP Ledger",
  XinfinNetworkXDC = "Xinfin Network (XDC)",
  Zilliqa = "Zilliqa",
}

export enum Slug {
  Algorand = "algorand",
  ArbitrumEthereum = "arbitrum-ethereum",
  AuroraNear = "aurora-near",
  Avalanche = "avalanche",
  BitcoinCash = "bitcoin-cash",
  Bnb = "bnb",
  BobaNetwork = "boba-network",
  Cardano = "cardano",
  Celo = "celo",
  Chiliz = "chiliz",
  Cosmos = "cosmos",
  Cronos = "cronos",
  EOS = "eos",
  ElrondEgld = "elrond-egld",
  Ethereum = "ethereum",
  Fantom = "fantom",
  FuseNetwork = "fuse-network",
  Harmony = "harmony",
  HuobiToken = "huobi-token",
  Iotex = "iotex",
  Klaytn = "klaytn",
  KucoinToken = "kucoin-token",
  Kusama = "kusama",
  MeterGovernance = "meter-governance",
  Metisdao = "metisdao",
  Moonbeam = "moonbeam",
  Moonriver = "moonriver",
  Neo = "neo",
  Okt = "okt",
  Ontology = "ontology",
  Polygon = "polygon",
  RskSmartBitcoin = "rsk-smart-bitcoin",
  Secret = "secret",
  Solana = "solana",
  Songbird = "songbird",
  Stellar = "stellar",
  TRON = "tron",
  TerraLuna = "terra-luna",
  Tezos = "tezos",
  Vechain = "vechain",
  Wanchain = "wanchain",
  Waves = "waves",
  Xdai = "xdai",
  Xinfin = "xinfin",
  Xrp = "xrp",
  Zilliqa = "zilliqa",
}

export enum Symbol {
  Ada = "ADA",
  Algo = "ALGO",
  Arbitrum = "ARBITRUM",
  Atom = "ATOM",
  Aurora = "AURORA",
  Avax = "AVAX",
  Bch = "BCH",
  Bnb = "BNB",
  Boba = "BOBA",
  Celo = "CELO",
  Chz = "CHZ",
  Cro = "CRO",
  EOS = "EOS",
  Egld = "EGLD",
  Eth = "ETH",
  Ftm = "FTM",
  Fuse = "FUSE",
  Glmr = "GLMR",
  HT = "HT",
  Iotx = "IOTX",
  Kcs = "KCS",
  Klay = "KLAY",
  Ksm = "KSM",
  Luna = "LUNA",
  Matic = "MATIC",
  Metis = "METIS",
  Movr = "MOVR",
  Mtrg = "MTRG",
  Neo = "NEO",
  Okt = "OKT",
  One = "ONE",
  Ont = "ONT",
  Rbtc = "RBTC",
  Scrt = "SCRT",
  Sgb = "SGB",
  Sol = "SOL",
  Stake = "STAKE",
  Trx = "TRX",
  Vet = "VET",
  WAN = "WAN",
  Waves = "WAVES",
  Xdc = "XDC",
  Xlm = "XLM",
  Xrp = "XRP",
  Xtz = "XTZ",
  Zil = "ZIL",
}

export interface Quote {
  USD: Usd;
}

export interface Usd {
  price: number;
  volume_24h: number;
  volume_change_24h: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  percent_change_30d: number;
  percent_change_60d: number;
  percent_change_90d: number;
  market_cap: number;
  market_cap_dominance: number;
  fully_diluted_market_cap: number;
  last_updated: string;
}

export interface Status {
  timestamp: string;
  error_code: number;
  error_message: null;
  elapsed: number;
  credit_count: number;
  notice: null;
  total_count: number;
}
