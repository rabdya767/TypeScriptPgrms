/* eslint-disable @typescript-eslint/no-unused-vars */
type PointP = {x:number; y:number};
//P is of keyof PointP
type P = keyof PointP;

type arrayIsh = {[n:number]:boolean};
//A is number
type A = keyof arrayIsh;

type mapIsh = {[k:string]:boolean};
//M is string | number because 
// JavaScript object keys are always coerced to a string,
//so obj[0] is always the same as obj["0"] .
type M = keyof mapIsh;
