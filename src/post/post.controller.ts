import { Controller, Get, Post as HttpPost, Body } from '@nestjs/common';
import { PostService } from './post.service';
import { Post as PostEntity } from './post.entity';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @HttpPost('generate')
  async createFakePosts(): Promise<void> {
    await this.postService.createFakePosts(10);
  }
  
  @Get()
  findAll(): Promise<PostEntity[]> {
    return this.postService.findAll();
  }

  
}
