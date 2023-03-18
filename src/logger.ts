import pino from "pino";

const logger = pino({
  enabled: true,
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true
    }
  },
});

export default logger;
