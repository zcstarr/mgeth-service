/**
 * The hex representation of the Keccak 256 of the RLP encoded block
 */
export declare type TBlockHash = string;
export declare type TIncludeTransactions = boolean;
export interface IBlock {
    /**
     * The block number or null when its the pending block
     */
    number?: string | null;
    /**
     * The block hash or null when its the pending block
     */
    hash?: string | null;
    /**
     * Hash of the parent block
     */
    parentHash?: string;
    /**
     * Randomly selected number to satisfy the proof-of-work or null when its the pending block
     */
    nonce?: string | null;
    /**
     * Keccak hash of the uncles data in the block
     */
    sha3Uncles?: string;
    /**
     * The bloom filter for the logs of the block or null when its the pending block
     */
    logsBloom?: string;
    /**
     * The root of the transactions trie of the block.
     */
    transactionsRoot?: string;
    /**
     * The root of the final state trie of the block
     */
    stateRoot?: string;
    /**
     * The root of the receipts trie of the block
     */
    receiptsRoot?: string;
    /**
     * The address of the beneficiary to whom the mining rewards were given or null when its the pending block
     */
    miner?: string | null;
    /**
     * Integer of the difficulty for this block
     */
    difficulty?: string;
    /**
     * Integer of the total difficulty of the chain until this block
     */
    totalDifficulty?: string | null;
    /**
     * The 'extra data' field of this block
     */
    extraData?: string;
    /**
     * Integer the size of this block in bytes
     */
    size?: string;
    /**
     * The maximum gas allowed in this block
     */
    gasLimit?: string;
    /**
     * The total used gas by all transactions in this block
     */
    gasUsed?: string;
    /**
     * The unix timestamp for when the block was collated
     */
    timestamp?: string;
    /**
     * Array of transaction objects, or 32 Bytes transaction hashes depending on the last given parameter
     */
    transactions?: Array<{
        /**
         * Hash of the block where this transaction was in. null when its pending
         */
        blockHash?: string | null;
        /**
         * Block number where this transaction was in. null when its pending
         */
        blockNumber?: string | null;
        /**
         * Address of the sender
         */
        from?: string;
        /**
         * The gas limit provided by the sender in Wei
         */
        gas?: string;
        /**
         * The gas price willing to be paid by the sender in Wei
         */
        gasPrice?: string;
        /**
         * Keccak 256 Hash of the RLP encoding of a transaction
         */
        hash?: string;
        /**
         * The data field sent with the transaction
         */
        input?: string;
        /**
         * The total number of prior transactions made by the sender
         */
        nonce?: string;
        /**
         * address of the receiver. null when its a contract creation transaction
         */
        to?: string;
        /**
         * Integer of the transaction's index position in the block. null when its pending
         */
        transactionIndex?: string | null;
        /**
         * Value of Ether being transferred in Wei
         */
        value?: string;
        /**
         * ECDSA recovery id
         */
        v?: string;
        /**
         * ECDSA signature r
         */
        r?: string;
        /**
         * ECDSA signature s
         */
        s?: string;
        [k: string]: any;
    } | string>;
    /**
     * Array of uncle hashes
     */
    uncles?: string[];
    [k: string]: any;
}
export declare type IBlockNumber = string | ("earliest" | "latest" | "pending");
/**
 * Hex string representation of the current block number the client is on
 */
export declare type TBlockNumber = string;
export declare type TAddress = string;
/**
 * Hex representation of the storage slot where the variable exists
 */
export declare type TKey = string;
/**
 * Hex representation of a 256 bit unit of data
 */
export declare type TDataWord = string;
/**
 * A number only to be used once
 */
export declare type TNonce = string;
/**
 * Keccak 256 Hash of the RLP encoding of a transaction
 */
export declare type TTransactionHash = string;
export interface ITransaction {
    /**
     * Address of the sender
     */
    from?: string;
    /**
     * address of the receiver. optional if it's a contract creation transaction
     */
    to?: string;
    /**
     * The gas limit provided by the sender in Wei. default 90000
     */
    gas?: string;
    /**
     * The gas price willing to be paid by the sender in Wei
     */
    gasPrice?: string;
    /**
     * Value of Ether being transferred in Wei
     */
    value?: string;
    /**
     * The compiled code of a contract OR the hash of the invoked method signature and encoded parameters. For details see Ethereum Contract ABI.
     */
    data?: string;
    /**
     * The total number of prior transactions made by the sender.
     */
    nonce?: string;
    [k: string]: any;
}
/**
 * Hex representation of the integer
 */
export declare type TIndex = string;
/**
 * The receipt of a transaction
 */
export interface IReceipt {
    /**
     * BlockHash of the block in which the transaction was mined
     */
    blockHash: string;
    /**
     * BlockNumber of the block in which the transaction was mined
     */
    blockNumber: string;
    /**
     * The contract address created, if the transaction was a contract creation, otherwise null
     */
    contractAddress: string;
    /**
     * The gas units used by the transaction
     */
    cumulativeGasUsed: string;
    /**
     * The sender of the transaction
     */
    from: string;
    /**
     * The total gas used by the transaction
     */
    gasUsed: string;
    /**
     * An array of all the logs triggered during the transaction
     */
    logs: Array<{
        /**
         * Sender of the transaction
         */
        address?: string;
        /**
         * BlockHash of the block in which the transaction was mined
         */
        blockHash?: string;
        /**
         * BlockNumber of the block in which the transaction was mined
         */
        blockNumber?: string;
        /**
         * The data/input string sent along with the transaction
         */
        data?: string;
        /**
         * The index of the event within its transaction, null when its pending
         */
        logIndex?: string;
        removed?: {
            [k: string]: any;
        };
        topics?: Array<{
            [k: string]: any;
        }>;
        /**
         * The hash of the transaction in which the log occurred
         */
        transactionHash?: string;
        /**
         * The index of the transaction in which the log occurred
         */
        transactionIndex?: string;
        [k: string]: any;
    }>;
    /**
     * A 2048 bit bloom filter from the logs of the transaction. Each log sets 3 bits though taking the low-order 11 bits of each of the first three pairs of bytes in a Keccak 256 hash of the log's byte series
     */
    logsBloom: string;
    /**
     * Destination address of the transaction
     */
    to: string;
    /**
     * Keccak 256 of the transaction
     */
    transactionHash: string;
    /**
     * An array of all the logs triggered during the transaction
     */
    transactionIndex: string;
    /**
     * The intermediate stateRoot directly after transaction execution.
     */
    postTransactionState?: string;
    /**
     * Whether or not the transaction threw an error.
     */
    status?: boolean;
    [k: string]: any;
}
export interface IUncle {
    /**
     * The block number or null when its the pending block
     */
    number?: string | null;
    /**
     * The block hash or null when its the pending block
     */
    hash?: string | null;
    /**
     * Hash of the parent block
     */
    parentHash?: string;
    /**
     * Randomly selected number to satisfy the proof-of-work or null when its the pending block
     */
    nonce?: string | null;
    /**
     * Keccak hash of the uncles data in the block
     */
    sha3Uncles?: string;
    /**
     * The bloom filter for the logs of the block or null when its the pending block
     */
    logsBloom?: string;
    /**
     * The root of the transactions trie of the block.
     */
    transactionsRoot?: string;
    /**
     * The root of the final state trie of the block
     */
    stateRoot?: string;
    /**
     * The root of the receipts trie of the block
     */
    receiptsRoot?: string;
    /**
     * The address of the beneficiary to whom the mining rewards were given or null when its the pending block
     */
    miner?: string | null;
    /**
     * Integer of the difficulty for this block
     */
    difficulty?: string;
    /**
     * Integer of the total difficulty of the chain until this block
     */
    totalDifficulty?: string | null;
    /**
     * The 'extra data' field of this block
     */
    extraData?: string;
    /**
     * Integer the size of this block in bytes
     */
    size?: string;
    /**
     * The maximum gas allowed in this block
     */
    gasLimit?: string;
    /**
     * The total used gas by all transactions in this block
     */
    gasUsed?: string;
    /**
     * The unix timestamp for when the block was collated
     */
    timestamp?: string;
    /**
     * Array of uncle hashes
     */
    uncles?: string[];
    [k: string]: any;
}
/**
 * The hex representation of the block's height
 */
export declare type TUncleBlockNumber = string;
/**
 * A filter used to monitor the blockchain for log/events
 */
export interface IFilter {
    /**
     * Block from which to begin filtering events
     */
    fromBlock?: string;
    /**
     * Block from which to end filtering events
     */
    toBlock?: string;
    address?: string | string[];
    /**
     * Array of 32 Bytes DATA topics. Topics are order-dependent. Each topic can also be an array of DATA with 'or' options
     */
    topics?: string[];
    [k: string]: any;
}
/**
 * The filter ID for use in `eth_getFilterChanges`
 */
export declare type TFilterId = string;
/**
 * Whether of not the filter was successfully uninstalled
 */
export declare type TFilterUninstalledSuccess = boolean;
export declare type T = Array<{
    /**
     * Sender of the transaction
     */
    address?: string;
    /**
     * BlockHash of the block in which the transaction was mined
     */
    blockHash?: string;
    /**
     * BlockNumber of the block in which the transaction was mined
     */
    blockNumber?: string;
    /**
     * The data/input string sent along with the transaction
     */
    data?: string;
    /**
     * The index of the event within its transaction, null when its pending
     */
    logIndex?: string;
    removed?: {
        [k: string]: any;
    };
    topics?: Array<{
        [k: string]: any;
    }>;
    /**
     * The hash of the transaction in which the log occurred
     */
    transactionHash?: string;
    /**
     * The index of the transaction in which the log occurred
     */
    transactionIndex?: string;
    [k: string]: any;
}>;
export declare type TLogs = Array<{
    /**
     * Sender of the transaction
     */
    address?: string;
    /**
     * BlockHash of the block in which the transaction was mined
     */
    blockHash?: string;
    /**
     * BlockNumber of the block in which the transaction was mined
     */
    blockNumber?: string;
    /**
     * The data/input string sent along with the transaction
     */
    data?: string;
    /**
     * The index of the event within its transaction, null when its pending
     */
    logIndex?: string;
    removed?: {
        [k: string]: any;
    };
    topics?: Array<{
        [k: string]: any;
    }>;
    /**
     * The hash of the transaction in which the log occurred
     */
    transactionHash?: string;
    /**
     * The index of the transaction in which the log occurred
     */
    transactionIndex?: string;
    [k: string]: any;
}>;
export declare type TWork = [string, string, string];
/**
 * Current block header PoW hash.
 */
export declare type TPowHash = string;
/**
 * The mix digest.
 */
export declare type TMixHash = string;
/**
 * Whether or not the provided solution is valid
 */
export declare type TSolutionValid = boolean;
/**
 * Hex representation of a 256 bit unit of data
 */
export declare type THashRate = string;
/**
 * Hex representation of a 256 bit unit of data
 */
export declare type TId = string;
/**
 * whether of not submitting went through succesfully
 */
export declare type TSubmitHashRateSuccess = boolean;
/**
 * The storage keys of all the storage slots being requested
 */
export declare type IStorageKeys = string[];
/**
 * The merkle proofs of the specified account connecting them to the blockhash of the block specified
 */
export interface IAccount {
    /**
     * The address of the account or contract of the request
     */
    address?: string;
    /**
     * The set of node values needed to traverse a patricia merkle tree (from root to leaf) to retrieve a value
     */
    accountProof?: string[];
    /**
     * The Ether balance of the account or contract of the request
     */
    balance?: string;
    /**
     * The code hash of the contract of the request (keccak(NULL) if external account)
     */
    codeHash?: string;
    /**
     * The transaction count of the account or contract of the request
     */
    nonce?: string;
    /**
     * The storage hash of the contract of the request (keccak(rlp(NULL)) if external account)
     */
    storageHash?: string;
    /**
     * Current block header PoW hash.
     */
    storageProof?: Array<{
        /**
         * The key used to get the storage slot in its account tree
         */
        key?: string;
        /**
         * The value of the storage slot in its account tree
         */
        value?: string;
        /**
         * The set of node values needed to traverse a patricia merkle tree (from root to leaf) to retrieve a value
         */
        proof?: string[];
        [k: string]: any;
    }>;
    [k: string]: any;
}
/**
 * Hex representation of a variable length byte array
 */
export declare type TBytes = string;
/**
 * Hex representation of the integer
 */
export declare type TInteger = string;
/**
 * Hex representation of a variable length byte array
 */
export declare type TMessage = string;
/**
 * The signature data.
 */
export declare type TSignatureData = string;
/**
 * An array of addresses owned by the client
 */
export declare type TAddresses = string[];
/**
 * Integer of the current gas price
 */
export declare type TGasPrice = string;
/**
 * Integer of the number of hashes per second
 */
export declare type THashesPerSecond = string;
/**
 * Whether of not the client is mining
 */
export declare type TMining = boolean;
/**
 * The current ethereum protocol version
 */
export declare type TProtocolVersion = string;
/**
 * The Number of total transactions in the given block
 */
export declare type TBlockTransactionCountByHash = string;
/**
 * The Number of total transactions in the given block
 */
export declare type TBlocktransactionCountByNumber = string;
/**
 * The Number of total uncles in the given block
 */
export declare type TUncleCount = string;
/**
 * Hex representation of a variable length byte array
 */
export declare type TSignedTransactionData = string;
/**
 * The return value of the executed contract
 */
export declare type TReturnValue = string;
/**
 * The amount of gas used
 */
export declare type TGasUsed = string;
export declare type ISyncing = {
    /**
     * Block at which the import started (will only be reset, after the sync reached his head)
     */
    startingBlock?: string;
    /**
     * The current block, same as eth_blockNumber
     */
    currentBlock?: string;
    /**
     * The estimated highest block
     */
    highestBlock?: string;
    /**
     * The known states
     */
    knownStates?: string;
    /**
     * The pulled states
     */
    pulledStates?: string;
    [k: string]: any;
} | boolean;
/**
 * Array of available compilers.
 */
export declare type TCompilers = string[];
/**
 * The Solidity code string (no new-lines).
 */
export declare type TCode = string;
/**
 * An object containing information about the code.
 */
export interface ICodeResponse {
    /**
     * The compiled Byte code
     */
    code?: string;
    /**
     * An object contianing information about the code compilation.
     */
    info?: {
        /**
         * The sorce code that was compiled
         */
        source?: string;
        /**
         * The language of the code that was compiled
         */
        language?: string;
        /**
         * The language version number
         */
        languageVersion?: string;
        /**
         * The sorce code that was compiled
         */
        compilerVersion?: string;
        /**
         * The application binary interface definitions of the code
         */
        abiDefinition?: {
            [k: string]: any;
        };
        [k: string]: any;
    };
    [k: string]: any;
}
/**
 * The compiled Byte code
 */
export declare type TCopmiledCode = string;
/**
 * The compiled Byte code
 */
export declare type TCompiledCode = string;
export default class MGethService {
    rpc: any;
    private openrpcDocument;
    constructor(options: any);
    /**
     * Gets a block for a given hash
     */
    eth_getBlockByHash(blockHash: TBlockHash, includeTransactions: TIncludeTransactions): Promise<IBlock>;
    /**
     * Gets a block for a given number
     */
    eth_getBlockByNumber(blockNumber: IBlockNumber, includeTransactions: TIncludeTransactions): Promise<IBlock>;
    /**
     * Gets a block for a given number
     */
    eth_blockNumber(): Promise<TBlockNumber>;
    /**
     * Gets a storage value from a contract address, a position, and an optional blockNumber
     */
    eth_getStorageAt(address: TAddress, key: TKey, blockNumber: IBlockNumber): Promise<TDataWord>;
    /**
     * Returns the number of transactions sent from an address
     */
    eth_getTransactionCount(address: TAddress, blockNumber: IBlockNumber): Promise<TNonce>;
    /**
     * Returns the information about a transaction requested by transaction hash.
     */
    eth_getTransactionByHash(transactionHash: TTransactionHash): Promise<ITransaction>;
    /**
     * Returns the information about a transaction requested by the block hash and index of which it was mined.
     */
    eth_getTransactionByBlockHashAndIndex(blockHash: TBlockHash, index: TIndex): Promise<ITransaction>;
    /**
     * Returns the information about a transaction requested by the block hash and index of which it was mined.
     */
    eth_getTransactionByBlockNumberAndIndex(blockNumber: IBlockNumber, index: TIndex): Promise<ITransaction>;
    /**
     * Returns the receipt information of a transaction by its hash.
     */
    eth_getTransactionReceipt(transactionHash: TTransactionHash): Promise<IReceipt>;
    /**
     * Returns information about a uncle of a block by hash and uncle index position.
     */
    eth_getUncleByBlockHashAndIndex(blockHash: TBlockHash, index: TIndex): Promise<IUncle>;
    /**
     * Returns information about a uncle of a block by hash and uncle index position.
     */
    eth_getUncleByBlockNumberAndIndex(uncleBlockNumber: TUncleBlockNumber, index: TIndex): Promise<IUncle>;
    /**
     * Creates a filter object, based on filter options, to notify when the state changes (logs). To check if the state has changed, call eth_getFilterChanges.
     */
    eth_newFilter(filter: IFilter): Promise<TFilterId>;
    /**
     * Creates a filter in the node, to notify when a new block arrives. To check if the state has changed, call eth_getFilterChanges.
     */
    eth_newBlockFilter(): Promise<TFilterId>;
    /**
     * Creates a filter in the node, to notify when new pending transactions arrive. To check if the state has changed, call eth_getFilterChanges.
     */
    eth_newPendingTransactionFilter(): Promise<TFilterId>;
    /**
     * Uninstalls a filter with given id. Should always be called when watch is no longer needed. Additonally Filters timeout when they aren't requested with eth_getFilterChanges for a period of time.
     */
    eth_uninstallFilter(filterId: TFilterId): Promise<TFilterUninstalledSuccess>;
    /**
     * Polling method for a filter, which returns an array of logs which occurred since last poll.
     */
    eth_getFilterChanges(filterId: TFilterId): Promise<T>;
    /**
     * Returns an array of all logs matching filter with given id.
     */
    eth_getFilterLogs(filterId: TFilterId): Promise<TLogs>;
    /**
     * Returns an array of all logs matching a given filter object.
     */
    eth_getLogs(filter: IFilter): Promise<TLogs>;
    /**
     * Returns the hash of the current block, the seedHash, and the boundary condition to be met ('target').
     */
    eth_getWork(): Promise<TWork>;
    /**
     * Used for submitting a proof-of-work solution.
     */
    eth_submitWork(nonce: TNonce, powHash: TPowHash, mixHash: TMixHash): Promise<TSolutionValid>;
    /**
     * Returns an array of all logs matching a given filter object.
     */
    eth_submitHashrate(hashRate: THashRate, id: TId): Promise<TSubmitHashRateSuccess>;
    /**
     * Returns the account- and storage-values of the specified account including the Merkle-proof.
     */
    eth_getProof(address: TAddress, storageKeys: IStorageKeys, blockNumber: IBlockNumber): Promise<IAccount>;
    /**
     * Returns code at a given contract address
     */
    eth_getCode(address: TAddress, blockNumber: TBlockNumber): Promise<TBytes>;
    /**
     * Returns Ether balance of a given or account or contract
     */
    eth_getBalance(address: TAddress, blockNumber: TBlockNumber): Promise<TInteger>;
    /**
     * The sign method calculates an Ethereum specific signature with: sign(keccak256( '\x19Ethereum Signed Message:\n' + len(message) + message))).
     */
    eth_sign(address: TAddress, message: TMessage): Promise<TSignatureData>;
    /**
     * Returns a list of accounts owned by the client
     */
    eth_account(): Promise<TAddresses>;
    /**
     * Returns the current price per gas in wei
     */
    eth_gasPrice(): Promise<TGasPrice>;
    /**
     * Returns the number of hashes per second that the node is mining with.
     */
    eth_hashrate(): Promise<THashesPerSecond>;
    /**
     * Returns true if client is actively mining new blocks.
     */
    eth_mining(): Promise<TMining>;
    /**
     * Returns the client coinbase address.
     */
    eth_coinbase(): Promise<TAddress>;
    /**
     * Returns the current ethereum protocol version.
     */
    eth_protocolVersion(): Promise<TProtocolVersion>;
    /**
     * Returns the number of transactions in a block from a block matching the given block hash.
     */
    eth_blockTransactionCountByHash(blockHash: TBlockHash): Promise<TBlockTransactionCountByHash>;
    /**
     * Returns the number of transactions in a block from a block matching the given block number.
     */
    eth_blockTransactionCountByNumber(blockNumber: IBlockNumber): Promise<TBlocktransactionCountByNumber>;
    /**
     * Returns the number of uncles in a block from a block matching the given block hash.
     */
    eth_getUncleCountByBlockHash(blockHash: TBlockHash): Promise<TUncleCount>;
    /**
     * Returns the number of uncles in a block from a block matching the given block number.
     */
    eth_getUncleCountByBlockNumber(blockNumber: IBlockNumber): Promise<TUncleCount>;
    /**
     * Creates new message call transaction or a contract creation, if the data field contains code.
     */
    eth_sendTransaction(transaction: ITransaction): Promise<TTransactionHash>;
    /**
     * Creates new message call transaction or a contract creation for signed transactions.
     */
    eth_sendRawTransaction(signedTransactionData: TSignedTransactionData): Promise<TTransactionHash>;
    /**
     * Executes a new message call (locally) immediately without creating a transaction on the block chain.
     */
    eth_call(transaction: ITransaction): Promise<TReturnValue>;
    /**
     * Generates and returns an estimate of how much gas is necessary to allow the transaction to complete. The transaction will not be added to the blockchain. Note that the estimate may be significantly more than the amount of gas actually used by the transaction, for a variety of reasons including EVM mechanics and node performance.
     */
    eth_estimateGas(transaction: ITransaction): Promise<TGasUsed>;
    /**
     * Returns an object with data about the sync status or false.
     */
    eth_syncing(): Promise<ISyncing>;
    /**
     * Returns a list of available compilers in the client.
     */
    eth_getCompilers(): Promise<TCompilers>;
    /**
     * Returns compiled solidity code.
     */
    eth_compileSolidity(code: TCode): Promise<ICodeResponse>;
    /**
     * Returns compiled LLL code.
     */
    eth_compileLLL(code: TCode): Promise<TCopmiledCode>;
    /**
     * Returns compiled Serpent code.
     */
    eth_compileSerpent(code: TCode): Promise<TCompiledCode>;
    private request;
}
