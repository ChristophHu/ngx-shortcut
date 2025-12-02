# Ngx-shortcut

## Demo
<p align="center">
  <a href="https://christophhu.github.io/ngx-shortcut"><img src="https://github.com/ChristophHu/ChristophHu/blob/main/assets/img/ngx-shortcut.png" width="500" alt="image" /></a>
</p>

## Description
This repository contains an Angular 20 demo that showcases the `ngx-shortcut` library. `ngx-shortcut` provides a flexible table for Angular apps. It’s easy to customize—sizes, colors, and behavior—to match your application’s design.

## Frameworks and Languages
<p align="left">
  <img alt="Static Badge" src="https://img.shields.io/badge/20.3.0-000000?style=for-the-badge&logo=angular&logoColor=white&label=Angular&labelColor=000000">
  <img alt="Static Badge" src="https://img.shields.io/badge/4.1.16-000000?style=for-the-badge&logo=tailwindcss&logoColor=white&label=TailwindCSS&labelColor=06B6D4&color=000000">
  <img alt="Static Badge" src="https://img.shields.io/badge/5.9.2-000000?style=for-the-badge&logo=typescript&logoColor=white&label=Typescript&labelColor=007ACC&color=000000">
</p>


## Installation
To run this project, you need to have Node.js installed on your machine. Clone the repository and run the following commands:

```bash
npm install @christophhu/ngx-shortcut
```

## Usage
Import the DatatableComponent in the app.ts.

```typescript
import { NgxDatatableModule } from '@christophhu/ngx-shortcut';
```

Then, you can use the `<ngx-shortcut>` component in your templates.
There are several options available to customize the shortcut display und functionality:
```html
<ngx-shortcut [keys]="['Space', 'Apple', 'b']" [useSymbols]="true"></ngx-shortcut>

<ngx-shortcut [keys]="['Shift', 'A', 'B']" [useSymbols]="true" [separator]="'+'"></ngx-shortcut>

<ngx-shortcut [keys]="['Shift', 'A', 'X']" [useSymbols]="true" [separator]="'-'" [cb]="freshCb"></ngx-shortcut>
```

Shortcuts without callback will only display the shortcut, while those with a callback will also execute the provided function when the shortcut is triggered.
To define a callback function, you can add it to your component like this:

```typescript
freshCb() {
  alert('Shortcut activated!')
}
```

You can add shortcuts by using the `NgxShortcutService` in your component:

```typescript
import { NgxShortcutService } from '@christophhu/ngx-shortcut'
...
private readonly ngxShortcutService = inject(NgxShortcutService)

ngOnInit(): void {
  this.ngxShortcutService.addShortcut({ keys: ["Shift", "a", "b"], cb: () => { console.log("Shortcut Shift + A + B triggered!")} })
}
```

## License
This project is licensed under the MIT License.

The MIT License (MIT)
Copyright © 2025 <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
