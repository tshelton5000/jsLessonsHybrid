//boolean type
let bool: boolean = true;
//number type
let num: number = 10;
//string type
let str: string = 'tyler michael shelton';
//str array type
let strArr: string[] = ['tyler', 'michael', 'shelton'];
//num array type
let numArray: number[] = [0,1,2,3,4];
//bool array type
let boolArray: boolean[] = [true, false, true, true, false];
//tuple type
let sampTuple: [string, number, boolean] = ['tyler', 10, true];
//enum type
enum Color {Red, Green, Blue};
let color: Color = Color.Red;
//any type
let anyVar: any = {first: 'Becky', second: 'Rob'};
anyVar = 10;
//void type
function voidFunc(first: string): void{
    console.log(first);
}
//normal function return type
function regFunc(first: number): number{
    return first;
}
//null type
let nullVar: null = null;
nullVar = null;
//undefined type
let undefVar: undefined = undefined;
//object type
let obj: object = {first: 'chris', second: 'tracy', third: 'alice'};