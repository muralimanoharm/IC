import { Component, OnInit } from '@angular/core';
import {ScrollToService, ScrollToEvent,ScrollToAnimationEasing,ScrollToOffsetMap  } from '@nicky-lenaers/ngx-scroll-to';



@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  public ngxScrollToDestination: string;
  public ngxScrollToEvent: ScrollToEvent;
  public ngxScrollToDuration: number;
  public ngxScrollToEasing: ScrollToAnimationEasing;
  public ngxScrollToOffset: number;
  public ngxScrollToOffsetMap: ScrollToOffsetMap;
  public panelOpenState:boolean;
  searchText:boolean;
  contentID:string;


  characters = [    
      {question:"How Cryptocurrency Born ?",answerID:1},
      {question:"What is the Difference between crypto and regular money?",answerID:2},
      {question:"What can I do with cryptocurrency?",answerID:3},
      {question:"Why Does Crypto Have Value in Economics ?",answerID:4},
      {question:"Why so much hype on crypto ?",answerID:5},
      {question:"What can cryptocurrency do ?",answerID:6},
      {question:"Is Crypto currency Legal ?",answerID:7},
      {question:"How to buy crypto currency ?",answerID:8},
      {question:"Do i have to buy a whole coin ?",answerID:9},
      {question:"Which coin i have to buy ?",answerID:10},
      {question:"What is the best time to buy ?",answerID:11},
      {question:"What is the best place to buy ?",answerID:12},
      {question:"How to sell crypto currency ?",answerID:13},
      {question:"What is the best time to sell ?",answerID:14},
      {question:"What is the best place to sell ?",answerID:15},
      {question:"How to store cryptocurrency ?",answerID:16},
      {question:"What is the best place to store ?",answerID:17},
      {question:"What if a government bans it?",answerID:18},
      {question:"What is a smart contract?",answerID:19},
      {question:"What are the most common cryptocurrencies?",answerID:20},
      {question:"What is mining ?",answerID:21},
      {question:"What will be the worst part about cryptocurrencies?",answerID:22},
      {question:"Why i should use Cryptocurrencies ?",answerID:23},
      {question:"Can you transfer Cryptocurrency between countries?",answerID:24}
    ];

  constructor(private scrollService: ScrollToService) { 
    this.ngxScrollToDestination = 'destination-1';
    this.ngxScrollToEvent = 'mouseenter';
    this.ngxScrollToDuration = 1500;
    this.ngxScrollToEasing = 'easeOutElastic';
    this.ngxScrollToOffset = 300;
    this.ngxScrollToOffsetMap = new Map();
    this.ngxScrollToOffsetMap
      .set(480, 100)
      .set(768, 200)
      .set(1240, 300)
      .set(1920, 400)
  }

  ngOnInit() {
  }


  GetHTMLContent(answerID:number): any[]{
    
    var htmlData;
    if(answerID == 1)
    {
      htmlData=`<p>Dating back to World War II, the need for secure communication and exchanges was essential. Thus, cryptography was born&mdash;the process of converting legible information into an enigmatic code, transferring messages securely to and from various, unknown sources.</p>
      <p>On 1 November 2008, a techie by the name Satoshi Nakamoto wrote in an email to a cryptography mailing list: &ldquo;I&rsquo;ve been working on a new electronic cash system that&rsquo;s fully peer-to-peer, with no trusted third party. The paper is available at&nbsp;<a href="https://bitcoin.org/bitcoin.pdf">bitcoin.org/bitcoin.pdf</a>.&rdquo; The technical paper is still available on the link.</p>
      <p>The main properties of the system, Satoshi said, would be that the electronic transactions would be peer-to-peer and would not need to be sent to a financial institution. The system was designed to be completely de-centralised, meaning that the users of the currency would not need to repose their trust in a central authority, such as traditional central banks. In another post in early 2009, Satoshi said that everything in the newly-built system is based on crypto proof instead of trust.</p>
      <p>Satoshi also expressed dissatisfaction that central banks and banks have repeatedly breached the trust of the people who deposit money with them by lending the money in credit bubbles while keeping very little as a reserve. &ldquo;The root problem with conventional currency is all the trust that&rsquo;s required to make it work. The central bank must be trusted not to debase the currency, but the history of fiat currencies is full of breaches of that trust,&rdquo; Satoshi wrote.</p>`;
    }else if(answerID == 2){
      htmlData=`<p><span style="font-family: verdana, geneva;">Fiat roughly means, &ldquo;let it be done.&rdquo; Cryptocurrency implies, &ldquo;a decentralized and digital medium of exchange governed by cryptography.&rdquo; Both are currencies, but there are some notable differences:</span></p>
      <ul>
      <li><span style="font-family: verdana, geneva;"><strong>Fiat currency is &ldquo;<a href="https://www.treasury.gov/resource-center/faqs/Currency/Pages/legal-tender.aspx" target="_blank" rel="noopener">legal tender</a>&rdquo; backed by a &ldquo;central government.&rdquo;</strong>&nbsp;It can take the form of physical dollars (for example paper Federal Reserve notes), or it can be represented electronically, such as with bank credit. The government controls the supply and you can pay your taxes with it.</span></li>
      <li><span style="font-family: verdana, geneva;"><strong>Cryptocurrency&nbsp; is not &ldquo;legal tender&rdquo; and it is not backed by a central government or bank (it is decentralized and global)</strong>. Its form is more like bank credit sans the bank (in that it is represented digitally, but not backed by a bank or government). An algorithm controls the supply and you can&rsquo;t pay your taxes with it (instead&nbsp;<a href="https://cryptocurrencyfacts.com/2017/12/30/the-tax-rules-for-crypto-in-the-u-s-simplified/">you have to pay taxes on it</a>).</span></li>
      </ul>
      <p><span style="font-family: verdana, geneva;">Otherwise, there is no intrinsic difference. Both fiat currency and cryptocurrency can be called money or currency, both are mediums of exchange that are used to store and transfer value, both can be used to purchases goods and services, both have their value governed by supply, demand, work, scarcity, and other economic factors, both have their value affected by the quality of the system surrounding it, both can be traded on exchanges, etc.</span></p>
      <p>&nbsp;</p>
      <hr class="qtext_hr" />
      <ul>
      <li><span style="font-family: verdana, geneva;"><strong>Fiat Money(</strong><strong><em>present currency</em></strong><strong>)</strong></span></li>
      <ul>
      <li><span style="font-family: verdana, geneva;">Issued by government.</span></li>
      <li><span style="font-family: verdana, geneva;">Unlimited supply and can be produced more by the government when necessary.</span></li>
      <li><span style="font-family: verdana, geneva;">Physical way of exchange money.</span></li>
      <li><span style="font-family: verdana, geneva;">Form of coin or paper.</span></li>
      <li><span style="font-family: verdana, geneva;">Centralized and control by the law and banks.</span></li>
      <li><span style="font-family: verdana, geneva;">It's value is determined by the market and regulation.</span></li>
      </ul>
      </ul>
      <hr class="qtext_hr" />
      <ul>
      <li><span style="font-family: verdana, geneva;"><strong>Cryptocurrency (</strong><strong><em>future currency</em></strong><strong>)</strong></span></li>
      <ul>
      <li><span style="font-family: verdana, geneva;">Created by computers.</span></li>
      <li><span style="font-family: verdana, geneva;">Limited supply and has a set of maximum.</span></li>
      <li><span style="font-family: verdana, geneva;">A digital way of money exchange.</span></li>
      <li><span style="font-family: verdana, geneva;">Presented by private and public piece of code.</span></li>
      <li><span style="font-family: verdana, geneva;">Decentralized and not controlled by any single entity or government.</span></li>
      <li><span style="font-family: verdana, geneva;">It's value is not determined by the supply and demand.</span></li>
      </ul>
      </ul>`;
    }else if(answerID == 3){
      htmlData=`<p>Cryptocurrencies are known for its extreme security and anonymity to the highest level.&nbsp;</p>
      <p>If you're simply looking to make some money you can attempt to buy them low and sell them high. If you invest wisely and remain patient, you can make a decent amount of money by simply buying and selling Bitcoins.</p>
      <p>As Bitcoins are a currency, several businesses accept them as payment. In fact, some businesses&nbsp;<em>only</em>&nbsp;accept Bitcoin. Why? Some services provide tools that may or may not be used for piracy, such as a&nbsp;<a href="http://en.wikipedia.org/wiki/Vpn" target="_blank" rel="noopener">VPN</a>&nbsp;or Usenet indexer.&nbsp;</p>
      <p>Because Bitcoin conducts transactions&nbsp;<a href="http://en.wikipedia.org/wiki/Peer-to-peer" target="_blank" rel="noopener">peer-to-peer</a>, there's no intermediary to prevent the funds from rolling in. As a result, many of these services utilize Bitcoin as their only method.Transactions made by this system cannot be reversed nor faked and compared to what your local bank are doing in its client charging high transaction fees.</p>
      <p>&nbsp;</p>
      <p>The high level of anonymity of cryptocurrencies make experts think that they are associated with the illegal activities on the digital marketplace, this is more to say specifically on dark web. Users should take extra careful when choosing currencies to keep.</p>
      <p>&nbsp;</p>
      <p>What else ??&nbsp; You can buy a <span style="font-size: 11pt; font-family: Arial; color: #202a36; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;"><span style="font-family: verdana, geneva;">lamborghini</span> </span>with Bitcoin !!!&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>`;
    }else if(answerID == 4){
      htmlData=`<p>Cryptocurrencies meet all the criteria of a currency. However, it&rsquo;s important to understand that the way their price is determined is slightly different to that of fiat currencies like the US dollar.</p>
      <p>If it only exists behind a computer screen, how is its value determined?</p>
      <p>In fact, the value of a cryptocurrency is determined more like the price of gold. The value of gold is largely determined by how much investors are willing to pay for it. This changes based on how much investors speculate it&rsquo;s going to be worth in the future. However, investors can almost guarantee that gold will always have some value because of its scarcity.&nbsp;</p>
      <h4 class="subtitle">Scarcity and utility</h4>
      <div class="group">
      <p>In economics, something has value if it checks the following two boxes: scarcity and utility. Scarcity just means that something has a finite supply. In the case of bitcoin, the cryptocurrency has a set cap of 21 million bitcoins.</p>
      </div>`
    }else if(answerID == 5){
      htmlData=`<p>First, bitcoin is decentralized, meaning no government, bank or single person has control over it; it can't be toppled by corruption at the top. It's also trivially divisible, meaning you can buy a small item like a doughnut with it as easily as you can buy a house or even a mansion. And finally, the code it's built on is open source, meaning that it's available for anyone to look at, scrutinize and even modify.</p>
      <p>This means bitcoin is constantly evolving and improving.</p>`
    }else if(answerID == 6){
      htmlData=`<p>With paper money, the&nbsp;<a class="inline_asset" title="https://www.federalreserve.gov/faqs/currency_12771.htm" href="https://www.federalreserve.gov/faqs/currency_12771.htm">Federal Reserve says</a>&nbsp;it costs about 16 cents to create a $100 bill.</p>
      <p>So the rest of that hundred bucks &mdash; the remaining $99.84 &mdash; comes from the trust people place in it.</p>
      <p>It can be hard to see the digital currency as having value because you can't hold it in your hand like you can a dollar bill or gold.</p>
      <p>As a solution, think of bitcoin as a digital business.</p>
      <p>Facebook, Google, Netflix, Amazon, Apple, these are the largest companies in the S&amp;P 500 and they're primarily digital businesses built almost purely on digital trust.</p>
      <p>"Anyone who thinks digital gold isn't a store value is overlooking the fact that most businesses today are built around digital trust, including the financial system."</p>`
    }else if(answerID == 7){
      htmlData=`<p class="ui_qtext_para">Cryptocurrencies are legal in the sense that you are free to buy, sell and hold them. Unlike guns or drugs, it&rsquo;s perfectly fine to use cryptocurrencies as they are intended. That said, here are some issues they are facing in India right now.</p>
      <ol>
      <li>RBI has banned banks regulated by it, from dealing with any individuals or companies that trade cryptocurrencies. This means, it&rsquo;s very difficult to buy and sell crypto from well-known custodian wallets such as Zebpay or Unocoin. However, we don&rsquo;t know if this ban is permanent. There is a supreme court hearing some time in July where some companies have challenged the legality of this ban. After all, cryptocurrencies aren&rsquo;t illegal themselves. So why ban a legal activity?</li>
      <li>Cryptocurrencies are not legal tender. This means, spending crypto is the equivalent of buying and selling them. You have to pay capital gains taxes on them.<br /><br />For example if you buy an altcoin worth Rs. 10 and you spend it when it&rsquo;s Rs 100, you might have to pay a short term capital gains tax of 20% or Rs 20. This means, you will have to keep detailed records of your crypto expenditures and then keep some money aside so that you pay tax at the end of the fiscal year.</li>
      <li>Cryptocurrencies aren&rsquo;t properly regulated. This makes them extremely volatile and vulnerable to price-manipulation. Crypto users like myself are okay with it, but some larger investors are hesitant to enter because of it. They are more accustomed to highly regulated markets such as commodity trades, stocks, financial products etc.</li>
      </ol>
      <p class="ui_qtext_para">Like any new technology, India is slow to adopt. But that doesn&rsquo;t mean it&rsquo;s illegal.</p>`
    }else if(answerID == 8){
      htmlData=`<p class="ui_qtext_para">CoinMarketCap reports on the trading activities of thousands of markets but does not directly sell any cryptocurrency. The best way to find where to buy is by looking on the markets section for the cryptocurrency. For example, to find where to buy Bitcoin, you can look at the <a href=\"\">markets section for Bitcoin</a>.</p>`
    }else if(answerID == 9){
      htmlData=`<p class="ui_qtext_para">This one’s easy — you do not need to buy a whole coin. On Exchnages you can buy in increments as little as 1 dollars or 1 rupee, euros, pounds, or your local currency.</p>`
    }else if(answerID == 10){
      htmlData=`<div class="ui_qtext_para"><div><p>One simple option is buy some of each currency. It’s a straightforward way to get started without playing favorites.</p></div><p>Another good option is to ask yourself what you’re hoping to do with crypto and choose the currency that will help you achieve your goals. For example, if you want to buy a T-shirt with crypto, then Bitcoin might be a good option because it is the most widely accepted cryptocurrency. On the other hand, if you want to play a digital card game, then Ethereum is a popular choice</p></div>
      <p class="ui_qtext_para">These are some of my favorites in which I am invested. However, don’t buy because you read about them here. Do your own research. Here is step by step guide.</p>
      <ol><li>Check out their whole website and click on all links that contain information about the cryptocurrency. The homepage gives us the basic idea and the purpose behind the current cryptocurrency.</li><li>If you still don’t have any idea or aren’t able to understand the cryptocurrency then you should make use of secondary sources. Try watching videos about it on youtube. Many YouTubers provides us with easy to understand insights about the coin.</li><li>Study their whitepaper</li><li>Check out their founders and core team members. You will find their info the website itself. Check out their interviews. Research on their profile on LinkedIn, Facebook and Instagram.</li><li>Check out their Reddit. You will find answers to many of your questions. Make use of search bar and if you still don’t find an answer better ask the question.</li></ol>
      `
    }else if(answerID == 11){
      htmlData=`<p class="ui_qtext_para">Warren Buffet once rightly said “ The best time to invest was yesterday, the second best is today”.</p> <p class=\"ui_qtext_para\">Be it stocks, funds or currencies. Buy when they dip and sell when they hit major resistance. Never ever buy when the price is peaking. Wait for the correction and buy after the sell-off.</p>
      <p>When is the right time to invest? The best strategy that most successful people did was consistently investing over time, this strategy minimizes the strong impact of volatile prices. For instance, you want to invest on Monero, but don’t have the idea if this currency is going to go down in the next days, buying every week instead of buying them at once is the ideal way because you will have a track of the changes in the marketplace, and with the strategy you will get a higher chances of getting a good deal. In short, investing in time is ideal, because this helps you adjust on the ups and downs of the prices effectively.</p>
      `
    }else if(answerID == 12){
      htmlData=`
      <p>Here is a consolidated list of best cryptocurrency exchanges with my comments:</p>
      <ol style="text-align: justify;"><li><a href="https://binance.com/" sl-processed="1">Binance</a>:Offers mobile app and probably the fastest growing exchange. If you need to pick only one, this is the best and #1 in 2019.</li><li><a href="https://bittrex.com/" sl-processed="1">Bittrex</a>: Another high-quality exchange with a lot of coins</li><li><a href="https://Changelly.com/" sl-processed="1">Changelly</a>: Instantly convert any cryptocurrency to any of your choices. Great for instant conversion</li><li><a href="https://Bitmex.com" sl-processed="1">Bitmex</a>: One of the whales of Cryptocurrency exchange. You can do margin trading if that’s your thing.</li><li><a href="https://KUCoin.com" sl-processed="1">KuCoin</a>: One of the strongest exchange that also offers a mobile app (Android and iOS). They have been constantly updating their mobile app to make it one of the best in the industry.</li></ol>
      `
    }else if(answerID == 13){
      htmlData=`<p>You can sell us almost any kind of non-worthless <a href="https://bitfalls.com/185r">cryptocurrency</a> without having to convert it to BTC first (an expensive and slow process). If the currency you\'re selling can be exchanged to something else on any market, we\'ll buy it from you.</p>
      <p>The price will vary depending on desired payout methods – we support direct payments to bank accounts (EUR, USD, HRK), or PayPal.</p>`
    }else if(answerID == 14){
      htmlData=`<p>The best time to sell a cryptocurrency is when you get 25% increase from the original purchase of your token. If it goes down, the option is to hold and wait till it gets back to higher price. As mentioned cryptocurrency are extremely volatile, you can lose 95 percent of your asset anytime or earn 95 percent.</p>`
    }else if(answerID == 15){
      htmlData=`
      <p>Here is a consolidated list of best cryptocurrency exchanges with my comments:</p>
      <ol style="text-align: justify;"><li><a href="https://binance.com/" sl-processed="1">Binance</a>:Offers mobile app and probably the fastest growing exchange. If you need to pick only one, this is the best and #1 in 2019.</li><li><a href="https://bittrex.com/" sl-processed="1">Bittrex</a>: Another high-quality exchange with a lot of coins</li><li><a href="https://Changelly.com/" sl-processed="1">Changelly</a>: Instantly convert any cryptocurrency to any of your choices. Great for instant conversion</li><li><a href="https://Bitmex.com" sl-processed="1">Bitmex</a>: One of the whales of Cryptocurrency exchange. You can do margin trading if that’s your thing.</li><li><a href="https://KUCoin.com" sl-processed="1">KuCoin</a>: One of the strongest exchange that also offers a mobile app (Android and iOS). They have been constantly updating their mobile app to make it one of the best in the industry.</li></ol>
      `
    }else if(answerID == 16){
      htmlData=`<p>You can store cryptocurrency in wallet</p><p>below are the criteria to choose a good wallet </p>
      <p><span style="font-weight: 400;">What are the desired traits of a crypto wallet and how hard can choose a wallet to be? This seemingly easy answer, unfortunately, does not have a satisfying answer: convenience may come at the cost of security; additional features may come at the cost of a steeper learning curve. More importantly, what are the traits that, ultimately, you value over the others? See the list below, not in order of importance:</span></p>
      <ol>
        <li style="font-weight: 400;"><b>Cost.</b><span style="font-weight: 400;"> Is it free? What are the drawbacks of using this wallet?</span></li>
        <li style="font-weight: 400;"><b>Security. </b><span style="font-weight: 400;">Does the company have a track record of security excellence?</span></li>
        <li style="font-weight: 400;"><b>Mobility.</b><span style="font-weight: 400;"> Is it easy to keep and difficult to lose? Is it accessible anytime, anywhere?</span></li>
        <li style="font-weight: 400;"><b>User-friendliness.</b><span style="font-weight: 400;"> Is the wallet UI intuitively designed? Can I store a range of altcoins?</span></li>
        <li style="font-weight: 400;"><b>Convenience.</b><span style="font-weight: 400;"> Am I able to make a fast purchase when the time calls for it?</span></li>
        <li style="font-weight: 400;"><b>Style.</b><span style="font-weight: 400;"> Do I have a weakness for cool tech gadgets?</span></li>
      </ol>`
    }else if(answerID == 17){
      htmlData=`
      <h2>7 Must Have Wallets: How To Keep Your Cryptocurrency Safe</h2>
      <p><strong>Atomic Wallet&nbsp;</strong></p>
      <p><b>KeepKey – Hardware Wallet</b></p>
      <p><b>Nano Ledger S – Hardware Wallet</b></p>
      <p><b>Trezor – Hardware Wallet</b></p>
      <p><b>Coinbase – Hot Wallet</b></p>
      <p><b>MyEtherWallet – Paper Wallet</b></p>
      <p><b>Jaxx — Software Wallet</b></p>`
    }else if(answerID == 18){
      htmlData=`<div class="ui_qtext_expanded"><span class="ui_qtext_rendered_qtext"><p class="ui_qtext_para">Nothing.</p><p class="ui_qtext_para">Absolutely nothing will happen.</p>
      <p class="ui_qtext_para">In fact, it might actually propel some of the most significant blockchain developers to be more efficient and motivated to make it happen.</p><p class="ui_qtext_para">Think of it this way:</p><p class="ui_qtext_para">Perhaps cryptocurrencies aren’t banned by most governments as of today, but they are a big no-no in other influential countries.</p><p class="ui_qtext_para">America’s SEC are making it extra difficult for cryptos to take off by rejecting ETFs and putting continuous restrictions on exchanges and other crypto-related affairs.</p>
      <p class="ui_qtext_para">UK and Canadian banks will freeze your account if they find out you’ve been getting fiat payments into your bank account for selling cryptos on external platforms.</p><p class="ui_qtext_para">China has banned holding, trading and mining cryptos completely and altogether.</p><p class="ui_qtext_para">But yet, none of those bans and restrictions had slowed down the pace at which cryptocurrencies are expanding forward.</p><p class="ui_qtext_para">Okay, they might be legal per se and as far as it goes for the pure definition of it, but what does legal mean?</p><p class="ui_qtext_para">If they still remain unregulated in most countries, don’t you think that it sort of implies they might not be so legal in the first place?</p><p class="ui_qtext_para">It won’t make a difference whether they’re banned or not.</p><p class="ui_qtext_para">Opposite to that, it should make them more wanted and desired which isn’t a bad thing after all.</p><p class="ui_qtext_para">In my opinion though, it will never happen they get banned.</p><p class="ui_qtext_para">Economically speaking, it doesn’t make any sense.</p>
      <p class="ui_qtext_para">No government would benefit from doing so and they would expose themselves to losing a lot of money in the long run.</p></span></div>`
    }else if(answerID == 19){
      htmlData=`<p><span>Smart contracts help you exchange money, property, shares, or anything of value in a transparent, conflict-free way while avoiding the services of a middleman.</span></p>
      <p><span>The best way to describe smart contracts is to compare the technology to a vending machine. Ordinarily, you would go to a lawyer or a notary, pay them, and wait while you get the document. With smart contracts, you simply drop a bitcoin into the vending machine (i.e. ledger), and your escrow, driver’s license, or whatever drops into your account.&nbsp;More so, smart contracts not only define the rules and penalties around an agreement in the same way that a traditional contract does, but also automatically enforce those obligations.<br>
      .</span></p>
      `
    }else if(answerID == 20){
      htmlData=`<b>Here are the <b><b><b><b>10</b></b></b></b> <b>most</b> <b>popular</b> cryptocurrencies in circulation today.</b>
      <ol class="X5LH0c"><li class="TrT0Xe">1 Bitcoin. The original and <b>most</b> widely used. ... </li><li class="TrT0Xe">2 Bitcoin cash. ... </li><li class="TrT0Xe">3 Litecoin. ... </li><li class="TrT0Xe">4 Dogecoin. ... </li><li class="TrT0Xe">5 Ethereum. ... </li><li class="TrT0Xe">6 BAT. ... </li><li class="TrT0Xe">7 NEO. </li><li class="TrT0Xe">8 Ripple XRP.</li><li class="TrT0Xe">9 Stellar XLM.</li><li class="TrT0Xe">10 Cardano ADA.</li></ol>
      `
    }else if(answerID == 21){
      htmlData=`<p>Mining any type of cryptocurrencies basically needs powerful hardware and the right software. The value of the currency highly depends on the units available in the marketplace, they are carefully monitored in a very accurate process. Mining cryptocurrency is the process of generating units in the cryptocurrency.</p>
      <p>To understand better, let us assume a large economy with billions of dollars in banks altogether. Now, since this situation is not physically possible for them to store these currency notes in banks, so they store it in a digital format with central reserve bank. The reserve bank then maintains a digital record of what it was owed to bank but doesn’t keep the notes in physical form. So whenever it needs to push money into the system and short of its notes, they will be printed and issued.</p>
      <p>Despite the fact that the reserved bank has the capability to print as many notes, it does not do without a valid reason. This is because when more currency is printed, more money is circulated in the market, therefore this will not make people richer, this will only devalue the existing currency. The more the units in the market the more it is divided and it becomes less.</p>
      <p>The situation is the same when it comes to cryptocurrency, the mining of cryptocurrency is monitored carefully to ensure the value of existing coins will not depreciate.</p>
      `
    }else if(answerID == 22){
      htmlData=`<p>Like any other reasons on the digital world, losing your password or make mistake in your transaction then you will lose your funds or the account itself forever with no chance of getting it back. Cryptocurrencies are extremely serious and there’s no second chance at all, so make sure to take extra careful to everything you do with your wallet. Once locked then it’s a good bye to your account. To make worse, your cryptocurrency wallet are easy to rob compared to a what bank has. For instance your wallet is open on a computer then anyone has access with it, your overall balance could be washed out without any trace.</p>
      <p>Even Law enforcement at less than NSA level is not able to help out unless the thief itself is sloppy beyond belief because of its convenience of moving the funds to any cryptocurrency through anonymous transaction makes tracking nearly impossible to those individual that has no access to the real time worldwide electronic monitoring system which is no one is going to allow use in case of a stolen cryptocurrency.</p>
      `
    }else if(answerID == 23){
      htmlData=`<p>Basically, a cryptocurrency exist because there are demands, what’s the use of it if people could not maximize its function?</p>
      <p>Now here the twist: don't think of existing needs but needs manufacture, or any needs that people haven’t realized it yet. Just imagine if you have a good chat to Justine Bieber and he agrees to sell his prelove items using the recently created newcoin. Now you have a change of monopoly and keen purchaser, so this time it’s hard to commit mistake.</p>
      <p>Another situation, in which some big players charges magic fees, (credit card fees and currency transfer), or long processing of the transaction because of clearing. There are even organization that process currency transfer at a long period of time. Even though everything in the system is working fine. With the use of cryptocurrency all of those alibis, secret fees, delays, etc. will be forgotten.</p>
      `
    }
    else if(answerID == 24){
      htmlData=`<p>As what we keep saying, cryptocurrency is a decentralized payment system in which it allows its user to exchange even without the help of internet or the involvement of a financial institution. It has a superb authentication system and unique design to send payment at almost instant at the lowest cost anywhere in the world. Therefore, the answer the question is obviously yes!</p>
      <p>Sending via cryptocurrency is simple yet fast, just log in on your wallet on the computer with internet connection and immediately send funds to someone that you want to send. Every account has no geographical borders and does not take country regulations, shall we say this is the easiest way to move your asset around the globe.</p>
      <p>One’s a transaction is over, the receiver can check his/her wallet and go with another transaction. When transaction is completed, it would only take 3 seconds to 50 minutes and the coins will be received. It only need at least 6 confirmation before the transaction will be process. Fast and simple right? The transaction cost is also low to around 0.30% fee.</p>
      `
    }

    return htmlData;
  }

}
