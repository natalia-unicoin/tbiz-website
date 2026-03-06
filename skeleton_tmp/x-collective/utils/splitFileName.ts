interface SplitName {
  fileName: string;
  fileExt: string | undefined;
}

const splitFileName = (inputName: string): SplitName => {
  const splitedFileName = inputName.split('.');
  const fileExt = splitedFileName.pop();
  const fileName = splitedFileName.join('.');

  return {
    fileName,
    fileExt,
  };
};

export default splitFileName;
