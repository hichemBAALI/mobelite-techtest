export interface Language {
  code: string;
  displayedLanguage: string;
}

// eslint-disable-next-line no-shadow
export enum EnumTransactionName {
  payment = 'Payment',
  walletTopUp = 'Wallet top-up',
  jarTopUp = 'Jar top-up',
  jarTransfer = 'Jar transfer',
  jarWithdraw = 'Jar withdraw',
}

export interface Config {
  isUnderMaintenance: boolean;
  minVersionNeeded: {
    ios: string;
    android: string;
  };
}

export interface Country {
  code: string;
  callingCode: string;
  label: string;
}

export interface CountryPhone {
  country?: Country;
  phone?: string;
}

export type JarType = 'open' | 'merchants' | 'goal' | 'partner';

export type JarTopup = {
  source: 'wallet' | 'jar';
  walletId: string;
  jarId: string;
  amount: number;
};
export type JarWithdraw = {
  source: 'wallet' | 'jar';
  walletId: string;
  jarId: string;
  amount: number;
};
export type JarTransfer = {
  source: 'wallet' | 'jar';
  sourceId: string;
  targetId: string;
  amount: number;
};
