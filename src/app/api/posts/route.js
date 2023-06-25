import { NextResponse } from 'next/server';
import connect from '@/utils/db';
import Post from '@/models/Post';
import mongoose from 'mongoose';

export const GET = async (request) => {
  try {
    // mongoose.set('strictQuery', false);
    await connect();
    const posts = await Post.find();
    return new NextResponse(posts, { status: 200 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
