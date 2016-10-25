# Ueno. JavaScript Style Guide

## Table of Contents

  1. [Binding this](#binding-this)
  
## Binding this

There are several ways to bind a method to it's class.

We recommend using decorators when available or the fat arrow style.

```js
import { autobind } from 'core-decorators';

// Bind one method
class A {

  @autobind
  method() {}
}

// Or bind all methods in class
@autobind
class B {

  method1() {}
  method2() {}
}

// If decorators are not available
class C {
  method = () => {}
}
```

We don't bind in constructor unless babel is not available.
Note: Never bind in looping methods (like the render method).

```js
class A {
  constructor() {
    this.method = this.method.bind(this);
  }
}
```

**[⬆ back to top](#table-of-contents)**
