import { StateInterface } from "../interfaces/state.interface";
import { CURRENCY_ENUM } from "../enums/currency.enum";
import { TAX_ENUM } from "../enums/tax.enum";

export const FINANCES_STATE: StateInterface[] = [
  {
    period: {
      month: 0,
      year: 2023,
      string: "January 2023"
    },
    savings: {
      percentage: 0.1,
      list: [
        {
          source: "Savings",
          amount: 10_500,
          payed: true,
        }
      ]
    },
    costs: {
      percentage: 0,
      list: [
        {
          source: "Costs",
          amount: 0,
          payed: true,
        }
      ]
    },
    debt: {
      list: [],
      payed: {
        list: [
          {
            source: "Taxes",
            payed: true,
            amount: 10_500,
          }
        ]
      }
    },
    income: {
      list: [
        {
          source: 'Crosssoft',
          amount: 111_806.3
        },
      ]
    },
    taxes: {
      list: [
        {
          type: TAX_ENUM.SINGLE_SOCIAL_CONTRIBUTION,
          source: "Єдиний соціальний внесок",
          amount: 1_474,
          payed: true,
        },
        {
          type: TAX_ENUM.SINGLE_TAX,
          source: "Єдиний податок",
          percentage: 0.05,
          payed: true,
          amount: 0,
        },
      ]
    },
    investing: {
      list: [
        {
          source: "Military bonds",
          currency: CURRENCY_ENUM.UAH,
          creation_date: '2023-01',
          payed: true,
          amount: 10_500
        },
        {
          source: "Cryptocurrency",
          payed: true,
          amount: 33_200
        }
      ]
    },
    lifeCosts: {
      list: [
        {
          source: "",
          payed: true,
          amount: 40_000
        }
      ]
    },
  },
  {
    period: {
      month: 1,
      year: 2023,
      string: "February 2023"
    },
    savings: {
      percentage: 0.1,
      list: [
        {
          source: "Savings",
          amount: 12_000,
          payed: true,
        }
      ]
    },
    costs: {
      percentage: 0,
      list: [
        {
          source: "Costs",
          amount: 0,
          payed: true,
        }
      ]
    },
    debt: {
      list: [
        {
          source: "Privatbank",
          amount: 20_000,
          description: "Returned debt Kitty"
        },
        {
          source: "Privatbank",
          amount: 10_000,
          description: "Mom's credit"
        },
        {
          source: "Privatbank",
          amount: 6_300,
          description: "Taxes"
        },
      ],
      payed: {
        list: [
          {
            source: "Kitty",
            payed: true,
            amount: 20_000,
          },
          {
            source: "Mom's credit",
            payed: true,
            amount: 22_000,
          },
          {
            source: "Taxes",
            payed: true,
            amount: 6_300,
          },
        ]
      }
    },
    income: {
      list: [
        {
          source: 'Crosssoft',
          amount: 127_990.4
        },
      ]
    },
    taxes: {
      list: [
        {
          type: TAX_ENUM.SINGLE_SOCIAL_CONTRIBUTION,
          source: "Єдиний соціальний внесок",
          amount: 1_474,
          payed: true,
        },
        {
          type: TAX_ENUM.SINGLE_TAX,
          source: "Єдиний податок",
          percentage: 0.05,
          payed: true,
          amount: 0,
        },
      ]
    },
    investing: {
      list: [
        {
          source: "Military bonds",
          currency: CURRENCY_ENUM.UAH,
          creation_date: '2023-02',
          payed: true,
          amount: 12_000
        },
        {
          source: "Cryptocurrency",
          payed: true,
          amount: 44_100
        },
      ]
    },
    lifeCosts: {
      list: [
        {
          source: "",
          payed: true,
          amount: 40_000
        }
      ]
    },
  },
  {
    period: {
      month: 2,
      year: 2023,
      string: "March 2023"
    },
    savings: {
      percentage: 0.1,
      list: [
        {
          source: "Savings",
          amount: 12_000,
          payed: true,
        }
      ]
    },
    costs: {
      percentage: 0,
      list: [
        {
          source: "Costs",
          amount: 0,
          payed: true,
        }
      ]
    },
    debt: {
      list: [],
      payed: {
        list: [
          {
            source: "Mentukh",
            amount: 12_000,
            payed: true,
          },
        ]
      }
    },
    income: {
      list: [
        {
          source: 'Crosssoft',
          amount: 127_990.1
        },
      ]
    },
    taxes: {
      list: [
        {
          type: TAX_ENUM.SINGLE_SOCIAL_CONTRIBUTION,
          source: "Єдиний соціальний внесок",
          amount: 1_474,
          payed: true,
        },
        {
          type: TAX_ENUM.SINGLE_TAX,
          source: "Єдиний податок",
          percentage: 0.05,
          payed: true,
          amount: 0,
        },
      ]
    },
    investing: {
      list: [
        {
          source: "Military bonds",
          currency: CURRENCY_ENUM.UAH,
          creation_date: '2023-03',
          payed: true,
          amount: 12_000
        },
        {
          source: "Cryptocurrency",
          payed: true,
          amount: 34_100
        }
      ]
    },
    lifeCosts: {
      list: [
        {
          source: "",
          payed: true,
          amount: 50_000
        }
      ]
    },
  },
  {
    period: {
      month: 3,
      year: 2023,
      string: "April 2023"
    },
    savings: {
      percentage: 0.1,
      list: [
        {
          source: "Savings",
          amount: 12_000,
          payed: true,
        }
      ]
    },
    costs: {
      percentage: 0,
      list: [
        {
          source: "Costs",
          amount: 0,
          payed: true,
        }
      ]
    },
    debt: {
      list: [],
      payed: {
        list: [
          {
            source: "Privatbank",
            amount: 6_500,
            payed: true,
          },
          {
            source: "Mentukh",
            amount: 5_500,
            payed: true,
          },
        ]
      }
    },
    income: {
      list: [
        {
          source: 'Crosssoft',
          amount: 127_990.1
        },
      ]
    },
    taxes: {
      list: [
        {
          type: TAX_ENUM.SINGLE_SOCIAL_CONTRIBUTION,
          source: "Єдиний соціальний внесок",
          amount: 1_474,
          payed: true,
        },
        {
          type: TAX_ENUM.SINGLE_TAX,
          source: "Єдиний податок",
          percentage: 0.05,
          payed: true,
          amount: 0,
        },
      ]
    },
    investing: {
      list: [
        {
          source: "Military bonds",
          currency: CURRENCY_ENUM.UAH,
          creation_date: '2023-04',
          payed: true,
          amount: 12_000
        },
        {
          source: "Crypto CREW",
          payed: true,
          amount: 3_300
        },
        {
          source: "Cryptocurrency",
          payed: true,
          amount: 20_800
        }
      ]
    },
    lifeCosts: {
      list: [
        {
          source: "",
          payed: true,
          amount: 60_000
        }
      ]
    },
  },
  {
    period: {
      month: 4,
      year: 2023,
      string: "May 2023"
    },
    savings: {
      percentage: 0.1,
      list: [
        {
          source: "Savings",
          amount: 12_000,
          payed: true,
        }
      ]
    },
    costs: {
      percentage: 0,
      list: [
        {
          source: "Costs",
          amount: 0,
          payed: true,
        }
      ]
    },
    debt: {
      list: [],
      payed: {
        list: [
          {
            source: "Privatbank",
            amount: 12_000,
            payed: true,
          },
        ]
      }
    },
    income: {
      list: [
        {
          source: 'Crosssoft',
          amount: 127_990.1
        },
        // {
        //   source: 'Glafkos',
        //   amount: 1_800,
        //   exchangeRate: 37.8,
        //   currency: CURRENCY_ENUM.USD,
        // },
      ]
    },
    taxes: {
      list: [
        {
          type: TAX_ENUM.SINGLE_SOCIAL_CONTRIBUTION,
          source: "Єдиний соціальний внесок",
          amount: 1_474,
          payed: true,
        },
        {
          type: TAX_ENUM.SINGLE_TAX,
          source: "Єдиний податок",
          percentage: 0.05,
          payed: true,
          amount: 0,
        },
      ]
    },
    investing: {
      list: [
        {
          source: "Military bonds",
          currency: CURRENCY_ENUM.UAH,
          creation_date: '2023-05',
          payed: true,
          amount: 12_000,
        },
        {
          source: "Cryptocurrency",
          payed: true,
          amount: 24_100
        },
      ]
    },
    lifeCosts: {
      list: [
        {
          source: "",
          payed: true,
          amount: 60_000
        }
      ]
    },
  },
  {
    period: {
      month: 5,
      year: 2023,
      string: "June 2023"
    },
    savings: {
      percentage: 0.1,
      list: [
        {
          source: "Savings",
          amount: 15_500,
          payed: true,
        }
      ]
    },
    costs: {
      percentage: 0,
      list: [
        {
          source: "Costs",
          amount: 0,
          payed: true,
        }
      ]
    },
    debt: {
      list: [],
      payed: {
        list: [
          {
            source: "Privatbank",
            amount: 10_500,
            payed: true,
          },
          {
            source: "Mom's credit",
            amount: 5000,
            payed: true,
          },
        ]
      }
    },
    income: {
      list: [
        {
          source: 'Crosssoft',
          amount: 164_558.7
        },
        // {
        //   source: 'Glafkos',
        //   amount: 1_800,
        //   exchangeRate: 37.8,
        //   currency: CURRENCY_ENUM.USD,
        // },
      ]
    },
    taxes: {
      list: [
        {
          type: TAX_ENUM.SINGLE_SOCIAL_CONTRIBUTION,
          source: "Єдиний соціальний внесок",
          amount: 1_474,
          payed: true,
        },
        {
          type: TAX_ENUM.SINGLE_TAX,
          source: "Єдиний податок",
          percentage: 0.05,
          payed: true,
          amount: 0,
        },
      ]
    },
    investing: {
      list: [
        {
          source: "Military bonds",
          currency: CURRENCY_ENUM.UAH,
          creation_date: '2023-06',
          amount: 15_500,
          payed: true,
        },
        {
          source: "Cryptocurrency",
          payed: true,
          amount: 37_800
        },
      ]
    },
    lifeCosts: {
      list: [
        {
          source: "",
          payed: true,
          amount: 70_500
        }
      ]
    },
  },
  {
    period: {
      month: 6,
      year: 2023,
      string: "July 2023"
    },
    savings: {
      percentage: 0.1,
      list: [
        {
          source: "Savings",
          amount: 15_500,
          payed: true,
        }
      ]
    },
    costs: {
      percentage: 0.0645,
      list: [
        {
          source: "Costs",
          amount: 10_000,
          payed: true,
        }
      ]
    },
    debt: {
      list: [],
      payed: {
        list: [
          {
            source: "Privatbank",
            amount: 15_500,
            payed: true,
          },
        ]
      }
    },
    income: {
      list: [
        {
          source: 'Crosssoft',
          amount: 164_558.4
        },
        // {
        //   source: 'Glafkos',
        //   amount: 1_800,
        //   exchangeRate: 37.8,
        //   currency: CURRENCY_ENUM.USD,
        // },
      ]
    },
    taxes: {
      list: [
        {
          type: TAX_ENUM.SINGLE_SOCIAL_CONTRIBUTION,
          source: "Єдиний соціальний внесок",
          amount: 1_474,
          payed: true,
        },
        {
          type: TAX_ENUM.SINGLE_TAX,
          source: "Єдиний податок",
          percentage: 0.05,
          payed: true,
          amount: 0,
        },
      ]
    },
    investing: {
      list: [
        {
          source: "Military bonds",
          currency: CURRENCY_ENUM.UAH,
          creation_date: '2023-07',
          amount: 15_500,
          payed: true,
        },
        {
          source: "Crypto CREW",
          payed: true,
          amount: 3_300
        },
        {
          source: "Cryptocurrency",
          payed: true,
          amount: 34_500
        }
      ]
    },
    lifeCosts: {
      list: [
        {
          source: "",
          payed: true,
          amount: 60_500
        }
      ]
    },
  },
  {
    period: {
      month: 7,
      year: 2023,
      string: "August 2023"
    },
    savings: {
      percentage: 0,
      list: []
    },
    costs: {
      percentage: 0.1,
      list: [
        {
          source: "Costs",
          amount: 15_500,
          payed: true,
        }
      ]
    },
    debt: {
      list: [
        {
          source: "Privatbank",
          amount: 8_200,
          description: "Life costs"
        },
      ],
      payed: {
        list: [
          {
            source: "Privatbank",
            amount: 0,
            payed: true,
          },
        ]
      }
    },
    income: {
      list: [
        {
          source: 'Crosssoft',
          amount: 164_558.7
        }
      ]
    },
    taxes: {
      list: [
        {
          type: TAX_ENUM.SINGLE_SOCIAL_CONTRIBUTION,
          source: "Єдиний соціальний внесок",
          amount: 1_474,
          payed: true,
        },
        {
          type: TAX_ENUM.SINGLE_TAX,
          source: "Єдиний податок",
          percentage: 0.05,
          payed: true,
          amount: 0,
        },
      ]
    },
    investing: {
      list: [
        {
          source: "Military bonds",
          currency: CURRENCY_ENUM.UAH,
          creation_date: '2023-08',
          amount: 15_500,
          payed: true,
        },
        {
          source: "Crypto CREW",
          payed: true,
          amount: 10_800
        },
        {
          source: "Cryptocurrency",
          payed: true,
          amount: 8_000
        },
        {
          source: "Cryptocurrency",
          payed: false,
          amount: 50_000
        },
      ]
    },
    lifeCosts: {
      list: [
        {
          source: "",
          payed: true,
          amount: 63_200
        }
      ]
    },
  },
  {
    period: {
      month: 8,
      year: 2023,
      string: "September 2023"
    },
    savings: {
      percentage: 0,
      list: []
    },
    costs: {
      percentage: 0.1,
      list: [
        {
          source: "Costs",
          amount: 15_500,
          payed: true,
        }
      ]
    },
    debt: {
      list: [],
      payed: {
        list: [
          {
            source: "Privatbank",
            amount: 0,
            payed: true,
          },
        ]
      }
    },
    income: {
      list: [
        {
          source: 'Crosssoft',
          amount: 164_558.7
        }
      ]
    },
    taxes: {
      list: [
        {
          type: TAX_ENUM.SINGLE_SOCIAL_CONTRIBUTION,
          source: "Єдиний соціальний внесок",
          amount: 1_474,
          payed: true,
        },
        {
          type: TAX_ENUM.SINGLE_TAX,
          source: "Єдиний податок",
          percentage: 0.05,
          payed: true,
          amount: 0,
        },
      ]
    },
    investing: {
      list: [
        {
          source: "Military bonds",
          currency: CURRENCY_ENUM.UAH,
          creation_date: '2023-09',
          amount: 15_500,
          payed: true,
        },
        {
          source: "Cryptocurrency Crypto CREW",
          payed: true,
          amount: 5_100
        },
        {
          source: "Cryptocurrency MA Andrij",
          payed: true,
          amount: 3_000
        },
        {
          source: "Cryptocurrency MA",
          payed: true,
          amount: 600
        },
        {
          source: "Cryptocurrency Comms",
          payed: true,
          amount: 37_500
        },
        {
          source: "Cryptocurrency",
          payed: false,
          amount: 22_600
        },
      ]
    },
    lifeCosts: {
      list: [
        {
          source: "",
          payed: true,
          amount: 55_000
        }
      ]
    },
  }
];