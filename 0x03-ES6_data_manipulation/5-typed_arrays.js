/**
 * A function thst creates a buffer of length
 * Uses int8Array to manipulate it.
 * Sets values at a specified position
 * @Returns the buffer
 */
export default function createInt8TypedArray(length, position, value) {
  // Check if the specified position is within the valid range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);
  // Create an Int8Array view of the buffer
  const view = new Int8Array(buffer);
  // Set the Int8 value at the specified position
  view[position] = value;
  return new DataView(buffer);
}
