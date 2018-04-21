// Copyright (c) Sathyanesh Krishnan. All rights reserved.
// Licensed under the MIT License. 


class MySampleClass1 {
  private MyTagName1 = 'This is My Tag Name1';

  constructor() {
  }

  public execute() {
    let tag = this.GetTagName();
    console.log(`\nDoing some work and printing the output: ${tag}`);
  }

  private GetTagName() {
    return (this.MyTagName1);
  }
}



function main() {
  // 
  let myapp1 = new MySampleClass1();
  myapp1.execute();
}

// Entry point.
main();