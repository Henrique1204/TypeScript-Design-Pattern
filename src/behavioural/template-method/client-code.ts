import { resolve } from 'path';
import CustomerDataParserJson from './customer-data-parser-json';
import CustomerDataParserTxt from './customer-data-parser-txt';

(async () => {
  const filePathTxt = resolve(__dirname, 'files', 'customer.txt');
  const customerDataTxt = new CustomerDataParserTxt(filePathTxt);
  await customerDataTxt.fixCustomerData();

  console.log(customerDataTxt.customerData, '\n');

  const filePathJson = resolve(__dirname, 'files', 'customer.json');
  const customerDataJson = new CustomerDataParserJson(filePathJson);
  await customerDataJson.fixCustomerData();

  console.log(customerDataJson.customerData, '\n');
})();
