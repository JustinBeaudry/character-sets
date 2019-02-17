<p align="center">
  <h1 align="center">Character Sets</h1>
</p>

<p align="center">
  JSON registry of <a href="https://www.iana.org/assignments/character-sets">IANA</a> Character Sets.
</p>

<p align="center">
  <img src="https://badge.fury.io/js/character-sets.svg" alt="npm version" height="18">
</p>
<p align="center">
  <a href="https://raw.githubusercontent.com/JustinBeaudry/advent/master/LICENSE"><img alt="MIT License" 
  src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
  <img alt="Node 10.x.x" src="https://img.shields.io/badge/node-10.x.x-blue.svg">
</p>

## Install
### NodeJS

```bash
  npm i -S character-sets 
```
### HTTP
```bash
curl https://raw.githubusercontent.com/JustinBeaudry/character-sets/master/charsets.json -o charsets.json
```

## Usage
```javascript
const characterSets = require('character-sets');

// array of character sets
characterSets.toArray(); // ['UTF-8', ...]

// lower cased character set array
characterSets.normalize(); // ['utf-8', ...]

// is my character set a standardized character set?
characterSets.includes('utf-8'); // true
characterSets.includes('UTF-8'); // true
characterSets.includes('US-ASCII'); // true
characterSets.includes('us-ascii'); // true
characterSets.includes('pikachu'); // false
```

## API
### `toArray(): string[]`
Returns an array of IANA character set strings.

### `normalize(): string[]`
Returns an array of lowercase IANA character set strings.

### `includes(charSet: string): boolean`
Returns `true` if the character set string is included in the standardized set of IANA character set strings, 
otherwise returns `false`.
