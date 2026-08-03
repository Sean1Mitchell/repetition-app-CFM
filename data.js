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
      question: "what is capital structure?",
      answer: "the balance between equity and debt used to finance a company."
    },
    {
      question: "what are the two sources of finance in capital structure?",
      answer: "equity and debt."
    },
    {
      question: "where does equity finance come from?",
      answer: "shareholders."
    },
    {
      question: "where does debt finance come from?",
      answer: "external sources such as banks and financial institutions."
    },
    {
      question: "what is the aim of capital structure?",
      answer: "find the optimal balance between debt and equity."
    },
    {
      question: "what does an optimal capital structure achieve?",
      answer: "minimises cost of capital and maximises company value."
    },
    {
      question: "why is debt cheaper than equity?",
      answer: "debt holders have lower risk because they receive fixed interest and principal payments."
    },
    {
      question: "why do equity holders require a higher return?",
      answer: "they take more risk because returns depend on company performance."
    },
    {
      question: "what makes debt even cheaper?",
      answer: "interest payments are tax deductible."
    },
    {
      question: "what is the main benefit of debt finance?",
      answer: "lower cost of capital due to tax benefits."
    },
    {
      question: "what is the main risk of using too much debt?",
      answer: "increased financial risk and higher required returns."
    },
    {
      question: "what happens to equity required return when debt increases?",
      answer: "it increases due to higher financial risk."
    },
    {
      question: "what happens to WACC when risk increases?",
      answer: "WACC increases."
    },
    {
      question: "what happens to company value when WACC increases?",
      answer: "company value decreases."
    },
    {
      question: "what is financial gearing?",
      answer: "the use of debt finance within a company's capital structure."
    },
    {
      question: "what happens when financial gearing increases?",
      answer: "financial risk increases."
    },
    {
      question: "why does higher debt increase shareholder uncertainty?",
      answer: "more debt creates greater obligation for interest and repayments."
    },
    {
      question: "why is reducing shareholder uncertainty important?",
      answer: "uncertainty increases required return and reduces company value."
    },
    {
      question: "what can increased shareholder uncertainty cause?",
      answer: "higher WACC, lower value, reputation damage, and legal issues."
    },
    {
      question: "what are agency costs?",
      answer: "costs caused when managers act against shareholder objectives."
    },
    {
      question: "how do agency costs affect shareholders?",
      answer: "increase required return due to increased risk."
    },
    {
      question: "what causes agency problems?",
      answer: "management decisions conflicting with shareholder interests."
    },
    {
      question: "what can agency problems affect?",
      answer: "financing decisions and long-term growth."
    },
    {
      question: "what is information asymmetry?",
      answer: "when managers have more information about the company than investors."
    },
    {
      question: "how can information asymmetry affect share issues?",
      answer: "investors may believe shares are overvalued."
    },
    {
      question: "what can happen if investors think shares are overvalued?",
      answer: "share price may fall."
    },
    {
      question: "why can issuing new equity reduce company value?",
      answer: "the market may interpret it as a negative signal."
    },
    {
      question: "what financing order reduces required return?",
      answer: "retained earnings, debt, then equity."
    },
    {
      question: "what is the financing priority order?",
      answer: "1. retained earnings, 2. debt, 3. equity."
    },
    {
      question: "why are retained earnings preferred first?",
      answer: "no external financing costs or increased risk."
    },
    {
      question: "why is debt preferred before equity?",
      answer: "debt is cheaper due to lower cost and tax benefits."
    },
    {
      question: "why is equity used last?",
      answer: "it is the most expensive source of finance."
    }

  ],

  "financing-short-and-long-term": [

    {
      question: "what is short-term finance?",
      answer: "finance typically repayable within one year."
    },
    {
      question: "what is long-term finance?",
      answer: "finance typically lasting more than one year."
    },
    {
      question: "what does short-term finance usually fund?",
      answer: "working capital such as wages, suppliers, and seasonal cash gaps."
    },
    {
      question: "what does long-term finance usually fund?",
      answer: "asset purchases and long-term projects."
    },
    {
      question: "why is balancing short and long-term finance important?",
      answer: "maintains liquidity without excessive long-term commitments."
    },
    {
      question: "what is cost when choosing finance?",
      answer: "interest, fees, and transaction costs."
    },
    {
      question: "what is flexibility when choosing finance?",
      answer: "ability to change borrowing quickly."
    },
    {
      question: "what is risk when choosing finance?",
      answer: "interest, default, and withdrawal risk."
    },
    {
      question: "what is origin of funds?",
      answer: "whether finance is internal or external."
    },
    {
      question: "what is timing of cashflow?",
      answer: "when cash payments occur relative to cash receipts."
    },
    {
      question: "what is recourse?",
      answer: "the lender's right to pursue assets if the borrower defaults."
    },
    {
      question: "what is non-recourse finance?",
      answer: "lender is limited to the pledged collateral."
    },
    {
      question: "what is a bank overdraft?",
      answer: "borrowing up to an agreed limit with interest charged on the amount used."
    },
    {
      question: "what is trade credit?",
      answer: "a delay allowed before paying suppliers."
    },
    {
      question: "what is factoring?",
      answer: "selling receivables for immediate cash."
    },
    {
      question: "what is invoice discounting?",
      answer: "borrowing against receivables while keeping ownership."
    },
    {
      question: "what is a bill of exchange?",
      answer: "a formal promise to pay at a future date."
    },
    {
      question: "what is commercial paper?",
      answer: "short-term unsecured borrowing by large companies."
    },
    {
      question: "what is Euromoney borrowing?",
      answer: "borrowing in a foreign currency."
    },
    {
      question: "what is a term loan?",
      answer: "a loan repaid over an agreed period."
    },
    {
      question: "what is hire purchase?",
      answer: "paying for an asset in instalments until ownership transfers."
    },
    {
      question: "what is leasing?",
      answer: "using an asset without owning it."
    },
    {
      question: "what is a sale and leaseback?",
      answer: "selling an asset and leasing it back."
    },
    {
      question: "what is export finance risk?",
      answer: "currency, legal, and non-payment risk."
    },
    {
      question: "how can export finance liquidity risk be reduced?",
      answer: "factoring or invoice discounting."
    },
    {
      question: "what is a letter of credit?",
      answer: "a bank guarantee that payment will be made if conditions are met."
    },
    {
      question: "what is the cost characteristic of short-term finance?",
      answer: "usually higher interest rates."
    },
    {
      question: "what is the flexibility characteristic of short-term finance?",
      answer: "easier to adjust."
    },
    {
      question: "what is the main risk of short-term finance?",
      answer: "refinancing risk."
    },
    {
      question: "what is short-term finance most suitable for?",
      answer: "temporary or seasonal needs."
    },
    {
      question: "what is the cost characteristic of long-term finance?",
      answer: "usually lower interest rates."
    },
    {
      question: "what is the flexibility characteristic of long-term finance?",
      answer: "less flexible."
    },
    {
      question: "what is the main risk characteristic of long-term finance?",
      answer: "lower refinancing risk."
    },
    {
      question: "what is long-term finance most suitable for?",
      answer: "asset investment and long-term growth."
    },
    {
      question: "what is the matching principle?",
      answer: "finance duration should match asset life."
    },
    {
      question: "how should machinery be financed?",
      answer: "long-term finance."
    },
    {
      question: "how should inventory normally be financed?",
      answer: "short-term finance."
    },
    {
      question: "what is an aggressive finance policy?",
      answer: "greater use of short-term finance."
    },
    {
      question: "what is the benefit of an aggressive policy?",
      answer: "lower cost."
    },
    {
      question: "what is the drawback of an aggressive policy?",
      answer: "higher risk."
    },
    {
      question: "what is a moderate finance policy?",
      answer: "a balance of short and long-term finance."
    },
    {
      question: "what is the benefit of a moderate policy?",
      answer: "balances cost and risk."
    },
    {
      question: "what is a conservative finance policy?",
      answer: "greater use of long-term finance."
    },
    {
      question: "what is the benefit of a conservative policy?",
      answer: "lower risk."
    },
    {
      question: "what is the drawback of a conservative policy?",
      answer: "higher cost."
    }

  ],

  "capital-investment": [

    {
      question: "what is capital investment?",
      answer: "spending on long-term assets that benefit the business for more than one year."
    },
    {
      question: "what is the aim of capital investment?",
      answer: "generate revenue or reduce costs."
    },
    {
      question: "why is capital investment important?",
      answer: "large upfront cost, benefits come later, and decisions are costly to reverse."
    },
    {
      question: "what is the overall objective of investment decisions?",
      answer: "shareholder wealth maximisation."
    },
    {
      question: "what are the four appraisal methods?",
      answer: "ARR, Payback, NPV, and IRR."
    },
    {
      question: "which appraisal methods are simpler?",
      answer: "ARR and Payback."
    },
    {
      question: "which appraisal methods use time value of money?",
      answer: "NPV and IRR."
    },
    {
      question: "what is ARR?",
      answer: "average accounting profit divided by investment."
    },
    {
      question: "what is payback period?",
      answer: "time taken to recover the initial investment."
    },
    {
      question: "what is NPV?",
      answer: "present value of inflows minus present value of outflows."
    },
    {
      question: "what does NPV measure?",
      answer: "value added today."
    },
    {
      question: "what is the NPV decision rule?",
      answer: "accept if NPV is zero or positive."
    },
    {
      question: "what cashflows are included in NPV?",
      answer: "incremental cashflows only."
    },
    {
      question: "what costs are excluded from NPV?",
      answer: "sunk costs."
    },
    {
      question: "are financing costs included in NPV?",
      answer: "no."
    },
    {
      question: "when are cashflows assumed to occur in NPV?",
      answer: "at year end."
    },
    {
      question: "what is IRR?",
      answer: "the discount rate that makes NPV equal zero."
    },
    {
      question: "what does IRR represent?",
      answer: "annual percentage return."
    },
    {
      question: "what is the IRR decision rule?",
      answer: "accept if IRR is greater than cost of capital."
    },
    {
      question: "when do NPV and IRR usually agree?",
      answer: "independent projects with conventional cashflows."
    },
    {
      question: "when can NPV and IRR disagree?",
      answer: "mutually exclusive projects or unconventional cashflows."
    },
    {
      question: "which method is preferred if NPV and IRR conflict?",
      answer: "NPV."
    },
    {
      question: "what is capital rationing?",
      answer: "limited capital available for investment."
    },
    {
      question: "what are the two types of capital rationing?",
      answer: "soft and hard."
    },
    {
      question: "what is soft capital rationing?",
      answer: "internal limits on spending."
    },
    {
      question: "what is hard capital rationing?",
      answer: "external financing constraints."
    },
    {
      question: "what is profitability index (PI)?",
      answer: "gross present value divided by initial investment."
    },
    {
      question: "what does PI measure?",
      answer: "return generated per £1 invested."
    },
    {
      question: "why are replacement projects difficult to compare?",
      answer: "assets may have different useful lives."
    },
    {
      question: "what is EAC?",
      answer: "equivalent annual cost."
    },
    {
      question: "what does EAC do?",
      answer: "converts total NPV cost into an annual amount."
    },
    {
      question: "which replacement project is preferred using EAC?",
      answer: "the one with the lower EAC."
    },
    {
      question: "what is LCM in replacement decisions?",
      answer: "lower common multiple method."
    },
    {
      question: "why must tax be considered in NPV?",
      answer: "tax is paid on profit, not cashflow."
    },
    {
      question: "what is AIA?",
      answer: "100% first-year tax relief on qualifying assets."
    },
    {
      question: "what is WDA?",
      answer: "reducing balance tax relief, usually 18%."
    },
    {
      question: "what is a balancing allowance?",
      answer: "extra tax relief on disposal."
    },
    {
      question: "what is a balancing charge?",
      answer: "extra taxable amount on disposal."
    },
    {
      question: "when is NPV particularly useful?",
      answer: "mutually exclusive projects, different project sizes, and capital rationing."
    },
    {
      question: "when is PI particularly useful?",
      answer: "when capital is restricted."
    }
  ],

  "managing-foreign-currency-risk": [

    {
      question: "what is foreign currency risk?",
      answer: "the risk that exchange rate movements change the value of foreign transactions."
    },
    {
      question: "why does foreign currency risk arise?",
      answer: "companies buy and sell in different currencies."
    },
    {
      question: "what does exchange rate fluctuation affect?",
      answer: "the amount received or paid in home currency."
    },
    {
      question: "what is the home currency performance formula?",
      answer: "(closing rate / opening rate) - 1."
    },
    {
      question: "what is the foreign currency performance formula?",
      answer: "(opening rate / closing rate) - 1."
    },
    {
      question: "what does a negative home currency performance mean?",
      answer: "the home currency weakened."
    },
    {
      question: "what does a positive foreign currency performance mean?",
      answer: "the foreign currency strengthened."
    },
    {
      question: "what happens when a UK company receives US dollars?",
      answer: "the bank converts dollars into pounds."
    },
    {
      question: "what is the spread?",
      answer: "the difference between the buying and selling exchange rate kept by the bank."
    },
    {
      question: "what is the bid rate?",
      answer: "the rate at which the bank buys the foreign currency."
    },
    {
      question: "what is the offer rate?",
      answer: "the rate at which the bank sells the foreign currency."
    },
    {
      question: "what is the midpoint exchange rate formula?",
      answer: "(bid + offer) / 2."
    },
    {
      question: "what is currency exposure?",
      answer: "the risk that exchange rates change before payment is made."
    },
    {
      question: "what is one export finance risk?",
      answer: "non-payment by foreign customers."
    },
    {
      question: "what is another export finance risk?",
      answer: "different legal systems."
    },
    {
      question: "how can immediate liquidity be obtained from foreign receivables?",
      answer: "factoring or invoice discounting."
    },
    {
      question: "what is a letter of credit?",
      answer: "a bank guarantee that payment will be made when documents are provided."
    },
    {
      question: "why is a letter of credit useful?",
      answer: "it reduces non-payment and legal risk."
    }

  ],

  "dividend-policy": [

    {
      question: "what is dividend policy?",
      answer: "the decision about how much profit is paid as dividends and how much is retained."
    },
    {
      question: "what are the two uses of profit?",
      answer: "pay dividends or retain earnings."
    },
    {
      question: "what is retained earnings?",
      answer: "profit kept in the business for reinvestment."
    },
    {
      question: "what is a dividend?",
      answer: "a payment made to shareholders from profits."
    },
    {
      question: "what is the aim of dividend policy?",
      answer: "balance shareholder income with business growth."
    },
    {
      question: "what does a high dividend policy provide?",
      answer: "more current income to shareholders."
    },
    {
      question: "what does a low dividend policy provide?",
      answer: "more funds for reinvestment."
    },
    {
      question: "what is a stable dividend policy?",
      answer: "maintaining a consistent dividend each year."
    },
    {
      question: "why do companies prefer stable dividends?",
      answer: "shareholders value predictable income."
    },
    {
      question: "what is a residual dividend policy?",
      answer: "pay dividends only after financing profitable investments."
    },
    {
      question: "what is dividend payout ratio?",
      answer: "dividends divided by profit after tax."
    },
    {
      question: "what does a higher payout ratio mean?",
      answer: "a greater proportion of profit is distributed."
    },
    {
      question: "what does a lower payout ratio mean?",
      answer: "a greater proportion of profit is retained."
    },
    {
      question: "what is dividend cover?",
      answer: "earnings per share divided by dividend per share."
    },
    {
      question: "what does a higher dividend cover indicate?",
      answer: "dividends are more easily supported by earnings."
    },
    {
      question: "what does a lower dividend cover indicate?",
      answer: "dividends are less secure."
    },
    {
      question: "what is a scrip dividend?",
      answer: "a dividend paid in additional shares instead of cash."
    },
    {
      question: "why might a company use a scrip dividend?",
      answer: "to conserve cash."
    },
    {
      question: "what is a share repurchase?",
      answer: "the company buys back its own shares."
    },
    {
      question: "what can a share repurchase increase?",
      answer: "earnings per share."
    },
    {
      question: "what can influence dividend policy?",
      answer: "profitability, cash flow, investment opportunities, taxation, and shareholder preferences."
    },
    {
      question: "why is cash flow important for dividends?",
      answer: "dividends are paid in cash, not accounting profit."
    },
    {
      question: "how can investment opportunities affect dividends?",
      answer: "more profitable projects may lead to lower dividends."
    },
    {
      question: "what is dividend signalling?",
      answer: "changes in dividends may signal management's expectations about future performance."
    },
    {
      question: "what may a dividend increase signal?",
      answer: "confidence in future earnings."
    },
    {
      question: "what may a dividend cut signal?",
      answer: "weaker future performance."
    }

  ]

};