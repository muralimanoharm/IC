import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss']
})
export class DefinitionComponent implements OnInit {
  title:string;
  bitcoin:boolean;
  altcoin:boolean;
  altlist:boolean;
  alldef:boolean;
  Abstract:boolean;
  words:string[];
  alphabets:Map<string,number>;

  constructor(private _Activatedroute:ActivatedRoute, private router:Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    }; 
   }  
  ngOnInit() {
    this.title = this._Activatedroute.snapshot.params['id'];
    this.bitcoin = false;;
    this.altcoin = false;;
    this.altlist = false;
    this.alldef = false;
    this.Abstract = false;
    this.words=[];
    if(this.title == "Bitcoin"){
      this.bitcoin = true;
    }else if(this.title == "Altcoin"){
      this.altcoin = true;
    }else if(this.title == "AllDef"){
      this.alldef = true;
      this.words = ['Abstract',
        'Account',
        'Adam Back',
        'Addy',
        'Airdrop',
        'Algorithm',
        'Alphanumeric',
        'Altcoin',
        'AML',
        'Anonymous',
        'Application-Specific Integrated Circuit',
        'Arbitrage',
        'ASIC Miner',
        'ATH',
        'Atomic Swap',
        'Bag Holder',
        'Bear',
        'Bear Trap',
        'Bearwhale',
        'BFA',
        'BGP',
        'Bit',
        'Bitcoin',
        'Bitcoin ATM',
        'Bitpay',
        'Bitpay.com',
        'Block',
        'Block header',
        'Block Height',
        'Block Reward',
        'Blockchain',
        'Blockchain Explorer',
        'Bot',
        'Breaking',
        'Browser Extension',
        'Brute Force Attack',
        'BTC',
        'BTFD',
        'BTM',
        'Bubble',
        'Bull',
        'Bull Trap',
        'Byzantine Generals Problem',
        'Candlesticks',
        'Capital',
        'Cash',
        'Central Processing Unit',
        'Centralized',
        'Chain Split',
        'Choyna',
        'Cipher',
        'Ciphertext',
        'Circulating Supply',
        'Code',
        'Coin',
        'Coinbase.com',
        'Cold Storage',
        'Confirmation',
        'Consensus',
        'Contract',
        'Core Wallet',
        'Correction',
        'CPU',
        'Crowdfunding',
        'Crypto',
        'Cryptoanalysis',
        'Cryptocurrency',
        'Cryptography',
        'Cryptojacking',
        'Cryptology',
        'Currency',
        'DAG',
        'DAO',
        'DApp',
        'Dark Web',
        'DDoS',
        'Decentralized',
        'Decentralized Application',
        'Decentralized Autonomous Organization',
        'Decentralized Exchange',
        'Decryption',
        'Deposit',
        'Depth Chart',
        'DEX',
        'Digital',
        'Digital Asset',
        'Digital Signature',
        'Dildo',
        'Dip',
        'Directed Acyclic Graph',
        'Distributed',
        'Distributed Denial-of-Service Attacks',
        'Distributed Ledger',
        'Diversification',
        'DLT',
        'Double Spending',
        'Dust Transactions',
        'DYOR',
        'EEA',
        'Electrum Wallet',
        'Emission',
        'Encryption',
        'Enterprise Ethereum Alliance',
        'Equity Token',
        'ERC-20',
        'Escrow',
        'ETH',
        'Ethereum',
        'Exchange',
        'Faucet',
        'Fiat Currency',
        'Financial Crimes Enforcement Network',
        'Flappening',
        'Flippening',
       ' FOMO',
        'Fork',
        'FUD',
        'FUDster',
        'Full Node',
        'Fungible',
        'Gains',
        'Gas',
        'Gas Limit',
        'Gas Price',
        'Gdax.com',
        'Genesis Block',
        'GPU',
        'Graphical Processing Unit',
        'Green or Red',
       ' Gwei',
        'Hacking',
        'Halving',
        'Hard Cap',
        'Hard Fork',
        'Hardware Wallet',
        'Hash Function',
        'Hash Rate',
        'Hidden Cap',
        'HODL',
        'Hot Storage',
        'Hyperledger',
        'IBO',
        'ICO',
        'Inflation',
        'Initial Bounty Offering',
        'Initial Coin Offering',
        'Initial Purchase Offering',
        'Input',
        'Instamine',
        'Invest',
        'JOMO',
        'KYC',
        'Key',
        'Lambo',
        'Ledger',
        'Leverage',
       ' Lightning Network',
        'Limit Order',
        'Lisk',
        'Litecoin',
        'LTC',
        'Margin Trading',
        'Market Capitalization',
        'Market Order',
        'Masternode',
        'Max Supply',
        'mBTC',
        'Megabitcoin',
        'Megahashes per Second',
        'Merkle Tree',
        'Microbitcoin',
        'Microtransaction',
        'Millibitcoin',
        'Miner',
        'Mining',
        'Mining Difficulty',
        'Mining Pool',
        'Mining Rig',
        'Minting',
       ' Mixing Service',
        'Mnemonic Phrase',
        'Mnemonics',
        'Money',
        'Mooning',
        'Moore\'s Law',
        'Mtgox.com',
        'Multisignature',
        'NEO',
        'Newb',
        'Node',
        'Nonce',
        'Open Source',
        'Orphan',
        'OTC',
        'Output',
        'Over The Counter',
        'P2P',
        'Paper Wallet',
        'Payee',
        'Peer to Peer',
        'Permissionless',
        'Platform',
        'PoB',
        'PoD',
        'Poloniex.com',
        'Ponzi Scheme',
        'Portfolio',
        'PoS',
        'Position',
        'PoW',
        'Pre-Sale',
        'Premine',
        'Price Chart',
        'Privacy Coin',
        'Private Key',
        'Proof of Burn',
        'Proof of Developer',
        'Proof of Stake',
        'Proof of Work',
        'Pseudonymous',
        'Public Address',
        'Public Key',
        'Pump and Dump',
        'Pumping',
        'Pyramid Scheme',
        'QR Code',
        'Raiden Network',
        'Reddit',
        'Regulated',
        'Regulation',
        'Rekt',
        'Remittance',
        'Resistance & Support Levels',
        'Return on Investment',
        'Ripple',
        'Roadmap',
        'ROI',
        'Run',
        'Satoshi',
        'Satoshi Nakamoto',
        'Scamcoin',
        'Scammer',
        'SEC',
        'Secret Key',
        'Secure Hash Algorithm 256',
        'Securities and Exchange Commission',
        'Security Token',
        'Security Token Offering',
        'Segregated Witness',
        'SHA 256',
        'Shapeshift.io',
        'Sharding',
        'Shilling',
        'Shitcoin',
        'Shorting',
        'Side Chain',
        'Silk Road',
        'Simplified Payment Verification',
        'Smart Contract',
        'Soft Cap',
        'Soft Fork',
        'Software Fork',
        'Software Wallet',
        'Solidity',
        'SPV',
        'Stake',
        'Stale Block',
        'State Channel',
        'STO',
        'Taint',
        'Tangle',
        'Terahashes per Second',
        'TestNet',
        'This is Gentlemen',
        'Ticker Symbol',
        'TLT',
        'Token',
        'Tokenize',
        'Total Supply',
        'Transaction',
        'Transaction Fee',
        'Transaction ID',
        'Trustless',
        'TX',
        'TX Fee',
        'uBTC',
        'Unbanked',
        'Unregulated',
        'Unspent Transaction Output',
        'Use Case',
        'Utility Token',
        'UTXO',
        'Validator',
        'Vanity Address',
        'Venture',
        'Venture Capital',
        'Vertcoin',
        'Virgin Bitcoin',
        'Virus',
        'Volatility',
        'Volume',
        'VTC',
        'Wallet',
        'Weak Hands',
        'Wei',
        'Whales',
        'White Paper',
        'Whitelist',
        'XRP',
        'Year 2038 problem',
        'Zero Confirmation Transaction'
      ]
      this.alphabets = new Map(
        [
          ['a',0],['b',0],['c',0],['d',0],['e',0],['f',0],['g',0],['h',0],['i',0],['j',0], ['k',0],['l',0],['m',0], ['n',0], ['o',0], ['p',0], ['q',0],['r',0],['s',0], ['t',0], ['u',0],['v',0], ['w',0], ['x',0],['y',0], ['z',0]
        ]
      );
    }else if(this.title == "AltList"){
      this.altlist = true;
    }else if(this.title == "Abstract"){
      this.Abstract = true;
    }
  }

  SetValueForAlphabetMap(letter:string,total:number){
    this.alphabets.set(letter,total);
  }

  GetTotalValueForTheAlphabet(letter:string):number{
    return this.alphabets.get(letter)
  }
}
