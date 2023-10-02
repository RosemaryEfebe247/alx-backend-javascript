export default function getListStudents() {
  const ids = [1, 2, 5];
  const firstNames = ['Guillaume', 'James', 'Serena'];
  const locations = ['San Francisco', 'Columbia', 'San Francisco'];
  
  return ids.map((id, index) => ({
    id,
    firstName: firstNames[index]
    location: locations[index]
  }))
}
