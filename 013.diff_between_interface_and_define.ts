// 'interface', 'type' can be used at same place

/* diff:
    1. 'type' can not add property, but interface can
    2. 'type' can not use 'extends' key word, but interface can
*/

interface Animal {
    name: string
  }

  interface Bear extends Animal {
    honey: boolean
  }

  const bear = getBear()
  bear.name
  bear.honey


//////////////////////////////////////
type Animal2 = {
    name: string
  }

  type Bear2 = Animal & {
    honey: Boolean
  }

  const bear = getBear();
  bear.name;
  bear.honey;

  ////////////////////
  interface Window {
    title: string
  }

  interface Window {
    ts: import("typescript")
  }

  const src = 'const a = "Hello World"';
  window.ts.transpileModule(src, {});

////////////////////////////
type Window = {
    title: string
  }

  type Window = {
    ts: import("typescript")
  }

  // Error: Duplicate identifier 'Window'.
