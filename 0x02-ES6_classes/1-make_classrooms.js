import ClassRoom from "./0-classroom.js";

export default function initializeRooms() {
  const rooms = [
	`ClassRoom { _maxStudentsSize: ${new ClassRoom(19)},\
     ClassRoom { _maxStudentsSize: ${new ClassRoom(20)},\
	 ClassRoom { _maxStudentsSize: ${new ClassRoom(34)}`
	 ];
   return rooms;
}
