const { env } = process;

module.exports = {
  get isProduction() {
    return env.NODE_ENV === 'production';
  },
};
