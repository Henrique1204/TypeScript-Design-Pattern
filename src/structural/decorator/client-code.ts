import TShirt from './product/t-shirt';
import ProductDecorator from './product/product-decorator';
import ProductStampDecorator from './product/product-stamp-decorator';
import ProductCustomizationDecorator from './product/product-customization-decorator';

const tshirt = new TShirt('Camiseta Verde', 23);
console.log(tshirt.getPrice(), tshirt.getName());

const decoratedTShirt = new ProductDecorator(tshirt);
console.log(decoratedTShirt.getPrice(), decoratedTShirt.getName());

const tshirtStamp = new ProductStampDecorator(tshirt);
console.log(tshirtStamp.getPrice(), tshirtStamp.getName());

const tshirtDoubleStamp = new ProductStampDecorator(tshirtStamp);
console.log(tshirtDoubleStamp.getPrice(), tshirtDoubleStamp.getName());

const tshirtCustomization = new ProductCustomizationDecorator(tshirt);
console.log(tshirtCustomization.getPrice(), tshirtCustomization.getName());
