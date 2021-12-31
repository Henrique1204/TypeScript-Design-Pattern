interface MyIteratorProtocol<T> extends Iterator<T> {
  reset(): void;
}

export default MyIteratorProtocol;
