import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    // VAX-BNB
    pid: 0,
    risk: 4,
    lpSymbol: 'VAX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xdcf83483ed0d9c19a93277c21af3e212d4181f45',
    },
    tokenSymbol: 'VAX',
    tokenAddresses: {
      97: '',
      56: '0x8ef51a58Bfa952dF837c7D4810224f7De992ebA5',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    // VAX-BUSD
    pid: 1,
    risk: 4,
    lpSymbol: 'VAX-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xeaab1d6ff7ed1bca766bf66f70f7e5fc1a0005d7',
    },
    tokenSymbol: 'VAX',
    tokenAddresses: {
      97: '',
      56: '0x8ef51a58Bfa952dF837c7D4810224f7De992ebA5',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    // VAX-VIRUS
    pid: 2,
    risk: 5,
    lpSymbol: 'VAX-VIRUS LP',
    lpAddresses: {
      97: '',
      56: '0xe8bff489232ed26b15aa07f0bd5640e898160121',
    },
    tokenSymbol: 'VAX',
    tokenAddresses: {
      97: '',
      56: '0x8ef51a58Bfa952dF837c7D4810224f7De992ebA5',
    },
    quoteTokenSymbol: QuoteToken.VIRUS,
    quoteTokenAdresses: contracts.virus,
  },
  {
    // BNB-BUSD
    pid: 3,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    risk: 2,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7561eee90e24f3b348e1087a005f78b4c8453524',
    },
    tokenSymbol: 'BTC',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 5,
    risk: 2,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 6,
    risk: 3,
    lpSymbol: 'EGG-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
    },
    tokenSymbol: 'EGG',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 7,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'VAX',
    lpAddresses: {
      97: '',
      56: '0xeaab1d6ff7ed1bca766bf66f70f7e5fc1a0005d7',
    },
    tokenSymbol: 'VAX',
    tokenAddresses: {
      97: '',
      56: '0x8ef51a58Bfa952dF837c7D4810224f7De992ebA5',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 8,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 9,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0xeaab1d6ff7ed1bca766bf66f70f7e5fc1a0005d7', // VAX-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {                                        
   pid: 10,                                                
   risk: 3,                               
   isTokenOnly: true,       
   lpSymbol: 'VIRUS',          
   lpAddresses: {        
     97: '',                                              
     56: '0x11c0e7dd8f1ede7b69cf8f5cc07b5a8d2a7fcf03',    
   },                                   
   tokenSymbol: 'VIRUS',                                                 
   tokenAddresses: {    
     97: '',                                                              
     56: '0x0c34C1Ab7b0D7A6e47500e579102E8840bf334B4',    
   },                      
   quoteTokenSymbol: QuoteToken.BUSD,                     
   quoteTokenAdresses: contracts.busd,    
   }, 
  {                                        
   pid: 11,                                                
   risk: 3,                               
   isTokenOnly: true,       
   lpSymbol: 'BAKE',          
   lpAddresses: {        
     97: '',                                              
     56: '0xE2D1B285d83efb935134F644d00FB7c943e84B5B',    
   },                                   
   tokenSymbol: 'BAKE',                                                 
   tokenAddresses: {    
     97: '',                                                              
     56: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',    
   },                      
   quoteTokenSymbol: QuoteToken.BUSD,                     
   quoteTokenAdresses: contracts.busd,    
   }, 
]

export default farms
