1) npm i

Need to change endpoints:

- add 'cors=true'

Example:

2) In './node_modules/blockchain.info/blockexplorer/endpoints.js'

replaced module.exports on:

module.exports = {
  rawblock: new UrlPattern('/rawblock/:hash?cors=true&(?api_code=:apiCode)'),
  rawtx: new UrlPattern('/rawtx/:hash?cors=true&(?api_code=:apiCode)'),
  blockHeight: new UrlPattern('/block-height/:height?format=json(&api_code=:apiCode)'),
  address: new UrlPattern('/address/:address?format=json(&limit=:limit)(&offset=:offset)(&api_code=:apiCode)'),
  multiaddr: new UrlPattern('/multiaddr?active=:active(&n=:limit)(&offset=:offset)(&api_code=:apiCode)'),
  unspent: new UrlPattern('/unspent?active=:active(&api_code=:apiCode)(&confirmations=:confirmations)(&limit=:limit)'),
  balance: new UrlPattern('/balance?active=:active(&api_code=:apiCode)'),
  latestblock: new UrlPattern('/latestblock?cors=true&(?api_code=:apiCode)'),
  unconfTxs: new UrlPattern('/unconfirmed-transactions?format=json(&api_code=:apiCode)'),
  blocks: new UrlPattern('/blocks/:time?cors=true&format=json(&api_code=:apiCode)')
}

3) In './node_modules/blockchain.info/statistics/index.js'

replaced endpoint.charts (string 6) on:

  charts: new UrlPattern('/charts/:type?cors=true&format=json(&api_code=:apiCode)(&timespan=:timespan)(&rollingAverage=:rollingAverage)'),
  
4) npm rebuild
5) npm start