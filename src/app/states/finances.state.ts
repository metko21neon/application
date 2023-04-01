import { StateInterface } from "../components/finances/interfaces/state.interface";

export const SAVINGS_STATE = {
  list: [
    {
      period: "June 2022",
      amount: 9_000
    },
    {
      period: "July 2022",
      amount: 9_000
    },
    {
      period: "August 2022",
      amount: 11_000
    },
    {
      period: "September 2022",
      amount: 11_000
    },
    {
      period: "October 2022",
      amount: 11_000
    },
    {
      period: "November 2022",
      amount: 11_000
    },
    {
      period: "December 2022",
      amount: 11_000
    },
  ]
};

export const DEBT_STATE = {
  list: [
    {
      source: "Privatbank",
      amount: 100_000
    },
    {
      source: "Mom's credit",
      amount: 30_000
    },
    {
      source: "Kitty",
      amount: 20_000
    },
    {
      source: "Taxes",
      amount: 16_800
    },
    {
      source: "Mentukh",
      amount: 17_500
    },
  ]
};

export const STATE: StateInterface[] = [
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
            source: "Privatbank",
            payed: true,
            amount: 22_000,
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
        // {
        //   source: 'Rest',
        //   amount: 5_500
        // }
      ]
    },
    taxes: {
      singleSocialContribution: 1_475,
      singleTaxPercentage: 0.05,
      payed: false
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
          amount: 22_200
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
    debt: {
      list: [
        {
          source: "Privatbank",
          amount: 18_000,
          description: "Returned debt Kitty"
        },
        {
          source: "Privatbank",
          amount: 16_800,
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
            amount: 16_800,
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
      singleSocialContribution: 1_475,
      singleTaxPercentage: 0.05,
      payed: false
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
          amount: 14_000
        },
        {
          source: "Cryptocurrency",
          payed: false,
          amount: 16_700
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
    debt: {
      list: [],
      payed: {
        list: [
          {
            source: "Privatbank",
            payed: true,
            amount: 24_000,
          }
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
      singleSocialContribution: 1_475,
      singleTaxPercentage: 0.05,
      payed: false
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
          payed: false,
          amount: 27_800
        },
      ]
    },
    lifeCosts: {
      list: [
        {
          source: "",
          payed: true,
          amount: 44_000
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
    debt: {
      list: [],
      payed: {
        list: [
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
      singleSocialContribution: 1_475,
      singleTaxPercentage: 0.05,
      payed: false
    },
    investing: {
      list: [
      ]
    },
    lifeCosts: {
      list: [
        {
          source: "",
          payed: true,
          amount: 44_000
        }
      ]
    },
  }
];