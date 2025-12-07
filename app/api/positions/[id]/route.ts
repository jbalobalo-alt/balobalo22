import { NextRequest, NextResponse } from 'next/server';
import { deletePosition } from '@/lib/positions';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  if (isNaN(id)) {
    return NextResponse.json({ message: 'Invalid ID' }, { status: 400 });
  }

  const success = deletePosition(id);
  if (!success) {
    return NextResponse.json({ message: 'Position not found' }, { status: 404 });
  }

  return NextResponse.json({ message: 'Position deleted' });
}