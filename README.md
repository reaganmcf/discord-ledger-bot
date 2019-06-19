# Discord Ledger Bot
I made this for a private stock trading group I run. Allows members to log their positions so other members can discuss them without the feed of the chat causing members to miss it.

**If you have any feature you would like implemented, please submit a new issue with the _Feature Request_ label and I will respond :\)**

## Example
![https://i.imgur.com/Elyz69R.png](https://i.imgur.com/Elyz69R.png)

#### Example Commands
- `!help` -> Shows help message
- `!boughtshare aapl 100 196.32` -> Logs 100 shares of AAPL bought at 196.32
- `!bs tsla 5 208.3` -> Logs 5 shares of TSLA bought at 208.3
- `!boughtoption spy 6/24 284p` -> Logs SPY put option with 284 strike expiring on 6/24
- `!bo adbe 9/20 300c` -> Logs ADBE call option with 300 strike expiring on 9/20 

## Setup
1. Clone the respository to whichever hosting service you prefer
2. Rename `example-config.js` to `config.js` and replace the fields with your information
3. Run `npm install`
4. Run `node index.js`
