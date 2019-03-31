import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from '@src/app.controller';
import { AppService } from '@src/app.service';

import { UsersModule } from '@src/modules/users/users.module';
import { PostsModule } from '@src/modules/posts/posts.module';
import { TagsModule } from '@src/modules/tags/tags.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      useNewUrlParser: true,
    }),
    UsersModule,
    PostsModule,
    TagsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
