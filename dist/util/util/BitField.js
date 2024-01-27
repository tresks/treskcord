"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitFlag = exports.BitField = void 0;
/**
 * Data structure that makes it easy to interact with a bitfield.
 */
class BitField {
    bitfield = BigInt(0);
    static FLAGS = {};
    constructor(bits = 0) {
        this.bitfield = BitField.resolve.call(this, bits);
    }
    /**
     * Checks whether the bitfield has a bit, or any of multiple bits.
     */
    any(bit) {
        return (this.bitfield & BitField.resolve.call(this, bit)) !== BigInt(0);
    }
    /**
     * Checks if this bitfield equals another
     */
    equals(bit) {
        return this.bitfield === BitField.resolve.call(this, bit);
    }
    /**
     * Checks whether the bitfield has a bit, or multiple bits.
     */
    has(bit) {
        if (Array.isArray(bit))
            return bit.every((p) => this.has(p));
        const BIT = BitField.resolve.call(this, bit);
        return (this.bitfield & BIT) === BIT;
    }
    /**
     * Gets all given bits that are missing from the bitfield.
     */
    missing(bits) {
        if (!Array.isArray(bits))
            bits = new BitField(bits).toArray();
        return bits.filter((p) => !this.has(p));
    }
    /**
     * Freezes these bits, making them immutable.
     */
    freeze() {
        return Object.freeze(this);
    }
    /**
     * Adds bits to these ones.
     * @param {...BitFieldResolvable} [bits] Bits to add
     * @returns {BitField} These bits or new BitField if the instance is frozen.
     */
    add(...bits) {
        let total = BigInt(0);
        for (const bit of bits) {
            total |= BitField.resolve.call(this, bit);
        }
        if (Object.isFrozen(this))
            return new BitField(this.bitfield | total);
        this.bitfield |= total;
        return this;
    }
    /**
     * Removes bits from these.
     * @param {...BitFieldResolvable} [bits] Bits to remove
     */
    remove(...bits) {
        let total = BigInt(0);
        for (const bit of bits) {
            total |= BitField.resolve.call(this, bit);
        }
        if (Object.isFrozen(this))
            return new BitField(this.bitfield & ~total);
        this.bitfield &= ~total;
        return this;
    }
    /**
     * Gets an object mapping field names to a {@link boolean} indicating whether the
     * bit is available.
     * @param {...*} hasParams Additional parameters for the has method, if any
     */
    serialize() {
        const serialized = {};
        for (const [flag, bit] of Object.entries(BitField.FLAGS))
            serialized[flag] = this.has(bit);
        return serialized;
    }
    /**
     * Gets an {@link Array} of bitfield names based on the bits available.
     */
    toArray() {
        return Object.keys(BitField.FLAGS).filter((bit) => this.has(bit));
    }
    toJSON() {
        return this.bitfield;
    }
    valueOf() {
        return this.bitfield;
    }
    *[Symbol.iterator]() {
        yield* this.toArray();
    }
    /**
     * Data that can be resolved to give a bitfield. This can be:
     * * A bit number (this can be a number literal or a value taken from {@link BitField.FLAGS})
     * * An instance of BitField
     * * An Array of BitFieldResolvable
     * @typedef {number|BitField|BitFieldResolvable[]} BitFieldResolvable
     */
    /**
     * Resolves bitfields to their numeric form.
     * @param {BitFieldResolvable} [bit=0] - bit(s) to resolve
     * @returns {number}
     */
    static resolve(bit = BigInt(0)) {
        // @ts-ignore
        const FLAGS = this.FLAGS || this.constructor?.FLAGS;
        if ((typeof bit === "number" || typeof bit === "bigint") && bit >= BigInt(0))
            return BigInt(bit);
        if (bit instanceof BitField)
            return bit.bitfield;
        if (Array.isArray(bit)) {
            // @ts-ignore
            const resolve = this.constructor?.resolve || this.resolve;
            return bit.map((p) => resolve.call(this, p)).reduce((prev, p) => BigInt(prev) | BigInt(p), BigInt(0));
        }
        if (typeof bit === "string" && typeof FLAGS[bit] !== "undefined")
            return FLAGS[bit];
        if (bit === "0")
            return BigInt(0); //special case: 0
        if (typeof bit === "string")
            return BigInt(bit); //last ditch effort...
        if (/--debug|--inspect/.test(process.execArgv.join(" ")))
            debugger; //if you're here, we have an invalid bitfield... if bit is 0, thats fine, I guess...
        throw new RangeError("BITFIELD_INVALID: " + bit);
    }
}
exports.BitField = BitField;
function BitFlag(x) {
    return BigInt(1) << BigInt(x);
}
exports.BitFlag = BitFlag;
//# sourceMappingURL=BitField.js.map