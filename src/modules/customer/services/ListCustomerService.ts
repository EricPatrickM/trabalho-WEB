import { getCustomRepository } from "typeorm";
import Customer from "../typeorm/entities/Customer";
import CustomerRepository from "../typeorm/repositories/CustomersRepository";

export default class LisCustomerService{

  public async execute() : Promise<Customer[]>{
    const customerRepository = getCustomRepository(CustomerRepository);

    const customers = await customerRepository.find();

    return customers;
  }
}
