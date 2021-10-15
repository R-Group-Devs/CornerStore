import Web3 from 'web3';
import * as IPFS from 'ipfs-core';

export type WalletAction = SET_ADDRESS | SET_NETWORK | SET_BALANCE | SET_WALLET | SET_WEB3 | SET_ENS | SET_IPFS;

type SET_ADDRESS = {
  type: 'SET_ADDRESS';
  payload: string;
};

type SET_NETWORK = {
  type: 'SET_NETWORK';
  payload: number;
};

type SET_BALANCE = {
  type: 'SET_BALANCE';
  payload: string;
};

type SET_WALLET = {
  type: 'SET_WALLET';
  payload: {
    name: string;
  };
};

type SET_WEB3 = {
  type: 'SET_WEB3';
  payload: Web3;
};

type SET_ENS = {
  type: 'SET_ENS';
  payload: string;
};

type SET_IPFS = {
  type: 'SET_IPFS';
  payload: IPFS.IPFS;
};
