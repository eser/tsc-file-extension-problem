interface Dummy {
  text: string;
}

const dummy = function dummy(): Dummy {
  return { text: "hello world" };
};

export { dummy, dummy as default };
