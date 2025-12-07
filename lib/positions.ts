// In-memory storage for positions (in production, use a database)
let positions: Array<{
  positions_id: number;
  positions_code: string;
  positions_name: string;
}> = [
  // Sample data
  { positions_id: 1, positions_code: 'DEV', positions_name: 'Developer' },
  { positions_id: 2, positions_code: 'MGR', positions_name: 'Manager' },
];

let nextId = 3;

export function getPositions() {
  return positions;
}

export function addPosition(position_code: string, position_name: string) {
  const newPosition = {
    positions_id: nextId++,
    positions_code: position_code,
    positions_name: position_name,
  };
  positions.push(newPosition);
  return newPosition;
}

export function deletePosition(id: number) {
  const index = positions.findIndex(p => p.positions_id === id);
  if (index !== -1) {
    positions.splice(index, 1);
    return true;
  }
  return false;
}