import { NextResponse } from 'next/server';
import connect from '@/utils/db';
import Post from '@/models/postModel';
import mongoose from 'mongoose';

export const GET = async (request) => {
  try {
    mongoose.set('strictQuery', false);
    await connect();
    const posts = await Post.find();
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse('Database error' + err, { status: 500 });
  }
};
