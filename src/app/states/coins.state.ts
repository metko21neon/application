import { CoinStateInterface } from "../interfaces/coin-state.interface";

export const COIN_LIST: CoinStateInterface[] = [
  {
    "name": "Bitcoin",
    "symbol": "BTC",
    "wallets": [
      {
        "name": "WhiteBit",
        "address": "whitebit_1",
        "transactions": [
          {
            "date": "2022-11-13 19:06:17",
            "action": "buy",
            "price": 16570,
            "total": 299.68502
          },
          {
            "date": "2022-11-15 00:58:30",
            "action": "transfer",
            "wallet": "Ledger",
            "address": "",
            "amount": 0.001,
            "fee": 0.0004
          },
          {
            "date": "2022-11-15 01:32:31",
            "action": "transfer",
            "wallet": "Ledger",
            "address": "",
            "amount": 0.016286,
            "fee": 0.0004
          }
        ]
      },
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2021-01-01 02:00:00",
            "action": "buy",
            "price": 32578.27,
            "total": 99.72208447
          },
          {
            "date": "2021-01-01 02:00:00",
            "action": "buy",
            "price": 32500,
            "total": 99.97
          },
          {
            "date": "2021-01-01 02:00:00",
            "action": "sell",
            "price": 40000,
            "filled": 0.00126219
          },
          {
            "date": "2021-09-24 11:51:00",
            "action": "transfer",
            "wallet": "Ledger",
            "amount": 0.0005,
            "fee": 0.0005
          },
          {
            "date": "2022-06-13 12:39:28",
            "action": "buy",
            "price": 24000,
            "total": 24.96
          },
          {
            "date": "2022-06-13 17:42:51",
            "action": "buy",
            "price": 23050,
            "total": 70.07
          },
          {
            "date": "2022-06-17 10:47:15",
            "action": "buy",
            "price": 20200,
            "total": 46.06
          },
          {
            "date": "2022-06-18 10:03:59",
            "action": "buy",
            "price": 19350,
            "total": 46.25
          },
          {
            "date": "2022-07-19 20:16:48",
            "action": "sell",
            "price": 23040.6,
            "filled": 0.00273
          },
          {
            "date": "2022-07-23 07:00:54",
            "action": "sell",
            "price": 22000,
            "filled": 0.00592
          },
          {
            "date": "2022-12-17 16:16:44",
            "action": "buy",
            "price": 16696.21,
            "total": 49.9216679
          },
          {
            "date": "2023-05-08 18:38:27",
            "action": "buy",
            "price": 27880,
            "total": 94.792
          },
          {
            "date": "2023-05-24 19:19:27",
            "price": 26197.75,
            "action": "buy",
            "total": 49.775725
          }
        ]
      },
      {
        "name": "Ledger wallet",
        "address": "ledger_1",
        "transactions": [
          {
            "date": "2021-09-24 11:51:00",
            "action": "receive",
            "amount": 0.0005,
            "fee": 0.0005
          },
          {
            "date": "2022-11-15 01:33:00",
            "action": "receive",
            "amount": 0.001,
            "fee": 0.0004
          },
          {
            "date": "2022-11-15 12:09:00",
            "action": "receive",
            "amount": 0.016286,
            "fee": 0.0004
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Ethereum",
    "symbol": "ETH",
    "wallets": [
      {
        "name": "WhiteBit",
        "address": "whitebit_1",
        "transactions": [
          {
            "date": "2022-11-13 19:07:39",
            "action": "buy",
            "price": 1230,
            "total": 99.8883
          },
          {
            "date": "2022-11-29 20:25:46",
            "action": "transfer",
            "wallet": "Trust Wallet (Savings)",
            "address": "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
            "amount": 0.0796563,
            "fee": 0.0015537
          }
        ]
      },
      {
        "name": "Trust Wallet (Savings)",
        "address": "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
        "transactions": [
          {
            "date": "2022-11-29 20:25:46",
            "action": "receive",
            "amount": 0.0796563,
            "fee": 0.0015537
          }
        ]
      },
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2021-01-01 02:00:00",
            "action": "buy",
            "price": 3955,
            "total": 511.777
          },
          {
            "date": "2021-01-01 02:00:00",
            "action": "buy",
            "price": 1888.94,
            "total": 99.453
          },
          {
            "date": "2021-01-01 02:00:00",
            "action": "buy",
            "price": 2034.89,
            "total": 99.954
          },
          {
            "date": "2021-01-01 02:00:00",
            "action": "transfer",
            "wallet": "Metamask",
            "amount": 0.09775855,
            "fee": 0.005
          },
          {
            "date": "2022-05-11 11:26:13",
            "action": "buy",
            "price": 2340,
            "total": 27.14
          },
          {
            "date": "2022-06-13 12:07:33",
            "action": "buy",
            "price": 1200,
            "total": 24.96
          },
          {
            "date": "2022-06-15 12:12:36",
            "action": "buy",
            "price": 1020,
            "total": 34.99
          },
          {
            "date": "2022-06-16 13:20:00",
            "action": "transfer",
            "wallet": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
            "amount": 0.0134,
            "fee": 0.0016
          },
          {
            "date": "2022-06-18 22:42:18",
            "action": "buy",
            "price": 920,
            "total": 35.05
          },
          {
            "date": "2022-07-23 06:54:59",
            "action": "sell",
            "price": 1490,
            "filled": 0.0784
          },
          {
            "date": "2022-12-17 16:16:20",
            "action": "buy",
            "price": 1179.93,
            "total": 49.911039
          },
          {
            "date": "2022-12-17 16:22:39",
            "action": "buy",
            "price": 1179.49,
            "total": 24.887239
          },
          {
            "date": "2023-05-08 18:40:26",
            "action": "buy",
            "price": 1865.08,
            "total": 47.373032
          }
        ]
      },
      {
        "name": "Trust Wallet (Main)",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "date": "2022-06-16 13:21:00",
            "action": "receive",
            "amount": 0.0134,
            "fee": 0.0005
          }
        ]
      },
      {
        "name": "Metamask wallet",
        "address": "metamask_1",
        "transactions": [
          {
            "date": "2021-01-01 02:00:00",
            "action": "receive",
            "amount": 0.09775855
          },
          {
            "date": "2021-01-01 02:00:00",
            "action": "spend",
            "amount": 0.03568501
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "TetherUS",
    "symbol": "USDT",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2023-04-28 20:12",
            "action": "receive",
            "amount": 620.68,
            "fee": 0
          },
          {
            "action": "transfer",
            "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
            "amount": 9.71,
            "date": "2023-03-30 11:10:07",
            "fee": 0.29,
            "network": "BSC"
          },
          {
            "action": "transfer",
            "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
            "amount": 610.39,
            "date": "2023-03-30 11:13:59",
            "fee": 0.29,
            "network": "BSC"
          }
        ]
      },
      {
        "name": "Trust Wallet (Main)",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "date": "2023-03-30 11:10:07",
            "action": "receive",
            "amount": 9.71,
            "fee": 0.29
          },
          {
            "date": "2023-03-30 11:13:59",
            "action": "receive",
            "amount": 610.39,
            "fee": 0.29
          },
          {
            "action": "transfer",
            "address": "0x78a05f925c1424d02211f9df98ebb7ad8df4d557",
            "amount": 1,
            "date": "2023-04-20 20:57:10",
            "fee": 0,
            "network": "BSC"
          },
          {
            "action": "transfer",
            "address": "0x78a05f925c1424d02211f9df98ebb7ad8df4d557",
            "amount": 619.1,
            "date": "2023-04-20 20:58:20",
            "fee": 0,
            "network": "BSC"
          },
          {
            "date": "2023-05-02 14:33:00",
            "action": "receive",
            "amount": 1800,
            "fee": 0
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "BNB",
    "symbol": "BNB",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2021-01-01 02:00:00",
            "action": "buy",
            "price": 392.18,
            "total": 114.380591194
          },
          {
            "date": "2023-05-08 18:41:07",
            "action": "buy",
            "price": 317.3,
            "total": 47.2777
          }
        ]
      },
      {
        "name": "Trust Wallet (main)",
        "address": "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        "transactions": [
          {
            "date": "2022-01-18 00:49:00",
            "action": "receive",
            "amount": 0.17621879,
            "usdFee": 0.6
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "XRP",
    "symbol": "XRP",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2021-06-06 09:16:00",
            "action": "buy",
            "price": 1.25,
            "total": 501.5
          },
          {
            "date": "2021-06-06 09:16:00",
            "action": "buy",
            "price": 0.6382,
            "total": 99.776
          },
          {
            "date": "2021-06-06 10:16:00",
            "action": "transfer",
            "wallet": "YouHolder Wallet",
            "address": "0xfc0eb51db6222d46b6bcb5de81018298809319c3",
            "amount": 401.461742,
            "fee": 0.25
          },
          {
            "date": "2021-07-02 15:53:00",
            "action": "transfer",
            "wallet": "YouHolder Wallet",
            "address": "0xfc0eb51db6222d46b6bcb5de81018298809319c3",
            "amount": 155.93366,
            "fee": 0.25
          },
          {
            "date": "2023-01-08 22:06:00",
            "action": "receive",
            "amount": 24.5,
            "fee": 0.5
          },
          {
            "date": "2023-01-08 22:08:00",
            "action": "receive",
            "amount": 558.021343,
            "fee": 0.5
          },
          {
            "date": "2023-01-08 22:20:00",
            "action": "transfer",
            "wallet": "Ledger",
            "address": "ledger_1",
            "amount": 29.8,
            "fee": 0.2
          },
          {
            "date": "2023-01-08 22:24:00",
            "action": "transfer",
            "wallet": "Ledger",
            "address": "ledger_1",
            "amount": 552.321343,
            "fee": 0.2
          },
          {
            "date": "2023-05-08 18:41:30",
            "action": "buy",
            "price": 0.434,
            "total": 47.306
          }
        ]
      },
      {
        "name": "YouHolder Wallet",
        "address": "you_holder_1",
        "transactions": [
          {
            "date": "2021-06-06 10:16:00",
            "action": "receive",
            "amount": 401.461742,
            "fee": 0.25
          },
          {
            "date": "2021-07-02 15:53:00",
            "action": "receive",
            "amount": 155.93366,
            "fee": 0.25
          },
          {
            "date": "2023-01-08 22:05:00",
            "action": "transfer",
            "wallet": "Binance",
            "address": "binance_1",
            "amount": 24.5,
            "fee": 0.5
          },
          {
            "date": "2023-01-08 22:07:00",
            "action": "transfer",
            "wallet": "Binance",
            "address": "binance_1",
            "amount": 558.021343,
            "fee": 0.5
          }
        ]
      },
      {
        "name": "Ledger",
        "address": "ledger_1",
        "transactions": [
          {
            "date": "2023-01-08 22:20:00",
            "action": "receive",
            "amount": 29.8,
            "fee": 0.2
          },
          {
            "date": "2023-01-08 22:24:00",
            "action": "receive",
            "amount": 552.321343,
            "fee": 0.2
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Cardano",
    "symbol": "ADA",
    "wallets": [
      {
        "name": "WhiteBit",
        "address": "whitebit_1",
        "transactions": [
          {
            "date": "2022-11-12 01:53:14",
            "action": "buy",
            "price": 0.354803,
            "total": 74.92374951
          },
          {
            "date": "2022-11-14 23:58:21",
            "action": "transfer",
            "wallet": "Ledger",
            "address": "",
            "amount": 16,
            "fee": 2
          },
          {
            "date": "2022-11-15 00:05:08",
            "action": "transfer",
            "wallet": "Ledger",
            "address": "",
            "amount": 191.17,
            "fee": 2
          }
        ]
      },
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2021-01-01 02:00:00",
            "action": "buy",
            "price": 1.738,
            "total": 400.50472
          },
          {
            "date": "2021-01-01 02:00:00",
            "action": "buy",
            "price": 1.2,
            "total": 92.58
          },
          {
            "date": "2022-05-09 22:09:47",
            "action": "buy",
            "price": 0.6231,
            "total": 24.924
          },
          {
            "date": "2022-11-10 00:05:21",
            "action": "buy",
            "price": 0.3175,
            "total": 48.03775,
            "executed": 151.3
          },
          {
            "date": "2022-11-15 00:20:00",
            "action": "transfer",
            "wallet": "Ledger",
            "address": "",
            "amount": 9.2,
            "fee": 0.8
          },
          {
            "date": "2022-11-15 01:19:00",
            "action": "transfer",
            "wallet": "Ledger",
            "address": "",
            "amount": 510.001788,
            "fee": 0.8
          },
          {
            "date": "2022-12-17 01:03:44",
            "action": "buy",
            "price": 0.2823,
            "total": 24.98355,
            "executed": 88.5
          },
          {
            "date": "2022-12-17 16:24:00",
            "action": "buy",
            "price": 0.2651,
            "total": 24.99893
          },
          {
            "date": "2023-03-10 07:04:06",
            "action": "buy",
            "price": 0.3081,
            "total": 49.97382
          },
          {
            "action": "transfer",
            "address": "addr1q98z2sksmtnmepf7a6gpteqfuwa5z8ffah34mnnx8ne0dl8sssl3xjnx5jt60hak7267cy6c9svuc2ntfpd722szkpgqgcxf24",
            "amount": 344.1057,
            "date": "2023-03-10 07:36:15",
            "fee": 0.8,
            "network": "ADA"
          },
          {
            "date": "2023-05-08 18:41:57",
            "action": "buy",
            "price": 0.3744,
            "total": 47.47392
          }
        ]
      },
      {
        "name": "Ledger",
        "address": "ledger_1",
        "transactions": [
          {
            "date": "2022-11-15 12:01:00",
            "action": "receive",
            "amount": 16,
            "fee": 2
          },
          {
            "date": "2022-11-15 12:09:00",
            "action": "receive",
            "amount": 191.17,
            "fee": 2
          },
          {
            "date": "2022-11-15 00:20:00",
            "action": "receive",
            "amount": 9.2,
            "fee": 0.8
          },
          {
            "date": "2022-11-15 01:19:00",
            "action": "receive",
            "amount": 510.001788,
            "fee": 0.8
          },
          {
            "date": "2023-03-10 06:26:00",
            "action": "receive",
            "amount": 344.1057,
            "fee": 0.8
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Dogecoin",
    "symbol": "DOGE",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2021-01-01 02:00:00",
            "action": "buy",
            "price": 0.59908,
            "total": 530.006076
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Polygon",
    "symbol": "MATIC",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2021-01-01 02:00:00",
            "action": "buy",
            "price": 1.69556,
            "total": 149.887504
          },
          {
            "action": "transfer",
            "address": "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
            "amount": 9.9,
            "date": "2023-03-11 12:53:26",
            "fee": 0.1,
            "network": "MATIC"
          },
          {
            "action": "transfer",
            "address": "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
            "amount": 96.8650187,
            "date": "2023-03-11 12:55:06",
            "fee": 0.1,
            "network": "MATIC"
          },
          {
            "date": "2023-05-08 18:48:09",
            "action": "buy",
            "price": 0.9342,
            "total": 14.19984
          }
        ]
      },
      {
        "name": "Trust Wallet (Savings)",
        "address": "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
        "transactions": [
          {
            "date": "2023-03-11 11:53:00",
            "action": "receive",
            "amount": 9.9,
            "fee": 0.1
          },
          {
            "date": "2023-03-11 11:55:00",
            "action": "receive",
            "amount": 96.8650187,
            "fee": 0.1
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Solana",
    "symbol": "SOL",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-11-09 12:01:38",
            "action": "buy",
            "price": 17.4,
            "total": 107.88
          },
          {
            "date": "2022-11-09 19:55:24",
            "action": "sell",
            "price": 15,
            "filled": 6.2
          },
          {
            "date": "2023-05-08 18:48:23",
            "action": "buy",
            "price": 21.19,
            "total": 14.1973
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Litecoin",
    "symbol": "LTC",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2023-05-08 18:49:46",
            "action": "buy",
            "price": 81.15,
            "total": 14.20125
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Tron",
    "symbol": "TRX",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2021-01-01 02:00:00",
            "action": "buy",
            "price": 0.05812,
            "total": 96.694244
          },
          {
            "date": "2022-11-09 12:00:49",
            "action": "sell",
            "price": 0.06042,
            "filled": 1663.7
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Polkadot",
    "symbol": "DOT",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2021-07-30 00:00:00",
            "action": "buy",
            "price": 15.171,
            "total": 76.214
          },
          {
            "date": "2022-11-18 01:07:52",
            "action": "buy",
            "price": 5.69,
            "total": 24.0118
          },
          {
            "date": "2022-12-17 01:10:22",
            "action": "buy",
            "price": 4.971,
            "total": 24.95442
          },
          {
            "date": "2022-12-17 16:16:00",
            "action": "buy",
            "price": 4.684,
            "total": 24.96572
          },
          {
            "date": "2022-12-17 16:24:41",
            "action": "buy",
            "price": 4.678,
            "total": 24.98052
          },
          {
            "date": "2023-03-10 07:00:16",
            "action": "buy",
            "price": 5.38,
            "total": 49.9802
          },
          {
            "date": "2023-04-21 00:35:23",
            "action": "buy",
            "price": 6.09,
            "total": 74.9679
          },
          {
            "date": "2023-05-08 18:48:33",
            "action": "buy",
            "price": 5.421,
            "total": 14.20302
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Shiba Inu",
    "symbol": "SHIB",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2021-01-01 02:00:00",
            "action": "buy",
            "price": 0.000033,
            "total": 168.459357
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Avalanche",
    "symbol": "AVAX",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-05-11 11:27:33",
            "action": "buy",
            "price": 38,
            "total": 24.7
          },
          {
            "date": "2022-05-12 09:05:11",
            "action": "buy",
            "price": 25.73,
            "total": 24.96
          },
          {
            "date": "2022-12-17 01:04:35",
            "action": "buy",
            "price": 12.44,
            "total": 24.88
          },
          {
            "date": "2023-03-10 07:07:18",
            "action": "buy",
            "price": 14.46,
            "total": 49.887
          },
          {
            "date": "2023-04-21 00:37:21",
            "action": "buy",
            "price": 17,
            "total": 74.97
          },
          {
            "action": "transfer",
            "address": "X-avax1sxnpzqdk5g7etd9853fvn4gcxjj4wl98vlx52z",
            "amount": 0.092,
            "date": "2023-04-22 19:58:16",
            "fee": 0.008,
            "network": "AVAX"
          },
          {
            "action": "transfer",
            "address": "X-avax1sxnpzqdk5g7etd9853fvn4gcxjj4wl98vlx52z",
            "amount": 11.45706872,
            "date": "2023-04-22 20:02:48",
            "fee": 0.008,
            "network": "AVAX"
          },
          {
            "date": "2023-05-08 18:53:04",
            "action": "buy",
            "price": 15.75,
            "total": 14.175
          },
          {
            "date": "2023-05-08 21:48:13",
            "action": "buy",
            "total": 41.4528,
            "price": 15.24
          },
          {
            "date": "2023-05-24 19:23:32",
            "price": 14.07,
            "action": "buy",
            "total": 49.9485
          }
        ]
      },
      {
        "name": "Avalanche Wallet",
        "address": "X-avax1sxnpzqdk5g7etd9853fvn4gcxjj4wl98vlx52z",
        "transactions": [
          {
            "date": "2023-04-22 19:58:16",
            "action": "receive",
            "amount": 0.092,
            "fee": 0.008
          },
          {
            "date": "2023-04-22 20:02:48",
            "action": "receive",
            "amount": 11.45706872,
            "fee": 0.008
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Chainlink",
    "symbol": "LINK",
    "wallets": [
      {
        "name": "WhiteBit",
        "address": "whitebit_1",
        "transactions": [
          {
            "date": "2022-11-12 02:09:53",
            "action": "buy",
            "price": 6.9871,
            "total": 74.901712
          },
          {
            "date": "2022-11-29 20:21:38",
            "action": "transfer",
            "wallet": "Trust Wallet (Savings)",
            "address": "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
            "amount": 10.376,
            "fee": 0.344
          }
        ]
      },
      {
        "name": "Trust Wallet (Savings)",
        "address": "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
        "transactions": [
          {
            "date": "2022-11-29 20:21:38",
            "action": "receive",
            "amount": 10.376,
            "fee": 0.344
          },
          {
            "date": "2023-03-10 19:41:00",
            "action": "receive",
            "amount": 0.013,
            "fee": 0.013
          },
          {
            "date": "2023-03-10 19:42:00",
            "action": "receive",
            "amount": 20.78827,
            "fee": 0.013
          },
          {
            "date": "2023-04-22 19:27:07",
            "action": "receive",
            "amount": 6.627,
            "fee": 0.013
          }
        ]
      },
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2021-01-01 02:00:00",
            "action": "buy",
            "price": 37,
            "total": 372.59
          },
          {
            "date": "2021-01-01 02:00:00",
            "action": "buy",
            "price": 17.389,
            "total": 90.353
          },
          {
            "date": "2021-06-05 23:12:00",
            "action": "transfer",
            "wallet": "YouHolder Wallet",
            "address": "0xfc0eb51db6222d46b6bcb5de81018298809319c3",
            "amount": 10.06969471,
            "fee": 0.0069
          },
          {
            "date": "2021-07-02 15:59:00",
            "action": "transfer",
            "wallet": "YouHolder Wallet",
            "address": "0xfc0eb51db6222d46b6bcb5de81018298809319c3",
            "amount": 5.1882,
            "fee": 0.0078
          },
          {
            "date": "2022-05-12 08:49:21",
            "action": "buy",
            "price": 5.8,
            "total": 24.998
          },
          {
            "date": "2022-12-17 20:28:50",
            "action": "buy",
            "price": 5.933,
            "total": 49.95586
          },
          {
            "date": "2023-03-10 07:13:20",
            "action": "buy",
            "price": 6.16,
            "total": 49.9576
          },
          {
            "action": "transfer",
            "address": "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
            "amount": 0.013,
            "date": "2023-03-10 20:41:14",
            "fee": 0.013,
            "network": "BSC"
          },
          {
            "action": "transfer",
            "address": "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
            "amount": 20.78827,
            "date": "2023-03-10 20:42:57",
            "fee": 0.013,
            "network": "BSC"
          },
          {
            "date": "2023-04-21 00:35:54",
            "action": "buy",
            "price": 7.53,
            "total": 49.9992
          },
          {
            "action": "transfer",
            "address": "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
            "amount": 6.627,
            "date": "2023-04-22 19:27:07",
            "fee": 0.013,
            "network": "BSC"
          },
          {
            "date": "2023-05-08 18:53:16",
            "action": "buy",
            "price": 6.723,
            "total": 14.18553
          },
          {
            "date": "2023-05-24 19:23:51",
            "price": 6.252,
            "action": "buy",
            "total": 49.95348
          }
        ]
      },
      {
        "name": "YouHolder Wallet",
        "address": "you_holder_1",
        "transactions": [
          {
            "date": "2021-06-05 23:12:00",
            "action": "receive",
            "amount": 10.06969471,
            "fee": 0.0069
          },
          {
            "date": "2021-07-02 15:59:00",
            "action": "receive",
            "amount": 5.1882,
            "fee": 0.0078
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Uniswap",
    "symbol": "UNI",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-05-09 21:56:13",
            "action": "buy",
            "price": 6.33,
            "total": 49.94
          },
          {
            "date": "2022-05-11 13:50:36",
            "action": "sell",
            "price": 5.95,
            "filled": 4.2
          },
          {
            "date": "2023-03-10 07:05:47",
            "action": "buy",
            "price": 5.668,
            "total": 49.93508
          },
          {
            "date": "2023-05-08 18:54:36",
            "action": "buy",
            "total": 14.2197,
            "price": 5.115
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Cosmos",
    "symbol": "ATOM",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2021-01-01 02:00:00",
            "action": "buy",
            "price": 25,
            "total": 44.25
          },
          {
            "date": "2021-01-01 02:00:00",
            "action": "buy",
            "price": 30,
            "total": 25
          },
          {
            "date": "2022-05-09 22:10:57",
            "action": "buy",
            "price": 13.94,
            "total": 24.953
          },
          {
            "date": "2022-12-17 01:05:03",
            "action": "buy",
            "price": 8.983,
            "total": 24.97274
          },
          {
            "date": "2023-03-10 06:58:57",
            "action": "buy",
            "price": 11.08,
            "total": 49.9708
          },
          {
            "action": "transfer",
            "address": "cosmos19da59dqs6anv68rtrum660nzg9turgcqsmxzv5",
            "amount": 0.006,
            "date": "2023-03-10 20:20:36",
            "fee": 0.004,
            "network": "ATOM"
          },
          {
            "action": "transfer",
            "address": "cosmos19da59dqs6anv68rtrum660nzg9turgcqsmxzv5",
            "amount": 12.13701,
            "date": "2023-03-10 20:23:06",
            "fee": 0.004,
            "network": "ATOM"
          },
          {
            "date": "2023-04-21 00:36:23",
            "action": "buy",
            "price": 11.438,
            "total": 74.9189
          },
          {
            "action": "transfer",
            "address": "cosmos19da59dqs6anv68rtrum660nzg9turgcqsmxzv5",
            "amount": 6.546,
            "date": "2023-04-21 00:51:20",
            "fee": 0.004,
            "network": "ATOM"
          },
          {
            "date": "2023-05-08 18:53:37",
            "action": "buy",
            "price": 11.011,
            "total": 14.20419
          },
          {
            "date": "2023-05-24 19:24:19",
            "price": 10.341,
            "action": "buy",
            "total": 49.94703
          }
        ]
      },
      {
        "name": "Trust Wallet (Savings)",
        "address": "3PPKVawkKTm2eW5TDdh7z495BYVAKtA4im2",
        "transactions": [
          {
            "date": "2023-03-10 19:20:00",
            "action": "receive",
            "amount": 0.006,
            "fee": 0.004
          },
          {
            "date": "2023-03-10 19:23:00",
            "action": "receive",
            "amount": 12.13701,
            "fee": 0.004
          },
          {
            "date": "2023-04-21 00:51:20",
            "action": "receive",
            "amount": 6.546,
            "fee": 0.004
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Stellar",
    "symbol": "XLM",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2021-01-01 02:00:00",
            "action": "buy",
            "price": 0.31224,
            "total": 67.1322281301
          },
          {
            "date": "2022-12-17 01:11:57",
            "action": "buy",
            "price": 0.0793,
            "total": 24.9002
          },
          {
            "date": "2023-05-08 18:55:19",
            "action": "buy",
            "total": 14.22,
            "price": 0.09
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Internet Computer",
    "symbol": "ICP",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2021-05-13 02:26:00",
            "action": "buy",
            "price": 361,
            "total": 389.88
          },
          {
            "date": "2021-05-13 02:28:00",
            "action": "transfer",
            "wallet": "ICP wallet",
            "address": "fe462a4435a3ff0950d9b42883f57335e7f9ae043e547721976477a058739c71",
            "amount": 1.07862,
            "fee": 0.0003
          },
          {
            "date": "2021-05-21 00:10:00",
            "action": "buy",
            "price": 127.32,
            "total": 147.6912
          },
          {
            "date": "2021-05-21 00:14:00",
            "action": "transfer",
            "wallet": "ICP wallet",
            "address": "fe462a4435a3ff0950d9b42883f57335e7f9ae043e547721976477a058739c71",
            "amount": 1.1597,
            "fee": 0.0003
          },
          {
            "date": "2021-07-11 22:05:00",
            "action": "buy",
            "price": 40,
            "total": 120
          },
          {
            "date": "2021-07-11 22:05:00",
            "action": "transfer",
            "wallet": "ICP wallet",
            "address": "fe462a4435a3ff0950d9b42883f57335e7f9ae043e547721976477a058739c71",
            "amount": 2.9967,
            "fee": 0.0003
          },
          {
            "date": "2022-11-10 01:07:00",
            "action": "buy",
            "price": 3.577,
            "total": 24.03744
          },
          {
            "date": "2022-12-17 20:31:45",
            "action": "buy",
            "price": 3.614,
            "total": 49.98162
          },
          {
            "date": "2023-03-10 07:09:00",
            "action": "buy",
            "price": 4.764,
            "total": 49.97436
          },
          {
            "action": "transfer",
            "address": "fe462a4435a3ff0950d9b42883f57335e7f9ae043e547721976477a058739c71",
            "amount": 31.02599524,
            "date": "2023-03-10 07:26:40",
            "fee": 0.0003,
            "network": "ICP"
          },
          {
            "date": "2023-05-08 18:54:59",
            "action": "buy",
            "total": 14.1952,
            "price": 5.545
          }
        ]
      },
      {
        "name": "Internet Computer",
        "address": "internet_computer_1",
        "transactions": [
          {
            "date": "2021-06-06 10:16:00",
            "action": "receive",
            "amount": 1.07862,
            "fee": 0.0003
          },
          {
            "date": "2021-07-02 15:53:00",
            "action": "receive",
            "amount": 1.1597,
            "fee": 0.0003
          },
          {
            "date": "2021-07-02 15:53:00",
            "action": "receive",
            "amount": 2.9967,
            "fee": 0.0003
          },
          {
            "date": "2023-03-10 06:26:00",
            "action": "receive",
            "amount": 31.02599524,
            "fee": 0.0003
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Bitcoin Cash",
    "symbol": "BCH",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-12-17 01:10:43",
            "action": "buy",
            "price": 104.3,
            "total": 24.9277
          },
          {
            "date": "2022-12-17 16:19:55",
            "action": "buy",
            "price": 101.6,
            "total": 24.9936
          },
          {
            "date": "2023-03-10 07:18:47",
            "action": "buy",
            "price": 108.7,
            "total": 24.8923
          },
          {
            "date": "2023-05-08 18:55:30",
            "action": "buy",
            "total": 14.1375,
            "price": 113.1
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Filecoin",
    "symbol": "FIL",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2021-01-01 02:00:00",
            "action": "buy",
            "price": 71.35,
            "total": 149.513925
          },
          {
            "date": "2022-09-15 15:19:29",
            "action": "buy",
            "price": 5.85,
            "total": 130.689
          },
          {
            "date": "2022-12-17 01:09:38",
            "action": "buy",
            "price": 3.79,
            "total": 25.0898
          },
          {
            "date": "2022-12-17 16:19:18",
            "action": "buy",
            "price": 3.042,
            "total": 49.98006
          },
          {
            "date": "2023-03-10 07:08:13",
            "action": "buy",
            "price": 5.405,
            "total": 49.99625
          },
          {
            "action": "transfer",
            "address": "f1xl7ztmwdmmqs6i6tfcfhkwn6mix35yiqkf2rdmq",
            "amount": 0.009,
            "date": "2023-03-10 17:32:37",
            "fee": 0.001,
            "network": "FIL"
          },
          {
            "action": "transfer",
            "address": "f1xl7ztmwdmmqs6i6tfcfhkwn6mix35yiqkf2rdmq",
            "amount": 57.00520819,
            "date": "2023-03-10 17:36:10",
            "fee": 0.001,
            "network": "FIL"
          },
          {
            "date": "2023-04-21 00:36:46",
            "action": "buy",
            "price": 5.525,
            "total": 74.97425
          },
          {
            "action": "transfer",
            "address": "f1xl7ztmwdmmqs6i6tfcfhkwn6mix35yiqkf2rdmq",
            "amount": 13.569,
            "date": "2023-04-21 00:55:44",
            "fee": 0.001,
            "network": "FIL"
          },
          {
            "date": "2023-05-08 18:45:59",
            "action": "buy",
            "price": 4.79,
            "total": 14.2263
          }
        ]
      },
      {
        "name": "Trust Wallet (Savings)",
        "address": "f1xl7ztmwdmmqs6i6tfcfhkwn6mix35yiqkf2rdmq",
        "transactions": [
          {
            "date": "2023-03-10 16:32:00",
            "action": "receive",
            "amount": 0.009,
            "fee": 0.001
          },
          {
            "date": "2023-03-10 16:36:00",
            "action": "receive",
            "amount": 57.00520819,
            "fee": 0.001
          },
          {
            "date": "2023-04-21 00:55:44",
            "action": "receive",
            "amount": 13.569,
            "fee": 0.001
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Lido DAO",
    "symbol": "LDO",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-05-10 16:43:38",
            "action": "buy",
            "price": 2.2,
            "total": 24.992
          },
          {
            "date": "2022-06-12 13:32:25",
            "action": "buy",
            "price": 0.83,
            "total": 36.014
          },
          {
            "date": "2022-07-17 15:55:44",
            "action": "sell",
            "price": 1.628,
            "filled": 27.43
          },
          {
            "date": "2023-05-08 18:57:12",
            "action": "buy",
            "total": 14.2464,
            "price": 1.696
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Aptos",
    "symbol": "APT",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2023-05-08 18:44:51",
            "action": "buy",
            "price": 8.7454,
            "total": 14.167548
          },
          {
            "date": "2023-05-08 18:55:38",
            "action": "buy",
            "total": 14.17095,
            "price": 8.7475
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "NEAR Protocol",
    "symbol": "NEAR",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-06-12 16:54:05",
            "action": "buy",
            "price": 3.8,
            "total": 27.74
          },
          {
            "date": "2022-12-17 01:06:29",
            "action": "buy",
            "price": 1.488,
            "total": 24.9984
          },
          {
            "date": "2023-05-08 18:56:56",
            "action": "buy",
            "total": 14.1355,
            "price": 1.663
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Arbitrium",
    "symbol": "ARB",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2023-04-21 00:38:04",
            "action": "buy",
            "price": 1.4278,
            "total": 24.9865
          },
          {
            "date": "2023-04-21 00:38:15",
            "action": "buy",
            "price": 1.2,
            "total": 49.92
          },
          {
            "date": "2023-05-08 18:56:41",
            "action": "buy",
            "total": 14.22597,
            "price": 1.1757
          },
          {
            "date": "2023-05-24 19:22:56",
            "price": 1.0994,
            "action": "buy",
            "total": 49.91276
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "VeChain",
    "symbol": "VET",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2021-01-01 02:00:00",
            "action": "buy",
            "price": 0.04,
            "total": 25
          },
          {
            "date": "2021-01-01 02:00:00",
            "action": "buy",
            "price": 0.045,
            "total": 25
          },
          {
            "date": "2022-12-17 20:31:12",
            "action": "buy",
            "price": 0.01672,
            "total": 24.984792
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Algorand",
    "symbol": "ALGO",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-12-17 01:08:42",
            "action": "buy",
            "price": 0.2003,
            "total": 25.0375
          },
          {
            "date": "2023-03-10 06:51:04",
            "action": "buy",
            "price": 0.1922,
            "total": 49.972
          },
          {
            "action": "transfer",
            "address": "LBHRI7C3IY6LBWNGHU7MZR5PJFNQXDMGXKCVPVAB4NEY36ZWU5QKNBMBVE",
            "amount": 9.992,
            "date": "2023-03-11 16:35:38",
            "fee": 0.008,
            "network": "ALGO"
          },
          {
            "action": "transfer",
            "address": "LBHRI7C3IY6LBWNGHU7MZR5PJFNQXDMGXKCVPVAB4NEY36ZWU5QKNBMBVE",
            "amount": 374.992,
            "date": "2023-03-11 16:37:48",
            "fee": 0.008,
            "network": "ALGO"
          },
          {
            "date": "2023-05-08 18:57:34",
            "action": "buy",
            "total": 14.196,
            "price": 0.169
          }
        ]
      },
      {
        "name": "Trust Wallet (Savings)",
        "address": "LBHRI7C3IY6LBWNGHU7MZR5PJFNQXDMGXKCVPVAB4NEY36ZWU5QKNBMBVE",
        "transactions": [
          {
            "date": "2023-03-11 15:35:00",
            "action": "receive",
            "amount": 9.992,
            "fee": 0.008
          },
          {
            "date": "2023-03-11 15:37:00",
            "action": "receive",
            "amount": 374.992,
            "fee": 0.008
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "The Graph",
    "symbol": "GRT",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-11-22 03:13:46",
            "action": "buy",
            "price": 0.0544,
            "total": 28.1248
          },
          {
            "date": "2022-12-17 20:33:43",
            "action": "buy",
            "price": 0.057,
            "total": 25.023
          },
          {
            "date": "2023-04-28 20:08:53",
            "action": "buy",
            "price": 0.1364,
            "total": 24.9612
          },
          {
            "date": "2023-05-08 18:57:49",
            "action": "buy",
            "total": 14.161,
            "price": 0.119
          },
          {
            "date": "2023-05-24 19:22:18",
            "price": 0.1139,
            "action": "buy",
            "total": 49.8882
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Fantom",
    "symbol": "FTM",
    "wallets": [
      {
        "name": "WhiteBit",
        "address": "whitebit_1",
        "transactions": [
          {
            "date": "2022-11-13 19:25:52",
            "action": "buy",
            "price": 0.181,
            "total": 47.9537961
          },
          {
            "date": "2022-11-29 20:13:15",
            "action": "transfer",
            "wallet": "Trust Wallet (Savings)",
            "address": "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
            "amount": 259.9381,
            "fee": 5
          }
        ]
      },
      {
        "name": "Trust Wallet (Savings)",
        "address": "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
        "transactions": [
          {
            "date": "2022-11-29 20:13:15",
            "action": "receive",
            "amount": 259.9381,
            "fee": 5
          },
          {
            "date": "2023-04-23 02:49:36",
            "action": "receive",
            "amount": 9.7,
            "fee": 0.3
          },
          {
            "date": "2023-04-23 02:51:10",
            "action": "receive",
            "amount": 215.84956251,
            "fee": 0.3
          }
        ]
      },
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-05-12 08:22:40",
            "action": "buy",
            "price": 0.245,
            "total": 24.99
          },
          {
            "date": "2022-12-17 20:32:38",
            "action": "buy",
            "price": 0.202,
            "total": 24.846
          },
          {
            "action": "transfer",
            "address": "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
            "amount": 9.7,
            "date": "2023-04-23 02:49:36",
            "fee": 0.3,
            "network": "FTM"
          },
          {
            "action": "transfer",
            "address": "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
            "amount": 215.84956251,
            "date": "2023-04-23 02:51:10",
            "fee": 0.3,
            "network": "FTM"
          },
          {
            "date": "2023-05-08 18:58:02",
            "action": "buy",
            "total": 13.9046,
            "price": 0.3758
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Elrond",
    "symbol": "EGLD",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-08-18 14:58:13",
            "action": "buy",
            "price": 57.5,
            "total": 299.575
          },
          {
            "date": "2022-08-18 19:56:58",
            "action": "sell",
            "price": 52,
            "filled": 5.21
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Aave",
    "symbol": "AAVE",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2023-03-10 06:56:37",
            "action": "buy",
            "price": 67.1,
            "total": 49.9895
          },
          {
            "date": "2023-04-21 00:38:52",
            "action": "buy",
            "price": 72.3,
            "total": 49.9593
          },
          {
            "date": "2023-05-08 19:00:02",
            "action": "buy",
            "total": 14.19,
            "price": 66
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Render Token",
    "symbol": "RNDR",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-06-13 12:47:39",
            "action": "buy",
            "price": 0.378,
            "total": 25.001
          },
          {
            "date": "2022-11-22 03:13:08",
            "action": "sell",
            "price": 0.425,
            "filled": 66.14
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Chiliz",
    "symbol": "CHZ",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-05-09 22:11:48",
            "action": "buy",
            "price": 0.1379,
            "total": 25.2357
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Immutable X",
    "symbol": "IMX",
    "wallets": [
      {
        "name": "WhiteBit",
        "address": "whitebit_1",
        "transactions": [
          {
            "date": "2022-11-12 01:46:21",
            "action": "buy",
            "price": 0.4412,
            "total": 49.9500168
          },
          {
            "date": "2022-11-29 20:10:31",
            "action": "transfer",
            "wallet": "Trust Wallet (Savings)",
            "address": "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
            "amount": 107.738,
            "fee": 5.476
          }
        ]
      },
      {
        "name": "Trust Wallet (Savings)",
        "address": "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
        "transactions": [
          {
            "date": "2022-11-29 20:10:31",
            "action": "receive",
            "amount": 107.738,
            "fee": 5.476
          }
        ]
      },
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-05-12 06:06:33",
            "action": "buy",
            "price": 0.788,
            "total": 20.858
          },
          {
            "date": "2022-05-12 06:06:33",
            "action": "sell",
            "price": 0.788,
            "filled": 26.47
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Sui",
    "symbol": "SUI",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2023-05-08 11:41:46",
            "action": "buy",
            "price": 1.1377,
            "total": 24.91563
          },
          {
            "date": "2023-05-08 21:36:15",
            "action": "buy",
            "total": 19.98624,
            "price": 1.0464
          },
          {
            "date": "2023-05-08 21:36:36",
            "action": "buy",
            "total": 19.95,
            "price": 1.05
          },
          {
            "date": "2023-05-24 19:20:59",
            "price": 0.9662,
            "action": "buy",
            "total": 49.95254
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Optimism",
    "symbol": "OP",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-06-01 12:58:44",
            "action": "buy",
            "price": 1.6,
            "total": 16
          },
          {
            "date": "2022-06-01 20:02:27",
            "action": "buy",
            "price": 1.05,
            "total": 10.5
          },
          {
            "date": "2022-06-12 10:49:57",
            "action": "buy",
            "price": 0.666,
            "total": 13
          },
          {
            "date": "2022-06-12 14:19:19",
            "action": "buy",
            "price": 0.68,
            "total": 39.998
          },
          {
            "date": "2022-06-13 12:48:00",
            "action": "buy",
            "price": 0.53,
            "total": 25
          },
          {
            "date": "2022-07-23 06:50:16",
            "action": "sell",
            "price": 0.83,
            "filled": 145.50991907556835
          },
          {
            "date": "2023-05-08 21:34:36",
            "action": "buy",
            "total": 19.99689,
            "price": 1.679
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Luna Classic",
    "symbol": "LUNC",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-05-10 15:58:40",
            "action": "buy",
            "price": 33.54,
            "total": 49.6392
          },
          {
            "date": "2022-05-11 10:47:23",
            "action": "buy",
            "price": 5,
            "total": 50
          },
          {
            "date": "2022-05-11 14:39:45",
            "action": "buy",
            "price": 2,
            "total": 15
          },
          {
            "date": "2022-05-11 15:49:57",
            "action": "buy",
            "price": 1,
            "total": 10.21
          },
          {
            "date": "2022-05-11 17:28:53",
            "action": "buy",
            "price": 6,
            "total": 219.96
          },
          {
            "date": "2022-05-11 17:52:31",
            "action": "buy",
            "price": 3,
            "total": 55.02
          },
          {
            "date": "2022-05-11 17:49:13",
            "action": "sell",
            "price": 4.7568,
            "filled": 31.66
          },
          {
            "date": "2022-05-11 18:08:51",
            "action": "buy",
            "price": 2.5,
            "total": 75.325
          },
          {
            "date": "2022-05-11 19:42:16",
            "action": "buy",
            "price": 2.3609,
            "total": 37.632746
          },
          {
            "date": "2022-05-11 20:26:44",
            "action": "buy",
            "price": 2,
            "total": 37.66
          },
          {
            "date": "2022-05-12 06:07:01",
            "action": "buy",
            "price": 0.5003,
            "total": 20.867513
          },
          {
            "date": "2022-05-12 06:08:05",
            "action": "buy",
            "price": 0.5004,
            "total": 20.54142
          },
          {
            "date": "2022-05-12 07:46:31",
            "action": "buy",
            "price": 0.3,
            "total": 20.511
          },
          {
            "date": "2022-05-12 09:51:13",
            "action": "buy",
            "price": 0.2,
            "total": 25.006
          },
          {
            "date": "2022-05-12 11:42:30",
            "action": "buy",
            "price": 0.1,
            "total": 25
          },
          {
            "date": "2022-05-12 16:37:28",
            "action": "buy",
            "price": 0.0125,
            "total": 50.1509
          },
          {
            "date": "2022-05-12 14:48:56",
            "action": "buy",
            "price": 0.04,
            "total": 49.8
          },
          {
            "date": "2022-05-13 01:20:55",
            "action": "buy",
            "price": 0.0025,
            "total": 49.97
          },
          {
            "date": "2022-05-13 20:24:56",
            "action": "buy",
            "price": 0.0001431,
            "total": 40.48787114
          },
          {
            "date": "2022-05-16 14:50:49",
            "action": "buy",
            "price": 0.00017777,
            "total": 12.13586369
          },
          {
            "date": "2022-05-22 19:41:36",
            "action": "buy",
            "price": 0.00015,
            "total": 12.1358625
          },
          {
            "date": "2022-05-30 14:12:13",
            "action": "sell",
            "price": 0.00015082,
            "filled": 457995.74194013455
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Mina",
    "symbol": "MINA",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-06-12 16:29:13",
            "action": "buy",
            "price": 0.65,
            "total": 44.98
          },
          {
            "date": "2022-10-21 09:58:17",
            "action": "buy",
            "price": 0.53,
            "total": 41.022,
            "executed": 77.4
          },
          {
            "date": "2023-03-10 07:14:46",
            "action": "buy",
            "price": 0.655,
            "total": 35.9595
          },
          {
            "date": "2023-05-08 21:35:17",
            "action": "buy",
            "total": 19.981,
            "price": 0.53
          },
          {
            "date": "2023-05-24 19:21:56",
            "price": 0.547,
            "action": "buy",
            "total": 49.9958
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "eCash",
    "symbol": "XEC",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-05-12 08:36:36",
            "action": "buy",
            "price": 0.0000288,
            "total": 24.999984
          },
          {
            "date": "2022-05-28 22:37:29",
            "action": "sell",
            "price": 0.00004732,
            "filled": 528317
          },
          {
            "date": "2023-05-08 21:38:48",
            "price": 0.0000253,
            "action": "buy",
            "total": 19.9999789
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "IOTA",
    "symbol": "MIOTA",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2021-01-01 02:00:00",
            "action": "buy",
            "price": 0.72,
            "total": 54.3846153816
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Dash",
    "symbol": "DASH",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-12-17 01:06:59",
            "action": "buy",
            "price": 44.87,
            "total": 24.99259
          },
          {
            "date": "2023-03-10 07:19:16",
            "action": "buy",
            "price": 52.68,
            "total": 24.97032
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Trust Wallet Token",
    "symbol": "TWT",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-12-17 16:19:03",
            "action": "buy",
            "price": 1.6049,
            "total": 24.0735
          },
          {
            "date": "2023-03-10 07:16:09",
            "action": "buy",
            "price": 1.1093,
            "total": 25.5139
          },
          {
            "date": "2023-05-08 21:34:48",
            "action": "buy",
            "total": 19.3716,
            "price": 1.0762
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Zilliqa",
    "symbol": "ZIL",
    "wallets": [
      {
        "name": "WhiteBit",
        "address": "whitebit_1",
        "transactions": [
          {
            "date": "2022-11-12 01:50:49",
            "action": "buy",
            "price": 0.022597,
            "total": 49.95004934
          },
          {
            "date": "2022-11-29 20:16:12",
            "action": "transfer",
            "wallet": "Trust Wallet (Savings)",
            "address": "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
            "amount": 2185.4726,
            "fee": 25
          }
        ]
      },
      {
        "name": "Trust Wallet (Savings)",
        "address": "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
        "transactions": [
          {
            "date": "2022-11-29 20:16:12",
            "action": "receive",
            "amount": 2185.4726,
            "fee": 25
          }
        ]
      },
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2023-05-08 21:38:58",
            "action": "buy",
            "total": 19.998249,
            "price": 0.02309
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "THORChain",
    "symbol": "RUNE",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-05-11 11:28:18",
            "action": "buy",
            "price": 4,
            "total": 27.2
          },
          {
            "date": "2022-05-12 06:07:48",
            "action": "sell",
            "price": 3.024,
            "filled": 6.8
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "PancakeSwap",
    "symbol": "CAKE",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2021-01-01 02:00:00",
            "action": "buy",
            "price": 19.055,
            "total": 228.66
          },
          {
            "date": "2021-01-01 02:00:00",
            "action": "buy",
            "price": 17.728,
            "total": 99.98592
          },
          {
            "date": "2021-01-01 02:00:00",
            "action": "buy",
            "price": 17.694,
            "total": 11.005668
          },
          {
            "date": "2021-01-01 02:00:00",
            "action": "buy",
            "price": 37.151,
            "total": 529.550354
          },
          {
            "date": "2021-01-01 02:00:00",
            "action": "buy",
            "price": 40.5,
            "total": 305.289
          },
          {
            "date": "2021-05-28 01:04:00",
            "action": "transfer",
            "wallet": "Trust Wallet (Main)",
            "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
            "amount": 0.05924529,
            "fee": 0.0098
          },
          {
            "date": "2021-05-29 18:32:00",
            "action": "transfer",
            "wallet": "Trust Wallet (Main)",
            "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
            "amount": 6.45804975,
            "fee": 0.01
          },
          {
            "date": "2021-05-31 08:12:00",
            "action": "transfer",
            "wallet": "Trust Wallet (Main)",
            "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
            "amount": 7.41329184,
            "fee": 0.01
          },
          {
            "date": "2021-06-01 03:37:00",
            "action": "transfer",
            "wallet": "Trust Wallet (Main)",
            "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
            "amount": 14.06935912,
            "fee": 0.01
          },
          {
            "date": "2021-06-05 23:01:00",
            "action": "transfer",
            "wallet": "Trust Wallet (Main)",
            "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
            "amount": 11.978,
            "fee": 0.01
          },
          {
            "date": "2022-05-09 21:56:52",
            "action": "buy",
            "price": 5.8,
            "total": 49.648
          },
          {
            "date": "2022-05-09 22:19:00",
            "action": "transfer",
            "wallet": "TrustWallet Main",
            "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
            "amount": 8.535,
            "fee": 0.025
          },
          {
            "date": "2022-05-12 08:55:27",
            "action": "buy",
            "price": 3.4,
            "total": 49.98
          },
          {
            "date": "2022-05-16 12:15:00",
            "action": "transfer",
            "wallet": "Trust Wallet (Main)",
            "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
            "amount": 14.6523,
            "fee": 0.033
          },
          {
            "date": "2022-12-17 20:33:24",
            "action": "buy",
            "price": 3.285,
            "total": 24.99885
          },
          {
            "date": "2023-03-10 07:10:35",
            "action": "buy",
            "price": 3.529,
            "total": 49.97064
          },
          {
            "action": "transfer",
            "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
            "amount": 21.73939,
            "date": "2023-03-10 07:40:11",
            "fee": 0.023,
            "network": "BSC"
          },
          {
            "date": "2023-04-24 22:48:37",
            "action": "buy",
            "price": 2.898,
            "total": 49.9905
          },
          {
            "date": "2023-05-12 09:02:54",
            "action": "buy",
            "total": 39.99306,
            "price": 1.787
          },
          {
            "action": "transfer",
            "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
            "amount": 39.607,
            "date": "2023-05-12 09:07:49",
            "fee": 0.023,
            "network": "BSC"
          }
        ]
      },
      {
        "name": "Trust Wallet (Main)",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "date": "2021-05-28 01:04:00",
            "action": "receive",
            "amount": 0.05924529,
            "fee": 0.0098
          },
          {
            "date": "2021-05-29 18:32:00",
            "action": "receive",
            "amount": 6.45804975,
            "fee": 0.01
          },
          {
            "date": "2021-05-31 08:12:00",
            "action": "receive",
            "amount": 7.41329184,
            "fee": 0.01
          },
          {
            "date": "2021-05-31 08:16:00",
            "action": "spend",
            "amount": 6.5342
          },
          {
            "date": "2021-06-01 03:37:00",
            "action": "receive",
            "amount": 14.06935912,
            "fee": 0.01
          },
          {
            "date": "2021-06-05 23:01:00",
            "action": "receive",
            "amount": 11.978,
            "fee": 0.01
          },
          {
            "date": "2022-05-09 22:19:00",
            "action": "receive",
            "amount": 8.535,
            "fee": 0.025
          },
          {
            "date": "2022-05-16 12:15:00",
            "action": "receive",
            "amount": 14.6523,
            "fee": 0.033
          },
          {
            "date": "2023-03-10 06:40:00",
            "action": "receive",
            "amount": 21.73939,
            "fee": 0.023
          },
          {
            "date": "2023-05-12 09:07:49",
            "action": "receive",
            "amount": 39.607,
            "fee": 0.023
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "dYdX",
    "symbol": "DYDX",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-05-09 21:57:34",
            "action": "buy",
            "price": 3.079,
            "total": 49.818
          },
          {
            "date": "2022-12-17 16:20:47",
            "action": "buy",
            "price": 1.412,
            "total": 24.9924
          },
          {
            "date": "2023-03-10 07:21:26",
            "action": "buy",
            "price": 2.009,
            "total": 24.99196
          },
          {
            "date": "2023-05-08 21:33:31",
            "action": "buy",
            "total": 19.99173,
            "price": 2.089
          },
          {
            "date": "2023-05-24 19:21:33",
            "price": 2.01,
            "action": "buy",
            "total": 49.9887
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "1inch Network",
    "symbol": "1INCH",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-05-11 11:24:49",
            "action": "buy",
            "price": 1.05,
            "total": 25.2
          },
          {
            "date": "2022-06-12 16:32:03",
            "action": "buy",
            "price": 0.66,
            "total": 44.946
          },
          {
            "date": "2022-12-17 16:25:36",
            "action": "buy",
            "price": 0.384,
            "total": 24.9984
          },
          {
            "date": "2023-03-10 07:12:41",
            "action": "buy",
            "price": 0.434,
            "total": 49.9968
          },
          {
            "date": "2023-03-10 19:31:00",
            "action": "transfer",
            "wallet": "Trust Wallet (Savings)",
            "address": "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
            "amount": 0.16,
            "fee": 0.16
          },
          {
            "action": "transfer",
            "address": "0xCfFE3fFEdE189CD9259433112b78C93Dc91977E3",
            "amount": 272.13,
            "date": "2023-03-10 20:34:36",
            "fee": 0.16,
            "network": "BSC"
          },
          {
            "date": "2023-05-08 21:33:46",
            "action": "buy",
            "total": 20,
            "price": 0.4
          }
        ]
      },
      {
        "name": "Trust Wallet (Savings)",
        "address": "3PPKVawkKTm2eW5TDdh7z495BYVAKtA4im2",
        "transactions": [
          {
            "date": "2023-03-10 19:31:00",
            "action": "receive",
            "amount": 0.16,
            "fee": 0.16
          },
          {
            "date": "2023-03-10 19:34:00",
            "action": "receive",
            "amount": 272.13,
            "fee": 0.16
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "NEM",
    "symbol": "XEM",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-10-21 09:52:37",
            "action": "buy",
            "price": 0.0367,
            "total": 24.9927,
            "executed": 681
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Compound",
    "symbol": "COMP",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2021-01-01 02:00:00",
            "action": "buy",
            "price": 95,
            "total": 25
          },
          {
            "date": "2021-01-01 02:00:00",
            "action": "buy",
            "price": 113,
            "total": 25
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Decred",
    "symbol": "DCR",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-05-29 00:13:41",
            "action": "buy",
            "price": 33.8,
            "total": 25
          },
          {
            "date": "2022-06-08 15:27:14",
            "action": "sell",
            "price": 34.6,
            "filled": 0.7396449704142013
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Terra",
    "symbol": "LUNA",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-06-01 14:44:32",
            "action": "buy",
            "price": 7,
            "total": 14
          },
          {
            "date": "2022-06-05 04:04:35",
            "action": "buy",
            "price": 5.1,
            "total": 15.555
          },
          {
            "date": "2022-06-08 21:07:39",
            "action": "buy",
            "price": 3.05,
            "total": 25.01
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Threshold",
    "symbol": "T",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-06-13 13:34:14",
            "action": "buy",
            "price": 0.0359,
            "total": 33.9973
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Arweave",
    "symbol": "AR",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2023-03-10 06:52:46",
            "action": "buy",
            "price": 7.43,
            "total": 49.9296
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Harmony",
    "symbol": "ONE",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-05-12 08:42:40",
            "action": "buy",
            "price": 0.034,
            "total": 24.9968
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "SushiSwap",
    "symbol": "SUSHI",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-05-09 22:02:13",
            "action": "buy",
            "price": 1.804,
            "total": 24.895
          },
          {
            "date": "2022-05-13 13:48:03",
            "action": "buy",
            "price": 1.397,
            "total": 24.867
          },
          {
            "date": "2023-03-10 07:12:00",
            "action": "buy",
            "price": 1.045,
            "total": 49.951
          },
          {
            "date": "2023-04-09 11:16:26",
            "action": "sell",
            "price": 1.069,
            "filled": 81
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "JUST",
    "symbol": "JST",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-06-13 13:25:29",
            "action": "buy",
            "price": 0.02948,
            "total": 29.99885
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Helium",
    "symbol": "HNT",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-09-05 14:33:37",
            "action": "buy",
            "price": 3.9,
            "total": 299.988,
            "executed": 76.92
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Waves",
    "symbol": "WAVES",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-10-21 09:54:40",
            "action": "buy",
            "price": 3.155,
            "total": 24.9876,
            "executed": 7.92
          },
          {
            "date": "2022-10-21 09:55:38",
            "action": "buy",
            "price": 3.155,
            "total": 24.9876,
            "executed": 7.92
          },
          {
            "date": "2022-12-17 01:07:34",
            "action": "buy",
            "price": 1.633,
            "total": 24.96857,
            "executed": 15.29
          },
          {
            "date": "2022-12-17 16:26:46",
            "action": "buy",
            "price": 1.585,
            "total": 23.9652
          },
          {
            "date": "2023-03-10 07:14:06",
            "action": "buy",
            "price": 1.931,
            "total": 49.99359
          },
          {
            "action": "transfer",
            "address": "3PPKVawkKTm2eW5TDdh7z495BYVAKtA4im2",
            "amount": 0.0016,
            "date": "2023-03-10 19:59:49",
            "fee": 0.0016,
            "network": "WAVES"
          },
          {
            "action": "transfer",
            "address": "3PPKVawkKTm2eW5TDdh7z495BYVAKtA4im2",
            "amount": 67.185505,
            "date": "2023-03-10 20:04:38",
            "fee": 0.0016,
            "network": "WAVES"
          },
          {
            "date": "2023-04-21 00:40:11",
            "action": "buy",
            "price": 1.999,
            "total": 82.51872
          },
          {
            "action": "transfer",
            "address": "3PPKVawkKTm2eW5TDdh7z495BYVAKtA4im2",
            "amount": 46.29750475,
            "date": "2023-04-21 01:01:39",
            "fee": 0.0016,
            "network": "WAVES"
          },
          {
            "date": "2023-05-08 21:41:25",
            "action": "buy",
            "total": 20,
            "price": 1.6
          }
        ]
      },
      {
        "name": "Trust Wallet (Savings)",
        "address": "3PPKVawkKTm2eW5TDdh7z495BYVAKtA4im2",
        "transactions": [
          {
            "date": "2023-03-10 18:59:00",
            "action": "receive",
            "amount": 0.0016,
            "fee": 0.0016
          },
          {
            "date": "2023-03-10 19:04:00",
            "action": "receive",
            "amount": 67.185505,
            "fee": 0.0016
          },
          {
            "date": "2023-04-21 01:01:39",
            "action": "receive",
            "amount": 46.29750475,
            "fee": 0.0016
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Moonbeam",
    "symbol": "GLMR",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-05-12 08:38:12",
            "action": "buy",
            "price": 1.127,
            "total": 24.9067
          },
          {
            "date": "2022-08-18 06:30:46",
            "action": "buy",
            "price": 0.67,
            "total": 299.959
          },
          {
            "date": "2022-08-18 08:03:31",
            "action": "sell",
            "price": 0.6098,
            "filled": 468.4
          },
          {
            "date": "2022-08-26 10:57:19",
            "action": "buy",
            "price": 0.575,
            "total": 299.9775
          },
          {
            "date": "2022-08-27 19:09:49",
            "action": "buy",
            "price": 0.54,
            "total": 99.954
          },
          {
            "date": "2022-11-24 12:58:28",
            "action": "sell",
            "price": 0.3551,
            "filled": 713.4
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Kadena",
    "symbol": "KDA",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-05-12 09:10:30",
            "action": "buy",
            "price": 1.473,
            "total": 24.717
          },
          {
            "date": "2023-03-10 07:11:24",
            "action": "buy",
            "price": 0.918,
            "total": 49.99428
          },
          {
            "date": "2023-04-21 00:39:42",
            "action": "buy",
            "price": 0.943,
            "total": 74.99679
          },
          {
            "date": "2023-05-08 21:41:45",
            "action": "buy",
            "total": 19.9989,
            "price": 0.81
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Biconomy",
    "symbol": "BICO",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2021-01-01 02:00:00",
            "action": "buy",
            "price": 1.6,
            "total": 25
          },
          {
            "date": "2021-01-01 02:00:00",
            "action": "buy",
            "price": 1.9,
            "total": 25
          },
          {
            "date": "2022-05-13 13:52:53",
            "action": "buy",
            "price": 0.46,
            "total": 24.996
          },
          {
            "date": "2022-05-13 20:24:26",
            "action": "sell",
            "price": 0.488,
            "filled": 83.12202517162471
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "SafePal",
    "symbol": "SFP",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2023-05-08 21:42:50",
            "action": "buy",
            "total": 19.6392,
            "price": 0.4008
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Flux",
    "symbol": "FLUX",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-05-11 10:55:54",
            "action": "buy",
            "price": 0.752,
            "total": 24.99648
          },
          {
            "date": "2022-05-12 06:28:02",
            "action": "sell",
            "price": 0.617,
            "filled": 33.239999999999995
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Amp",
    "symbol": "AMP",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2023-04-21 00:39:13",
            "action": "buy",
            "price": 0.00366,
            "total": 74.99706
          },
          {
            "date": "2023-04-28 20:13:07",
            "action": "buy",
            "price": 0.00347,
            "total": 24.99788
          },
          {
            "date": "2023-05-08 21:42:09",
            "action": "buy",
            "total": 49.99912,
            "price": 0.00302
          },
          {
            "date": "2023-05-24 19:25:33",
            "price": 0.002558,
            "action": "buy",
            "total": 54.623532
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Secret",
    "symbol": "SCRT",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-11-24 12:58:56",
            "action": "buy",
            "price": 0.685,
            "total": 253.313
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Beta Finance",
    "symbol": "BETA",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-05-13 14:36:19",
            "action": "buy",
            "price": 0.0985,
            "total": 25.019
          },
          {
            "date": "2022-05-13 21:58:16",
            "action": "sell",
            "price": 0.09617,
            "filled": 253.99999999999997
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Biswap",
    "symbol": "BSW",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-05-09 22:02:11",
            "action": "buy",
            "price": 0.795,
            "total": 29.415
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Moonriver",
    "symbol": "MOVR",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2021-01-01 02:00:00",
            "action": "buy",
            "price": 60,
            "total": 25
          },
          {
            "date": "2021-01-01 02:00:00",
            "action": "buy",
            "price": 71,
            "total": 25
          },
          {
            "date": "2022-05-09 22:05:03",
            "action": "buy",
            "price": 27.2,
            "total": 25
          },
          {
            "date": "2022-09-15 17:46:43",
            "action": "buy",
            "price": 11.59,
            "total": 62.96847
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Polkastarter",
    "symbol": "POLS",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-06-12 14:01:36",
            "action": "buy",
            "price": 0.535,
            "total": 43.014
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "QuickSwap",
    "symbol": "QUICK",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-05-11 10:55:26",
            "action": "buy",
            "price": 93.2,
            "total": 25
          },
          {
            "date": "2022-06-12 14:45:15",
            "action": "buy",
            "price": 53.5,
            "total": 42.9
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "CLV",
    "symbol": "CLV",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-05-13 19:30:48",
            "action": "buy",
            "price": 0.15,
            "total": 25.11
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "REI Network",
    "symbol": "REI",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-06-13 13:27:08",
            "action": "buy",
            "price": 0.0269,
            "total": 29.9989
          },
          {
            "date": "2022-07-07 10:22:34",
            "action": "sell",
            "price": 0.0522,
            "filled": 557.6
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Tellor",
    "symbol": "TRB",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-06-13 13:27:29",
            "action": "buy",
            "price": 11.25,
            "total": 33.75
          },
          {
            "date": "2022-07-18 15:11:42",
            "action": "sell",
            "price": 20.93,
            "filled": 1.5
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Anchor Protocol",
    "symbol": "ANC",
    "wallets": [
      {
        "name": "Binance",
        "address": "binance_1",
        "transactions": [
          {
            "date": "2022-05-11 10:52:57",
            "action": "buy",
            "price": 0.18,
            "total": 24.9984
          }
        ]
      }
    ],
    "token_address": ""
  },
  {
    "name": "Coinracer",
    "symbol": "CRACE",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "date": "2021-10-27 18:52:00",
            "action": "buy",
            "total": 10,
            "price": 0.04312414181,
            "usdFee": 0.5
          }
        ]
      }
    ],
    "token_address": "0xFBb4F2f342c6DaaB63Ab85b0226716C4D1e26F36"
  },
  {
    "name": "STEMX",
    "symbol": "STEMX",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "date": "2021-11-01 21:22:00",
            "action": "buy",
            "total": 10,
            "price": 0.0471159133,
            "usdFee": 0.53
          },
          {
            "date": "2021-11-02 23:42:00",
            "action": "transfer",
            "wallet": "0x02c18f708358887cb4993a9608e37216b71fe2a2",
            "amount": 212.242516372913,
            "usdFee": 0.1
          }
        ]
      },
      {
        "name": "",
        "address": "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        "transactions": [
          {
            "date": "2021-11-02 23:42:00",
            "action": "receive",
            "amount": 212.242516372913,
            "usdFee": 0.1
          }
        ]
      }
    ],
    "token_address": "0x26734ADd0650719eA29087fe5CC0AaB81b4f237D"
  },
  {
    "name": "Smarty Pay",
    "symbol": "SPY",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "date": "2021-10-28 14:50:00",
            "action": "buy",
            "total": 10,
            "price": 0.32258064516,
            "usdFee": 0.48
          }
        ]
      }
    ],
    "token_address": "0x17fd3cAa66502C6F1CbD5600D8448f3aF8f2ABA1"
  },
  {
    "name": "Cpos Cloud Payment",
    "symbol": "CPOS",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "date": "2021-10-20 22:40:00",
            "action": "buy",
            "total": 100,
            "price": 0.61061383626,
            "usdFee": 0.49
          },
          {
            "date": "2021-10-21 15:19:00",
            "action": "buy",
            "total": 46.77206513,
            "price": 0.24509510402,
            "usdFee": 0.39
          }
        ]
      }
    ],
    "token_address": "0xc0DC5aDfaE1DadA9111F376810d772CABD9B6f13"
  },
  {
    "name": "Crypto Gaming United",
    "symbol": "CGU",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "date": "2021-11-01 21:15:00",
            "action": "buy",
            "total": 10,
            "price": 2.07535432665,
            "usdFee": 0.38
          }
        ]
      }
    ],
    "token_address": "0x849a226f327b89e3133d9930d927f9eb9346f8c9"
  },
  {
    "name": "Shib Army",
    "symbol": "SHIBARMY",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "date": "2021-11-02 20:08:00",
            "action": "buy",
            "total": 10,
            "price": 2.67144356e-8,
            "usdFee": 1.08
          }
        ]
      }
    ],
    "token_address": "0x940230b6b7ef1979a28F32196A8e3439C645BA49"
  },
  {
    "name": "Altbase",
    "symbol": "ALTB",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "date": "2021-10-28 14:27:00",
            "action": "buy",
            "total": 10,
            "price": 0.01437182068,
            "usdFee": 0.6
          }
        ]
      }
    ],
    "token_address": "0x9B3a01F8b4aBD2E2a74597B21b7C269ABf4E9f41"
  },
  {
    "name": "Stabledoc Token",
    "symbol": "SDT",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "date": "2021-10-29 13:51:00",
            "action": "buy",
            "total": 10,
            "price": 0.0198949286,
            "usdFee": 0.57
          }
        ]
      }
    ],
    "token_address": "0x543C7eBb52D56985f63F246A5b3558AFF79037d7"
  },
  {
    "name": "MetaWars",
    "symbol": "WARS",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "date": "2021-10-27 18:37:00",
            "action": "buy",
            "total": 10,
            "price": 0.20708690199,
            "usdFee": 0.41
          }
        ]
      }
    ],
    "token_address": "0x50e756a22ff5cEE3559D18B9D9576bc38F09Fa7c"
  },
  {
    "name": "DVX",
    "symbol": "DRIVENx",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "date": "2021-10-28 08:26:00",
            "action": "buy",
            "total": 10,
            "price": 0.00953052356,
            "usdFee": 1.86
          }
        ]
      }
    ],
    "token_address": "0x6db3972c6a5535708e7A4F7Ad52F24d178D9A93e"
  },
  {
    "name": "CoinMooner",
    "symbol": "MOONER",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "date": "2021-10-28 08:07:00",
            "action": "buy",
            "total": 10,
            "price": 0.04621214594,
            "usdFee": 1.06
          }
        ]
      }
    ],
    "token_address": "0x34E942859469c9dB9C22F4eAF866E2c2401BB795"
  },
  {
    "name": "Doge Floki Coin",
    "symbol": "DOFI",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "date": "2021-10-28 08:20:00",
            "action": "buy",
            "total": 10,
            "price": 3.0544536e-11,
            "usdFee": 0.59
          }
        ]
      }
    ],
    "token_address": "0xF9d6DDF44016953dBf7aB135A0F64d7A41870EDE"
  },
  {
    "name": "GreenTrust",
    "symbol": "GNT",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "date": "2021-12-01 15:32:00",
            "action": "buy",
            "price": 3.05554522e-8,
            "total": 20,
            "usdFee": 0.61
          }
        ]
      }
    ],
    "token_address": "0xF750A26EB0aCf95556e8529E72eD530f3b60f348"
  },
  {
    "name": "Relay Token",
    "symbol": "RELAY",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "date": "2021-12-01 15:30:00",
            "action": "buy",
            "total": 30.03,
            "price": 3.17032385575,
            "usdFee": 0.3
          }
        ]
      }
    ],
    "token_address": "0x5d843fa9495d23de997c394296ac7b4d721e841c"
  },
  {
    "name": "Afrostar",
    "symbol": "AFRO",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "date": "2021-11-02 20:09:00",
            "action": "buy",
            "total": 10,
            "price": 7.58839451e-8,
            "usdFee": 0.86
          }
        ]
      }
    ],
    "token_address": "0x2F4e9c97aAFFD67D98A640062d90e355B4a1C539"
  },
  {
    "name": "CZFarm",
    "symbol": "CZF",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "date": "2021-11-05 00:48:00",
            "action": "buy",
            "total": 11,
            "price": 0.00000777511,
            "usdFee": 0.58
          }
        ]
      }
    ],
    "token_address": "0x7c1608C004F20c3520f70b924E2BfeF092dA0043"
  },
  {
    "name": "Wanaka Wai Token",
    "symbol": "WAI",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "date": "2021-10-28 13:57:00",
            "action": "buy",
            "total": 10,
            "price": 0.13544872433,
            "usdFee": 0.44
          }
        ]
      }
    ],
    "token_address": "0x934C9198582Bf2631128c5D4b051aacEF9a6224F"
  },
  {
    "name": "Baby Squid Game",
    "symbol": "BSG",
    "wallets": [
      {
        "name": "",
        "address": "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        "transactions": [
          {
            "date": "2021-11-04 01:30:00",
            "action": "buy",
            "total": 23.2,
            "price": 0.00000433583,
            "usdFee": 0.87
          }
        ]
      }
    ],
    "token_address": "0xe8993eA85B9AA3E864fEf4F7685966c485546161"
  },
  {
    "name": "Crypto Classic",
    "symbol": "CRC",
    "wallets": [
      {
        "name": "",
        "address": "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        "transactions": [
          {
            "date": "2021-11-03 13:10:00",
            "action": "buy",
            "total": 10,
            "price": 0.49690508262,
            "usdFee": 0.6
          }
        ]
      }
    ],
    "token_address": "0xf7bcac494fd9530c183dae30db48d45144ff2c77"
  },
  {
    "name": "BuffedShiba",
    "symbol": "BSHIB",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "date": "2021-11-02 20:12:00",
            "action": "buy",
            "total": 10,
            "price": 7.42594134e-8,
            "usdFee": 0.64
          }
        ]
      }
    ],
    "token_address": "0xD8F61cdECA41dEF1a7923F308a042F678109f54B"
  },
  {
    "name": "PicArtNFT Token",
    "symbol": "PANFT",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "date": "2021-10-27 20:44:00",
            "action": "buy",
            "total": 20,
            "price": 0.00946489169,
            "usdFee": 0.41
          }
        ]
      }
    ],
    "token_address": "0xa4320b3a595D07D79c6F7ccf3DF825A8d0030a46"
  },
  {
    "name": "MOONGAME",
    "symbol": "MGT",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "date": "2021-10-27 18:53:00",
            "action": "buy",
            "total": 10,
            "price": 0.00866823362,
            "usdFee": 1.94
          }
        ]
      }
    ],
    "token_address": "0x47CBd8454C986a15C16d285bD228D214F662Dcf3"
  },
  {
    "name": "BrandPad",
    "symbol": "BRAND",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "date": "2021-10-27 18:39:00",
            "action": "buy",
            "total": 10,
            "price": 0.05292707452,
            "usdFee": 0.6
          }
        ]
      }
    ],
    "token_address": "0x4d993ec7b44276615bB2F6F20361AB34FbF0ec49"
  },
  {
    "name": "LovePot Token",
    "symbol": "LOVE",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "date": "2021-10-28 08:29:00",
            "action": "buy",
            "total": 10,
            "price": 0.04041580788,
            "usdFee": 0.5
          }
        ]
      }
    ],
    "token_address": "0xd631d33F2c3f38d9ABDaE08ebC0B69fA636E8ec2"
  },
  {
    "name": "NFans",
    "symbol": "NFS",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "date": "2021-10-28 08:30:00",
            "action": "buy",
            "total": 10,
            "price": 0.37477473588,
            "usdFee": 0.33
          }
        ]
      }
    ],
    "token_address": "0x6eE002Ce31Ce4E52211EEfb2d3986082663D5F60"
  },
  {
    "name": "CashCow",
    "symbol": "COW",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "date": "2021-10-28 08:28:00",
            "action": "buy",
            "total": 10,
            "price": 5.00059404557,
            "usdFee": 0.67
          }
        ]
      }
    ],
    "token_address": "0x8B6fA031c7D2E60fbFe4E663EC1B8f37Df1ba483"
  },
  {
    "name": "Omni Consumer Protocols",
    "symbol": "OCP",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "date": "2021-10-28 11:31:00",
            "action": "buy",
            "total": 10,
            "price": 0.09204737086,
            "usdFee": 0.51
          }
        ]
      }
    ],
    "token_address": "0x3C70260eEe0a2bFc4b375feB810325801f289fBd"
  },
  {
    "name": "PulseDoge",
    "symbol": "PulseDoge",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "date": "2021-11-01 21:10:00",
            "action": "buy",
            "total": 10,
            "price": 0.03966198056,
            "usdFee": 0.54
          }
        ]
      }
    ],
    "token_address": "0xD4d55B811d9eDe2aDce61a98d67d7f91bFfcE495"
  },
  {
    "name": "Baby White Hamster",
    "symbol": "$BWH",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.00102315323,
            "usdFee": 3.04,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x4ed2bBfc2fC7b0B7400D8D12248649045e82c708"
  },
  {
    "name": "POLYX",
    "symbol": "PXT",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.00303693325,
            "usdFee": 1.59,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x6B226E4F3eF5708D496cD1b9E582ea090F3fFf70"
  },
  {
    "name": "GamingDoge",
    "symbol": "GamingDoge",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 7.6636017e-11,
            "usdFee": 0.74,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x536627083e216C3Cf4476ec504eb51Bbd47cA4ac"
  },
  {
    "name": "TaiChi",
    "symbol": "TAC",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 490.465281361,
            "usdFee": 0.57,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0xe49bfC53A195a62D78A941a1967d7B0f83a47C14"
  },
  {
    "name": "BabyXape",
    "symbol": "BABYX",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.00001692759,
            "usdFee": 2.37,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x234003FFa399E8bc53236AC777F4C781B10D1344"
  },
  {
    "name": "Cockapoo",
    "symbol": "CPOO",
    "wallets": [
      {
        "name": "",
        "address": "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.00002781364,
            "usdFee": 1.39,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x71809c4ff017ceade03038a8b597ecabb6519918"
  },
  {
    "name": "Infomatix",
    "symbol": "INFO",
    "wallets": [
      {
        "name": "",
        "address": "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.03553262481,
            "usdFee": 0.56,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0xdF727040d3997b5D95deE8c661fA96E3c13eE0C9"
  },
  {
    "name": "Muslim Coins",
    "symbol": "MUSC",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "price": 0.05159540606,
            "total": 9.1936,
            "usdFee": 0.89,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x8B93585978B81E4FC0aE063fe526dBfBE9B8D42D"
  },
  {
    "name": "YTizer",
    "symbol": "YTZ",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "price": 0.00111036205,
            "total": 20,
            "usdFee": 0.57,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x51E5dCF44f8eb51dCd44CDc568f7c29e8557f560"
  },
  {
    "name": "DICKCOIN",
    "symbol": "DICK",
    "wallets": [
      {
        "name": "",
        "address": "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 1.5778569e-10,
            "usdFee": 2.13,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x51F5B377910323d6453697752ADA04AD34847c84"
  },
  {
    "name": "BurgerBurn",
    "symbol": "BRGB",
    "wallets": [
      {
        "name": "",
        "address": "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 7.97479129e-9,
            "usdFee": 0.72,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0xf594AAcC5437A74591C8807B72ACC6c160160015"
  },
  {
    "name": "Crazy Bunny Equity Token",
    "symbol": "CBUNNY",
    "wallets": [
      {
        "name": "",
        "address": "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.00000285429,
            "usdFee": 0.55,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0xAec23008B1098E39c0f8De90Bf7431d185EfE8B3"
  },
  {
    "name": "ZOO",
    "symbol": "ZOO",
    "wallets": [
      {
        "name": "",
        "address": "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.00010827163,
            "usdFee": 0.56,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x09e2b83fe5485a7c8beaa5dffd1d324a2b2d5c13"
  },
  {
    "name": "Financio Token",
    "symbol": "FIN",
    "wallets": [
      {
        "name": "",
        "address": "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.11408364477,
            "usdFee": 0.55,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x09E7E61f28e83c7bAC827a0EC9dcD800CE4B4CC1"
  },
  {
    "name": "Maggot",
    "symbol": "MAGGOT",
    "wallets": [
      {
        "name": "",
        "address": "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.42624148496,
            "usdFee": 1.8,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0xDBc68862a8880C0c4693A920BD1e461f07F6262e"
  },
  {
    "name": "Luminos Mining Protocol",
    "symbol": "LUMI",
    "wallets": [
      {
        "name": "",
        "address": "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.01848392815,
            "usdFee": 0.56,
            "date": "Invalid date"
          },
          {
            "action": "buy",
            "total": 10,
            "price": 0.01558993692,
            "usdFee": 0.51,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x37c9aB94818c995569fd6f23fECCEC54bce900e0"
  },
  {
    "name": "GodShiba TOKEN",
    "symbol": "GSHIB",
    "wallets": [
      {
        "name": "",
        "address": "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.00444418193,
            "usdFee": 1.66,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0xE38928cd467AD7347465048b3637893124187d02"
  },
  {
    "name": "Shibu Life Token",
    "symbol": "SHIBU",
    "wallets": [
      {
        "name": "",
        "address": "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 1.91470414e-7,
            "usdFee": 0.55,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x2690A474c68f4313603816E3Cc6576A74b56944f"
  },
  {
    "name": "Wolverine",
    "symbol": "WLVR",
    "wallets": [
      {
        "name": "",
        "address": "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.00000456469,
            "usdFee": 1.12,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0xBe6dE6b614b079236839404440E3e8867B5d6751"
  },
  {
    "name": "ApeLab",
    "symbol": "Ape",
    "wallets": [
      {
        "name": "",
        "address": "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.00000350898,
            "usdFee": 0.65,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x54283eb77CC33182c06B311248c48C73AdF4E2eF"
  },
  {
    "name": "Secured Ship",
    "symbol": "SHIP",
    "wallets": [
      {
        "name": "",
        "address": "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 2.50190821e-8,
            "usdFee": 1.15,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0xc0a696bbb66352e5b88624f1d1b8909c34dc4e4a"
  },
  {
    "name": "SafeDrive",
    "symbol": "Drive",
    "wallets": [
      {
        "name": "",
        "address": "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        "transactions": [
          {
            "action": "buy",
            "total": 20,
            "price": 7.41062313e-7,
            "usdFee": 0.81,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0xa321fC1171EB85498faD47D3d127368eBa70265C"
  },
  {
    "name": "WANAMOON",
    "symbol": "MOON",
    "wallets": [
      {
        "name": "",
        "address": "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        "transactions": [
          {
            "action": "buy",
            "total": 19.831460424648764,
            "price": 0.0000562151,
            "usdFee": 1.21,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0xc21490565Eaf5637D36508683cEb1003F8dCfC65"
  },
  {
    "name": "Promise",
    "symbol": "PROMISE",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 3.3424,
            "price": 5.9441412e-8,
            "usdFee": 0.32,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0xcbcCf14B051947BDcd1E20b77015208a1AD5EA25"
  },
  {
    "name": "CleanOcean",
    "symbol": "CLEANOCEAN",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 3.3911,
            "price": 5.22700146e-9,
            "usdFee": 0.33,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x579F11C75Eb4e47F5290122e87CA411644aDCD97"
  },
  {
    "name": "NFTBOOKS",
    "symbol": "NFTBS",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 3.0175,
            "price": 1.8208577e-12,
            "usdFee": 0.29,
            "date": "Invalid date"
          },
          {
            "action": "sell",
            "filled": 882618000000,
            "price": 9.7544905e-11,
            "usdFee": 1.08,
            "date": "Invalid date"
          },
          {
            "action": "sell",
            "filled": 610091853244.3385,
            "price": 3.8243422e-10,
            "usdFee": 2.2,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x3279510E89600ee1767a037DBD0aD49c974063AE"
  },
  {
    "name": "Shrew",
    "symbol": "SHREW",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 3.0175,
            "price": 0.00014370008,
            "usdFee": 0.2,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x0C13970D3c5db20d48446a24e29fB9A77cd60De4"
  },
  {
    "name": "Artex Token",
    "symbol": "ARTEX",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 15.144,
            "price": 0.02081802616,
            "usdFee": 0.2,
            "date": "Invalid date"
          },
          {
            "action": "buy",
            "total": 15.144,
            "price": 0.0198315787,
            "usdFee": 0.18,
            "date": "Invalid date"
          },
          {
            "action": "buy",
            "total": 15.144,
            "price": 0.01829936286,
            "usdFee": 0.18,
            "date": "Invalid date"
          },
          {
            "action": "buy",
            "total": 15.144,
            "price": 0.01813792121,
            "usdFee": 0.18,
            "date": "Invalid date"
          },
          {
            "action": "buy",
            "total": 18.48,
            "price": 0.02120563505,
            "usdFee": 0.18,
            "date": "Invalid date"
          },
          {
            "action": "sell",
            "filled": 1082.932955888186,
            "price": 0.03693672796,
            "usdFee": 0.46,
            "date": "Invalid date"
          },
          {
            "action": "transfer",
            "wallet": "0x02c18f708358887cb4993a9608e37216b71fe2a2",
            "amount": 2942.1161978443474,
            "usdFee": 0.1,
            "date": "Invalid date"
          }
        ]
      },
      {
        "name": "",
        "address": "0x02c18f708358887cb4993a9608e37216b71fe2a2",
        "transactions": [
          {
            "action": "receive",
            "amount": 2942.116196874578,
            "usdFee": 0.1,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0xf1B032e7225D1c9068Ce317A956a0e8007591bA0"
  },
  {
    "name": "SHIWBAWITCH TOKEN",
    "symbol": "SHIBAWITCH",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.00067699405,
            "usdFee": 1.82,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x0484fBCa58aD880F2232b9ef7BC1d23206236bbd"
  },
  {
    "name": "RemeX",
    "symbol": "RMX",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 2.31811735e-9,
            "usdFee": 0.67,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x893e258ee221c9c8Da50d01108d1Ac47cFC3Dc9a"
  },
  {
    "name": "BidenOneTrillionCoin",
    "symbol": "B1TC",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.00000123245,
            "usdFee": 0.6,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x90316dddE4E2cC292F11c85e427Cb94343ec1508"
  },
  {
    "name": "Stakd Token",
    "symbol": "STKD",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.00000546082,
            "usdFee": 0.89,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x578B2A12D2c661cD4Abfb8E98670acD7B2323bc7"
  },
  {
    "name": "Coin Sack",
    "symbol": "CS",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.00000238608,
            "usdFee": 0.73,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x125Ce3f13950C5fA94397927F88C352FdED680Ad"
  },
  {
    "name": "Hoodler.io",
    "symbol": "HOOD",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 9.16,
            "price": 0.01640713698,
            "usdFee": 0.54,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x02df6cF91C519db4aC254216A8Ed3A17aeCFaED7"
  },
  {
    "name": "Elonomics",
    "symbol": "$ELONOM",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.97528624651,
            "usdFee": 1.97,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0xd3ecC6a4ce1a9fAEC1AA5E30B55f8a1a4b84F938"
  },
  {
    "name": "Sulgecoin",
    "symbol": "SUG",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.97979638263,
            "usdFee": 0.44,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x668A5163991662Ca5098B2C1357CB73BBCb88a4f"
  },
  {
    "name": "GreenMoonZilla",
    "symbol": "GrmZilla",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 4.9132868e-9,
            "usdFee": 2.06,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0xA1Fd7Ec67A2997b6Cd440f90085925459eD03f1a"
  },
  {
    "name": "BooCake",
    "symbol": "BooCake",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.00000773403,
            "usdFee": 1.81,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0xB2c4cBa4C5bd8BB7078754B7736EE5ed5D835De9"
  },
  {
    "name": "Gummy Bull Token",
    "symbol": "GUMMY",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.05235408683,
            "usdFee": 0.51,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x10D3e0C38c286a04aee44d9B01CaC916B56Ee05A"
  },
  {
    "name": "Doge Army Token",
    "symbol": "DGAT",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 7.43172424e-7,
            "usdFee": 4.58,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x96E3BD1915483eD6E6569e908a0F6F49434557eD"
  },
  {
    "name": "BabyFlokiDoge",
    "symbol": "BABYFD",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 3.5360208e-10,
            "usdFee": 0.7,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x747c4ce9622ea750ea8048423b38a746b096c8e8"
  },
  {
    "name": "CakeZilla",
    "symbol": "CakeZilla",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.0000158075,
            "usdFee": 1.24,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x443b3143d284e856389eFdB929903f773D993E2e"
  },
  {
    "name": "Pixl Coin",
    "symbol": "PXLC",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.00481089093,
            "usdFee": 0.76,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x72d2946094E6E57c2faDe4964777A9af2B7A51F9"
  },
  {
    "name": "MetaDubai Coin",
    "symbol": "MDB",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.00001451762,
            "usdFee": 1.71,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x033Fc4eC65a22D29A87631e5feD9616A0d343f42"
  },
  {
    "name": "DarkMAGICK",
    "symbol": "DMGK",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.03373980359,
            "usdFee": 1.39,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x6F89660fEf8B6a03a41E5F3d0306645BE2469eFE"
  },
  {
    "name": "Waifer",
    "symbol": "Waifer",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 1.50231504e-8,
            "usdFee": 0.73,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0xEA3d8c4fA272A81ED2a18dFf43A98cebD3847C02"
  },
  {
    "name": "Floki Elon",
    "symbol": "FlokiElon",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 1.4220016e-10,
            "usdFee": 0.62,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0xc4a54699d24C5C130cf866974181E41e22bb3b07"
  },
  {
    "name": "Infinity Game NFT",
    "symbol": "IGN",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.00709214925,
            "usdFee": 0.56,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0xf071AF4Da0D1c4f9BfD624C2C5eced7C5fe52573"
  },
  {
    "name": "BabyDogeZilla",
    "symbol": "BabyDogeZilla",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 2.401846e-16,
            "usdFee": 0.88,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x0fbc08905c1d683Cf7530bb2a70Bb0BDE231E5B9"
  },
  {
    "name": "Seadog Metaverse",
    "symbol": "SEADOG",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.0198949286,
            "usdFee": 0.48,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0xd827036B0173F204C57b26532a339B57D4d5AEA6"
  },
  {
    "name": "ShibaZilla",
    "symbol": "SHIBAZ",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 3.44073119e-9,
            "usdFee": 2.32,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0xD00A7EdD637B776eC5a6461F5e7ac055F14a0C1E"
  },
  {
    "name": "HELLMOON",
    "symbol": "HMOON",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.00000362764,
            "usdFee": 0.51,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x46328f831cFF23F44D65fa5e53a7217a660554Aa"
  },
  {
    "name": "Godzilla",
    "symbol": "GODZ",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 3.00331111e-8,
            "usdFee": 0.67,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0xDa4714fEE90Ad7DE50bC185ccD06b175D23906c1"
  },
  {
    "name": "Monster Grand Prix Token",
    "symbol": "MGPX",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.58135319363,
            "usdFee": 0.55,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0xcBd7142E42666132abe1F4C57996b2D5e8b0C9E2"
  },
  {
    "name": "MemeCoin Factory",
    "symbol": "FACTORY",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.00026969416,
            "usdFee": 1.52,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x6E1f76017024BaF9dc52a796dC4e5Ae3110005c2"
  },
  {
    "name": "Shibosu",
    "symbol": "Shibosu",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 2.01971093e-7,
            "usdFee": 1.9,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x5dfb6437489235fe08a8F706Bb261938f4E2D849"
  },
  {
    "name": "Booster",
    "symbol": "BOOST",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 6.7322275e-9,
            "usdFee": 1.34,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x773b532126b9F307665942b0fa4cDa0540CeDb71"
  },
  {
    "name": "NFT Royal Token",
    "symbol": "NRT",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 1.00676214755,
            "usdFee": 0.54,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x1B2F67679798C764f2C0c69DFB6bDa8b30a094cf"
  },
  {
    "name": "Tiny Titans V3",
    "symbol": "TITS",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.22037971017,
            "usdFee": 0.54,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x2a5eB92f6a410AC0BB38D92C13DA934bD68EF24E"
  },
  {
    "name": "Ninja Fantasy Token",
    "symbol": "NFS",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 1.80555254578,
            "usdFee": 0.54,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x64815277c6CAF24c1C2B55B11c78EF393237455C"
  },
  {
    "name": "FLOKACHU TOKEN",
    "symbol": "FLOKACHU",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 3.82580753e-7,
            "usdFee": 2.22,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x8167B85a10cE3bF274C464362ae9b2D411dBa447"
  },
  {
    "name": "Shibanomi",
    "symbol": "SHIO",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.0000158497,
            "usdFee": 0.54,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x0C251e67d41Efc33a9d3264a5492F63f743CA87c"
  },
  {
    "name": "Mirai",
    "symbol": "MIRAI",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.00002353971,
            "usdFee": 1.03,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0xE74C273ab62169656df1Dd146F40e26Baef5B057"
  },
  {
    "name": "Disco Burn Token",
    "symbol": "DBT",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.0164686818,
            "usdFee": 0.7,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x4A251d4fDcbbbc0A3d6Aa44F14B96480C4933C9C"
  },
  {
    "name": "BFK WARZONE",
    "symbol": "BFK",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.00320695192,
            "usdFee": 0.82,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0xEd44623b06616BCceC876617c124F5461Bd5f79B"
  },
  {
    "name": "Meta Floki",
    "symbol": "MFLOKI",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.00002201049,
            "usdFee": 2.39,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x1931461C770509cC20ACA503D3c5637e7B6C5220"
  },
  {
    "name": "UltraChad",
    "symbol": "uCHAD",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 3.84062e-10,
            "usdFee": 0.7,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x17e7668dBcAae71b8965cd44785D070BD4e129cf"
  },
  {
    "name": "Sea Token",
    "symbol": "SEA",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.34395974299,
            "usdFee": 1.31,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x5B31d474Dcadc1c2A1DFc7D4562b2268B0feea43"
  },
  {
    "name": "Otium",
    "symbol": "OTIUM",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.0022335272,
            "usdFee": 1.46,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x56A02228CE17DBBbc809fe2262B36Dd99f28E824"
  },
  {
    "name": "Leafty",
    "symbol": "LEAFTY",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.01379783041,
            "usdFee": 2.34,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x04A65456316639941Ba013Fb8F829625698ADF72"
  },
  {
    "name": "No FUD Token",
    "symbol": "NOFUD",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.00234914004,
            "usdFee": 2.52,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0xCbadf5a1e9fd5936C920006d32F228116875bDc4"
  },
  {
    "name": "LlamaSwap Token",
    "symbol": "LAMA",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.13882375509,
            "usdFee": 0.57,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x0FC013E24AE732fcEc9Eb6BF8CAE12782a56bE7E"
  },
  {
    "name": "Sadbaby",
    "symbol": "SDBY",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.00003610436,
            "usdFee": 0.76,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x3AD405ef7AeA80CCb41beEf0a74510e18Feef190"
  },
  {
    "name": "Boom Shiba",
    "symbol": "BOOMSHIBA",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.00003196154,
            "usdFee": 1.99,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x5B5e0dFc9215b4a09139FB5960Da1376c416C375"
  },
  {
    "name": "Meta Cat",
    "symbol": "MCAT",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.00000498242,
            "usdFee": 0.75,
            "date": "Invalid date"
          },
          {
            "action": "buy",
            "price": 1.73103995e-7,
            "total": 20,
            "usdFee": 1.03,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x0EaD9d6Bda8408cC34e938Ea35559Db738A7c76a"
  },
  {
    "name": "Boorio",
    "symbol": "ORIO",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.00000462831,
            "usdFee": 0.66,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0xa30BAba694b8Fc3524C46edC5af295F55381dc60"
  },
  {
    "name": "Corsac Token",
    "symbol": "CSCT",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 4.69744921e-8,
            "usdFee": 2.37,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x63aC1962FF47921Cbf66F444b907F8aB93da4F08"
  },
  {
    "name": "Justfarm",
    "symbol": "JFM",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.03769950935,
            "usdFee": 0.54,
            "date": "Invalid date"
          },
          {
            "action": "buy",
            "total": 10,
            "price": 0.03771137246,
            "usdFee": 0.5,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x221d20Fe8996b49590513E5b5b8f9d8b0024Dc40"
  },
  {
    "name": "CardanoEvo",
    "symbol": "cEvo",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.00001189849,
            "usdFee": 2.02,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0xc23997371bd83de427b41DAbE11846C87696f40a"
  },
  {
    "name": "Sakura Neko",
    "symbol": "NEKO",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.00000797737,
            "usdFee": 0.71,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x2c5f1769B819B5e70AA7106c989D38Ad71ba2546"
  },
  {
    "name": "Nowlage Coin",
    "symbol": "NAC",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.0460441995,
            "usdFee": 0.54,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0xe198e8Fe1aaB441E54d9572E2402D7B132ccB15a"
  },
  {
    "name": "SymBULL",
    "symbol": "SYMBULL",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.00038790709,
            "usdFee": 2.31,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0xA176fa55bef56D18ab671251957aCB0Db630539b"
  },
  {
    "name": "ForeverBNB",
    "symbol": "FBNB",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 2.99210523e-8,
            "usdFee": 2.91,
            "date": "Invalid date"
          },
          {
            "action": "buy",
            "total": 10,
            "price": 5.28328632e-9,
            "usdFee": 2.71,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x4B7bF20baaE7F04AbEa55B49c0fFBC31758A05a4"
  },
  {
    "name": "SatoShiba",
    "symbol": "SATO",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.13519172315,
            "usdFee": 0.99,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x7d1883e8e57c296A254e90Cd859DF5E3686E00EA"
  },
  {
    "name": "RottenFloki",
    "symbol": "Rotten",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.00232910834,
            "usdFee": 0.69,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x7f976fCE4Ff9f5Fa3ED76609C5Cb4d406399e32D"
  },
  {
    "name": "Lavabird",
    "symbol": "LVBD",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.00000495943,
            "usdFee": 0.7,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x2A968F49FB48A3d792Ee8A0663E042B69A077578"
  },
  {
    "name": "Leon Token",
    "symbol": "LEON",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.04913089977,
            "usdFee": 0.54,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x27E873bee690C8E161813DE3566E9E18a64b0381"
  },
  {
    "name": "Shibarmy",
    "symbol": "Shibarmy",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.0000204833,
            "usdFee": 0.96,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x1224Cabc48E750a38A85f040B48C33925B61a765"
  },
  {
    "name": "MEALS",
    "symbol": "MEALS",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.00001995674,
            "usdFee": 2.38,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x1C8f62567AE953e1081FD129a5024359CE3aD508"
  },
  {
    "name": "UnderMineGold",
    "symbol": "UMG",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "price": 0.00030398252,
            "total": 20,
            "usdFee": 0.61,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0xA73505453F58E367c80F16685079dAD6f4EA6b18"
  },
  {
    "name": "CryptoRun Token",
    "symbol": "CRN",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "price": 0.00090592906,
            "total": 20,
            "usdFee": 0.63,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0xBd16c4343fB5769A71983f3e131df9B1491c2314"
  },
  {
    "name": "Hippie Inu",
    "symbol": "HIPPIE",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "price": 9.14274583e-8,
            "total": 15,
            "usdFee": 0.77,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x3b8c8472216240a5593Fd2D6266F29e90E22f490"
  },
  {
    "name": "CHEEMSINU",
    "symbol": "$CINU",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "price": 1.063127e-15,
            "total": 20,
            "usdFee": 0.73,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0xdFE6891ce8E5a5c7Cf54fFdE406A6C2C54145F71"
  },
  {
    "name": "MELONx",
    "symbol": "$MLNX",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "price": 0.2002695674,
            "total": 233.32,
            "usdFee": 1.7,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0xF28709f1daa6CEE2847C5B9526ceba457331742b"
  },
  {
    "name": "SparkLab",
    "symbol": "Spark",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 10,
            "price": 0.00318931085,
            "usdFee": 0.6,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x683b383E9D6Cc523F4C9764daceBB5752892fc53"
  },
  {
    "name": "StarDust",
    "symbol": "SD",
    "wallets": [
      {
        "name": "",
        "address": "0xDc56ed4117C7d1350e9c7164220f6342F85BEA95",
        "transactions": [
          {
            "action": "buy",
            "total": 11,
            "price": 0.01957279551,
            "usdFee": 1.59,
            "date": "Invalid date"
          }
        ]
      }
    ],
    "token_address": "0x277819bF69667B48Af57aBC52DddCb92Ab6A2c45"
  }
];