import { TAX_ENUM } from "../enums/tax.enum";
import { StateInterface } from "../interfaces/state.interface";

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
          amount: 1_475,
          payed: true,
        },
        {
          type: TAX_ENUM.SINGLE_TAX,
          source: "Єдиний податок",
          percentage: 0.05,
          payed: false,
          amount: 0,
        },
      ]
    },
    investing: {
      list: [
        {
          source: "Military bonds",
          payed: true,
          amount: 10_000
        },
        {
          source: "Cryptocurrency",
          payed: true,
          amount: 33_700
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
          amount: 6_300,
          payed: true,
        },
        {
          source: "Savings",
          amount: 5_700,
          payed: false,
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
          amount: 122_447.76
        },
        {
          source: 'Crosssoft',
          amount: 5_542.64
        },
      ]
    },
    taxes: {
      list: [
        {
          type: TAX_ENUM.SINGLE_SOCIAL_CONTRIBUTION,
          source: "Єдиний соціальний внесок",
          amount: 1_475,
          payed: true,
        },
        {
          type: TAX_ENUM.SINGLE_TAX,
          source: "Єдиний податок",
          percentage: 0.05,
          payed: false,
          amount: 0,
        },
      ]
    },
    investing: {
      list: [
        {
          source: "Military bonds",
          payed: true,
          amount: 13_400
        },
        {
          source: "Cryptocurrency",
          payed: true,
          amount: 42_700
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
          payed: false,
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
          amount: 1_475,
          payed: true,
        },
        {
          type: TAX_ENUM.SINGLE_TAX,
          source: "Єдиний податок",
          percentage: 0.05,
          payed: false,
          amount: 0,
        },
      ]
    },
    investing: {
      list: [
        {
          source: "Military bonds",
          payed: true,
          amount: 12_300
        },
        {
          source: "Cryptocurrency",
          payed: true,
          amount: 24_600
        },
        {
          source: "Cryptocurrency",
          payed: false,
          amount: 9_200
        },
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
          payed: false,
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
          amount: 1_475,
          payed: false,
        },
        {
          type: TAX_ENUM.SINGLE_TAX,
          source: "Єдиний податок",
          percentage: 0.05,
          payed: false,
          amount: 0,
        },
      ]
    },
    investing: {
      list: [
        {
          source: "Military bonds",
          payed: true,
          amount: 12_500
        },
        {
          source: "Crypto CREW",
          payed: true,
          amount: 3_300
        },
        {
          source: "Cryptocurrency",
          payed: false,
          amount: 30_300
        },
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
  }
];