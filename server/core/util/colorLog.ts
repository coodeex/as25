export const blueLog = (obj: any) => {
  console.log('\n\n');
  console.log('\x1b[36m%s\x1b[0m', obj, '\n');
  console.log('\x1b[36m%s\x1b[0m', ':::::::::::::', '\n\n');
};

export const redLog = (obj: any) => {
  console.log('\n\n');
  console.log('\x1b[31m', obj, '\n');
  console.log('\x1b[31m', ':::::::::::::', '\n\n');
};
