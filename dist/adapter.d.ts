import { MoveCallTransaction, SignableTransaction, SuiTransactionResponse } from '@mysten/sui.js';
export declare class MorphisWalletAdapter {
    connecting: boolean;
    connected: boolean;
    name: string;
    icon: `data:image/svg+xml;base64,${string}`;
    getAccounts(): Promise<string[]>;
    signAndExecuteTransaction(transaction: SignableTransaction): Promise<SuiTransactionResponse>;
    executeMoveCall(transaction: MoveCallTransaction): Promise<SuiTransactionResponse>;
    executeSerializedMoveCall(transactionBytes: string | Uint8Array): Promise<SuiTransactionResponse>;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    constructor();
}
