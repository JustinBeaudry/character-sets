// Type definitions for characterSets 1.0.0
// Project: https://github.com/JustinBeaudry/character-sets
// Definitions by: Justin Beaudry <https://github.com/JustinBeaudry>
// Definitions: https://github.com/JustinBeaudry/character-sets

declare module 'characters-sets' {
    function toArray(): string[];
    function normalize(): string[];
    function includes(charset: string): boolean;
}