# eth-Multi-signature

[中文][0]

This project demonstrates how to use the smart contract to implement Ethereum's multi-sign transfer function.

The entire transfer process is as follows:


token ---transfer---> smart constract account -----------transfer-----------> 指定的账户
                         /|\        |                           /|\
                          |         |                            |
                          |        \|/  check sign               |
sender--------------------|




main idea: 
1. Token is owned by a smart contract account
2. Set the M number of addresses for which the contract can be transferred
3. Set the minimum number of signatures to initiate a transfer to N
4. Use ```ecrecoverDecode``` to recover the address from the signature result
5. Confirm whether it is the N of M address set by the contract according to the restored address
6. Transfer the token of the smart contract account to the specified account if the condition is met

Detailed analysis and introduction in my [blog](https://wupeaking.github.io/learn/solidity_mutli_sign/)

###queston
    If you have questions or ideas, you can file an issue or email directly.<wupeaking@gmail.com>

[0]: ./README.md

