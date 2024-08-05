import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { faker } from '@faker-js/faker';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

 async findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }

  async createFakePosts(count: number): Promise<void> {
    for (let i = 0; i < count; i++) {
      const post = new Post();
      post.title = faker.lorem.sentence();
      post.content = faker.lorem.paragraph();
      post.author = faker.person.fullName();
  
      console.log('Saving post:', post);// Verifique se a postagem está sendo criada
  
      try {
        await this.postRepository.save(post);
        console.log('Post salvo:', post);
      } catch (error) {
        console.error('Post não salvo:', error);
      }
    }
  }
}  
