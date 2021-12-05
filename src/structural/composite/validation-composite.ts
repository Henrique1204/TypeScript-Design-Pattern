// Component
export abstract class ValidationComponent {
  abstract validate(value: unknown): boolean;
}

// Leaf
export class ValidateEmail extends ValidationComponent {
  public validate(value: unknown): boolean {
    return typeof value === 'string' && /@/.test(value);
  }
}

export class ValidateString extends ValidationComponent {
  public validate(value: unknown): boolean {
    return typeof value === 'string';
  }
}

export class ValidateNumber extends ValidationComponent {
  public validate(value: unknown): boolean {
    return typeof value === 'number';
  }
}

// Composite
export class ValidateComposite extends ValidationComponent {
  constructor(private readonly children: ValidationComponent[] = []) {
    super();
  }

  public validate(value: unknown): boolean {
    for (const child of this.children) {
      if (!child.validate(value)) return false;
    }

    return true;
  }

  public add(...validations: ValidationComponent[]): void {
    validations.forEach((validation) => this.children.push(validation));
  }

  public remove(validation: ValidationComponent): void {
    const index = this.children.indexOf(validation);

    index !== -1 && this.children.splice(index, 1);
  }
}

const validationEmail = new ValidateEmail();
const validationString = new ValidateString();
const validationNumber = new ValidateNumber();

const validationComposite = new ValidateComposite();

validationComposite.add(validationEmail, validationString, validationNumber);

console.log(validationComposite.validate('test@test.com'));

validationComposite.remove(validationNumber);

console.log(validationComposite.validate('test@test.com'));
