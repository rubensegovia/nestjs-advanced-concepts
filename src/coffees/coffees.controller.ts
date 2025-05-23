import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  RequestTimeoutException,
  UseInterceptors,
} from '@nestjs/common';
import { CircuitBreakerInterceptor } from '../common/interceptors/circuit-breaker/circuit-breaker.interceptor';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@UseInterceptors(CircuitBreakerInterceptor)
@Controller('coffees')
export class CoffeesController {
  constructor(
    @Inject(CoffeesService) private readonly coffeesService: CoffeesService,
  ) {}

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto);
  }

  @Get()
  findAll() {
    console.log('🦊 "findAll" executed');
    throw new RequestTimeoutException('💥 Error!'); // 👈
    //return this.coffeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(+id);
  }

  @Patch(':id')
  // update(@Param('id', EntityExistsPipe(Coffee)) id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesService.update(+id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(+id);
  }
}
