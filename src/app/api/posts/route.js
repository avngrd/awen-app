import { NextResponse } from 'next/server';
import connect from '@/utils/db';
import Post from '@/models/postModel';
import mongoose from 'mongoose';

export const GET = async (request) => {
  const url = new URL(request.url);

  const username = url.searchParams.get('username');

  try {
    mongoose.set('strictQuery', false);
    await connect();
    const posts = await Post.find(username && { username });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse('Database error' + err, { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  console.log(body);

  const newPost = new Post(body);

  try {
    await connect();

    await newPost.save();

    return new NextResponse('Post has been created', { status: 201 });
  } catch (err) {
    return new NextResponse('Database error' + err, { status: 500 });
  }
};
