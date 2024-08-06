
export type Transform = {
  callbackFn: (value: any, index?: number, array?: any[]) => unknown;
  thisArg?: any;
};

export function getFieldTransform(field: string): Transform {
  return {
    callbackFn: (item: any) => (field ? [item].map(i => field?.split('.').reduce((o: any, k: any) => o[k], i))[0] : item),
  };
}

export type StringTransform = {
  callbackFn: (value: any, index?: number, array?: any[]) => string;
  thisArg?: any;
};

export function debounce(delay = 300): MethodDecorator {
  return function (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const timeoutKey = Symbol();
    const original = descriptor.value;

    descriptor.value = function (...args: any) {
      clearTimeout((<any>this)[timeoutKey]);
      (<any>this)[timeoutKey] = setTimeout(() => original.apply(this, args), delay);
    };

    return descriptor;
  };
}

export function throttle(delay = 300): MethodDecorator {
  return function (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const timeoutKey = Symbol();
    const original = descriptor.value;

    descriptor.value = function (...args: any) {
      if (!(<any>this)[timeoutKey]) {
        (<any>this)[timeoutKey] = setTimeout(() => {
          original.apply(this, args);
          (<any>this)[timeoutKey] = null;
        }, delay);
      }
    };

    return descriptor;
  };
}

export function sample(delay = 300): MethodDecorator {
  return function (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const timeoutKey = Symbol();
    const original = descriptor.value;
    let prevValue: any;

    descriptor.value = function (...args: any) {
      if (!(<any>this)[timeoutKey]) {
        (<any>this)[timeoutKey] = setTimeout(() => {
          (<any>this)[timeoutKey] = null;
        }, delay);
        prevValue = original.apply(this, args);
      }
      return prevValue;
    };

    return descriptor;
  };
}
