import { NextRequest, NextResponse } from 'next/server';
import { getPositions, addPosition } from '@/lib/positions';

export async function GET() {
  try {
    const positions = getPositions();
    return NextResponse.json(positions);
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch positions' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { position_code, position_name } = body;

    if (!position_code || !position_name) {
      return NextResponse.json({ message: 'Position code and name are required' }, { status: 400 });
    }

    const newPosition = addPosition(position_code, position_name);
    return NextResponse.json(newPosition, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to create position' }, { status: 500 });
  }
}