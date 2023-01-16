// Setup
import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
  apiKey: "<Your alchemy API key>",
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

// Get the latest block
const latestBlock = alchemy.core.getBlockNumber();

// Get all outbound transfers for a provided address
alchemy.core
    .getTokenBalances('0x17d74F13320930106E71A0527Cf64D72d61F8D56') // Sample Address
    .then(console.log);


// Make a sample eth_call
alchemy.core
    .call({
      to: "0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41",
      gas: "0x76c0",
      gasPrice: "0x9184e72a000",
      data: "0x3b3b57debf074faa138b72c65adbdcfb329847e4f2c04bde7f7dd7fcad5a52d2f395a558",
    })
    .then(console.log);