![Zent Cash](https://raw.githubusercontent.com/ZentCashFoundation/brand/master/logo/wordmark/zentcash_wordmark_color.png)

# Zent Cash Javascript Utilities

[![NPM](https://nodei.co/npm/zentcash-utils.png?downloads=true&stars=true)](https://nodei.co/npm/zentcash-utils/)

![Prerequisite](https://img.shields.io/badge/node-%3E%3D6-blue.svg) [![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://utils.zent.cash) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/ZentCashFoundation/zentcash-utils/graphs/commit-activity) [![License: GPL-3.0](https://img.shields.io/badge/License-GPL--3.0-yellow.svg)](https://github.com/ZentCashFoundation/zentcash-utils/blob/master/LICENSE)

#### Master Build Status
[![Build Status](https://github.com/ZentCashFoundation/zentcash-utils/workflows/CI%20Build%20Tests/badge.svg?branch=main)](https://github.com/ZentCashFoundation/zentcash-utils/actions)

#### Development Build Status
[![Build Status](https://github.com/ZentCashFoundation/zentcash-utils/workflows/CI%20Build%20Tests/badge.svg?branch=dev)](https://github.com/ZentCashFoundation/zentcash-utils/actions)

This package contains code that wraps [zentcash-crypto](https://github.com/ZentCashFoundation/zentcash-crypto) primitives into an easier to use interface. This includes the ability to easily discover funds for a wallet, create transactions, sign transactions (ring signatures), create new wallets, verify addresses, and handful of other useful methods. These methods can then be wrapped into a Javascript-based wallet such as [zentcash-wallet-backend-js](https://github.com/ZentCashFoundation/zentcash-wallet-backend-js).

If you experience any issues with this library, the best way to address such situations is to submit a Pull Request to resolve the issue you are running into.

## Installation

```bash
npm install zentcash-utils
```

## Initialization

### JavaScript

```javascript
const ZentCashUtils = require('zentcash-utils').CryptoNote
const coinUtils = new ZentCashUtils()
```

### TypeScript

```typescript
import { CryptoNote } from 'zentcash-utils'
const coinUtils = new CryptoNote()
```

You can find TypeScript type definitions [here](index.d.ts)

### Browser Support

When packing for the browser with a tool like [webpack](https://webpack.js.org/) we advise that you use the ready `event` of the webpacked module to determine when the Cryptographic methods are available.

```html
<script src="ZentCashUtils.js"></script>
<script>
  ZentCashUtils.on('ready', () => {
    const coinUtils = new ZentCashUtils.CryptoNote()
  })
</script>
```

### Documentation

You can find the full documentation for this library [here](https://utils.zent.cash)

### Credits

Special thanks goes out to:

* Lucas Jones
* Paul Shapiro
* Luigi111
* [The MyMonero Project](https://github.com/mymonero/mymonero-app-js)
* The Masari Project: [gnock](https://github.com/gnock)
* The Plentum Project: [DaveLong](https://github.com/DaveLong)
