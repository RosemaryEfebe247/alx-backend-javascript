import ClassRoom from './0-classroom.js';

/**
 * initializeRooms - Function that initialize rooms
 * @returns an array of sizes
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
