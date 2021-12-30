// Comando para compilar TS: npx tsc src\behavioural\observer\observer.ts -w

interface Observer {
  update(...args: unknown[]): void;
}

interface Observable {
  subscribe(...observers: Observer[]): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}

// Concrete Observable
class InputObservable implements Observable {
  private observes: Observer[] = [];

  constructor(public element: HTMLInputElement) {}

  public subscribe(...observers: Observer[]): void {
    observers.forEach((observe) => {
      if (!this.observes.includes(observe)) this.observes.push(observe);
    });
  }

  public unsubscribe(observer: Observer): void {
    const observerIndex = this.observes.indexOf(observer);

    if (observerIndex !== -1) this.observes.splice(observerIndex, 1);
  }

  public notify(): void {
    this.observes.forEach((observer) => observer.update(this));
  }
}

// Concrete Observerver
class ParagraphObserver implements Observer {
  constructor(public element: HTMLParagraphElement) {}

  public update(observable: InputObservable): void {
    if (observable instanceof InputObservable) {
      this.element.innerText = observable.element.value;
    }
  }
}

// Concrete Observerver
class DivObserver implements Observer {
  constructor(public element: HTMLDivElement) {}

  public update(observable: InputObservable): void {
    if (observable instanceof InputObservable) {
      this.element.innerText = observable.element.value;
    }
  }
}

// Cliente Code
const makeInput = (parent?: HTMLElement | null): HTMLInputElement => {
  const input = document.createElement('input');

  if (parent) parent.appendChild(input);
  else document.body.appendChild(input);

  return input;
};

const makeParagraph = (
  parent?: HTMLElement | null,
  initialText?: string
): HTMLParagraphElement => {
  const paragraph = document.createElement('p');

  parent?.appendChild(paragraph) || document.body.appendChild(paragraph);

  paragraph.innerText = initialText || 'Texto inicial (HARDCODED)';

  return paragraph;
};

const makeDiv = (
  parent?: HTMLElement | null,
  initialText?: string
): HTMLDivElement => {
  const div = document.createElement('div');

  parent?.appendChild(div) || document.body.appendChild(div);

  div.innerText = initialText || 'Texto inicial (HARDCODED)';

  return div;
};

const input = new InputObservable(makeInput());

const paragraph1 = new ParagraphObserver(makeParagraph(null, 'Parágrafo 1'));
const paragraph2 = new ParagraphObserver(makeParagraph(null, 'Parágrafo 2'));
const paragraph3 = new ParagraphObserver(makeParagraph(null, 'Parágrafo 3'));

const div1 = new DivObserver(makeDiv(null, 'Div 1'));

input.subscribe(paragraph1, paragraph2, paragraph3, div1);

input.element.addEventListener('keyup', function () {
  input.notify();
});

input.unsubscribe(paragraph2);
