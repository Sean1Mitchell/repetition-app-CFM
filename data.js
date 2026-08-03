const CARD_DATA = {

  "corporate-objectives": [

    {
      question: "what is corporate objectives?",
      answer: "the goals set by the management of an organisation that align with its shareholders."
    },
    {
      question: "what is Total Shareholder Return (TSR)?",
      answer: "a measure of return for shareholders, combines capital gains and dividends received."
    },
    {
      question: "what is agency theory?",
      answer: "the theory that their can be conflict between management and shareholders."
    },
    {
      question: "what are the two ways of dealing with the agency problem?",
      answer: "internal and external mechanisms."
    },
    {
      question: "what are internal mechanisms?",
      answer: "fear of: hostile takeover, competition, job prospects, external auditors."
    },
    {
      question: "what are external mechanisms?",
      answer: "remunerations, board of directors, internal auditors, job prospects."
    },
    {
      question: "what is Stock Market Hypothesis (SMH)?",
      answer: "the ways in which to measure the performance of the stock market; operational, allocational, pricing."
    },
    {
      question: "what is operational?",
      answer: "the cost, speed, and reliability of transactions."
    },
    {
      question: "what is allocational?",
      answer: "the allocation of funds to where they can generate growth."
    },
    {
      question: "what is pricing?",
      answer: "the risk-adjusted return to investors."
    },
    {
      question: "what is Efficient Market Hypothesis (EMH)?",
      answer: "the theory that markets are rapidly relfective of all available information."
    },
    {
      question: "what is weak?",
      answer: "the market is only reflective of historical information."
    },
    {
      question: "what is semi-strong?",
      answer: "the market is reflective of historic and public disclosred information."
    },
    {
      question: "what is strong?",
      answer: "the market is reflective of historic, public disclosed, and private information (insider trading)."
    }
  ],

  "shareholder-wealth-and-company-valuation": [

    {
      question: "How do we increase shareholder wealth?",
      answer: "add value: capital invested x (actual return - required return). Planning horizon is how long we can make it happen."
    },
    {
      question: "what are the three things that increase wealth?",
      answer: "return on existing capital, investment in positive spreads, and planning horizon."
    },
    {
      question: "what are the two things that decrease wealth?",
      answer: "required rate of return and investment in negative spreads."
    },
    {
      question: "what are the two ways to increase wealth?",
      answer: "income and assets."
    },
    {
      question: "what are the three ways to do it through income?",
      answer: "Dividend Valuation Model (DVM), Price to Earnings (P/E), and Cashflow Model."
    },
    {
      question: "what are the five Dividend calculations?",
      answer: "constant, basic growth, year-to-year growth, present value of future dividends, and intrinsic share price."
    },
    {
      question: "what is the constant dividend calculation?",
      answer: "Dividend Paid x Required Rate of Return."
    },
    {
      question: "what is the basic growth dividend calculation?",
      answer: "Diviend Paid x (1 + Growth Rate)"
    },
    {
      question: "what is the year-to-year growth dividend calculation?",
      answer: "Dividned Paid x (1 + Growth Rate) ^ Period"
    },
    {
      question: "what is the present value of future dividends calculation?",
      answer: "Dividend Paid x (1 + Growth) ^ Period / (1 + Required Return) ^ Period"
    },
    {
      question: "what is the instrinsic share price calculation?",
      answer: "(Dividend Paid x (1 + Growth)) / (Required Return - Growth)"
    },
    {
      question: "what are the three ways to forecast dividend growth?",
      answer: "historic, retention, and Earnings."
    },
    {
      question: "what is historic?",
      answer: "if dividends rose 10p to 14p over 5-years = ((10/14)^(1/5)) = 6.98%"
    },
    {
      question: "what is retention?",
      answer: "if a firm retains 40% and earns 12% on equity = (0.4 x 0.12) = 4.8%"
    },
    {
      question: "what is earnings?",
      answer: "if EPS has risen 6%, we assume dividend growth will be the same."
    },
    {
      question: "what are the two P/E calculations?",
      answer: "Crude and Sophisticated."
    },
    {
      question: "what is crude?",
      answer: "P/E risen 12% and EPS is 20p = (12 x 0.2) = £2.40 x no.ordinary shares."
    },
    {
      question: "what is sophisticated?",
      answer: "retains 10%, require rate of return of 11%, growth at 5%, and EPS 10p = ((1-0.1)/(0.11 - 0.5)) x 0.10 = £1.50"
    },
    {
      question: "what is cashflow?",
      answer: "look at excel."
    },
    {
      question: "how do we increase value via assets?",
      answer: "Net Value Assets (NAV)."
    },
    {
      question: "what is Net Value Assets (NAV)?",
      answer: "(Total Assets - Intangible Assets) / No.Ordinary Shares."
    },
    {
      question: "what is cost of equity?",
      answer: "the return required by shareholders for investing in the business."
    },
    {
      question: "what are the two methods of calculating cost of equity?",
      answer: "Dividend Valuation Model (DVM) and Capital Asset Pricing Model (CAPM)."
    },
    {
      question: "what is the DVM formula?",
      answer: "(D1 / P0) + G."
    },
    {
      question: "what does D1 represent?",
      answer: "next year's dividend."
    },
    {
      question: "what does P0 represent?",
      answer: "current share price."
    },
    {
      question: "what does G represent?",
      answer: "dividend growth rate."
    },
    {
      question: "why is DVM simple?",
      answer: "only requires dividend, share price, and growth rate."
    },
    {
      question: "what is CAPM?",
      answer: "a cost of equity model that includes risk."
    },
    {
      question: "what happens to cost of equity when risk increases?",
      answer: "required return increases."
    },
    {
      question: "what is the CAPM formula?",
      answer: "Rf + B(Rm - Rf)."
    },
    {
      question: "what does Rf represent?",
      answer: "risk-free rate of return."
    },
    {
      question: "what does Rm represent?",
      answer: "market return."
    },
    {
      question: "what does beta represent?",
      answer: "share sensitivity to market movements."
    },
    {
      question: "what is equity risk premium?",
      answer: "Rm - Rf."
    },
    {
      question: "what are the three parts of CAPM?",
      answer: "risk-free rate, market risk premium, and beta."
    },
    {
      question: "what is beta calculated from?",
      answer: "covariance divided by market variance."
    },
    {
      question: "what is covariance?",
      answer: "how the company return moves with market return."
    },
    {
      question: "what is market variance?",
      answer: "the volatility of market returns."
    },
    {
      question: "how do you calculate deviation from mean?",
      answer: "individual return - average return."
    },
    {
      question: "how do you calculate average return?",
      answer: "total returns divided by number of periods."
    },
    {
      question: "what is cost of debt?",
      answer: "the cost of borrowing money from external sources."
    },
    {
      question: "why is debt cheaper than equity?",
      answer: "lower risk and interest is tax deductible."
    },
    {
      question: "what is after-tax cost of debt formula?",
      answer: "I x (1-T)."
    },
    {
      question: "what does I represent?",
      answer: "interest rate."
    },
    {
      question: "what does T represent?",
      answer: "tax rate."
    },
    {
      question: "what are the three types of debt finance?",
      answer: "irredeemable debt, redeemable debt, and preference shares."
    },
    {
      question: "what is irredeemable debt?",
      answer: "debt that pays interest forever."
    },
    {
      question: "what is irredeemable debt formula?",
      answer: "I(1-T) / P0."
    },
    {
      question: "what is redeemable debt?",
      answer: "debt repaid at a future date."
    },
    {
      question: "what does redeemable debt include?",
      answer: "interest payments and redemption value."
    },
    {
      question: "what method calculates redeemable debt?",
      answer: "Internal Rate of Return (IRR)."
    },
    {
      question: "what are preference shares?",
      answer: "a finance source between debt and equity."
    },
    {
      question: "are preference shares tax deductible?",
      answer: "no."
    },
    {
      question: "what is WACC?",
      answer: "average return required by all finance providers."
    },
    {
      question: "what does WACC include?",
      answer: "equity and debt."
    },
    {
      question: "what is the WACC formula?",
      answer: "(E/V x Ke) + (D/V x Kd x (1-T))."
    },
    {
      question: "what does E represent?",
      answer: "market value of equity."
    },
    {
      question: "what does D represent?",
      answer: "market value of debt."
    },
    {
      question: "what does V represent?",
      answer: "total capital (E + D)."
    }

  ],

  "cost-of-debt": [

    {
      question: "what is cost of debt?",
      answer: "the rate companies pay to borrow external funds."
    },
    {
      question: "where does debt finance come from?",
      answer: "banks, financial institutions, and other lenders."
    },
    {
      question: "why is debt cheaper than equity?",
      answer: "debt holders have lower risk because they receive interest and principal payments."
    },
    {
      question: "why does debt have a tax advantage?",
      answer: "interest payments are tax deductible."
    },
    {
      question: "what does tax deductibility do to cost of debt?",
      answer: "reduces the actual cost of borrowing."
    },
    {
      question: "what is after-tax cost of debt?",
      answer: "the cost of debt after considering the tax saving from interest."
    },
    {
      question: "what is the after-tax cost of debt formula?",
      answer: "I x (1-T)."
    },
    {
      question: "what does I represent in cost of debt?",
      answer: "interest rate."
    },
    {
      question: "what does T represent in cost of debt?",
      answer: "tax rate."
    },
    {
      question: "what happens to cost of debt when tax increases?",
      answer: "cost of debt decreases."
    },
    {
      question: "what happens to cost of debt before tax?",
      answer: "it is higher because tax relief is ignored."
    },
    {
      question: "what are the three types of debt finance?",
      answer: "irredeemable debt, redeemable debt, and preference shares."
    },
    {
      question: "what is irredeemable debt?",
      answer: "debt with no maturity date that pays interest forever."
    },
    {
      question: "what is another name for irredeemable debt?",
      answer: "perpetuity."
    },
    {
      question: "what does irredeemable debt pay?",
      answer: "a fixed interest payment each year."
    },
    {
      question: "what is the irredeemable debt formula?",
      answer: "I(1-T) / P0."
    },
    {
      question: "what does P0 represent in irredeemable debt?",
      answer: "current market price of debt."
    },
    {
      question: "what does I represent in irredeemable debt?",
      answer: "annual interest payment (coupon)."
    },
    {
      question: "what does T represent in irredeemable debt?",
      answer: "tax rate."
    },
    {
      question: "why is tax included in irredeemable debt?",
      answer: "because interest payments receive tax relief."
    },
    {
      question: "what is redeemable debt?",
      answer: "debt that is repaid at a future date."
    },
    {
      question: "what does redeemable debt include?",
      answer: "annual interest and redemption value."
    },
    {
      question: "why is redeemable debt more complex?",
      answer: "because it includes repayment of the original debt."
    },
    {
      question: "what method is used for redeemable debt?",
      answer: "Internal Rate of Return (IRR)."
    },
    {
      question: "what does IRR find?",
      answer: "the discount rate where present value equals market price."
    },
    {
      question: "what two things affect redeemable debt cost?",
      answer: "interest payments and gain/loss on redemption."
    },
    {
      question: "what increases redeemable debt cost?",
      answer: "redemption at a premium."
    },
    {
      question: "what reduces redeemable debt cost?",
      answer: "redemption below the original value."
    },
    {
      question: "what are preference shares?",
      answer: "a finance source between debt and equity."
    },
    {
      question: "why are preference shares not pure debt?",
      answer: "they do not have a repayment obligation."
    },
    {
      question: "why are preference shares not pure equity?",
      answer: "they usually pay a fixed return."
    },
    {
      question: "are preference share dividends tax deductible?",
      answer: "no."
    },
    {
      question: "why are preference shares different from debt?",
      answer: "tax is not deducted from the cost calculation."
    }

  ],

  "theories-of-capital-structure": [

    {
      question: "",
      answer: ""
    },
    {
      question: "",
      answer: ""
    },
    {
      question: "",
      answer: ""
    },
  ],

  "financing-short-and-long-term": [

    {
      question: "",
      answer: ""
    },
    {
      question: "",
      answer: ""
    },
    {
      question: "",
      answer: ""
    },
  ],

  "capital-investment": [

    {
      question: "",
      answer: ""
    },
    {
      question: "",
      answer: ""
    },
    {
      question: "",
      answer: ""
    },
  ],

  "managing-foreign-currency-risk": [

    {
      question: "",
      answer: ""
    },
    {
      question: "",
      answer: ""
    },
    {
      question: "",
      answer: ""
    },
  ],

  "dividend-policy": [

    {
      question: "",
      answer: ""
    },
    {
      question: "",
      answer: ""
    },
    {
      question: "",
      answer: ""
    },
  ]

};