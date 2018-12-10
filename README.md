# eth-Multi-signature

[English][0]

此项目展示了如何使用智能合约实现以太坊的多签转账功能。

整个转账的流程如下:


token ---transfer---> 智能合约账户 -----------transfer-----------> 指定的账户
                         /|\        |                           /|\
                          |         |                            |
                          |        \|/  校验发起交易的签名是否正确    |
合约调用者------------------|




核心思想
1. Token放在智能合约账户名下
2. 设置合约可以进行转账的M个地址
3. 设置发起一笔转账的最少签名数量N
4. 转账时对签名进行```ecrecoverDecode```恢复出签名的地址 
5. 根据恢复的地址确认是否是合约设置的N of M中地址
6. 满足条件则控制智能合约账户转移token到指定的账户

详细的调试和分析流程可以查看我的[blog](https://wupeaking.github.io/learn/solidity_mutli_sign/) 

###问题
    如果有疑问, 想法可以直接issue或者email<wupeaking@gmail.com>

[0]: ./readme.cn.md