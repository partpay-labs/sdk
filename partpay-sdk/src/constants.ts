import { publicKey } from "@metaplex-foundation/umi"; // Importing the 'publicKey' utility from the Umi library.

/**
 * The unique identifier for the Partpay program on the Solana blockchain.
 * This identifier is used to interact with the Partpay smart contract.
 * 
 * The `publicKey` function takes a string representation of a public key and converts it into a PublicKey object.
 * 
 * Example usage:
 *   - This constant is used when initializing transactions that need to interact with the Partpay program.
 *   - Ensure the public key is kept accurate and up-to-date to prevent interaction failures.
 */
export const PARTPAY_PROGRAM_ID = publicKey("PARTDzURUGgnjU7jfUgGvBQunWKEJDeSGwHUyYcu7Ax");
// export const MARKETPLACE = publicKey("HbdGeC1vz4K8Fj9RQh43DtitxWBruYmW3gnxc9M4HxV5");
