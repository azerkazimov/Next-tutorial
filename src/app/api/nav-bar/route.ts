import { NextResponse } from 'next/server';
import { navbar } from '@/data/navbar';

export async function GET() {
    return NextResponse.json(navbar);
}