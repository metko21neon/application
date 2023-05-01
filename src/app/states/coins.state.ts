export interface CoinInterface {
  token_address?: string;
  address?: string;
  symbol: string;
  name?: string;
  wallets?: {
  }[];
  history?: {
    averagePrice?: number;
    executed?: number;
    filled?: number;
    amount?: number;
    total?: number;
    price?: number;
    fee?: number;

    wallet?: string;
    action: string;
    date: string;
  }[];
}


export const COIN_LIST: CoinInterface[] = [
  {
    name: "Helium",
    symbol: "HNT",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-09-05 14:33:37",
            action: "buy",
            price: 3.9,
            total: 299.988,
            executed: 76.92
          },
        ]
      }
    ]
  },
  {
    name: "Solana",
    symbol: "SOL",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-11-09 12:01:38",
            action: "buy",
            price: 17.4,
            total: 107.88,
          },
          {
            date: "2022-11-09 19:55:24",
            action: "sell",
            price: 15,
            filled: 6.2,
          },
        ]
      }
    ]
  },
  {
    name: "NEM",
    symbol: "XEM",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-10-21 09:52:37",
            action: "buy",
            price: 0.0367,
            total: 24.9927,
            executed: 681
          },
        ]
      }
    ]
  },
  {
    name: "Waves",
    symbol: "WAVES",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-10-21 09:54:40",
            action: "buy",
            price: 3.155,
            total: 24.9876,
            executed: 7.92
          },
          {
            date: "2022-10-21 09:55:38",
            action: "buy",
            price: 3.155,
            total: 24.9876,
            executed: 7.92
          },
          {
            date: "2022-12-17 00:07:34",
            action: "buy",
            price: 1.633,
            total: 24.96857,
            executed: 15.29
          },
          {
            date: "2022-12-17 15:26:46",
            action: "buy",
            price: 1.585,
            total: 23.9652,
          },
          {
            date: "2023-03-10 06:14:06",
            action: "buy",
            price: 1.931,
            total: 49.99359,
          },
          {
            date: "2023-03-10 18:59",
            action: "transfer",
            wallet: "Trust Wallet (Savings)",
            address: "3PPKVawkKTm2eW5TDdh7z495BYVAKtA4im2",
            amount: 0.0016,
            fee: 0.0016
          },
          {
            date: "2023-03-10 19:04",
            action: "transfer",
            wallet: "Trust Wallet (Savings)",
            address: "3PPKVawkKTm2eW5TDdh7z495BYVAKtA4im2",
            amount: 67.185505,
            fee: 0.0016
          },
        ]
      },
      {
        name: "Trust Wallet (Savings)",
        address: "3PPKVawkKTm2eW5TDdh7z495BYVAKtA4im2",
        transactions: [
          {
            date: "2023-03-10 18:59",
            action: "receive",
            amount: 0.0016,
            fee: 0.0016
          },
          {
            date: "2023-03-10 19:04",
            action: "receive",
            amount: 67.185505,
            fee: 0.0016
          },
        ]
      },
    ]
  },
  {
    name: "Elrond",
    symbol: "EGLD",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-08-18 14:58:13",
            action: "buy",
            price: 57.5,
            total: 299.575,
            // executed: 5.21
          },
          {
            date: "2022-08-18 19:56:58",
            action: "sell",
            price: 52,
            filled: 5.21,
            // averagePrice: 57.5,
            // executed: 5.21
          }
        ]
      }
    ]
  },
  {
    name: "Uniswap",
    symbol: "UNI",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-05-09 21:56:13",
            action: "buy",
            price: 6.33,
            total: 49.94
          },
          {
            date: "2022-05-11 13:50:36",
            action: "sell",
            price: 5.95,
            filled: 4.20,
            averagePrice: 6.33
          },
          {
            date: "2023-03-10 06:05:47",
            action: "buy",
            price: 5.668,
            total: 49.93508
          },
        ]
      }
    ]
  },
  {
    name: "PancakeSwap",
    symbol: "CAKE",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2021",
            action: "buy",
            price: 19.055,
            total: 228.66,
          },
          {
            date: "2021",
            action: "buy",
            price: 17.728,
            total: 99.98592,
          },
          {
            date: "2021",
            action: "buy",
            price: 17.694,
            total: 11.005668,
          },
          {
            date: "2021",
            action: "buy",
            price: 37.151,
            total: 529.550354,
          },
          {
            date: "2021",
            action: "buy",
            price: 40.5,
            total: 305.289,
          },
          {
            date: "2021-05-28 01:04",
            action: "transfer",
            wallet: "Trust Wallet (Main)",
            address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
            amount: 0.05924529,
            fee: 0.0098,
          },
          {
            date: "2021-05-29 18:32",
            action: "transfer",
            wallet: "Trust Wallet (Main)",
            address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
            amount: 6.45804975,
            fee: 0.01,
          },
          {
            date: "2021-05-31 08:12",
            action: "transfer",
            wallet: "Trust Wallet (Main)",
            address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
            amount: 7.41329184,
            fee: 0.01,
          },
          {
            date: "2021-06-01 03:37",
            action: "transfer",
            wallet: "Trust Wallet (Main)",
            address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
            amount: 14.06935912,
            fee: 0.01,
          },
          {
            date: "2021-06-05 23:01",
            action: "transfer",
            wallet: "Trust Wallet (Main)",
            address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
            amount: 11.978,
            fee: 0.01,
          },
          {
            date: "2022-05-09 21:56:52",
            action: "buy",
            price: 5.800,
            total: 49.648
          },
          {
            date: "2022-05-09 22:19",
            action: "transfer",
            wallet: "TrustWallet Main",
            address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
            amount: 8.535,
            fee: 0.025,
          },
          {
            date: "2022-05-12 08:55:27",
            action: "buy",
            price: 3.4,
            total: 49.98
          },
          {
            date: "2022-05-16 12:15",
            action: "transfer",
            wallet: "Trust Wallet (Main)",
            address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
            amount: 14.6523,
            fee: 0.033,
          },
          {
            date: "2022-12-17 19:33:24",
            action: "buy",
            price: 3.285,
            total: 24.99885
          },
          {
            date: "2023-03-10 06:10:35",
            action: "buy",
            price: 3.529,
            total: 49.97064
          },
          {
            date: "2023-03-10 06:40",
            action: "transfer",
            wallet: "Trust Wallet (Main)",
            address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
            amount: 21.73939,
            fee: 0.023
          },
        ]
      },
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        name: "Trust Wallet (Main)",
        transactions: [
          {
            date: "2021-05-28 01:04",
            action: "receive",
            amount: 0.05924529,
            fee: 0.0098,
          },
          {
            date: "2021-05-29 18:32",
            action: "receive",
            amount: 6.45804975,
            fee: 0.01,
          },
          {
            date: "2021-05-31 08:12",
            action: "receive",
            amount: 7.41329184,
            fee: 0.01,
          },
          {
            date: "2021-05-31 08:16",
            action: "spend",
            amount: 6.5342,
          },
          // {
          //   date: "2021-05-31 08:22",
          //   action: "spend",
          //   amount: 0.87905469,
          // },
          {
            date: "2021-06-01 03:37",
            action: "receive",
            amount: 14.06935912,
            fee: 0.01,
          },
          // {
          //   date: "2021-06-01 03:41",
          //   action: "spend", // swap
          //   amount: 14.06935912,
          //   // swap on trx
          // },
          // {
          //   date: "2021-06-03 20:14",
          //   action: "spend", // swap
          //   amount: 7.474206909681682372,
          //   // swap on trx
          // },
          {
            date: "2021-06-05 23:01",
            action: "receive",
            amount: 11.978,
            fee: 0.01,
          },
          // {
          //   date: "2021-09-17 15:50",
          //   action: "spend", // swap
          //   amount: 8,
          //   // swap on c98
          // },
          {
            date: "2022-05-09 22:19",
            action: "receive",
            amount: 8.535,
            fee: 0.025,
          },
          {
            date: "2022-05-16 12:15",
            action: "receive",
            amount: 14.6523,
            fee: 0.033,
          },
          {
            date: "2023-03-10 06:40",
            action: "receive",
            amount: 21.73939,
            fee: 0.023
          },
        ]
      },
    ]
  },
  {
    name: "dYdX",
    symbol: "DYDX",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-05-09 21:57:34",
            action: "buy",
            price: 3.079,
            total: 49.818
          },
          {
            date: "2022-12-17 15:20:47",
            action: "buy",
            price: 1.412,
            total: 24.9924
          },
          {
            date: "2023-03-10 06:21:47",
            action: "buy",
            price: 2.009,
            total: 24.99196
          },
        ]
      }
    ]
  },
  {
    name: "Harmony",
    symbol: "ONE",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-05-12 08:42:40",
            action: "buy",
            price: 0.034,
            total: 24.9968
          }
        ]
      }
    ]
  },
  {
    name: "eCash",
    symbol: "XEC",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-05-12 08:36:36",
            action: "buy",
            price: 0.0000288,
            total: 24.999984
          },
          {
            date: "2022-05-28 22:37:29",
            action: "sell",
            price: 0.00004732,
            filled: 528317,
            averagePrice: 0.0000288
          }
        ]
      }
    ]
  },
  {
    name: "Moonbeam",
    symbol: "GLMR",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-05-12 08:38:12",
            action: "buy",
            price: 1.127,
            total: 24.9067
          },
          {
            date: "2022-08-18 06:30:46",
            action: "buy",
            price: 0.67,
            total: 299.959
          },
          {
            date: "2022-08-18 08:03:31",
            action: "sell",
            price: 0.6098,
            filled: 468.4
          },
          {
            date: "2022-08-26 10:57:19",
            action: "buy",
            price: 0.575,
            total: 299.9775
          },
          {
            date: "2022-08-27 19:09:49",
            action: "buy",
            price: 0.54,
            total: 99.954
          },
          {
            date: "2022-11-24 11:58:28",
            action: "sell",
            price: 0.3551,
            filled: 708.2
          },
        ]
      }
    ]
  },
  {
    name: "Decred",
    symbol: "DCR",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-05-29 00:13:41",
            action: "buy",
            price: 33.8,
            total: 25
          },
          {
            date: "2022-06-08 15:27:14",
            action: "sell",
            price: 34.6,
            filled: 0.7396449704142013,
          }
        ]
      }
    ]
  },
  {
    name: "Kadena",
    symbol: "KDA",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-05-12 09:10:30",
            action: "buy",
            price: 1.473,
            total: 24.717
          },
          {
            date: "2023-03-10 06:11:24",
            action: "buy",
            price: 0.918,
            total: 49.99428
          },
        ]
      }
    ]
  },
  {
    name: "Biswap",
    symbol: "BSW",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-05-09 22:02:11",
            action: "buy",
            price: 0.795,
            total: 29.4150
          }
        ]
      }
    ]
  },
  {
    name: "SushiSwap",
    symbol: "SUSHI",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-05-09 22:02:13",
            action: "buy",
            price: 1.804,
            total: 24.895
          },
          {
            date: "2022-05-13 13:48:03",
            action: "buy",
            price: 1.397,
            total: 24.867
          },
          {
            date: "2023-03-10 06:12:36",
            action: "buy",
            price: 1.045,
            total: 49.951
          },
          {
            date: "2023-04-09 11:16:26",
            action: "sell",
            price: 1.069,
            filled: 81
          },
        ]
      }
    ]
  },
  {
    name: "Moonriver",
    symbol: "MOVR",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2021",
            action: "buy",
            price: 60,
            total: 25,
          },
          {
            date: "2021",
            action: "buy",
            price: 71,
            total: 25,
          },
          {
            date: "2022-05-09 22:05:03",
            action: "buy",
            price: 27.2,
            total: 25
          },
          {
            date: "2022-09-15 17:46:43",
            action: "buy",
            price: 11.59,
            total: 62.96847
          },
        ]
      }
    ]
  },
  {
    name: "Biconomy",
    symbol: "BICO",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2021",
            action: "buy",
            price: 1.6,
            total: 25,
          },
          {
            date: "2021",
            action: "buy",
            price: 1.9,
            total: 25,
          },
          {
            date: "2022-05-13 13:52:53",
            action: "buy",
            price: 0.460,
            total: 24.996
          },
          {
            date: "2022-05-13 20:24:26",
            action: "sell",
            price: 0.488,
            filled: 83.12202517162471,
          },
        ]
      }
    ]
  },
  {
    name: "Beta Finance",
    symbol: "BETA",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-05-13 14:36:19",
            action: "buy",
            price: 0.0985,
            total: 25.019
          },
          {
            date: "2022-05-13 21:58:16",
            action: "sell",
            price: 0.09617,
            filled: 253.99999999999997,
          }
        ]
      }
    ]
  },
  {
    name: "CLV",
    symbol: "CLV",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-05-13 19:30:48",
            action: "buy",
            price: 0.15,
            total: 25.11
          }
        ]
      }
    ]
  },
  {
    name: "Cardano",
    symbol: "ADA",
    wallets: [
      {
        name: "WhiteBit",
        address: "whitebit_1",
        transactions: [
          {
            date: "12.11.2022 01:53:14",
            action: "buy",
            price: 0.354803,
            total: 74.92374951,
          },
          {
            date: "14.11.2022 23:58:21",
            action: "transfer",
            wallet: "Ledger",
            address: "",
            amount: 16,
            fee: 2,
            // averagePrice: 29.322687921306237
          },
          {
            date: "15.11.2022 00:05:08",
            action: "transfer",
            wallet: "Ledger",
            address: "",
            amount: 191.17,
            fee: 2,
            // averagePrice: 29.322687921306237
          },
        ]
      },
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2021",
            action: "buy",
            price: 1.738,
            total: 400.50472,
          },
          {
            date: "2021",
            action: "buy",
            price: 1.2,
            total: 92.58,
          },
          {
            date: "2022-05-09 22:09:47",
            action: "buy",
            price: 0.6231,
            total: 24.924
          },
          {
            date: "2022-11-10 00:05:21",
            action: "buy",
            price: 0.3175,
            total: 48.03775,
            executed: 151.3
          },
          {
            date: "2022-11-15 00:20",
            action: "transfer",
            wallet: "Ledger",
            address: "",
            amount: 9.2,
            fee: 0.8,
            // averagePrice: 29.322687921306237
          },
          {
            date: "2022-11-15 01:19",
            action: "transfer",
            wallet: "Ledger",
            address: "",
            amount: 510.001788,
            fee: 0.8,
            // averagePrice: 29.322687921306237
          },
          {
            date: "2022-12-17 00:03:44",
            action: "buy",
            price: 0.2823,
            total: 24.98355,
            executed: 88.5
          },
          {
            date: "2022-12-17 15:24:00",
            action: "buy",
            price: 0.2651,
            total: 24.99893,
            // executed: 88.5
          },
          {
            date: "2023-03-10 06:04:18",
            action: "buy",
            price: 0.3081,
            total: 49.97382,
          },
          {
            date: "2023-03-10 06:36",
            action: "transfer",
            wallet: "Ledger",
            address: "",
            amount: 344.1057,
            fee: 0.8,
          },
        ]
      },
      {
        name: "Ledger",
        address: "ledger_1",
        transactions: [
          {
            date: "2022-11-15 12:01",
            action: "receive",
            amount: 16,
            fee: 2,
          },
          {
            date: "2022-11-15 12:09",
            action: "receive",
            amount: 191.17,
            fee: 2,
          },
          {
            date: "2022-11-15 00:20",
            action: "receive",
            amount: 9.2,
            fee: 0.8,
          },
          {
            date: "2022-11-15 01:19",
            action: "receive",
            amount: 510.001788,
            fee: 0.8,
          },
          {
            date: "2023-03-10 06:26",
            action: "receive",
            amount: 344.1057,
            fee: 0.8,
          },
        ]
      },
    ]
  },
  {
    name: "Cosmos",
    symbol: "ATOM",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2021",
            action: "buy",
            price: 25,
            total: 44.25,
          },
          {
            date: "2021",
            action: "buy",
            price: 30,
            total: 25,
          },
          {
            date: "2022-05-09 22:10:57",
            action: "buy",
            price: 13.94,
            total: 24.953
          },
          {
            date: "2022-12-17 00:05:03",
            action: "buy",
            price: 8.983,
            total: 24.97274
          },
          {
            date: "2023-03-10 05:58:57",
            action: "buy",
            price: 11.08,
            total: 49.9708
          },
          {
            date: "2023-03-10 19:20",
            action: "transfer",
            wallet: "Trust Wallet (Savings)",
            address: "cosmos19da59dqs6anv68rtrum660nzg9turgcqsmxzv5",
            amount: 0.006,
            fee: 0.004
          },
          {
            date: "2023-03-10 19:23",
            action: "transfer",
            wallet: "Trust Wallet (Savings)",
            address: "cosmos19da59dqs6anv68rtrum660nzg9turgcqsmxzv5",
            amount: 12.13701,
            fee: 0.004
          },
        ]
      },
      {
        name: "Trust Wallet (Savings)",
        address: "3PPKVawkKTm2eW5TDdh7z495BYVAKtA4im2",
        transactions: [
          {
            date: "2023-03-10 19:20",
            action: "receive",
            amount: 0.006,
            fee: 0.004
          },
          {
            date: "2023-03-10 19:23",
            action: "receive",
            amount: 12.13701,
            fee: 0.004
          },
        ]
      },
    ]
  },
  {
    name: "Chiliz",
    symbol: "CHZ",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-05-09 22:11:48",
            action: "buy",
            price: 0.1379,
            total: 25.2357
          }
        ]
      }
    ]
  },
  {
    name: "Zilliqa",
    symbol: "ZIL",
    wallets: [
      {
        name: "WhiteBit",
        address: "whitebit_1",
        transactions: [
          {
            date: "12.11.2022 01:50:49",
            action: "buy",
            price: 0.022597,
            total: 49.95004934,
          },
          {
            date: "29.11.2022 20:16:12",
            action: "transfer",
            wallet: "Trust Wallet (Savings)",
            address: "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
            amount: 2185.4726,
            fee: 25,
            // averagePrice: 29.322687921306237
          },
        ]
      },
      {
        name: "Trust Wallet (Savings)",
        address: "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
        transactions: [
          {
            date: "29.11.2022 20:16:12",
            action: "receive",
            amount: 2185.4726,
            fee: 25,
            // averagePrice: 0.01964100237799315,
            // usdFee: 0.1
          },
        ],
      },
    ]
  },
  {
    name: "Polkastarter",
    symbol: "POLS",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-06-12 14:01:36",
            action: "buy",
            price: 0.535,
            total: 43.014
          }
        ]
      }
    ]
  },
  {
    name: "Lido DAO",
    symbol: "LDO",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-05-10 16:43:38",
            action: "buy",
            price: 2.2,
            total: 24.992
          },
          {
            date: "2022-06-12 13:32:25",
            action: "buy",
            price: 0.83,
            total: 36.014
          },
          {
            date: "2022-07-17 15:55:44",
            action: "sell",
            price: 1.628,
            filled: 27.43,
            // averagePrice: 0
          }
        ]
      }
    ]
  },
  {
    name: "Anchor Protocol",
    symbol: "ANC",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-05-11 10:52:57",
            action: "buy",
            price: 0.18,
            total: 24.9984
          }
        ]
      }
    ]
  },
  {
    address: "binance_1",
    name: "Bitcoin",
    symbol: "BTC",
    wallets: [
      {
        name: "WhiteBit",
        address: "whitebit_1",
        transactions: [
          {
            date: "13.11.2022 19:06:17",
            action: "buy",
            price: 16570,
            total: 299.68502,
          },
          {
            date: "15.11.2022 00:58:30",
            action: "transfer",
            wallet: "Ledger",
            address: "",
            amount: 0.001,
            fee: 0.0004,
          },
          {
            date: "15.11.2022 01:32:31",
            action: "transfer",
            wallet: "Ledger",
            address: "",
            amount: 0.016286,
            fee: 0.0004,
          },
        ]
      },
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2021",
            action: "buy",
            price: 32578.27,
            total: 99.72208447,
          },
          {
            date: "2021",
            action: "buy",
            price: 32500,
            total: 99.97,
          },
          {
            date: "2021",
            action: "sell",
            price: 40000,
            filled: 0.00126219,
          },
          {
            date: "24.09.2021 11:51:00",
            action: "transfer",
            wallet: "Ledger",
            amount: 0.0005,
            fee: 0.0005,
          },
          {
            date: "2022-06-13 12:39:28",
            action: "buy",
            price: 24000,
            total: 24.96,
          },
          {
            date: "2022-06-13 17:42:51",
            action: "buy",
            price: 23050,
            total: 70.07,
          },
          {
            date: "2022-06-17 10:47:15",
            action: "buy",
            price: 20200,
            total: 46.06,
          },
          {
            date: "2022-06-18 10:03:59",
            action: "buy",
            price: 19350,
            total: 46.25,
          },
          {
            date: "2022-07-19 20:16:48",
            action: "sell",
            price: 23040.6,
            filled: 0.00273,
          },
          {
            date: "2022-07-23 07:00:54",
            action: "sell",
            price: 22000,
            filled: 0.00592,
          },
          {
            date: "2022-12-17 15:16:44",
            action: "buy",
            price: 16696.21,
            total: 49.9216679,
          },
        ]
      },
      {
        name: "Ledger wallet",
        address: "ledger_1",
        transactions: [
          {
            date: "24.09.2021 11:51:00",
            action: "receive",
            amount: 0.0005,
            fee: 0.0005
          },
          {
            date: "2022-11-15 01:33",
            action: "receive",
            amount: 0.001,
            fee: 0.0004
          },
          {
            date: "2022-11-15 12:09",
            action: "receive",
            amount: 0.016286,
            fee: 0.0004
          },
        ]
      },
    ]
  },
  {
    name: "Flux",
    symbol: "FLUX",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-05-11 10:55:54",
            action: "buy",
            price: 0.752,
            total: 24.99648
          },
          {
            date: "2022-05-12 06:28:02",
            action: "sell",
            price: 0.617,
            filled: 33.239999999999995,
          },
        ]
      }
    ]
  },
  {
    name: "QuickSwap",
    symbol: "QUICK",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-05-11 10:55:26",
            action: "buy",
            price: 93.2,
            total: 25
          },
          {
            date: "2022-06-12 14:45:15",
            action: "buy",
            price: 53.5,
            total: 42.9
          },
        ]
      }
    ]
  },
  {
    name: "Mina",
    symbol: "MINA",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-06-12 16:29:13",
            action: "buy",
            price: 0.65,
            total: 44.98
          },
          {
            date: "2022-10-21 09:58:17",
            action: "buy",
            price: 0.53,
            total: 41.022,
            executed: 77.4
          },
          {
            date: "2023-03-10 06:15:14",
            action: "buy",
            price: 0.655,
            total: 35.9595,
          },
        ]
      }
    ]
  },
  {
    name: "Render Token",
    symbol: "RNDR",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-06-13 12:47:39",
            action: "buy",
            price: 0.378,
            total: 25.001
          },
          {
            date: "2022-11-22 02:13:08",
            action: "sell",
            price: 0.425,
            filled: 66.14021164021165,
          },
        ]
      }
    ]
  },
  {
    name: "1inch Network",
    symbol: "1INCH",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-05-11 11:24:49",
            action: "buy",
            price: 1.050,
            total: 25.200
          },
          {
            date: "2022-06-12 16:32:03",
            action: "buy",
            price: 0.66,
            total: 44.946
          },
          {
            date: "2022-12-17 15:25:36",
            action: "buy",
            price: 0.384,
            total: 24.9984
          },
          {
            date: "2023-03-10 06:12:41",
            action: "buy",
            price: 0.434,
            total: 49.9968
          },
          {
            date: "2023-03-10 19:31",
            action: "transfer",
            wallet: "Trust Wallet (Savings)",
            address: "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
            amount: 0.16,
            fee: 0.16
          },
          {
            date: "2023-03-10 19:34",
            action: "transfer",
            wallet: "Trust Wallet (Savings)",
            address: "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
            amount: 272.13,
            fee: 0.16
          },
        ]
      },
      {
        name: "Trust Wallet (Savings)",
        address: "3PPKVawkKTm2eW5TDdh7z495BYVAKtA4im2",
        transactions: [
          {
            date: "2023-03-10 19:31",
            action: "receive",
            amount: 0.16,
            fee: 0.16
          },
          {
            date: "2023-03-10 19:34",
            action: "receive",
            amount: 272.13,
            fee: 0.16
          },
        ]
      },
    ]
  },
  {
    name: "Avalanche",
    symbol: "AVAX",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-05-11 11:27:33",
            action: "buy",
            price: 38,
            total: 24.7
          },
          {
            date: "2022-05-12 09:05:11",
            action: "buy",
            price: 25.73,
            total: 24.96
          },
          {
            date: "2022-12-17 00:04:35",
            action: "buy",
            price: 12.44,
            total: 24.88
          },
          {
            date: "2023-03-10 06:13:42",
            action: "buy",
            price: 14.46,
            total: 49.887
          },
        ]
      }
    ]
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    wallets: [
      {
        name: "WhiteBit",
        address: "whitebit_1",
        transactions: [
          {
            date: "13.11.2022 19:07:39",
            action: "buy",
            price: 1230,
            total: 99.8883,
          },
          {
            date: "29.11.2022 20:25:46",
            action: "transfer",
            wallet: "Trust Wallet (Savings)",
            address: "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
            amount: 0.0796563,
            fee: 0.0015537,
          },
        ]
      },
      {
        name: "Trust Wallet (Savings)",
        address: "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
        transactions: [
          {
            date: "29.11.2022 20:25:46",
            action: "receive",
            amount: 0.0796563,
            fee: 0.0015537,
          },
        ],
      },
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2021",
            action: "buy",
            price: 3955,
            total: 511.777,
          },
          {
            date: "2021",
            action: "buy",
            price: 1888.94,
            total: 99.453,
          },
          {
            date: "2021",
            action: "buy",
            price: 2034.89,
            total: 99.954,
          },
          {
            date: "2021",
            action: "transfer",
            wallet: "Metamask",
            amount: 0.09775855,
            fee: 0.005,
            averagePrice: 3076.45
          },
          {
            date: "2022-05-11 11:26:13",
            action: "buy",
            price: 2340,
            total: 27.14
          },
          {
            date: "2022-06-13 12:07:33",
            action: "buy",
            price: 1200,
            total: 24.96
          },
          {
            date: "2022-06-15 12:12:36",
            action: "buy",
            price: 1020,
            total: 34.99
          },
          {
            date: "2022-06-16 13:20",
            action: "transfer",
            wallet: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
            amount: 0.0134,
            fee: 0.0016,
            averagePrice: 1305.6538482121525,
          },
          {
            date: "2022-06-18 22:42:18",
            action: "buy",
            price: 920,
            total: 35.05
          },
          {
            date: "2022-07-23 06:54:59",
            action: "sell",
            price: 1490,
            filled: 0.0784,
            averagePrice: 1165.4575898543085
          },
          {
            date: "2022-12-17 15:16:20",
            action: "buy",
            price: 1179.93,
            total: 49.911039
          },
          {
            date: "2022-12-17 15:22:39",
            action: "buy",
            price: 1179.49,
            total: 24.887239
          },
        ]
      },
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        name: "Trust Wallet (Main)",
        transactions: [
          {
            action: "receive",
            amount: 0.0134,
          }
        ]
      },
      {
        address: "metamask_1",
        name: "Metamask wallet",
        transactions: [
          {
            date: "2021",
            action: "receive",
            amount: 0.09775855,
          },
          {
            date: "2021",
            action: "spend",
            amount: 0.03568501,
          },
        ]
      },
    ]
  },
  {
    name: "Chainlink",
    symbol: "LINK",
    wallets: [
      {
        name: "WhiteBit",
        address: "whitebit_1",
        transactions: [
          {
            date: "12.11.2022 02:09:53",
            action: "buy",
            price: 6.9871,
            total: 74.901712,
          },
          {
            date: "29.11.2022 20:21:38",
            action: "transfer",
            wallet: "Trust Wallet (Savings)",
            address: "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
            amount: 10.376,
            fee: 0.344,
            // averagePrice: 29.322687921306237
          },
        ]
      },
      {
        name: "Trust Wallet (Savings)",
        address: "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
        transactions: [
          {
            date: "29.11.2022 20:21:38",
            action: "receive",
            amount: 10.376,
            fee: 0.344
          },
          {
            date: "2023-03-10 19:41",
            action: "receive",
            amount: 0.013,
            fee: 0.013
          },
          {
            date: "2023-03-10 19:42",
            action: "receive",
            amount: 20.78827,
            fee: 0.013
          },
        ],
      },
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2021",
            action: "buy",
            price: 37,
            total: 372.59,
          },
          {
            date: "2021",
            action: "buy",
            price: 17.389,
            total: 90.353,
          },
          {
            date: "2021-06-05 23:12",
            action: "transfer",
            wallet: "YouHolder Wallet",
            address: "0xfc0eb51db6222d46b6bcb5de81018298809319c3",
            amount: 10.06969471,
            fee: 0.0069,
            averagePrice: 30.325129406389802
          },
          {
            date: "2021-07-02 15:59",
            action: "transfer",
            wallet: "YouHolder Wallet",
            address: "0xfc0eb51db6222d46b6bcb5de81018298809319c3",
            amount: 5.1882,
            fee: 0.0078,
            averagePrice: 30.325129406389802
          },
          {
            date: "2022-05-12 08:49:21",
            action: "buy",
            price: 5.800,
            total: 24.998
          },
          {
            date: "2022-12-17 19:28:50",
            action: "buy",
            price: 5.933,
            total: 49.95586
          },
          {
            date: "2023-03-10 06:13:21",
            action: "buy",
            price: 6.16,
            total: 49.9576
          },
          {
            date: "2023-03-10 19:41",
            action: "transfer",
            wallet: "Trust Wallet (Savings)",
            address: "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
            amount: 0.013,
            fee: 0.013
          },
          {
            date: "2023-03-10 19:42",
            action: "transfer",
            wallet: "Trust Wallet (Savings)",
            address: "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
            amount: 20.78827,
            fee: 0.013
          },
        ]
      },
      {
        name: "YouHolder Wallet",
        address: "you_holder_1",
        transactions: [
          {
            date: "2021-06-05 23:12",
            action: "receive",
            amount: 10.06969471,
            fee: 0.0069,
            averagePrice: 30.325129406389802
          },
          {
            date: "2021-07-02 15:59",
            action: "receive",
            amount: 5.1882,
            fee: 0.0078,
            averagePrice: 30.325129406389802
          },
        ]
      }
    ]
  },
  {
    name: "THORChain",
    symbol: "RUNE",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-05-11 11:28:18",
            action: "buy",
            price: 4,
            total: 27.2
          },
          {
            date: "2022-05-12 06:07:48",
            action: "sell",
            price: 3.024,
            filled: 6.8,
            averagePrice: 4
          },
        ]
      }
    ]
  },
  {
    name: "Immutable X",
    symbol: "IMX",
    wallets: [
      {
        name: "WhiteBit",
        address: "whitebit_1",
        transactions: [
          {
            date: "12.11.2022 01:46:21",
            action: "buy",
            price: 0.4412,
            total: 49.9500168,
          },
          {
            date: "29.11.2022 20:10:31",
            action: "transfer",
            wallet: "Trust Wallet (Savings)",
            address: "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
            amount: 107.738,
            fee: 5.476,
            // averagePrice: 29.322687921306237
          },
        ]
      },
      {
        name: "Trust Wallet (Savings)",
        address: "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
        transactions: [
          {
            date: "29.11.2022 20:10:31",
            action: "receive",
            amount: 107.738,
            fee: 5.476,
            // averagePrice: 0.01964100237799315,
            // usdFee: 0.1
          },
        ],
      },
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-05-12 06:06:33",
            action: "buy",
            price: 0.788,
            total: 20.858
          },
          {
            date: "2022-05-12 06:06:33",
            action: "sell",
            price: 0.788,
            filled: 26.47,
            // averagePrice: 0.0011858497659332653
          },
        ]
      }
    ]
  },
  {
    name: "Fantom",
    symbol: "FTM",
    wallets: [
      {
        name: "WhiteBit",
        address: "whitebit_1",
        transactions: [
          {
            date: "13.11.2022 19:25:52",
            action: "buy",
            price: 0.181,
            total: 47.9537961,
          },
          {
            date: "29.11.2022 20:13:15",
            action: "transfer",
            wallet: "Trust Wallet (Savings)",
            address: "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
            amount: 259.9381,
            fee: 5,
            // averagePrice: 29.322687921306237
          },
        ]
      },
      {
        name: "Trust Wallet (Savings)",
        address: "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
        transactions: [
          {
            date: "29.11.2022 20:13:15",
            action: "receive",
            amount: 259.9381,
            fee: 5,
            // averagePrice: 0.01964100237799315,
            // usdFee: 0.1
          },
        ],
      },
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-05-12 08:22:40",
            action: "buy",
            price: 0.245,
            total: 24.99
          },
          {
            date: "2022-12-17 19:32:38",
            action: "buy",
            price: 0.202,
            total: 24.846
          },
        ]
      }
    ]
  },
  {
    name: "NEAR Protocol",
    symbol: "NEAR",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-06-12 16:54:05",
            action: "buy",
            price: 3.8,
            total: 27.74
          },
          {
            date: "2022-12-17 00:06:29",
            action: "buy",
            price: 1.488,
            total: 24.9984
          },
        ]
      }
    ]
  },
  {
    name: "JUST",
    symbol: "JST",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-06-13 13:25:29",
            action: "buy",
            price: 0.02948,
            total: 29.99885
          }
        ]
      }
    ]
  },
  {
    name: "REI Network",
    symbol: "REI",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-06-13 13:27:08",
            action: "buy",
            price: 0.0269,
            total: 29.9989
          },
          {
            date: "2022-07-07 10:22:34",
            action: "sell",
            price: 0.0522,
            filled: 557.6,
            averagePrice: 0.0269
          },
        ]
      }
    ]
  },
  {
    name: "Tellor",
    symbol: "TRB",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-06-13 13:27:29",
            action: "buy",
            price: 11.25,
            total: 33.75
          },
          {
            date: "2022-07-18 15:11:42",
            action: "sell",
            price: 20.93,
            filled: 1.5,
            averagePrice: 11.25
          },
        ]
      }
    ]
  },
  {
    name: "Threshold",
    symbol: "T",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-06-13 13:34:14",
            action: "buy",
            price: 0.0359,
            total: 33.9973
          }
        ]
      }
    ]
  },
  {
    name: "Optimism",
    symbol: "OP",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-06-01 12:58:44",
            action: "buy",
            price: 1.6,
            total: 16
          },
          {
            date: "2022-06-01 20:02:27",
            action: "buy",
            price: 1.05,
            total: 10.5
          },
          {
            date: "2022-06-12 10:49:57",
            action: "buy",
            price: 0.666,
            total: 13.000
          },
          {
            date: "2022-06-12 14:19:19",
            action: "buy",
            price: 0.68,
            total: 39.998
          },
          {
            date: "2022-06-13 12:48:00",
            action: "buy",
            price: 0.53,
            total: 25.000
          },
          {
            date: "2022-07-23 06:50:16",
            action: "sell",
            price: 0.83,
            filled: 145.50991907556835,
          }
        ]
      }
    ]
  },
  {
    name: "Terra",
    symbol: "LUNA",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-06-01 14:44:32",
            action: "buy",
            price: 7,
            total: 14
          },
          {
            date: "2022-06-05 04:04:35",
            action: "buy",
            price: 5.1000,
            total: 15.5550
          },
          {
            date: "2022-06-08 21:07:39",
            action: "buy",
            price: 3.05,
            total: 25.01
          }
        ]
      }
    ]
  },
  {
    name: "Luna Classic",
    symbol: "LUNC",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-05-10 15:58:40",
            action: "buy",
            price: 33.54,
            total: 49.6392
          },
          {
            date: "2022-05-11 10:47:23",
            action: "buy",
            price: 5,
            total: 50
          },
          {
            date: "2022-05-11 14:39:45",
            action: "buy",
            price: 2,
            total: 15
          },
          {
            date: "2022-05-11 15:49:57",
            action: "buy",
            price: 1,
            total: 10.21
          },
          {
            date: "2022-05-11 17:28:53",
            action: "buy",
            price: 6,
            total: 219.96
          },
          {
            date: "2022-05-11 17:52:31",
            action: "buy",
            price: 3,
            total: 55.02
          },
          {
            date: "2022-05-11 17:49:13",
            action: "sell",
            price: 4.7568,
            filled: 31.66,
          },
          {
            date: "2022-05-11 18:08:51",
            action: "buy",
            price: 2.5,
            total: 75.325
          },
          {
            date: "2022-05-11 19:42:16",
            action: "buy",
            price: 2.3609,
            total: 37.632746
          },
          {
            date: "2022-05-11 20:26:44",
            action: "buy",
            price: 2,
            total: 37.66
          },
          {
            date: "2022-05-12 06:07:01",
            action: "buy",
            price: 0.5003,
            total: 20.867513
          },
          {
            date: "2022-05-12 06:08:05",
            action: "buy",
            price: 0.5004,
            total: 20.54142
          },
          {
            date: "2022-05-12 07:46:31",
            action: "buy",
            price: 0.3,
            total: 20.511
          },
          {
            date: "2022-05-12 09:51:13",
            action: "buy",
            price: 0.2,
            total: 25.006
          },
          {
            date: "2022-05-12 11:42:30",
            action: "buy",
            price: 0.1,
            total: 25
          },
          {
            date: "2022-05-12 16:37:28",
            action: "buy",
            price: 0.0125,
            total: 50.1509
          },
          {
            date: "2022-05-12 14:48:56",
            action: "buy",
            price: 0.04,
            total: 49.8
          },
          {
            date: "2022-05-13 01:20:55",
            action: "buy",
            price: 0.0025,
            total: 49.9700
          },
          {
            date: "2022-05-13 20:24:56",
            action: "buy",
            price: 0.0001431,
            total: 40.48787114
          },
          {
            date: "2022-05-16 14:50:49",
            action: "buy",
            price: 0.00017777,
            total: 12.13586369
          },
          {
            date: "2022-05-22 19:41:36",
            action: "buy",
            price: 0.00015,
            total: 12.1358625
          },
          {
            date: "2022-05-30 14:12:13",
            action: "sell",
            price: 0.00015082,
            filled: 457995.74194013455,
          },
        ]
      }
    ]
  },
  {
    name: "Polkadot",
    symbol: "DOT",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            action: "buy",
            price: 15.171,
            total: 76.214
          },
          {
            date: "2022-11-18 01:07:52",
            action: "buy",
            price: 5.69,
            total: 24.0118
          },
          {
            date: "2022-12-17 00:10:22",
            action: "buy",
            price: 4.971,
            total: 24.95442
          },
          {
            date: "2022-12-17 15:16:00",
            action: "buy",
            price: 4.684,
            total: 24.96572
          },
          {
            date: "2022-12-17 15:24:41",
            action: "buy",
            price: 4.678,
            total: 24.98052
          },
          {
            date: "2023-03-10 06:00:16",
            action: "buy",
            price: 5.38,
            total: 49.9802
          },
        ]
      }
    ]
  },
  {
    name: "XRP",
    symbol: "XRP",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2021-06-06 09:16",
            action: "buy",
            price: 1.25,
            total: 501.5
          },
          {
            date: "2021-06-06 09:16",
            action: "buy",
            price: 0.6382,
            total: 99.776
          },
          {
            date: "2021-06-06 10:16",
            action: "transfer",
            wallet: "YouHolder Wallet",
            address: "0xfc0eb51db6222d46b6bcb5de81018298809319c3",
            amount: 401.461742,
            fee: 0.25,
          },
          {
            date: "2021-07-02 15:53",
            action: "transfer",
            wallet: "YouHolder Wallet",
            address: "0xfc0eb51db6222d46b6bcb5de81018298809319c3",
            amount: 155.93366,
            fee: 0.25,
          },
          {
            date: "2023-01-08 22:06",
            action: "receive",
            amount: 24.5,
            fee: 0.5,
          },
          {
            date: "2023-01-08 22:08",
            action: "receive",
            amount: 558.021343,
            fee: 0.5,
          },
          {
            date: "2023-01-08 22:20",
            action: "transfer",
            wallet: "Ledger",
            address: "ledger_1",
            amount: 29.8,
            fee: 0.2,
          },
          {
            date: "2023-01-08 22:24",
            action: "transfer",
            wallet: "Ledger",
            address: "ledger_1",
            amount: 552.321343,
            fee: 0.2,
          },
        ]
      },
      {
        name: "YouHolder Wallet",
        address: "you_holder_1",
        transactions: [
          {
            date: "2021-06-06 10:16",
            action: "receive",
            amount: 401.461742,
            fee: 0.25,
          },
          {
            date: "2021-07-02 15:53",
            action: "receive",
            amount: 155.93366,
            fee: 0.25,
          },
          {
            date: "2023-01-08 22:05",
            action: "transfer",
            wallet: "Binance",
            address: "binance_1",
            amount: 24.5,
            fee: 0.5,
          },
          {
            date: "2023-01-08 22:07",
            action: "transfer",
            wallet: "Binance",
            address: "binance_1",
            amount: 558.021343,
            fee: 0.5,
          },
        ]
      },
      {
        name: "Ledger",
        address: "ledger_1",
        transactions: [
          {
            date: "2023-01-08 22:20",
            action: "receive",
            amount: 29.8,
            fee: 0.2,
          },
          {
            date: "2023-01-08 22:24",
            action: "receive",
            amount: 552.321343,
            fee: 0.2,
          },
        ]
      },
    ]
  },
  {
    name: "Internet Computer",
    symbol: "ICP",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2021-05-13 02:26",
            action: "buy",
            price: 361,
            total: 389.88,
          },
          {
            date: "2021-05-13 02:28",
            action: "transfer",
            wallet: "ICP wallet",
            address: "fe462a4435a3ff0950d9b42883f57335e7f9ae043e547721976477a058739c71",
            amount: 1.07862,
            fee: 0.0003,
          },
          {
            date: "2021-05-21 00:10",
            action: "buy",
            price: 127.32,
            total: 147.6912,
          },
          {
            date: "2021-05-21 00:14",
            action: "transfer",
            wallet: "ICP wallet",
            address: "fe462a4435a3ff0950d9b42883f57335e7f9ae043e547721976477a058739c71",
            amount: 1.1597,
            fee: 0.0003,
          },
          {
            date: "2021-07-11 22:05",
            action: "buy",
            price: 40,
            total: 120,
          },
          {
            date: "2021-07-11 22:05",
            action: "transfer",
            wallet: "ICP wallet",
            address: "fe462a4435a3ff0950d9b42883f57335e7f9ae043e547721976477a058739c71",
            amount: 2.9967,
            fee: 0.0003,
          },
          {
            date: "2022-11-10 01:07:00",
            action: "buy",
            price: 3.577,
            total: 24.03744,
          },
          {
            date: "2022-12-17 19:31:45",
            action: "buy",
            price: 3.614,
            total: 49.98162,
          },
          {
            date: "2023-03-10 06:09:17",
            action: "buy",
            price: 4.764,
            total: 49.97436,
          },
          {
            date: "2023-03-10 06:26",
            action: "transfer",
            wallet: "ICP wallet",
            address: "fe462a4435a3ff0950d9b42883f57335e7f9ae043e547721976477a058739c71",
            amount: 31.02599524,
            fee: 0.0003,
          },
        ]
      },
      {
        name: "Internet Computer",
        address: "internet_computer_1",
        transactions: [
          {
            date: "2021-06-06 10:16",
            action: "receive",
            amount: 1.07862,
            fee: 0.0003,
          },
          {
            date: "2021-07-02 15:53",
            action: "receive",
            amount: 1.1597,
            fee: 0.0003,
          },
          {
            date: "2021-07-02 15:53",
            action: "receive",
            amount: 2.9967,
            fee: 0.0003,
          },
          {
            date: "2023-03-10 06:26",
            action: "receive",
            amount: 31.02599524,
            fee: 0.0003,
          },
        ]
      }
    ]
  },
  {
    name: "Compound",
    symbol: "COMP",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2021",
            action: "buy",
            price: 95,
            total: 25,
          },
          {
            date: "2021",
            action: "buy",
            price: 113,
            total: 25,
          },
        ]
      }
    ]
  },
  {
    name: "Polygon",
    symbol: "MATIC",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2021",
            action: "buy",
            price: 1.69556,
            total: 149.887504,
          },
          {
            date: "2023-03-11 11:53",
            action: "transfer",
            wallet: "Trust Wallet (Savings)",
            address: "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
            amount: 9.9,
            fee: 0.1
          },
          {
            date: "2023-03-11 11:55",
            action: "transfer",
            wallet: "Trust Wallet (Savings)",
            address: "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
            amount: 96.8650187,
            fee: 0.1
          },
        ]
      },
      {
        name: "Trust Wallet (Savings)",
        address: "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
        transactions: [
          {
            date: "2023-03-11 11:53",
            action: "receive",
            amount: 9.9,
            fee: 0.1
          },
          {
            date: "2023-03-11 11:55",
            action: "receive",
            amount: 96.8650187,
            fee: 0.1
          },
        ]
      },
    ]
  },
  {
    name: "BNB",
    symbol: "BNB",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          // {
          //   date: "2021",
          //   action: "buy",
          //   price: 450,
          //   total: 501.3,
          // },
          // {
          //   date: "2021",
          //   action: "buy",
          //   price: 416.12,
          //   total: 46.0761376,
          // },
          // {
          //   date: "2021",
          //   action: "buy",
          //   price: 278.21,
          //   total: 99.571359,
          // },
          // {
          //   date: "2021",
          //   action: "buy",
          //   price: 346.56,
          //   total: 199.653398,
          // },
          {
            date: "2021",
            action: "buy",
            price: 392.18,
            total: 114.380591194,
          },
        ]
      },
      {
        name: "Trust Wallet (main)",
        address: "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        transactions: [
          {
            action: "receive",
            amount: 0.17621879,
            // amount: 0.04,
            // averagePrice: 554.94,
            usdFee: 0.6
            // 0.000105 BNB
            // $554.94 / BNB
          }
        ],
      }
    ]
  },
  {
    name: "Tron",
    symbol: "TRX",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2021",
            action: "buy",
            price: 0.05812,
            total: 96.694244,
          },
          {
            date: "2022-11-09 12:00:49",
            action: "sell",
            price: 0.06042,
            filled: 1663.7,
          },
        ]
      }
    ]
  },
  {
    name: "Shiba Inu",
    symbol: "SHIB",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2021",
            action: "buy",
            price: 0.000033,
            total: 168.459357,
          },
        ]
      }
    ]
  },
  {
    name: "VeChain",
    symbol: "VET",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2021",
            action: "buy",
            price: 0.04,
            total: 25,
          },
          {
            date: "2021",
            action: "buy",
            price: 0.045,
            total: 25,
          },
          {
            date: "2022-12-17 19:31:12",
            action: "buy",
            price: 0.01672,
            total: 24.984792,
          },
        ]
      }
    ]
  },
  {
    name: "Filecoin",
    symbol: "FIL",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2021",
            action: "buy",
            price: 71.35,
            total: 149.513925,
          },
          {
            date: "2022-09-15 15:19:29",
            action: "buy",
            price: 5.85,
            total: 130.689,
          },
          {
            date: "2022-12-17 00:09:38",
            action: "buy",
            price: 3.79,
            total: 25.0898,
          },
          {
            date: "2022-12-17 15:19:18",
            action: "buy",
            price: 3.042,
            total: 49.98006,
          },
          {
            date: "2023-03-10 06:09:29",
            action: "buy",
            price: 5.405,
            total: 49.99625,
          },
          {
            date: "2023-03-10 16:32",
            action: "transfer",
            wallet: "Trust Wallet (Savings)",
            address: "f1xl7ztmwdmmqs6i6tfcfhkwn6mix35yiqkf2rdmq",
            amount: 0.009,
            fee: 0.001
          },
          {
            date: "2023-03-10 16:36",
            action: "transfer",
            wallet: "Trust Wallet (Savings)",
            address: "f1xl7ztmwdmmqs6i6tfcfhkwn6mix35yiqkf2rdmq",
            amount: 57.00520819,
            fee: 0.001
          },
        ]
      },
      {
        name: "Trust Wallet (Savings)",
        address: "f1xl7ztmwdmmqs6i6tfcfhkwn6mix35yiqkf2rdmq",
        transactions: [
          {
            date: "2023-03-10 16:32",
            action: "receive",
            amount: 0.009,
            fee: 0.001
          },
          {
            date: "2023-03-10 16:36",
            action: "receive",
            amount: 57.00520819,
            fee: 0.001
          },
        ]
      },
    ]
  },
  {
    name: "Dogecoin",
    symbol: "DOGE",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2021",
            action: "buy",
            price: 0.59908,
            total: 530.006076,
          },
        ]
      }
    ]
  },
  {
    name: "The Graph",
    symbol: "GRT",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-11-22 02:13:46",
            action: "buy",
            price: 0.0544,
            total: 28.1248,
          },
          {
            date: "2022-12-17 19:33:43",
            action: "buy",
            price: 0.057,
            total: 25.023,
          },
        ]
      }
    ]
  },
  {
    name: "Trust Wallet Token",
    symbol: "TWT",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-12-17 15:19:03",
            action: "buy",
            price: 1.6049,
            total: 24.0735,
          },
          {
            date: "2023-03-10 06:16:53",
            action: "buy",
            price: 1.1093,
            total: 25.5139,
          },
        ]
      }
    ]
  },
  {
    name: "Bitcoin Cash",
    symbol: "BCH",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-12-17 00:10:43",
            action: "buy",
            price: 104.3,
            total: 24.9277,
          },
          {
            date: "2022-12-17 15:19:55",
            action: "buy",
            price: 101.6,
            total: 24.9936,
          },
          {
            date: "2023-03-10 06:19:25",
            action: "buy",
            price: 108.7,
            total: 24.8923,
          },
        ]
      }
    ]
  },
  {
    name: "Algorand",
    symbol: "ALGO",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-12-17 00:08:42",
            action: "buy",
            price: 0.2003,
            total: 25.0375,
          },
          {
            date: "2023-03-10 05:51:04",
            action: "buy",
            price: 0.1922,
            total: 49.972,
          },
          {
            date: "2023-03-11 15:35",
            action: "transfer",
            wallet: "Trust Wallet (Savings)",
            address: "LBHRI7C3IY6LBWNGHU7MZR5PJFNQXDMGXKCVPVAB4NEY36ZWU5QKNBMBVE",
            amount: 9.992,
            fee: 0.008
          },
          {
            date: "2023-03-11 15:37",
            action: "transfer",
            wallet: "Trust Wallet (Savings)",
            address: "LBHRI7C3IY6LBWNGHU7MZR5PJFNQXDMGXKCVPVAB4NEY36ZWU5QKNBMBVE",
            amount: 374.992,
            fee: 0.008
          },
        ]
      },
      {
        name: "Trust Wallet (Savings)",
        address: "LBHRI7C3IY6LBWNGHU7MZR5PJFNQXDMGXKCVPVAB4NEY36ZWU5QKNBMBVE",
        transactions: [
          {
            date: "2023-03-11 15:35",
            action: "receive",
            amount: 9.992,
            fee: 0.008
          },
          {
            date: "2023-03-11 15:37",
            action: "receive",
            amount: 374.992,
            fee: 0.008
          },
        ]
      },
    ]
  },
  {
    name: "TetherUS",
    symbol: "USDT",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2023/03/30 11:02",
            action: "buy",
            price: 1,
            total: 620.68,
          },
          {
            date: "2023-03-30 11:10",
            action: "transfer",
            wallet: "Trust Wallet (Main)",
            address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
            amount: 9.71,
            fee: 0.29
          },
          {
            date: "2023-03-30 11:13",
            action: "transfer",
            wallet: "Trust Wallet (Main)",
            address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
            amount: 610.39,
            fee: 0.29
          },
        ]
      },
      {
        name: "Trust Wallet (Main)",
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        transactions: [
          {
            date: "2023-03-30 11:10",
            action: "receive",
            amount: 9.71,
            fee: 0.29
          },
          {
            date: "2023-03-30 11:13",
            action: "receive",
            amount: 610.39,
            fee: 0.29
          },
        ]
      },
    ]
  },
  {
    name: "Arweave",
    symbol: "AR",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2023-03-10 05:52:50",
            action: "buy",
            price: 7.43,
            total: 49.9296,
          },
        ]
      }
    ]
  },
  {
    name: "Aave",
    symbol: "AAVE",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2023-03-10 06:01:25",
            action: "buy",
            price: 67.1,
            total: 49.9895,
          },
        ]
      }
    ]
  },
  {
    name: "Dash",
    symbol: "DASH",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-12-17 00:06:59",
            action: "buy",
            price: 44.87,
            total: 24.99259,
          },
          {
            date: "2023-03-10 06:19:16",
            action: "buy",
            price: 52.68,
            total: 24.97032,
          },
        ]
      }
    ]
  },
  {
    name: "Secret",
    symbol: "SCRT",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2022-11-24 11:58:56",
            action: "buy",
            price: 0.685,
            total: 253.313,
          },
        ]
      }
    ]
  },
  {
    name: "IOTA",
    symbol: "MIOTA",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2021",
            action: "buy",
            price: 0.72,
            total: 54.3846153816,
          },
        ]
      }
    ]
  },
  {
    name: "Stellar",
    symbol: "XLM",
    wallets: [
      {
        name: "Binance",
        address: "binance_1",
        transactions: [
          {
            date: "2021",
            action: "buy",
            price: 0.31224,
            total: 67.1322281301,
          },
          {
            date: "2022-12-17 00:11:57",
            action: "buy",
            price: 0.0793,
            total: 24.9002,
          },
        ]
      }
    ]
  },
  {
    name: "DICKCOIN",
    symbol: "DICK",
    token_address: "0x51F5B377910323d6453697752ADA04AD34847c84",
    wallets: [
      {
        address: "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        quantity: 63377102799.935370247661734404,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00000000015778569,
            usdFee: 2.13
            // 0.003742575 BNB
            // $568.77 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Cockapoo",
    symbol: "CPOO",
    token_address: "0x71809c4ff017ceade03038a8b597ecabb6519918",
    wallets: [
      {
        address: "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        quantity: 359535.784665557613331247,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00002781364,
            usdFee: 1.39
            // 0.002444725 BNB
            // $568.77 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "BurgerBurn",
    symbol: "BRGB",
    token_address: "0xf594AAcC5437A74591C8807B72ACC6c160160015",
    wallets: [
      {
        address: "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        quantity: 1253951311.102784812,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00000000797479129,
            usdFee: 0.72
            // 0.001263905 BNB
            // $568.77 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Crazy Bunny Equity Token",
    symbol: "CBUNNY",
    token_address: "0xAec23008B1098E39c0f8De90Bf7431d185EfE8B3",
    wallets: [
      {
        address: "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        quantity: 3503496.171262995339697452,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00000285429,
            usdFee: 0.55
            // 0.000970345 BNB
            // $568.77 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "ZOO",
    symbol: "ZOO",
    token_address: "0x09e2b83fe5485a7c8beaa5dffd1d324a2b2d5c13",
    wallets: [
      {
        address: "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        quantity: 92360.290415640384376457,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00010827163,
            usdFee: 0.56
            // 0.000987705 BNB
            // $568.77 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Financio Token",
    symbol: "FIN",
    token_address: "0x09E7E61f28e83c7bAC827a0EC9dcD800CE4B4CC1",
    wallets: [
      {
        address: "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        quantity: 87.654983493900739773,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.11408364477,
            usdFee: 0.55
            // 0.000966465 BNB
            // $568.77 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Maggot",
    symbol: "MAGGOT",
    token_address: "0xDBc68862a8880C0c4693A920BD1e461f07F6262e",
    wallets: [
      {
        address: "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        quantity: 23.460879226549608025,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.42624148496,
            usdFee: 1.8
            // 0.003161365 BNB
            // $568.77 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Infomatix",
    symbol: "INFO",
    token_address: "0xdF727040d3997b5D95deE8c661fA96E3c13eE0C9",
    wallets: [
      {
        address: "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        quantity: 281.43150281056626359,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.03553262481,
            usdFee: 0.56
            // 0.000982635 BNB
            // $568.77 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Luminos Mining Protocol",
    symbol: "LUMI",
    token_address: "0x37c9aB94818c995569fd6f23fECCEC54bce900e0",
    wallets: [
      {
        address: "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        quantity: 1182.44995625,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.01848392815,
            usdFee: 0.56
            // 0.000976265 BNB
            // $568.77 / BNB
          },
          {
            action: "buy",
            total: 10,
            price: 0.01558993692,
            usdFee: 0.51
            // 0.000901265 BNB
            // $568.77 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Crypto Classic",
    token_address: "0xf7bcac494fd9530c183dae30db48d45144ff2c77",
    symbol: "CRC",
    wallets: [
      {
        address: "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        quantity: 20.124567748776453086,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.49690508262,
            usdFee: 0.6
            // 0.00105688 BNB
            // $568.77 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "GodShiba TOKEN",
    token_address: "0xE38928cd467AD7347465048b3637893124187d02",
    symbol: "GSHIB",
    wallets: [
      {
        address: "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        quantity: 2250.132904231290535026,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00444418193,
            usdFee: 1.66
            // 0.00292372 BNB
            // $568.77 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Shibu Life Token",
    token_address: "0x2690A474c68f4313603816E3Cc6576A74b56944f",
    symbol: "SHIBU",
    wallets: [
      {
        address: "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        quantity: 52227390.151243922633815512,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.000000191470414,
            usdFee: 0.55
            // 0.000970185 BNB
            // $568.77 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Wolverine",
    token_address: "0xBe6dE6b614b079236839404440E3e8867B5d6751",
    symbol: "WLVR",
    wallets: [
      {
        address: "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        quantity: 2190725.054275959,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00000456469,
            usdFee: 1.12
            // 0.001970995 BNB
            // $568.77 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "ApeLab",
    symbol: "Ape",
    token_address: "0x54283eb77CC33182c06B311248c48C73AdF4E2eF",
    wallets: [
      {
        address: "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        quantity: 2849823.401379874039144736,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00000350898,
            usdFee: 0.65
            // 0.001145845 BNB
            // $568.77 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Secured Ship",
    symbol: "SHIP",
    token_address: "0xc0a696bbb66352e5b88624f1d1b8909c34dc4e4a",
    wallets: [
      {
        address: "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        quantity: 399694919.0447971,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.0000000250190821,
            usdFee: 1.15
            // 0.00201753 BNB
            // $568.77 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Baby Squid Game",
    symbol: "BSG",
    token_address: "0xe8993eA85B9AA3E864fEf4F7685966c485546161",
    wallets: [
      {
        address: "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        quantity: 5350760.536844553,
        transactions: [
          {
            action: "buy",
            total: 23.2,
            price: 0.00000433583,
            usdFee: 0.87
            // 0.00153705 BNB
            // $568.77 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "SafeDrive",
    symbol: "Drive",
    token_address: "0xa321fC1171EB85498faD47D3d127368eBa70265C",
    wallets: [
      {
        address: "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        quantity: 26988283.761747927,
        transactions: [
          {
            action: "buy",
            total: 20,
            price: 0.000000741062313,
            usdFee: 0.81
            // 0.00129977 BNB
            // $620.69 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "WANAMOON",
    symbol: "MOON",
    token_address: "0xc21490565Eaf5637D36508683cEb1003F8dCfC65",
    wallets: [
      {
        address: "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        quantity: 352778.1301119,
        transactions: [
          {
            action: "buy",
            total: 19.831460424648763213,
            price: 0.0000562151,
            usdFee: 1.21
            // 0.00231307 BNB
            // $523.85 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Promise",
    symbol: "PROMISE",
    token_address: "0xcbcCf14B051947BDcd1E20b77015208a1AD5EA25",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 56230158.162561916,
        transactions: [
          {
            action: "buy",
            total: 3.3424,
            price: 0.000000059441412,
            usdFee: 0.32
            // 0.000965885 BNB
            // $334.24 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "CleanOcean",
    symbol: "CLEANOCEAN",
    token_address: "0x579F11C75Eb4e47F5290122e87CA411644aDCD97",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 648765841.32045802,
        transactions: [
          {
            action: "buy",
            total: 3.3911,
            price: 0.00000000522700146,
            usdFee: 0.33
            // 0.00096612 BNB
            // $339.11 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "NFTBOOKS",
    symbol: "NFTBS",
    token_address: "0x3279510E89600ee1767a037DBD0aD49c974063AE",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 1657186019800.612191809,
        transactions: [
          {
            action: "buy",
            total: 3.0175,
            price: 0.0000000000018208577,
            usdFee: 0.29
            // 0.00096618 BNB
            // $301.75 / BNB
          },
          {
            action: "sell",
            filled: 882618000000,
            price: 0.000000000097544905,
            averagePrice: 0.0000000000018208577,
            // total: 86.094888736462548751,
            usdFee: 1.08
            // 0.00251377 BNB
            // $430.64 / BNB
          },
          {
            action: "sell",
            filled: 610091853244.33851251,
            price: 0.00000000038243422,
            averagePrice: 0.0000000000018208577,
            // total: 233.32,
            usdFee: 2.2
            // 0.003459545 BNB
          },
        ],
      }
    ]
  },
  {
    name: "Shrew",
    symbol: "SHREW",
    token_address: "0x0C13970D3c5db20d48446a24e29fB9A77cd60De4",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 20998.596443753875274356,
        transactions: [
          {
            action: "buy",
            total: 3.0175,
            price: 0.00014370008,
            usdFee: 0.20
            // 0.00067193 BNB
            // $301.75 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Artex Token",
    symbol: "ARTEX",
    token_address: "0xf1B032e7225D1c9068Ce317A956a0e8007591bA0",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        transactions: [
          {
            action: "buy",
            total: 15.144,
            price: 0.02081802616,
            usdFee: 0.2
            // 0.00067136 BNB
            // $302.88 / BNB
          },
          {
            action: "buy",
            total: 15.144,
            price: 0.0198315787,
            usdFee: 0.18
            // 0.00059636 BNB
            // $302.88 / BNB
          },
          {
            action: "buy",
            total: 15.144,
            price: 0.01829936286,
            usdFee: 0.18
            // 0.00059636 BNB
            // $302.88 / BNB
          },
          {
            action: "buy",
            total: 15.144,
            price: 0.01813792121,
            usdFee: 0.18
            // 0.00059636 BNB
            // $302.88 / BNB
          },
          {
            action: "buy",
            total: 18.48,
            price: 0.02120563505,
            usdFee: 0.18
            // 0.00059636 BNB
            // $302.88 / BNB
          },
          {
            action: "sell",
            filled: 1082.932955888185813003,
            price: 0.03693672796,
            averagePrice: 0.01964100237799315,
            // total: 40,
            usdFee: 0.46
            // 0.00103104 BNB
            // $448.60 / BNB
          },
          {
            action: "transfer",
            wallet: "0x02c18f708358887cb4993a9608e37216b71fe2a2",
            amount: 2942.1161978443474,
            // fee: 0.005,
            averagePrice: 0.01964100237799315,
            usdFee: 0.1
            // 0.000180805 BNB
            // $554.94 / BNB
          },
        ]
      },
      {
        address: "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        transactions: [
          {
            action: "receive",
            amount: 2942.116196874578001818,
            // fee: 0.005,
            averagePrice: 0.01964100237799315,
            usdFee: 0.1
            // 0.000180805 BNB
            // $554.94 / BNB
          },
        ]
      }
    ]
  },
  {
    name: "Relay Token",
    symbol: "RELAY",
    token_address: "0x5d843fa9495d23de997c394296ac7b4d721e841c",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 9.472218412487404001,
        transactions: [
          {
            action: "buy",
            total: 30.03,
            price: 3.17032385575,
            usdFee: 0.3
            // 0.00067622 BNB
            // $448.92 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "SHIWBAWITCH TOKEN",
    symbol: "SHIBAWITCH",
    token_address: "0x0484fBCa58aD880F2232b9ef7BC1d23206236bbd",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 14771.178470696,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00067699405,
            usdFee: 1.82
            // 0.00406417 BNB
            // $448.60 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Cpos Cloud Payment",
    symbol: "CPOS",
    token_address: "0xc0DC5aDfaE1DadA9111F376810d772CABD9B6f13",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 354.601937717,
        transactions: [
          {
            action: "buy",
            total: 100,
            price: 0.61061383626,
            usdFee: 0.49
            // 0.000970675 BNB
            // $501.47 / BNB
          },
          {
            action: "buy",
            total: 46.77206513,
            price: 0.24509510402,
            usdFee: 0.39
            // 0.000820735 BNB
            // $471.13 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "MetaWars",
    symbol: "WARS",
    token_address: "0x50e756a22ff5cEE3559D18B9D9576bc38F09Fa7c",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 48.288906270182293188,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.20708690199,
            usdFee: 0.41
            // 0.000906115 BNB
            // $448.60 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "BrandPad",
    symbol: "BRAND",
    token_address: "0x4d993ec7b44276615bB2F6F20361AB34FbF0ec49",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 188.939216633,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.05292707452,
            usdFee: 0.6
            // 0.001343375 BNB
            // $448.60 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "RemeX",
    symbol: "RMX",
    token_address: "0x893e258ee221c9c8Da50d01108d1Ac47cFC3Dc9a",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 4313845464.073063385,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00000000231811735,
            usdFee: 0.67
            // 0.001488865 BNB
            // $448.60 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "BidenOneTrillionCoin",
    symbol: "B1TC",
    token_address: "0x90316dddE4E2cC292F11c85e427Cb94343ec1508",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 8113919.138624994,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00000123245,
            usdFee: 0.6
            // 0.001345875 BNB
            // $448.60 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Stakd Token",
    symbol: "STKD",
    token_address: "0x578B2A12D2c661cD4Abfb8E98670acD7B2323bc7",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 1831226.089245902668628699,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00000546082,
            usdFee: 0.89
            // 0.001979445 BNB
            // $448.60 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Coin Sack",
    symbol: "CS",
    token_address: "0x125Ce3f13950C5fA94397927F88C352FdED680Ad",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 4190970.77,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00000238608,
            usdFee: 0.73
            // 0.001621085 BNB
            // $448.60 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Coinracer",
    symbol: "CRACE",
    token_address: "0xFBb4F2f342c6DaaB63Ab85b0226716C4D1e26F36",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 231.888672529116172009,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.04312414181,
            usdFee: 0.5
            // 0.00111635 BNB
            // $448.60 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "MOONGAME",
    symbol: "MGT",
    token_address: "0x47CBd8454C986a15C16d285bD228D214F662Dcf3",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 1153.637572791218119363,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00866823362,
            usdFee: 1.94
            // 0.004328445 BNB
            // $448.60 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Hoodler.io",
    symbol: "HOOD",
    token_address: "0x02df6cF91C519db4aC254216A8Ed3A17aeCFaED7",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 558.293626098,
        transactions: [
          {
            action: "buy",
            total: 9.16,
            price: 0.01640713698,
            usdFee: 0.54
            // 0.00121146 BNB
            // $448.60 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Elonomics",
    symbol: "$ELONOM",
    token_address: "0xd3ecC6a4ce1a9fAEC1AA5E30B55f8a1a4b84F938",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 10.2534,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.97528624651,
            usdFee: 1.97
            // 0.004398045 BNB
            // $448.60 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Sulgecoin",
    symbol: "SUG",
    token_address: "0x668A5163991662Ca5098B2C1357CB73BBCb88a4f",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 10.206202204045400413,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.97979638263,
            usdFee: 0.44
            // 0.00097115 BNB
            // $448.60 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "PicArtNFT Token",
    symbol: "PANFT",
    token_address: "0xa4320b3a595D07D79c6F7ccf3DF825A8d0030a46",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 2113.072252004321461214,
        transactions: [
          {
            action: "buy",
            total: 20,
            price: 0.00946489169,
            usdFee: 0.41
            // 0.000914775 BNB
            // $448.60 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "GreenMoonZilla",
    symbol: "GrmZilla",
    token_address: "0xA1Fd7Ec67A2997b6Cd440f90085925459eD03f1a",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 2035297431.317,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.0000000049132868,
            usdFee: 2.06
            // 0.00458388 BNB
            // $448.60 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "BooCake",
    symbol: "BooCake",
    token_address: "0xB2c4cBa4C5bd8BB7078754B7736EE5ed5D835De9",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 1292985.436030128427817601,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00000773403,
            usdFee: 1.81
            // 0.004036795 BNB
            // $448.60 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Gummy Bull Token",
    symbol: "GUMMY",
    token_address: "0x10D3e0C38c286a04aee44d9B01CaC916B56Ee05A",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 191.007056084781652774,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.05235408683,
            usdFee: 0.51
            // 0.00113307 BNB
            // $448.60 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Doge Army Token",
    symbol: "DGAT",
    token_address: "0x96E3BD1915483eD6E6569e908a0F6F49434557eD",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 13455827.58629105154460149,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.000000743172424,
            usdFee: 4.58
            // 0.01019924 BNB
            // $448.60 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "BabyFlokiDoge",
    symbol: "BABYFD",
    token_address: "0x747c4ce9622ea750ea8048423b38a746b096c8e8",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 28280376955.045413503,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00000000035360208,
            usdFee: 0.7
            // 0.001559775 BNB
            // $448.60 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "CakeZilla",
    symbol: "CakeZilla",
    token_address: "0x443b3143d284e856389eFdB929903f773D993E2e",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 632611.001563919794454382,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.0000158075,
            usdFee: 1.24
            // 0.002758525 BNB
            // $448.60 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Pixl Coin",
    symbol: "PXLC",
    token_address: "0x72d2946094E6E57c2faDe4964777A9af2B7A51F9",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 2078.617065718,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00481089093,
            usdFee: 0.76
            // 0.001550255 BNB
            // $492.44 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "CoinMooner",
    symbol: "MOONER",
    token_address: "0x34E942859469c9dB9C22F4eAF866E2c2401BB795",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 216.393326822919725815,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.04621214594,
            usdFee: 1.06
            // 0.00215675 BNB
            // $492.44 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "MetaDubai Coin",
    symbol: "MDB",
    token_address: "0x033Fc4eC65a22D29A87631e5feD9616A0d343f42",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 688817.893901136310600743,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00001451762,
            usdFee: 1.71
            // 0.00346673 BNB
            // $492.44 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Doge Floki Coin",
    symbol: "DOFI",
    token_address: "0xF9d6DDF44016953dBf7aB135A0F64d7A41870EDE",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 327390801166.245100996,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 3.0544536e-11,
            usdFee: 0.59
            // 0.001203275 BNB
            // $492.44 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "DVX",
    symbol: "DRIVENx",
    token_address: "0x6db3972c6a5535708e7A4F7Ad52F24d178D9A93e",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 1049.260298182618785929,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00953052356,
            usdFee: 1.86
            // 0.003781665 BNB
            // $492.44 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "CashCow",
    symbol: "COW",
    token_address: "0x8B6fA031c7D2E60fbFe4E663EC1B8f37Df1ba483",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 1.99976241,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 5.00059404557,
            usdFee: 0.67
            // 0.00136007 BNB
            // $492.44 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "LovePot Token",
    symbol: "LOVE",
    token_address: "0xd631d33F2c3f38d9ABDaE08ebC0B69fA636E8ec2",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 247.427937789989050193,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.04041580788,
            usdFee: 0.5
            // 0.00101974 BNB
            // $492.44 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "NFans",
    symbol: "NFS",
    token_address: "0x6eE002Ce31Ce4E52211EEfb2d3986082663D5F60",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 26.682695076716931093,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.37477473588,
            usdFee: 0.33
            // 0.000678835 BNB
            // $492.44 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "DarkMAGICK",
    symbol: "DMGK",
    token_address: "0x6F89660fEf8B6a03a41E5F3d0306645BE2469eFE",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 296.385839078332817096,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.03373980359,
            usdFee: 1.39
            // 0.00282704 BNB
            // $492.44 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Waifer",
    symbol: "Waifer",
    token_address: "0xEA3d8c4fA272A81ED2a18dFf43A98cebD3847C02",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 665639346.916238033,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 1.50231504e-8,
            usdFee: 0.73
            // 0.00149202 BNB
            // $492.44 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Omni Consumer Protocols",
    symbol: "OCP",
    token_address: "0x3C70260eEe0a2bFc4b375feB810325801f289fBd",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 108.639713505161324044,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.09204737086,
            usdFee: 0.51
            // 0.001027135 BNB
            // $492.44 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Floki Elon",
    symbol: "FlokiElon",
    token_address: "0xc4a54699d24C5C130cf866974181E41e22bb3b07",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 70323408641.869453921,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 1.4220016e-10,
            usdFee: 0.62
            // 0.001263695 BNB
            // $492.44 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Wanaka Wai Token",
    symbol: "WAI",
    token_address: "0x934C9198582Bf2631128c5D4b051aacEF9a6224F",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 73.828676119926640549,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.13544872433,
            usdFee: 0.44
            // 0.00089226 BNB
            // $492.44 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Altbase",
    symbol: "ALTB",
    token_address: "0x9B3a01F8b4aBD2E2a74597B21b7C269ABf4E9f41",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 695.806065321432749531,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.01437182068,
            usdFee: 0.6
            // 0.001213445 BNB
            // $492.44 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Smarty Pay",
    symbol: "SPY",
    token_address: "0x17fd3cAa66502C6F1CbD5600D8448f3aF8f2ABA1",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 31,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.32258064516,
            usdFee: 0.48
            // 0.000969415 BNB
            // $492.44 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Infinity Game NFT",
    symbol: "IGN",
    token_address: "0xf071AF4Da0D1c4f9BfD624C2C5eced7C5fe52573",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 1410.009806052371561651,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00709214925,
            usdFee: 0.56
            // 0.001132465 BNB
            // $492.44 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "BabyDogeZilla",
    symbol: "BabyDogeZilla",
    token_address: "0x0fbc08905c1d683Cf7530bb2a70Bb0BDE231E5B9",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 41634643441125100.709011623,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 2.401846e-16,
            usdFee: 0.88
            // 0.00166483 BNB
            // $530.21 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Stabledoc Token",
    symbol: "SDT",
    token_address: "0x543C7eBb52D56985f63F246A5b3558AFF79037d7",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 502.640657812675752412,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.0198949286,
            usdFee: 0.57
            // 0.00108217 BNB
            // $530.21 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Seadog Metaverse",
    symbol: "SEADOG",
    token_address: "0xd827036B0173F204C57b26532a339B57D4d5AEA6",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 18.979119043,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.0198949286,
            usdFee: 0.48
            // 0.00090291 BNB
            // $530.21 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "ShibaZilla",
    symbol: "SHIBAZ",
    token_address: "0xD00A7EdD637B776eC5a6461F5e7ac055F14a0C1E",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 2906358984.7007,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 3.44073119e-9,
            usdFee: 2.32
            // 0.004378665 BNB
            // $530.21 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "HELLMOON",
    symbol: "HMOON",
    token_address: "0x46328f831cFF23F44D65fa5e53a7217a660554Aa",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 2756608.883801,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00000362764,
            usdFee: 0.51
            // 0.000960395 BNB
            // $530.21 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Godzilla",
    symbol: "GODZ",
    token_address: "0xDa4714fEE90Ad7DE50bC185ccD06b175D23906c1",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 332965837.350018792,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 3.00331111e-8,
            usdFee: 0.67
            // 0.00126408 BNB
            // $530.21 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Monster Grand Prix Token",
    symbol: "MGPX",
    token_address: "0xcBd7142E42666132abe1F4C57996b2D5e8b0C9E2",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 15.20108618449659921,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.58135319363,
            usdFee: 0.55
            // 0.00103577 BNB
            // $530.21 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "MemeCoin Factory",
    symbol: "FACTORY",
    token_address: "0x6E1f76017024BaF9dc52a796dC4e5Ae3110005c2",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 37079.0372322919516602,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00026969416,
            usdFee: 1.52
            // 0.002755945 BNB
            // $530.21 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Shibosu",
    symbol: "Shibosu",
    token_address: "0x5dfb6437489235fe08a8F706Bb261938f4E2D849",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 49512035.880431173,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 2.01971093e-7,
            usdFee: 1.9
            // 0.00344606 BNB
            // $530.21 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "PulseDoge",
    symbol: "PulseDoge",
    token_address: "0xD4d55B811d9eDe2aDce61a98d67d7f91bFfcE495",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 252.130626311006778727,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.03966198056,
            usdFee: 0.54
            // 0.00097001 BNB
            // $551.71 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Booster",
    symbol: "BOOST",
    token_address: "0x773b532126b9F307665942b0fa4cDa0540CeDb71",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 1485392465.72423602659140517,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 6.7322275e-9,
            usdFee: 1.34
            // 0.002430075 BNB
            // $551.71 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Baby White Hamster",
    symbol: "$BWH",
    token_address: "0x4ed2bBfc2fC7b0B7400D8D12248649045e82c708",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 9773.707027294,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00102315323,
            usdFee: 3.04
            // 0.005508595 BNB
            // $551.71 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "NFT Royal Token",
    symbol: "NRT",
    token_address: "0x1B2F67679798C764f2C0c69DFB6bDa8b30a094cf",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 9.932832719562097125,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 1.00676214755,
            usdFee: 0.54
            // 0.00097045 BNB
            // $551.71 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Tiny Titans V3",
    symbol: "TITS",
    token_address: "0x2a5eB92f6a410AC0BB38D92C13DA934bD68EF24E",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 45.376228111149849499,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.22037971017,
            usdFee: 0.54
            // 0.00097045 BNB
            // $551.71 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Crypto Gaming United",
    symbol: "CGU",
    token_address: "0x849a226f327b89e3133d9930d927f9eb9346f8c9",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 4.81845431,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 2.07535432665,
            usdFee: 0.38
            // 0.00068318 BNB
            // $551.71 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "POLYX",
    symbol: "PXT",
    token_address: "0x6B226E4F3eF5708D496cD1b9E582ea090F3fFf70",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 3292.795447794854806065,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00303693325,
            usdFee: 1.59
            // 0.002878875 BNB
            // $551.71 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Ninja Fantasy Token",
    symbol: "NFS",
    token_address: "0x64815277c6CAF24c1C2B55B11c78EF393237455C",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 5.538470770820073413,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 1.80555254578,
            usdFee: 0.54
            // 0.00097035 BNB
            // $551.71 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "FLOKACHU TOKEN",
    symbol: "FLOKACHU",
    token_address: "0x8167B85a10cE3bF274C464362ae9b2D411dBa447",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 26138272.551003847,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 3.82580753e-7,
            usdFee: 2.22
            // 0.004017665 BNB
            // $551.71 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Shibanomi",
    symbol: "SHIO",
    token_address: "0x0C251e67d41Efc33a9d3264a5492F63f743CA87c",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 630926.38380827,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.0000158497,
            usdFee: 0.54
            // 0.00096983 BNB
            // $551.71 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Mirai",
    symbol: "MIRAI",
    token_address: "0xE74C273ab62169656df1Dd146F40e26Baef5B057",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 424813.979164583209580673,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00002353971,
            usdFee: 1.03
            // 0.001864805 BNB
            // $551.71 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "STEMX",
    symbol: "STEMX",
    token_address: "0x26734ADd0650719eA29087fe5CC0AaB81b4f237D",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.0471159133,
            usdFee: 0.53
            // 0.000966315 BNB
            // $551.71 / BNB
          },
          {
            action: "transfer",
            wallet: "0x02c18f708358887cb4993a9608e37216b71fe2a2",
            amount: 212.242516372913,
            // fee: 0.005,
            averagePrice: 0.0471159133,
            usdFee: 0.1
            // 0.000180385 BNB
            // $554.94 / BNB
          },
        ],
      },
      {
        address: "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        transactions: [
          {
            action: "receive",
            amount: 212.242516372913,
            averagePrice: 0.0471159133,
            usdFee: 0.1
            // fee: 0.005,
            // 0.000180805 BNB
            // $554.94 / BNB
          },
        ]
      }
    ]
  },
  {
    name: "Disco Burn Token",
    symbol: "DBT",
    token_address: "0x4A251d4fDcbbbc0A3d6Aa44F14B96480C4933C9C",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 607.2131404,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.0164686818,
            usdFee: 0.7
            // 0.00125999 BNB
            // $554.94 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "BFK WARZONE",
    symbol: "BFK",
    token_address: "0xEd44623b06616BCceC876617c124F5461Bd5f79B",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 3118.225729222,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00320695192,
            usdFee: 0.82
            // 0.001477205 BNB
            // $554.94 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Meta Floki",
    symbol: "MFLOKI",
    token_address: "0x1931461C770509cC20ACA503D3c5637e7B6C5220",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 454328.677263866,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00002201049,
            usdFee: 2.39
            // 0.004298335 BNB
            // $554.94 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "UltraChad",
    symbol: "uCHAD",
    token_address: "0x17e7668dBcAae71b8965cd44785D070BD4e129cf",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 26037462683.189963769,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 3.84062e-10,
            usdFee: 0.7
            // 0.00126437 BNB
            // $554.94 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Sea Token",
    symbol: "SEA",
    token_address: "0x5B31d474Dcadc1c2A1DFc7D4562b2268B0feea43",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 29.07316976402120216,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.34395974299,
            usdFee: 1.31
            // 0.00235294 BNB
            // $554.94 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "GamingDoge",
    symbol: "GamingDoge",
    token_address: "0x536627083e216C3Cf4476ec504eb51Bbd47cA4ac",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 130486948998.235220427,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 7.6636017e-11,
            usdFee: 0.74
            // 0.00132665 BNB
            // $554.94 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Otium",
    symbol: "OTIUM",
    token_address: "0x56A02228CE17DBBbc809fe2262B36Dd99f28E824",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 4477.223290263162416286,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.0022335272,
            usdFee: 1.46
            // 0.002639345 BNB
            // $554.94 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Leafty",
    symbol: "LEAFTY",
    token_address: "0x04A65456316639941Ba013Fb8F829625698ADF72",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 724.751624109,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.01379783041,
            usdFee: 2.34
            // 0.004209805 BNB
            // $554.94 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "No FUD Token",
    symbol: "NOFUD",
    token_address: "0xCbadf5a1e9fd5936C920006d32F228116875bDc4",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 4256.8769,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00234914004,
            usdFee: 2.52
            // 0.00454511 BNB
            // $554.94 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "LlamaSwap Token",
    symbol: "LAMA",
    token_address: "0x0FC013E24AE732fcEc9Eb6BF8CAE12782a56bE7E",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 72.033781201512804492,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.13882375509,
            usdFee: 0.57
            // 0.001028035 BNB
            // $554.94 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Sadbaby",
    symbol: "SDBY",
    token_address: "0x3AD405ef7AeA80CCb41beEf0a74510e18Feef190",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 276974.785966127,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00003610436,
            usdFee: 0.76
            // 0.001372385 BNB
            // $554.94 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Boom Shiba",
    symbol: "BOOMSHIBA",
    token_address: "0x5B5e0dFc9215b4a09139FB5960Da1376c416C375",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 312875.985534545078741106,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00003196154,
            usdFee: 1.99
            // 0.00359485 BNB
            // $554.94 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Meta Cat",
    symbol: "MCAT",
    token_address: "0x0EaD9d6Bda8408cC34e938Ea35559Db738A7c76a",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 2007054.740374584 + 115537483.67,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00000498242,
            usdFee: 0.75
            // 0.001357655 BNB
            // $554.94 / BNB
          },
          {
            action: "buy",
            price: 0.000000173103995,
            total: 20,
            usdFee: 1.03
            // 0.001036665 BNB
            // $559.50 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Boorio",
    symbol: "ORIO",
    token_address: "0xa30BAba694b8Fc3524C46edC5af295F55381dc60",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 2160611.798127315739346568,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00000462831,
            usdFee: 0.66
            // 0.00118995 BNB
            // $554.94 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Corsac Token",
    symbol: "CSCT",
    token_address: "0x63aC1962FF47921Cbf66F444b907F8aB93da4F08",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 212881492.669009855,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 4.69744921e-8,
            usdFee: 2.37
            // 0.004268705 BNB
            // $554.94 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "TaiChi",
    symbol: "TAC",
    token_address: "0xe49bfC53A195a62D78A941a1967d7B0f83a47C14",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 0.020388803,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 490.465281361,
            usdFee: 0.57
            // 0.00102797 BNB
            // $554.94 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "BabyXape",
    symbol: "BABYX",
    token_address: "0x234003FFa399E8bc53236AC777F4C781B10D1344",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 590751.413725701,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00001692759,
            usdFee: 2.37
            // 0.00426578 BNB
            // $554.94 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Justfarm",
    symbol: "JFM",
    token_address: "0x221d20Fe8996b49590513E5b5b8f9d8b0024Dc40",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 530.427440002,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.03769950935,
            usdFee: 0.54
            // 0.00097743 BNB
            // $554.94 / BNB
          },
          {
            action: "buy",
            total: 10,
            price: 0.03771137246,
            usdFee: 0.5
            // 0.00090243 BNB
            // $554.94 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "CardanoEvo",
    symbol: "cEvo",
    token_address: "0xc23997371bd83de427b41DAbE11846C87696f40a",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 840442.691469441110894866,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00001189849,
            usdFee: 2.02
            // 0.00364844 BNB
            // $554.94 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Sakura Neko",
    symbol: "NEKO",
    token_address: "0x2c5f1769B819B5e70AA7106c989D38Ad71ba2546",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 1253545.640031472,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00000797737,
            usdFee: 0.71
            // 0.00127728 BNB
            // $554.94 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Shib Army",
    symbol: "SHIBARMY",
    token_address: "0x940230b6b7ef1979a28F32196A8e3439C645BA49",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 374329451.124854929742517054,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 2.67144356e-8,
            usdFee: 1.08
            // 0.0019387 BNB
            // $554.94 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Nowlage Coin",
    symbol: "NAC",
    token_address: "0xe198e8Fe1aaB441E54d9572E2402D7B132ccB15a",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 217.182622535455001052,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.0460441995,
            usdFee: 0.54
            // 0.00097521 BNB
            // $554.94 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "SymBULL",
    symbol: "SYMBULL",
    token_address: "0xA176fa55bef56D18ab671251957aCB0Db630539b",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 25779.368403286,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00038790709,
            usdFee: 2.31
            // 0.00416931 BNB
            // $554.94 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "ForeverBNB",
    symbol: "FBNB",
    token_address: "0x4B7bF20baaE7F04AbEa55B49c0fFBC31758A05a4",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 2226974165.06,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 2.99210523e-8,
            usdFee: 2.91
            // 0.005251975 BNB
            // $554.94 / BNB
          },
          {
            action: "buy",
            total: 10,
            price: 5.28328632e-9,
            usdFee: 2.71
            // 0.004882235 BNB
            // $554.94 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "SatoShiba",
    symbol: "SATO",
    token_address: "0x7d1883e8e57c296A254e90Cd859DF5E3686E00EA",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 73.969025369,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.13519172315,
            usdFee: 0.99
            // 0.001780985 BNB
            // $554.94 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "RottenFloki",
    symbol: "Rotten",
    token_address: "0x7f976fCE4Ff9f5Fa3ED76609C5Cb4d406399e32D",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 4293.488549282834348224,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00232910834,
            usdFee: 0.69
            // 0.001243565 BNB
            // $554.94 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Lavabird",
    symbol: "LVBD",
    token_address: "0x2A968F49FB48A3d792Ee8A0663E042B69A077578",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 2016358.183137866,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00000495943,
            usdFee: 0.7
            // 0.0012569 BNB
            // $554.94 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Leon Token",
    symbol: "LEON",
    token_address: "0x27E873bee690C8E161813DE3566E9E18a64b0381",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 203.537896628388775889,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.04913089977,
            usdFee: 0.54
            // 0.00097011 BNB
            // $554.94 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Shibarmy",
    symbol: "Shibarmy",
    token_address: "0x1224Cabc48E750a38A85f040B48C33925B61a765",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 488202.543703151,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.0000204833,
            usdFee: 0.96
            // 0.00173635 BNB
            // $554.94 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Afrostar",
    symbol: "AFRO",
    token_address: "0x2F4e9c97aAFFD67D98A640062d90e355B4a1C539",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 131780180.646918105,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 7.58839451e-8,
            usdFee: 0.86
            // 0.00154885 BNB
            // $554.94 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "MEALS",
    symbol: "MEALS",
    token_address: "0x1C8f62567AE953e1081FD129a5024359CE3aD508",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 501083.657906294,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00001995674,
            usdFee: 2.38
            // 0.004281795 BNB
            // $554.94 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "BuffedShiba",
    symbol: "BSHIB",
    token_address: "0xD8F61cdECA41dEF1a7923F308a042F678109f54B",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 134663062.155598265246918809,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 7.42594134e-8,
            usdFee: 0.64
            // 0.001154685 BNB
            // $554.94 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "CZFarm",
    symbol: "CZF",
    token_address: "0x7c1608C004F20c3520f70b924E2BfeF092dA0043",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 1414770.93232931965480533,
        transactions: [
          {
            action: "buy",
            total: 11,
            price: 0.00000777511,
            usdFee: 0.58
            // 0.001036665 BNB
            // $559.50 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "UnderMineGold",
    symbol: "UMG",
    token_address: "0xA73505453F58E367c80F16685079dAD6f4EA6b18",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 65793.25,
        transactions: [
          {
            action: "buy",
            price: 0.00030398252,
            total: 20,
            usdFee: 0.61
            // 0.001036665 BNB
            // $559.50 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "YTizer",
    symbol: "YTZ",
    token_address: "0x51E5dCF44f8eb51dCd44CDc568f7c29e8557f560",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 18012.14,
        transactions: [
          {
            action: "buy",
            price: 0.00111036205,
            total: 20,
            usdFee: 0.57
            // 0.001036665 BNB
            // $559.50 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "GreenTrust",
    symbol: "GNT",
    token_address: "0xF750A26EB0aCf95556e8529E72eD530f3b60f348",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 654547668.29,
        transactions: [
          {
            action: "buy",
            price: 0.0000000305554522,
            total: 20,
            usdFee: 0.61
            // 0.001036665 BNB
            // $559.50 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "CryptoRun Token",
    symbol: "CRN",
    token_address: "0xBd16c4343fB5769A71983f3e131df9B1491c2314",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 22076.78356423,
        transactions: [
          {
            action: "buy",
            price: 0.00090592906,
            total: 20,
            usdFee: 0.63
            // 0.001036665 BNB
            // $559.50 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Hippie Inu",
    symbol: "HIPPIE",
    token_address: "0x3b8c8472216240a5593Fd2D6266F29e90E22f490",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 164064497.53150743,
        transactions: [
          {
            action: "buy",
            price: 0.0000000914274583,
            total: 15,
            usdFee: 0.77
            // 0.001036665 BNB
            // $559.50 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "CHEEMSINU",
    symbol: "$CINU",
    token_address: "0xdFE6891ce8E5a5c7Cf54fFdE406A6C2C54145F71",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 18812427843608600.96,
        transactions: [
          {
            action: "buy",
            price: 0.000000000000001063127,
            total: 20,
            usdFee: 0.73
            // 0.001036665 BNB
            // $559.50 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "MELONx",
    symbol: "$MLNX",
    token_address: "0xF28709f1daa6CEE2847C5B9526ceba457331742b",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 1165.02972978,
        transactions: [
          {
            action: "buy",
            price: 0.2002695674,
            total: 233.32,
            usdFee: 1.7
            // 0.001036665 BNB
            // $559.50 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "Muslim Coins",
    symbol: "MUSC",
    token_address: "0x8B93585978B81E4FC0aE063fe526dBfBE9B8D42D",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 178.186406527568034491,
        transactions: [
          {
            action: "buy",
            price: 0.05159540606,
            total: 9.1936,
            usdFee: 0.89
            // 0.001585185 BNB
            // $559.50 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "SparkLab",
    symbol: "Spark",
    token_address: "0x683b383E9D6Cc523F4C9764daceBB5752892fc53",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 3135.473601583959059274,
        transactions: [
          {
            action: "buy",
            total: 10,
            price: 0.00318931085,
            usdFee: 0.6
            // 0.001066085 BNB
            // $559.50 / BNB
          },
        ],
      }
    ]
  },
  {
    name: "StarDust",
    symbol: "SD",
    token_address: "0x277819bF69667B48Af57aBC52DddCb92Ab6A2c45",
    wallets: [
      {
        address: "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        quantity: 562.004543059,
        transactions: [
          {
            action: "buy",
            total: 11,
            price: 0.01957279551,
            usdFee: 1.59
            // 0.002844375 BNB
            // $559.50 / BNB
          },
        ],
      }
    ]
  },
];