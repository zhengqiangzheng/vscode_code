enum Type {
  Strong,
  Weak,
}
class Java {
  helloJava() {
    console.log('Hello Javas');
  }
  java: any;
}
class JavaScript {
  helloJavaScript() {
    console.log('Hello JavaScript');
  }
  javascript: any;
}
function isJava(lang: Java | JavaScript): lang is Java {
  return (lang as Java).helloJava() !== undefined;
}
function getlanguage(type: Type) {
  let lang = type == Type.Strong ? new Java() : new JavaScript();
  //   if ((lang as Java).helloJava) {
  //     (lang as Java).helloJava();
  //   } else {
  //     (lang as JavaScript).helloJavaScript();
  //   }
  //   if (lang instanceof Java) {
  //     lang.helloJava();
  //   } else {
  //     lang.helloJavaScript();
  //   }
  if ('java' in lang) {
    lang.helloJava();
  } else {
    lang.javascript();
  }
  return lang;
}
let obj1 = {
  a: 1,
  b: 2,
  c: 3,
};
function getValues(obj: any, keys: string[]) {
  return keys.map((key) => obj[key]);
}
type T1 = Extract<'a' | 'b' | 'c', 'a' | 'c'>;
type T2 = Exclude<'a' | 'b' | 'c', 'a' | 'c'>;
type T3 = NonNullable<'string' | 'number' | undefined>;
type T4 = ReturnType<() => string>;
