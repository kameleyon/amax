class Logger {
  private static instance: Logger;
  private logs: LogEntry[] = [];

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private formatTimestamp(): string {
    const now = new Date();
    const pad = (n: number) => n.toString().padStart(2, '0');
    
    return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}.${now.getMilliseconds().toString().padStart(3, '0')}`;
  }

  private sanitizeError(error: Error): Record<string, unknown> {
    return {
      message: error.message,
      name: error.name,
      stack: error.stack,
    };
  }

  private sanitizeData(data: unknown): unknown {
    if (data instanceof Error) {
      return this.sanitizeError(data);
    }

    try {
      // Test if data is JSON-serializable
      JSON.stringify(data);
      return data;
    } catch {
      // If not serializable, convert to string
      return String(data);
    }
  }

  private createLogEntry(level: LogLevel, message: string, data?: unknown): LogEntry {
    return {
      timestamp: this.formatTimestamp(),
      level,
      message,
      data: data ? this.sanitizeData(data) : undefined,
    };
  }

  private log(level: LogLevel, message: string, data?: unknown) {
    const entry = this.createLogEntry(level, message, data);
    this.logs.push(entry);

    if (process.env.NODE_ENV === 'development') {
      const logData = entry.data ? ` ${JSON.stringify(entry.data)}` : '';
      console[level](`[${entry.timestamp}] ${message}${logData}`);
    }
  }

  info(message: string, data?: unknown) {
    this.log('info', message, data);
  }

  warn(message: string, data?: unknown) {
    this.log('warn', message, data);
  }

  error(message: string, data?: unknown) {
    this.log('error', message, data);
  }

  getLogs(): LogEntry[] {
    return [...this.logs];
  }

  clearLogs(): void {
    this.logs = [];
  }
}

type LogLevel = 'info' | 'warn' | 'error';

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  data?: unknown;
}

export const logger = Logger.getInstance();