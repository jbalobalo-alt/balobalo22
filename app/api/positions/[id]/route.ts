import { NextRequest, NextResponse } from 'next/server';
import { deletePosition } from '@/lib/positions';

export async function DELETE(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const positionId = parseInt(id, 10);

    if (isNaN(positionId)) {
      return NextResponse.json({ message: 'Invalid position ID' }, { status: 400 });
    }

    const success = deletePosition(positionId);
    if (!success) {
      return NextResponse.json({ message: 'Position not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Position deleted successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to delete position' }, { status: 500 });
  }
}