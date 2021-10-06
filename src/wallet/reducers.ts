import type { WalletAction } from './actions';
import type { WalletState } from './state';

export default function walletReducer(state: WalletState, action: WalletAction): WalletState {
  console.log(state, action);
  switch (action.type) {
    case 'SET_ADDRESS':
      return { ...state, ...{ address: action.payload } };
    case 'SET_NETWORK':
      return { ...state, ...{ network: action.payload } };
    case 'SET_BALANCE':
      return { ...state, ...{ balance: action.payload } };
    case 'SET_WALLET':
      return { ...state, ...{ wallet: action.payload } };
    case 'SET_WEB3':
      return { ...state, ...{ web3: action.payload } };
    case 'SET_ENS':
      return { ...state, ...{ ens: action.payload } };
    default:
      return state;
  }
}
