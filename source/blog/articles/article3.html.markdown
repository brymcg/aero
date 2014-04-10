---
title: "Option Pricing and Expensing (Tool Included!)"
date: 2014-04-07
tags: options, tools, automation
---

These days it's pretty common for early stage companies to offer stock option grants to nearly all of their employees. This makes a lot of sense as it's a great way to align incentives and conserve cash while still attracting valuable people. [Lots of people have already written](http://avc.com/2010/10/employee-equity-options/) on the basics of employee equity. My purpose here is to get you started on understanding the relationship between the issuance of options and your Income Statement. 

As Fred discusses in the blog I linked above, stock options have some inherent value, which is not the same as the exercise price. There is some probability that the underlying stock will increase in value over time, and that eventuality need to be incorporated into the value of the option. It actually wasn't until 1973 that we had an effective mathematical construct for modelling this value, and [the guys won a Nobel Prize](http://en.wikipedia.org/wiki/Black%E2%80%93Scholes_model) for it. Okay, so we know these things have value, how do we calculate and account for it?

The first step in this process is coming up with an appropriate value for the common stock of the company. Immediately after founding, this is likely the same as the par value. However, as the company evolves, it is expected to increase. In theory, the real value depends on a huge variety of factors: probabilities of outcomes, structure of senior stock issuances (particularly as regards liquidation preferences) and the capitalization of the company. Needless to say, it's a very difficult thing to model. However, in order to issue options, companies are effectively required to perform what's known as a [409A valuation](http://venturebeat.com/2011/02/03/why-you-should-care-about-409a-valuations/). This is a pretty [controversial topic](http://ithacavc.com/2011/09/21/rule-409a/). Basically, a third party consultant (plenty of them out there, use google) will use advanced financial modelling techniques (discounted cash flow, multiples, etc) to come up with a value for your company. You can definitely debate the reality of all this, but for our purposes, let's set that aside and plow on. The point is, if you are going to be issuing options, it is important for you to have one of these done and the data will be used in our option expense calculation. 

Although your 409A report will probably end up being many pages long, there are two key numbers you need for our purposes here: the common stock value and the expected volatility. You can then take those, along with the details of your individual option grants, and run them through [this tool I have put together](../assets/files/Options_Tool_rev0.xlsx). There is more explanation embedded in the workbook, but basically what it's doing is filtering those inputs through the Black-Scholes model and coming up with a dollar figure for how the options should affect your Income Statement.

 Okay, that's nice, but where on my income statement should this go? And what is the other side of the entry? First, this is typically considered a wage expense. You can (and probably should) have it be a separate sub-account from your cash wages. But you should be debiting something that rolls into your salary line(s). As for the credit, it's as simple as applying the full value to your Additional Paid-In Capital. 

 That's it for now. Please check out my Black-Scholes tool and let me know what you think. I plan on updating this one to include share grants and eventually make a more dynamic web-based version. Stay tuned. 



