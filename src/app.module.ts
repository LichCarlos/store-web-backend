import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivityModule } from './auth/activity/activity.module';
import { ActivityModule } from './activity/activity.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { LogsModule } from './logs/logs.module';
import { OrderModule } from './order/order.module';
import { PermissionModule } from './permission/permission.module';
import { ProductModule } from './product/product.module';
import { RoleModule } from './role/role.module';
import { SysModule } from './sys/sys.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ActivityModule, AuthModule, CommonModule, LogsModule, OrderModule, PermissionModule, ProductModule, RoleModule, SysModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
