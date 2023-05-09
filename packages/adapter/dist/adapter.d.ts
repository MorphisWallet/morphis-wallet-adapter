import { AllPermissionsType, IWallet, SignAndExecuteBlockInput } from './types';
import { Wallet, IdentifierArray, WalletAccount, SuiSignAndExecuteTransactionBlockOutput, SuiSignTransactionBlockInput, SuiSignTransactionBlockOutput, SuiSignMessageInput, SuiSignMessageOutput, StandardConnectOutput } from '@mysten/wallet-standard';
export declare class MorphisWalletAdapter implements Wallet {
    #private;
    chains: IdentifierArray;
    name: string;
    connecting: boolean;
    connected: boolean;
    wallet: IWallet | null;
    get icon(): `data:image/svg+xml;base64,${string}`;
    get accounts(): WalletAccount[];
    get version(): "1.0.0";
    get features(): {
        'standard:connect': {
            version: string;
            connect: () => Promise<StandardConnectOutput>;
        };
        'standard:events': {
            version: string;
            on: () => () => null;
        };
        'sui:signAndExecuteTransactionBlock': {
            version: string;
            signAndExecuteTransactionBlock: (input: SignAndExecuteBlockInput) => Promise<SuiSignAndExecuteTransactionBlockOutput>;
        };
        'sui:signTransactionBlock': {
            version: string;
            signTransactionBlock: (input: SuiSignTransactionBlockInput) => Promise<SuiSignTransactionBlockOutput>;
        };
        'sui:signMessage': {
            version: string;
            signMessage: (input: SuiSignMessageInput) => Promise<SuiSignMessageOutput>;
        };
    };
    on(): () => null;
    hasPermissions(permissions: AllPermissionsType): Promise<boolean>;
    connect(): Promise<StandardConnectOutput>;
    signAndExecuteTransactionBlock(input: SignAndExecuteBlockInput): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    signTransactionBlock(input: SuiSignTransactionBlockInput): Promise<SuiSignTransactionBlockOutput>;
    disconnect(): Promise<void>;
    getAccounts(): Promise<import("./types").GetAccountsType>;
    signMessage(input: SuiSignMessageInput): Promise<SuiSignMessageOutput>;
    getPublicKey(): Promise<string>;
}
