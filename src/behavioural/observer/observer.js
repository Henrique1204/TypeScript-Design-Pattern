// Concrete Observable
var InputObservable = /** @class */ (function () {
    function InputObservable(element) {
        this.element = element;
        this.observes = [];
    }
    InputObservable.prototype.subscribe = function () {
        var _this = this;
        var observers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observers[_i] = arguments[_i];
        }
        observers.forEach(function (observe) {
            if (!_this.observes.includes(observe))
                _this.observes.push(observe);
        });
    };
    InputObservable.prototype.unsubscribe = function (observer) {
        var observerIndex = this.observes.indexOf(observer);
        if (observerIndex !== -1)
            this.observes.splice(observerIndex, 1);
    };
    InputObservable.prototype.notify = function () {
        var _this = this;
        this.observes.forEach(function (observer) { return observer.update(_this); });
    };
    return InputObservable;
}());
// Concrete Observerver
var ParagraphObserver = /** @class */ (function () {
    function ParagraphObserver(element) {
        this.element = element;
    }
    ParagraphObserver.prototype.update = function (observable) {
        if (observable instanceof InputObservable) {
            this.element.innerText = observable.element.value;
        }
    };
    return ParagraphObserver;
}());
// Concrete Observerver
var DivObserver = /** @class */ (function () {
    function DivObserver(element) {
        this.element = element;
    }
    DivObserver.prototype.update = function (observable) {
        if (observable instanceof InputObservable) {
            this.element.innerText = observable.element.value;
        }
    };
    return DivObserver;
}());
// Cliente Code
var makeInput = function (parent) {
    var input = document.createElement('input');
    if (parent)
        parent.appendChild(input);
    else
        document.body.appendChild(input);
    return input;
};
var makeParagraph = function (parent, initialText) {
    var paragraph = document.createElement('p');
    (parent === null || parent === void 0 ? void 0 : parent.appendChild(paragraph)) || document.body.appendChild(paragraph);
    paragraph.innerText = initialText || 'Texto inicial (HARDCODED)';
    return paragraph;
};
var makeDiv = function (parent, initialText) {
    var div = document.createElement('div');
    (parent === null || parent === void 0 ? void 0 : parent.appendChild(div)) || document.body.appendChild(div);
    div.innerText = initialText || 'Texto inicial (HARDCODED)';
    return div;
};
var input = new InputObservable(makeInput());
var paragraph1 = new ParagraphObserver(makeParagraph(null, 'Parágrafo 1'));
var paragraph2 = new ParagraphObserver(makeParagraph(null, 'Parágrafo 2'));
var paragraph3 = new ParagraphObserver(makeParagraph(null, 'Parágrafo 3'));
var div1 = new DivObserver(makeDiv(null, 'Div 1'));
input.subscribe(paragraph1, paragraph2, paragraph3, div1);
input.element.addEventListener('keyup', function () {
    input.notify();
});
input.unsubscribe(paragraph2);
