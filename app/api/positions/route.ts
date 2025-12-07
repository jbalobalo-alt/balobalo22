import { NextRequest, NextResponse } from 'next/server';
import { getPositions, addPosition } from '@/lib/positions';

export async function GET() {
  return NextResponse.json(getPositions());
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { position_code, position_name } = body;

    if (!position_code || !position_name) {
      return NextResponse.json({ message: 'position_code and position_name are required' }, { status: 400 });
    }

    const newPosition = addPosition(position_code, position_name);
    return NextResponse.json(newPosition, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Invalid JSON' }, { status: 400 });
  }
}