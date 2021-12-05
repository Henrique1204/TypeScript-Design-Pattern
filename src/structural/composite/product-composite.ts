// Component
export abstract class ProductComponent {
  abstract getPrice(): number;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public add(product: ProductComponent): void {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public remove(product: ProductComponent): void {}
}

// Leaf
export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }

  public getPrice(): number {
    return this.price;
  }
}

// Composite
export class ProductComposite extends ProductComponent {
  constructor(private children: ProductComponent[] = []) {
    super();
  }

  public getPrice(): number {
    return this.children.reduce((acc, item) => acc + item.getPrice(), 0);
  }

  public add(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product));
  }

  public remove(product: ProductComponent): void {
    const index = this.children.indexOf(product);

    index !== -1 && this.children.splice(index, 1);
  }
}

const pen = new ProductLeaf('Pen', 40);
const smartphone = new ProductLeaf('Smartphone', 500);
const car = new ProductLeaf('Fusca', 8000);

const productBox1 = new ProductComposite();
productBox1.add(pen, smartphone, car);

const tablet = new ProductLeaf('Tablet', 2000);
const kindle = new ProductLeaf('Kindle', 300);

const productBox2 = new ProductComposite();
productBox2.add(productBox1, tablet, kindle);

const formatter = new Intl.NumberFormat([], {
  style: 'currency',
  currency: 'BRL',
});

console.log('[BOX 1]', formatter.format(productBox1.getPrice()));
console.log('[BOX 2]', formatter.format(productBox2.getPrice()));
