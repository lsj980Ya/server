import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService, ConfigType } from '@nestjs/config';
import databaseConfig from './config/database.config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly configService: ConfigService,@Inject(databaseConfig.KEY)
  private dbConfig: ConfigType<typeof databaseConfig>,) {}
  
  @Get()
  getHello(): string {
    console.log(this.configService.get('DATABASE_USER'));
    console.log(this.configService.get('port'));
    console.log(this.configService.get('database.host'));
    console.log(this.dbConfig);
    return this.appService.getHello();
  }
}
