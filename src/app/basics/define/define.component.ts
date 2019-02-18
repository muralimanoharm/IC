import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-define',
  templateUrl: './define.component.html',
  styleUrls: ['./define.component.scss']
})
export class DefineComponent implements OnInit {

  title:string;
  //** A */
  Abstract:boolean;
  Account:boolean;
  AdamBack:boolean;
  Addy:boolean;
  Airdrop:boolean;
  Algorithm:boolean;
  Alphanumeric:boolean;
  Altcoin:boolean;
  AML:boolean;
  Anonymous:boolean;
  ASIC:boolean;
  Arbitrage:boolean;
  ASICMiner:boolean;
  ATH:boolean;
  AtomicSwap:boolean;

  BagHolder:boolean;
  Bear:boolean;
  BearTrap:boolean;
  Bearwhale:boolean;
  BFA:boolean;
  BGP:boolean;
  Bit:boolean;
  Bitcoin:boolean;
  BitcoinATM:boolean;
  Bitpay:boolean;
  Block:boolean;
  BlockHeader:boolean;
  BlockHeight:boolean;
  BlockReward:boolean;
  Blockchain:boolean;
  BlockchainExplorer:boolean;
  Bot:boolean;
  Breaking:boolean;
  BrowserExtension:boolean;
  BruteForceAttack:boolean;
  BTC:boolean;
  BTFD:boolean;
  BTM:boolean;
  Bubble:boolean;
  Bull:boolean;
  BullTrap:boolean;
  ByzantineGeneralsProblem:boolean;
  /** C */
  Candlesticks:boolean;
  Capital:boolean;
  Cash:boolean;
  CentralProcessingUnit:boolean;
  Centralized:boolean;
  ChainSplit:boolean;
  Choyna:boolean;
  Cipher:boolean;
  Ciphertext:boolean;
  CirculatingSupply:boolean;
  Code:boolean;
  Coin:boolean;
  Coinbase:boolean;
  ColdStorage:boolean;
  Confirmation:boolean;
  Consensus:boolean;
  Contract:boolean;
  CoreWallet:boolean;
  Correction:boolean;
  CPU:boolean;
  Crowdfunding:boolean;
  Crypto:boolean;
  Cryptoanalysis:boolean;
  Cryptocurrency:boolean;
  Cryptography:boolean;
  Cryptojacking:boolean;
  Cryptology:boolean;
  Currency:boolean;
  /** D */
  DAG:boolean;
  DAO:boolean;
  DApp:boolean;
  DarkWeb:boolean;
  DDoS:boolean;
  Decentralized:boolean;
  DecentralizedApplication:boolean;
  DecentralizedAutonomousOrganization:boolean;
  DecentralizedExchange:boolean;
  Decryption:boolean;
  Deposit:boolean;
  DepthChart:boolean;
  DEX:boolean;
  Digital:boolean;
  DigitalAsset:boolean;
  DigitalSignature:boolean;
  Dildo:boolean;
  Dip:boolean;
  DirectedAcyclicGraph:boolean;
  Distributed:boolean;
  DDOSAttack:boolean;
  DistributedLedger:boolean;
  Diversification:boolean;
  DLT:boolean;
  DoubleSpending:boolean;
  DustTransactions:boolean;
  DYOR:boolean;
  /**E */
  EEA:boolean;
  ElectrumWallet:boolean;
  Emission:boolean;
  Encryption:boolean;
  EnterpriseEthereumAlliance:boolean;
  EquityToken:boolean;
  ERC20:boolean;
  Escrow:boolean;
  ETH:boolean;
  Ethereum:boolean;
  Exchange:boolean;
  /**F */
  Faucet:boolean;
  FiatCurrency:boolean;
  FCEN:boolean;
  Flappening:boolean;
  Flippening:boolean;
  FOMO:boolean;
  Fork:boolean;
  FUD:boolean;
  FUDster:boolean;
  FullNode:boolean;
  Fungible:boolean;
  /**G */
  Gains:boolean;
  Gas:boolean;
  GasLimit:boolean;
  GasPrice:boolean;
  Gdax:boolean;
  GenesisBlock:boolean;
  GPU:boolean;
  GreenorRed:boolean;
  Gwei:boolean;
  /**H */
  Hacking:boolean;
  Halving:boolean;
  HardCap:boolean;
  HardFork:boolean;
  HardwareWallet:boolean;
  HashFunction:boolean;
  HashRate:boolean;
  HiddenCap:boolean;
  HODL:boolean;
  HotStorage:boolean;
  Hyperledger:boolean;
  /**I */
  IBO:boolean;
  ICO:boolean;
  Inflation:boolean;
  IPO:boolean;
  Input:boolean;
  Instamine:boolean;
  Invest:boolean;
  /**J */
  JOMO:boolean;
  /**K */
  KYC:boolean;
  Key:boolean;
  /**L */
  Lambo:boolean;
  Ledger:boolean;
  Leverage:boolean;
  LightningNetwork:boolean;
  LimitOrder:boolean;
  Lisk:boolean;
  Litecoin:boolean;
  LTC:boolean;
  /**M */
  MarginTrading:boolean;
  MarketCapitalization:boolean;
  MarketOrder:boolean;
  Masternode:boolean;
  MaxSupply:boolean;
  mBTC:boolean;
  Megabitcoin:boolean;
  MegahashesperSecond:boolean;
  MerkleTree:boolean;
  Microbitcoin:boolean;
  Microtransaction:boolean;
  Millibitcoin:boolean;
  Miner:boolean;
  Mining:boolean;
  MiningDifficulty:boolean;
  MiningPool:boolean;
  MiningRig:boolean;
  Minting:boolean;
  MixingService:boolean;
  MnemonicPhrase:boolean;
  Mnemonics:boolean;
  Money:boolean;
  Mooning:boolean;
  MooresLaw:boolean;
  Mtgox:boolean;
  Multisignature:boolean;
  /**N */
  NEO:boolean;
  Newb:boolean;
  Node:boolean;
  Nonce:boolean;
  /**O */
  OpenSource:boolean;
  Orphan:boolean;
  OTC:boolean;
  Output:boolean;
  OverTheCounter:boolean;
  /**P */
  P2P:boolean;
  PaperWallet:boolean;
  Payee:boolean;
  PeertoPeer:boolean;
  Permissionless:boolean;
  Platform:boolean;
  PoB:boolean;
  PoD:boolean;
  Poloniex:boolean;
  PonziScheme:boolean;
  Portfolio:boolean;
  PoS:boolean;
  Position:boolean;
  PoW:boolean;
  PreSale:boolean;
  Premine:boolean;
  PriceChart:boolean;
  PrivacyCoin:boolean;
  PrivateKey:boolean;
  ProofofBurn:boolean;
  ProofofDeveloper:boolean;
  ProofofStake:boolean;
  ProofofWork:boolean;
  Pseudonymous:boolean;
  PublicAddress:boolean;
  PublicKey:boolean;
  PumpandDump:boolean;
  Pumping:boolean;
  PyramidScheme:boolean;
  /**Q */
  QRCode:boolean;
  /**R */
  RaidenNetwork:boolean;
  Reddit:boolean;
  Regulated:boolean;
  Regulation:boolean;
  Rekt:boolean;
  Remittance:boolean;
  RSLevels:boolean;
  Ripple:boolean;
  Roadmap:boolean;
  ROI:boolean;
  Run:boolean;
  /**S */
  Satoshi:boolean;
  SatoshiNakamoto:boolean;
  Scamcoin:boolean;
  Scammer:boolean;
  SEC:boolean;
  SecretKey:boolean;
  SecureHashAlgorithm256:boolean;
  SecuritiesandExchangeCommission:boolean;
  SecurityToken:boolean;
  SecurityTokenOffering:boolean;
  SegregatedWitness:boolean;
  SHA256:boolean;
  Shapeshifio:boolean;
  Sharding:boolean;
  Shilling:boolean;
  Shitcoin:boolean;
  Shorting:boolean;
  SideChain:boolean;
  SilkRoad:boolean;
  SimplifiedPaymentVerification:boolean;
  SmartContract:boolean;
  SoftCap:boolean;
  SoftFork:boolean;
  SoftwareFork:boolean;
  SoftwareWallet:boolean;
  Solidity:boolean;
  SPV:boolean;
  Stake:boolean;
  StaleBlock:boolean;
  StateChannel:boolean;
  STO:boolean;
  /**T */
  Taint:boolean;
  Tangle:boolean;
  TerahashesperSecond:boolean;
  TestNet:boolean;
  ThisIsGentlemen:boolean;
  TickerSymbol:boolean;
  TLT:boolean;
  Token:boolean;
  Tokenize:boolean;
  TotalSupply:boolean;
  Transaction:boolean;
  TransactionFee:boolean;
  TransactionID:boolean;
  Trustless:boolean;
  TX:boolean;
  TXFee:boolean;
  /**U */
  uBTC:boolean;
  Unbanked:boolean;
  Unregulated:boolean;
  UnspentTransactionOutput:boolean;
  UseCase:boolean;
  UtilityToken:boolean;
  UTXO:boolean;
  /**V */
  Validator:boolean;
  VanityAddress:boolean;
  Venture:boolean;
  VentureCapital:boolean;
  Vertcoin:boolean;
  VirginBitcoin:boolean;
  Virus:boolean;
  Volatility:boolean;
  Volume:boolean;
  VTC:boolean;
  /**W */
  Wallet:boolean;
  WeakHands:boolean;
  Wei:boolean;
  Whales:boolean;
  WhitePaper:boolean;
  Whitelist:boolean;
  /**X */
  XRP:boolean;
  /**Y */
  Year2038problem:boolean;
  /**Z */
  ZeroConfirmationTransaction:boolean;

  constructor(private _Activatedroute:ActivatedRoute, private router:Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    }; 
   }

  ngOnInit() {
    this.title = this._Activatedroute.snapshot.params['id'];
    // ** A
    this.Abstract = false;
    this.Account = false;
    this.AdamBack = false;
    this.Addy = false;
    this.Airdrop= false;
    this.Algorithm= false;
    this.Alphanumeric= false;
    this.Altcoin= false;
    this.AML= false;
    this.Anonymous= false;
    this.ASIC = false;
    this.Arbitrage = false;
    this.ASICMiner = false;
    this.AtomicSwap = false;
    // ** B
    this.BagHolder = false;
    this.Bear = false;
    this.BearTrap = false;
    this.Bearwhale = false;
    this.BFA = false;
    this.BGP = false;
    this.Bit = false;
    this.Bitcoin = false;
    this.BitcoinATM = false;
    this.Bitpay = false;
    this.Block = false;
    this.BlockHeader = false;
    this.BlockHeight = false;
    this.BlockReward = false;
    this.Blockchain = false;
    this.BlockchainExplorer = false;
    this.Bot = false;
    this.Breaking = false;
    this.BrowserExtension = false;
    this.BruteForceAttack = false;
    this.BTC = false;
    this.BTFD = false;
    this.BTM = false;
    this.Bubble = false;
    this.Bull = false;
    this.BullTrap = false;
    this.ByzantineGeneralsProblem = false;
    /**C */
    this.Candlesticks = false;
    this.Capital = false;
    this.Cash = false;
    this.CentralProcessingUnit = false;
    this.Centralized = false;
    this.ChainSplit = false;
    this.Choyna = false;
    this.Cipher = false;
    this.Ciphertext = false;
    this.CirculatingSupply = false;
    this.Code = false;
    this.Coin = false;
    this.Coinbase = false;
    this.ColdStorage = false;
    this.Confirmation = false;
    this.Consensus = false;
    this.Contract = false;
    this.CoreWallet = false;
    this.Correction = false;
    this.CPU = false;
    this.Crowdfunding = false;
    this.Crypto = false;
    this.Cryptoanalysis = false;
    this.Cryptocurrency = false;
    this.Cryptography = false;
    this.Cryptojacking = false;
    this.Cryptology = false;
    this.Currency = false;
    /**D */
    this.DAG = false;
    this.DAO = false;
    this.DApp = false;
    this.DarkWeb = false;
    this.DDoS = false;
    this.Decentralized = false;
    this.DecentralizedApplication = false;
    this.DecentralizedAutonomousOrganization = false;
    this.DecentralizedExchange = false;
    this.Decryption = false;
    this.Deposit = false;
    this.DepthChart = false;
    this.DEX = false;
    this.Digital = false;
    this.DigitalAsset = false;
    this.DigitalSignature = false;
    this.Dildo = false;
    this.Dip = false;
    this.DirectedAcyclicGraph = false;
    this.Distributed = false;
    this.DDOSAttack = false;
    this.DistributedLedger = false;
    this.Diversification = false;
    this.DLT = false;
    this.DoubleSpending = false;
    this.DustTransactions = false;
    this.DYOR = false;
    /**E */
    this.EEA = false;
    this.ElectrumWallet = false;
    this.Emission = false;
    this.Encryption = false;
    this.EnterpriseEthereumAlliance = false;
    this.EquityToken = false;
    this.ERC20 = false;
    this.Escrow = false;
    this.ETH = false;
    this.Ethereum = false;
    this.Exchange = false;
    /**F */
    this.Faucet = false;
    this.FiatCurrency = false;
    this.FCEN = false;
    this.Flappening = false;
    this.Flippening = false;
    this.FOMO = false;
    this.Fork = false;
    this.FUD = false;
    this.FUDster = false;
    this.FullNode = false;
    this.Fungible = false;
    /**G */
    this.Gains = false;
    this.Gas = false;
    this.GasLimit = false;
    this.GasPrice = false;
    this.Gdax = false;
    this.GenesisBlock = false;
    this.GPU = false;
    this.GreenorRed = false;
    this.Gwei = false;
    /**H */
    this.Hacking = false;
    this.Halving = false;
    this.HardCap = false;
    this.HardFork = false;
    this.HardwareWallet = false;
    this.HashFunction = false;
    this.HashRate = false;
    this.HiddenCap = false;
    this.HODL = false;
    this.HotStorage = false;
    this.Hyperledger = false;
    /**I */
    this.IBO = false;
    this.ICO = false;
    this.Inflation = false;
    this.IPO = false;
    this.Input = false;
    this.Instamine = false;
    this.Invest = false;
    /**J */
    this.JOMO = false;
    /**K */
    this.KYC = false;
    this.Key = false;
    /**L */
    this.Lambo = false;
    this.Ledger = false;
    this.Leverage = false;
    this.LightningNetwork = false;
    this.LimitOrder = false;
    this.Lisk = false;
    this.Litecoin = false;
    this.LTC = false;
    /**M */
    this.MarginTrading = false;
    this.MarketCapitalization = false;
    this.MarketOrder = false;
    this.Masternode = false;
    this.MaxSupply = false;
    this.mBTC = false;
    this.Megabitcoin = false;
    this.MegahashesperSecond = false;
    this.MerkleTree = false;
    this.Microbitcoin = false;
    this.Microtransaction = false;
    this.Millibitcoin = false;
    this.Miner = false;
    this.Mining = false;
    this.MiningDifficulty = false;
    this.MiningPool = false;
    this.MiningRig = false;
    this.Minting = false;
    this.MixingService = false;
    this.MnemonicPhrase = false;
    this.Mnemonics = false;
    this.Money = false;
    this.Mooning = false;
    this.MooresLaw = false;
    this.Mtgox = false;
    this.Multisignature = false;
    /**N */
    this.NEO = false;
    this.Newb = false;
    this.Node = false;
    this.Nonce = false;
    /**O */
    this.OpenSource = false;
    this.Orphan = false;
    this.OTC = false;
    this.Output = false;
    this.OverTheCounter = false;
    /**P */
    this.P2P = false;
    this.PaperWallet = false;
    this.Payee = false;
    this.PeertoPeer = false;
    this.Permissionless = false;
    this.Platform = false;
    this.PoB = false;
    this.PoD = false;
    this.Poloniex = false;
    this.PonziScheme = false;
    this.Portfolio = false;
    this.PoS = false;
    this.Position = false;
    this.PoW = false;
    this.PreSale = false;
    this.Premine = false;
    this.PriceChart = false;
    this.PrivacyCoin = false;
    this.PrivateKey = false;
    this.ProofofBurn = false;
    this.ProofofDeveloper = false;
    this.ProofofStake = false;
    this.ProofofWork = false;
    this.Pseudonymous = false;
    this.PublicAddress = false;
    this.PublicKey = false;
    this.PumpandDump = false;
    this.Pumping = false;
    this.PyramidScheme = false;
    /**Q */
    this.QRCode = false;
    /**R */
    this.RaidenNetwork = false;
    this.Reddit = false;
    this.Regulated = false;
    this.Regulation = false;
    this.Rekt = false;
    this.Remittance = false;
    this.RSLevels = false;
    this.Ripple = false;
    this.Roadmap = false;
    this.ROI = false;
    this.Run = false;
    /**S */
    this.Satoshi = false;
    this.SatoshiNakamoto = false;
    this.Scamcoin = false;
    this.Scammer = false;
    this.SEC = false;
    this.SecretKey = false;
    this.SecureHashAlgorithm256 = false;
    this.SecuritiesandExchangeCommission = false;
    this.SecurityToken = false;
    this.SecurityTokenOffering = false;
    this.SegregatedWitness = false;
    this.SHA256 = false;
    this.Shapeshifio = false;
    this.Sharding = false;
    this.Shilling = false;
    this.Shitcoin = false;
    this.Shorting = false;
    this.SideChain = false;
    this.SilkRoad = false;
    this.SimplifiedPaymentVerification = false;
    this.SmartContract = false;
    this.SoftCap = false;
    this.SoftFork = false;
    this.SoftwareFork = false;
    this.SoftwareWallet = false;
    this.Solidity = false;
    this.SPV = false;
    this.Stake = false;
    this.StaleBlock = false;
    this.StateChannel = false;
    this.STO = false;
    /**T */
    this.Taint = false;
    this.Tangle = false;
    this.TerahashesperSecond = false;
    this.TestNet = false;
    this.ThisIsGentlemen = false;
    this.TickerSymbol = false;
    this.TLT = false;
    this.Token = false;
    this.Tokenize = false;
    this.TotalSupply = false;
    this.Transaction = false;
    this.TransactionFee = false;
    this.TransactionID = false;
    this.Trustless = false;
    this.TX = false;
    this.TXFee = false;
    /**U */
    this.uBTC = false;
    this.Unbanked = false;
    this.Unregulated = false;
    this.UnspentTransactionOutput = false;
    this.UseCase = false;
    this.UtilityToken = false;
    this.UTXO = false;
    /**V */
    this.Validator = false;
    this.VanityAddress = false;
    this.Venture = false;
    this.VentureCapital = false;
    this.Vertcoin = false;
    this.VirginBitcoin = false;
    this.Virus = false;
    this.Volatility = false;
    this.Volume = false;
    this.VTC = false;
    /**W */
    this.Wallet = false;
    this.WeakHands = false;
    this.Wei = false;
    this.Whales = false;
    this.WhitePaper = false;
    this.Whitelist = false;
    /**X */
    this.XRP = false;
    /**Y */
    this.Year2038problem = false;
    /**Z */
    this.ZeroConfirmationTransaction = false;

    if(this.title == 'Abstract'){
      this.Abstract = true;
    }else if(this.title == "Account"){
      this.Account = true;
    }else if(this.title == "Adam Back"){
      this.AdamBack = true;
    }else if(this.title == "Addy"){
      this.Addy = true;
    }else if(this.title == "Airdrop"){
      this.Airdrop = true;
    }else if(this.title == "Algorithm"){
      this.Algorithm = true;
    }else if(this.title == "Alphanumeric"){
      this.Alphanumeric = true;
    }else if(this.title == "Altcoin"){
      this.Altcoin = true;
    }else if(this.title == "AML"){
      this.AML = true;
    }else if(this.title == "Anonymous"){
      this.Anonymous = true;
    }else if(this.title == "Application-Specific Integrated Circuit"){
      this.ASIC = true;
    }else if(this.title == "Arbitrage"){
      this.Arbitrage = true;
    }else if(this.title == "ASIC Miner"){
      this.ASICMiner = true;
    }else if(this.title == "ATH"){
      this.ATH = true;
    }else if(this.title == "Atomic Swap"){
      this.AtomicSwap = true;
    }	else if(this.title == "Bag Holder"){
      this.BagHolder = true;
    }
    else if(this.title == "Bear"){
      this.Bear = true;
    }
    else if(this.title == "Bear Trap"){
      this.BearTrap = true;
    }
    else if(this.title == "Bearwhale"){
      this.Bearwhale = true;
    }
    else if(this.title == "BFA"){
      this.BFA = true;
    }
    else if(this.title == "BGP"){
      this.BGP = true;
    }
    else if(this.title == "Bit"){    
      this.Bit = true;
    }
    else if(this.title == "Bitcoin"){
      this.Bitcoin = true;
    }
    else if(this.title == "Bitcoin ATM"){
       this.BitcoinATM = true;
    }
    else if(this.title == "Bitpay"){
      this.Bitpay = true;
    }
    else if(this.title == "Bitpay.com"){
      this.Bitpay = true;
    }
    else if(this.title == "Block"){
      this.Block = true;
    }
    else if(this.title == "Block header"){
      this.BlockHeader = true;
    }
    else if(this.title == "Block Height"){
      this.BlockHeight = true;
    }
    else if(this.title == "Block Reward"){
      this.BlockReward = true;
    }
    else if(this.title == "Blockchain"){
      this.Blockchain = true;
    }
    else if(this.title == "Blockchain Explorer"){
      this.BlockchainExplorer = true;
    }
    else if(this.title == "Bot"){    
      this.Bot = true;
    }
    else if(this.title == "Breaking"){
      this.Breaking = true;
    }
    else if(this.title == "Browser Extension"){
      this.BrowserExtension = true;
    }
    else if(this.title == "Brute Force Attack"){
      this.BFA = true;
    }
    else if(this.title == "BTC"){
      this.Bitcoin = true;
    }
    else if(this.title == "BTFD"){
      this.BTFD = true;
    }
    else if(this.title == "BTM"){
      this.BitcoinATM = true;
    }
    else if(this.title == "Bubble"){
      this.Bubble = true;
    }
    else if(this.title == "Bull"){
      this.Bull = true;
    }
    else if(this.title == "Bull Trap"){
      this.BullTrap = true;
    }
    else if(this.title == "Byzantine Generals Problem"){
      this.BGP = true;
    }
    /**C */
    else if(this.title == "Candlesticks"){
      this.Candlesticks = true;
    }
    else if(this.title == "Capital"){
      this.Capital = true;
    }
    else if(this.title == "Cash"){
      this.Cash = true;
    }
    else if(this.title == "Central Processing Unit"){
      this.CentralProcessingUnit = true;
    }
    else if(this.title == "Centralized"){
      this.Centralized = true;
    }
    else if(this.title == "Chain Split"){
      this.ChainSplit = true;
    }
    else if(this.title == "Choyna"){
      this.Choyna = true;
    }
    else if(this.title == "Cipher"){
      this.Cipher = true;
    }
    else if(this.title == "Ciphertext"){
      this.Ciphertext = true;
    }
    else if(this.title == "Circulating Supply"){
      this.CirculatingSupply = true;
    }
    else if(this.title == "Code"){
      this.Code = true;
    }
    else if(this.title == "Coin"){
      this.Coin = true;
    }
    else if(this.title == "Coinbase.com"){
      this.Coinbase = true;
    }
    else if(this.title == "Cold Storage"){
      this.ColdStorage = true;
    }
    else if(this.title == "Confirmation"){
      this.Confirmation = true;
    }
    else if(this.title == "Consensus"){
      this.Consensus = true;
    }
    else if(this.title == "Contract"){
      this.Contract = true;
    }
    else if(this.title == "Core Wallet"){
      this.CoreWallet = true;
    }
    else if(this.title == "Correction"){
      this.Correction = true;
    }
    else if(this.title == "CPU"){
      this.CentralProcessingUnit = true;
    }
    else if(this.title == "Crowdfunding"){
      this.Crowdfunding = true;
    }
    else if(this.title == "Crypto"){
      this.Crypto = true;
    }
    else if(this.title == "Cryptoanalysis"){
      this.Cryptoanalysis = true;
    }
    else if(this.title == "Cryptocurrency"){
      this.Cryptocurrency = true;
    }
    else if(this.title == "Cryptography"){
      this.Cryptography = true;
    }
    else if(this.title == "Cryptojacking"){
      this.Cryptojacking = true;
    }
    else if(this.title == "Cryptology"){
      this.Cryptology = true;
    }
    else if(this.title == "Currency"){
      this.Currency = true;
    }
    /**D */
    else if(this.title == "DAG"){
      this.DAG = true;
    }
    else if(this.title == "DAO"){
      this.DAO = true;
    }
    else if(this.title == "DApp"){
      this.DApp = true;
    }
    else if(this.title == "Dark Web"){
      this.DarkWeb = true;
    }
    else if(this.title == "DDoS"){    
      this.DDoS = true;
    }
    else if(this.title == "Decentralized"){
      this.Decentralized = true;
    }
    else if(this.title == "Decentralized Application"){
      this.DecentralizedApplication = true;
    }
    else if(this.title == "Decentralized Autonomous Organization"){
      this.DecentralizedAutonomousOrganization = true;
    }
    else if(this.title == "Decentralized Exchange"){
      this.DecentralizedExchange = true;
    }
    else if(this.title == "Decryption"){
      this.Decryption = true;
    }
    else if(this.title == "Deposit"){
      this.Deposit = true;
    }
    else if(this.title == "Depth Chart"){
      this.DepthChart = true;
    }
    else if(this.title == "DEX"){
      this.DEX = true;
    }
    else if(this.title == "Digital"){
      this.Digital = true;
    }
    else if(this.title == "Digital Asset"){
      this.DigitalAsset = true;
    }
    else if(this.title == "Digital Signature"){
      this.DigitalSignature = true;
    }
    else if(this.title == "Dildo"){
      this.Dildo = true;
    }
    else if(this.title == "Dip"){
      this.Dip = true;
    }
    else if(this.title == "Directed Acyclic Graph"){
      this.DirectedAcyclicGraph = true;
    }
    else if(this.title == "Distributed"){
      this.Distributed = true;
    }
    else if(this.title == "Distributed Denial-of-Service Attacks"){
      this.DDOSAttack = true;
    }
    else if(this.title == "Distributed Ledger"){
      this.DistributedLedger = true;
    }
    else if(this.title == "Diversification"){
      this.Diversification = true;
    }
    else if(this.title == "DLT"){
      this.DLT = true;
    }
    else if(this.title == "Double Spending"){
      this.DoubleSpending = true;
    }
    else if(this.title == "Dust Transactions"){
      this.DustTransactions = true;
    }
    else if(this.title == "DYOR"){
      this.DYOR = true;
    }
    /**E */
    else if(this.title == "EEA"){
      this.EEA = true;
    }
    else if(this.title == "Electrum Wallet"){
      this.ElectrumWallet = true;
    }
    else if(this.title == "Emission"){
      this.Emission = true;
    }
    else if(this.title == "Encryption"){
      this.Encryption = true;
    }
    else if(this.title == "Enterprise Ethereum Alliance"){
      this.EnterpriseEthereumAlliance = true;
    }
    else if(this.title == "Equity Token"){
      this.EquityToken = true;
    }
    else if(this.title == "ERC-20"){
      this.ERC20 = true;
    }
    else if(this.title == "Escrow"){
      this.Escrow = true;
    }
    else if(this.title == "ETH"){
      this.ETH = true;
    }
    else if(this.title == "Ethereum"){
      this.Ethereum = true;
    }
    else if(this.title == "Exchange"){
      this.Exchange = true;
    }
    /**F */
    else if(this.title == "Faucet"){
      this.Faucet = true;
    }
    else if(this.title == "Fiat Currency"){
      this.FiatCurrency = true;
    }
    else if(this.title == "Financial Crimes Enforcement Network"){
      this.FCEN = true;
    }
    else if(this.title == "Flappening"){
      this.Flappening = true;
    }
    else if(this.title == "Flippening"){
      this.Flippening = true;
    }
   else if(this.title == " FOMO"){
    this.FOMO = true;
   }
    else if(this.title == "Fork"){
      this.Fork = true;
    }
    else if(this.title == "FUD"){
      this.FUD = true;
    }
    else if(this.title == "FUDster"){
      this.FUDster = true;
    }
    else if(this.title == "Full Node"){
      this.FullNode = true;
    }
    else if(this.title == "Fungible"){
      this.Fungible = true;
    }
    /**G */
    else if(this.title == "Gains"){
      this.Gains = true;
    }
    else if(this.title == "Gas"){
      this.Gas = true;
    }
    else if(this.title == "Gas Limit"){
      this.GasLimit = true;
    }
    else if(this.title == "Gas Price"){
      this.GasPrice = true;
    }
    else if(this.title == "Gdax.com"){
      this.Gdax = true;
    }
    else if(this.title == "Genesis Block"){
      this.GenesisBlock = true;
    }
    else if(this.title == "GPU"){
      this.GPU = true;
    }
    else if(this.title == "Graphical Processing Unit"){
      this.GPU = true;
    }
    else if(this.title == "Green or Red"){
      this.GreenorRed = true;
    }
    else if(this.title == " Gwei"){
      this.Gwei = true;
    }
    /**H */
    else if(this.title == "Hacking"){
      this.Hacking = true;
    }
    else if(this.title == "Halving"){
      this.Halving = true;
    }
    else if(this.title == "Hard Cap"){
      this.HardCap = true;
    }
    else if(this.title == "Hard Fork"){
      this.HardFork = true;
    }
    else if(this.title == "Hardware Wallet"){
      this.HardwareWallet = true;
    }
    else if(this.title == "Hash Function"){
      this.HashFunction = true;
    }
    else if(this.title == "Hash Rate"){
      this.HashRate = true;
    }
    else if(this.title == "Hidden Cap"){
      this.HiddenCap = true;
    }
    else if(this.title == "HODL"){
      this.HODL = true;
    }
    else if(this.title == "Hot Storage"){
      this.HotStorage = true;
    }
    else if(this.title == "Hyperledger"){
      this.Hyperledger = true;
    }
    else if(this.title == "IBO"){
      this.IBO = true;
    }
    else if(this.title == "ICO"){
      this.ICO = true;
    }
    else if(this.title == "Inflation"){
      this.Inflation = true;
    }
    else if(this.title == "Initial Bounty Offering"){
      this.IBO = true;
    }
    else if(this.title == "Initial Coin Offering"){
      this.ICO = true;
    }
    else if(this.title == "Initial Purchase Offering"){
      this.IPO = true;
    }
    else if(this.title == "Input"){
      this.Input = true;
    }
    else if(this.title == "Instamine"){
      this.Instamine = true;
    }
    else if(this.title == "Invest"){
      this.Invest = true;
    }
    /**J */
    else if(this.title == "JOMO"){
      this.JOMO = true;
    }
    /**K */
    else if(this.title == "KYC"){
      this.KYC = true;
    }
    else if(this.title == "Key"){
      this.Key = true;
    }
    /**L */
    else if(this.title == "Lambo"){
      this.Lambo = true;
    }
    else if(this.title == "Ledger"){
      this.Ledger = true;
    }
    else if(this.title == "Leverage"){
      this.Leverage = true;
    }
    else if(this.title == " Lightning Network"){
      this.LightningNetwork = true;
    }
    else if(this.title == "Limit Order"){
      this.LimitOrder = true;
    }
    else if(this.title == "Lisk"){
      this.Lisk = true;
    }
    else if(this.title == "Litecoin"){
      this.Litecoin = true;
    }
    else if(this.title == "LTC"){
      this.Litecoin = true;
    }
    /**M */
    else if(this.title == "Margin Trading"){
      this.MarginTrading = true;
    }
    else if(this.title == "Market Capitalization"){
      this.MarketCapitalization = true;
    }
    else if(this.title == "Market Order"){
      this.MarketOrder = true;
    }
    else if(this.title == "Masternode"){
      this.Masternode = true;
    }
    else if(this.title == "Max Supply"){
      this.MaxSupply = true;
    }
    else if(this.title == "mBTC"){
      this.mBTC = true;
    }
    else if(this.title == "Megabitcoin"){
      this.Megabitcoin = true;
    }
    else if(this.title == "Megahashes per Second"){
      this.MegahashesperSecond = true;
    }
    else if(this.title == "Merkle Tree"){
      this.MerkleTree = true;
    }
    else if(this.title == "Microbitcoin"){
      this.Microbitcoin = true;
    }
    else if(this.title == "Microtransaction"){
      this.Microtransaction = true;
    }
    else if(this.title == "Millibitcoin"){
      this.Millibitcoin = true;
    }
    else if(this.title == "Miner"){
      this.Miner = true;
    }
    else if(this.title == "Mining"){
      this.Mining = true;
    }
    else if(this.title == "Mining Difficulty"){
      this.MiningDifficulty = true;
    }
    else if(this.title == "Mining Pool"){
      this.MiningPool = true;
    }
    else if(this.title == "Mining Rig"){
      this.MiningRig = true;
    }
    else if(this.title == "Minting"){
      this.Minting = true;
    }
    else if(this.title == " Mixing Service"){
      this.MixingService = true;
    }
    else if(this.title == "Mnemonic Phrase"){
      this.MnemonicPhrase = true;
    }
    else if(this.title == "Mnemonics"){
      this.Mnemonics = true;
    }
    else if(this.title == "Money"){
      this.Money = true;
    }
    else if(this.title == "Mooning"){
      this.Mooning = true;
    }
    else if(this.title == "Moore\s Law"){
      this.MooresLaw = true;
    }
    else if(this.title == "Mtgox.com"){
      this.Mtgox = true;
    }
    else if(this.title == "Multisignature"){
      this.Multisignature = true;
    }
    /**N */
    else if(this.title == "NEO"){
      this.NEO = true;
    }
    else if(this.title == "Newb"){
      this.Newb = true;
    }
    else if(this.title == "Node"){
      this.Node = true;
    }
    else if(this.title == "Nonce"){
      this.Nonce = true;
    }
    /**O */
    else if(this.title == "Open Source"){
      this.OpenSource = true;
    }
    else if(this.title == "Orphan"){
      this.Orphan = true;
    }
    else if(this.title == "OTC"){
      this.OTC = true;
    }
    else if(this.title == "Output"){
      this.Output = true;
    }
    else if(this.title == "Over The Counter"){
      this.OverTheCounter = true;
    }
    /**P */
    else if(this.title == "P2P"){
      this.P2P = true;
    }
    else if(this.title == "Paper Wallet"){
      this.PaperWallet = true;
    }
    else if(this.title == "Payee"){
      this.Payee = true;
    }
    else if(this.title == "Peer to Peer"){
      this.PeertoPeer = true;
    }
    else if(this.title == "Permissionless"){
      this.Permissionless = true;
    }
    else if(this.title == "Platform"){
      this.Platform = true;
    }
    else if(this.title == "PoB"){
      this.PoB = true;
    }
    else if(this.title == "PoD"){
      this.PoD = true;
    }
    else if(this.title == "Poloniex.com"){
      this.Poloniex = true;
    }
    else if(this.title == "Ponzi Scheme"){
      this.PonziScheme = true;
    }
    else if(this.title == "Portfolio"){
      this.Portfolio = true;
    }
    else if(this.title == "PoS"){
      this.PoS = true;
    }
    else if(this.title == "Position"){
      this.Position = true;
    }
    else if(this.title == "PoW"){
      this.PoW = true;
    }
    else if(this.title == "Pre-Sale"){
      this.PreSale = true;
    }
    else if(this.title == "Premine"){
      this.Premine = true;
    }
    else if(this.title == "Price Chart"){
      this.PriceChart = true;
    }
    else if(this.title == "Privacy Coin"){
      this.PrivacyCoin = true;
    }
    else if(this.title == "Private Key"){
      this.PrivateKey = true;
    }
    else if(this.title == "Proof of Burn"){
      this.ProofofBurn = true;
    }
    else if(this.title == "Proof of Developer"){
      this.ProofofDeveloper = true;
    }
    else if(this.title == "Proof of Stake"){
      this.ProofofStake = true;
    }
    else if(this.title == "Proof of Work"){
      this.ProofofWork = true;
    }
    else if(this.title == "Pseudonymous"){
      this.Pseudonymous = true;
    }
    else if(this.title == "Public Address"){
      this.PublicAddress = true;
    }
    else if(this.title == "Public Key"){
      this.PublicKey = true;
    }
    else if(this.title == "Pump and Dump"){
      this.PumpandDump = true;
    }
    else if(this.title == "Pumping"){
      this.Pumping = true;
    }
    else if(this.title == "Pyramid Scheme"){
      this.PyramidScheme = true;
    }
    /**Q */
    else if(this.title == "QR Code"){
      this.QRCode = true;
    }
    /**R */
    else if(this.title == "Raiden Network"){
      this.RaidenNetwork = true;
    }
    else if(this.title == "Reddit"){
      this.Reddit = true;
    }
    else if(this.title == "Regulated"){
      this.Regulated = true;
    }
    else if(this.title == "Regulation"){
      this.Regulation = true;
    }
    else if(this.title == "Rekt"){
      this.Rekt = true;
    }
    else if(this.title == "Remittance"){
      this.Remittance = true;
    }
    else if(this.title == "Resistance & Support Levels"){
      this.RSLevels = true;
    }
    else if(this.title == "Return on Investment"){
      this.ROI = true;
    }
    else if(this.title == "Ripple"){
      this.Ripple = true;
    }
    else if(this.title == "Roadmap"){
      this.Roadmap = true;
    }
    else if(this.title == "ROI"){
      this.ROI = true;
    }
    else if(this.title == "Run"){
      this.Run = true;
    }
    /**S */
    else if(this.title == "Satoshi"){
      this.Satoshi = true;
    }
    else if(this.title == "Satoshi Nakamoto"){
      this.SatoshiNakamoto = true;
    }
    else if(this.title == "Scamcoin"){
      this.Scamcoin = true;
    }
    else if(this.title == "Scammer"){
      this.Scammer = true;
    }
    else if(this.title == "SEC"){
      this.SEC = true;
    }
    else if(this.title == "Secret Key"){
      this.SecretKey = true;
    }
    else if(this.title == "Secure Hash Algorithm 256"){
      this.SecureHashAlgorithm256 = true;
    }
    else if(this.title == "Securities and Exchange Commission"){
      this.SecuritiesandExchangeCommission = true;
    }
    else if(this.title == "Security Token"){
      this.SecurityToken = true;
    }
    else if(this.title == "Security Token Offering"){
      this.SecurityTokenOffering = true;
    }
    else if(this.title == "Segregated Witness"){
      this.SegregatedWitness = true;
    }
    else if(this.title == "SHA 256"){
      this.SHA256 = true;
    }
    else if(this.title == "Shapeshift.io"){
      this.Shapeshifio = true;
    }
    else if(this.title == "Sharding"){
      this.Sharding = true;
    }
    else if(this.title == "Shilling"){
      this.Shilling = true;
    }
    else if(this.title == "Shitcoin"){
      this.Shitcoin = true;
    }
    else if(this.title == "Shorting"){
      this.Shorting = true;
    }
    else if(this.title == "Side Chain"){
      this.SideChain = true;
    }
    else if(this.title == "Silk Road"){
      this.SilkRoad = true;
    }
    else if(this.title == "Simplified Payment Verification"){
      this.SimplifiedPaymentVerification = true;
    }
    else if(this.title == "Smart Contract"){
      this.SmartContract = true;
    }
    else if(this.title == "Soft Cap"){
      this.SoftCap = true;
    }
    else if(this.title == "Soft Fork"){
      this.SoftFork = true;
    }
    else if(this.title == "Software Fork"){
      this.SoftwareFork = true;
    }
    else if(this.title == "Software Wallet"){
      this.SoftwareWallet = true;
    }
    else if(this.title == "Solidity"){
      this.Solidity = true;
    }
    else if(this.title == "SPV"){
      this.SPV = true;
    }
    else if(this.title == "Stake"){
      this.Stake = true;
    }
    else if(this.title == "Stale Block"){
      this.StaleBlock = true;
    }
    else if(this.title == "State Channel"){
      this.StateChannel = true;
    }
    else if(this.title == "STO"){
      this.STO = true;
    }
    /**T */
    else if(this.title == "Taint"){
      this.Taint = true;
    }
    else if(this.title == "Tangle"){
      this.Tangle = true;
    }
    else if(this.title == "Terahashes per Second"){
      this.TerahashesperSecond = true;
    }
    else if(this.title == "TestNet"){
      this.TestNet = true;
    }
    else if(this.title == "This is Gentlemen"){
      this.ThisIsGentlemen = true;
    }
    else if(this.title == "Ticker Symbol"){
      this.TickerSymbol = true;
    }
    else if(this.title == "TLT"){
      this.TLT = true;
    }
    else if(this.title == "Token"){
      this.Token = true;
    }
    else if(this.title == "Tokenize"){
      this.Tokenize = true;
    }
    else if(this.title == "Total Supply"){
      this.TotalSupply = true;
    }
    else if(this.title == "Transaction"){
      this.Transaction = true;
    }
    else if(this.title == "Transaction Fee"){
      this.TransactionFee = true;
    }
    else if(this.title == "Transaction ID"){
      this.TransactionID = true;
    }
    else if(this.title == "Trustless"){
      this.Trustless = true;
    }
    else if(this.title == "TX"){
      this.TX = true;
    }
    else if(this.title == "TX Fee"){
      this.TXFee = true;
    }
    /**U */
    else if(this.title == "uBTC"){
      this.uBTC = true;
    }
    else if(this.title == "Unbanked"){
      this.Unbanked = true;
    }
    else if(this.title == "Unregulated"){
      this.Unregulated = true;
    }
    else if(this.title == "Unspent Transaction Output"){
      this.UnspentTransactionOutput = true;
    } 
    else if(this.title == "Use Case"){
      this.UseCase = true;
    }
    else if(this.title == "Utility Token"){
      this.UtilityToken = true;
    }
    else if(this.title == "UTXO"){
      this.UTXO = true;
    }
      /**V */
    else if(this.title == "Validator"){
      this.Validator = true;
    }
    else if(this.title == "Vanity Address"){
      this.VanityAddress = true;
    }
    else if(this.title == "Venture"){
      this.Venture = true;
    }
    else if(this.title == "Venture Capital"){
      this.VentureCapital = true;
    }
    else if(this.title == "Vertcoin"){
      this.Vertcoin = true;
    }
    else if(this.title == "Virgin Bitcoin"){
      this.VirginBitcoin = true;
    }
    else if(this.title == "Virus"){
      this.Virus = true;
    }
    else if(this.title == "Volatility"){
      this.Volatility = true;
    }
    else if(this.title == "Volume"){
      this.Volume = true;
    }
    else if(this.title == "VTC"){
      this.VTC = true;
    }
    /**W */
    else if(this.title == "Wallet"){
      this.Wallet = true;
    }
    else if(this.title == "Weak Hands"){
      this.WeakHands = true;
    }
    else if(this.title == "Wei"){
      this.Wei = true;
    }
    else if(this.title == "Whales"){
      this.Whales = true;
    }
    else if(this.title == "White Paper"){
      this.WhitePaper = true;
    }
    else if(this.title == "Whitelist"){
      this.Whitelist = true;
    }
    /**X */
    else if(this.title == "XRP"){
      this.XRP = true;
    }
    /**Y */
    else if(this.title == "Year 2038 problem"){
      this.Year2038problem = true;
    }
    /**Z */
    else if(this.title == "Zero Confirmation Transaction"){
      this.ZeroConfirmationTransaction = true;
    }
  }

}
