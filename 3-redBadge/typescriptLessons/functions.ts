function newFunc(first: object, second: boolean, third: string[]): void{
  console.log(first, second, third);
}

function fullSignature(a: boolean, b: boolean, c: boolean): string[]{
  return [a.toString(), b.toString(), c.toString()]
}

let funcExpress: (first: number, second: number) => object;
funcExpress = (first, second) => {
  return {
      first: first,
      second: second
  }
}

let optionalParams: (a: boolean, b: boolean, c?: boolean) => boolean;
optionalParams = (a, b) => true;

function restParams(a: number, b: number, ...c: string[]): number{
  return c.length;
}

function overloads(a: boolean, b: string): number;
function overloads(a: string, b: boolean): string;
function overloads(a, b): any{
  if (typeof a === 'boolean'){
      return 10;
  } else {
      return 'test';
  }
}

overloads(false, 'tyler');