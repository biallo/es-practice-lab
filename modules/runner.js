function waitForAsyncWork(ms = 0) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function formatConsoleValue(value, seen = new WeakSet()) {
  if (typeof value === 'string') return value;
  if (typeof value === 'bigint') return `${value}n`;
  if (typeof value === 'symbol' || typeof value === 'function') return String(value);
  if (value === undefined) return 'undefined';
  if (value === null) return 'null';

  if (typeof value !== 'object') {
    return String(value);
  }

  if (seen.has(value)) {
    return '[Circular]';
  }
  seen.add(value);

  const tag = Object.prototype.toString.call(value);
  if (tag === '[object Map]') {
    return `Map ${formatConsoleValue(Array.from(value.entries()), seen)}`;
  }
  if (tag === '[object Set]') {
    return `Set ${formatConsoleValue(Array.from(value.values()), seen)}`;
  }
  if (tag === '[object Error]') {
    return `${value.name}: ${value.message}`;
  }

  try {
    return JSON.stringify(value, (_key, item) => {
      if (typeof item === 'bigint') return `${item}n`;
      return item;
    });
  } catch {
    return Object.prototype.toString.call(value);
  }
}

export async function runCode(code, outputEl) {
  outputEl.textContent = '运行中...';
  const sandbox = document.createElement('iframe');
  sandbox.style.display = 'none';
  document.body.appendChild(sandbox);

  try {
    const sandboxWindow = sandbox.contentWindow;
    const sandboxDocument = sandbox.contentDocument;
    let output = '';
    sandboxWindow.console.log = (...args) => {
      output += args.map((arg) => formatConsoleValue(arg)).join(' ') + '\n';
    };

    const execution = new Promise((resolve, reject) => {
      let settled = false;

      function cleanup() {
        sandboxWindow.removeEventListener('error', handleError);
        sandboxWindow.removeEventListener('unhandledrejection', handleRejection);
      }

      function finish() {
        if (settled) return;
        settled = true;
        cleanup();
        resolve();
      }

      function fail(error) {
        if (settled) return;
        settled = true;
        cleanup();
        reject(error);
      }

      function handleError(event) {
        event.preventDefault();
        fail(event.error || new Error(event.message || '代码执行失败'));
      }

      function handleRejection(event) {
        event.preventDefault();
        fail(event.reason instanceof Error ? event.reason : new Error(String(event.reason)));
      }

      sandboxWindow.addEventListener('error', handleError);
      sandboxWindow.addEventListener('unhandledrejection', handleRejection);

      const script = sandboxDocument.createElement('script');
      script.type = 'module';
      script.textContent = code;
      script.addEventListener('load', finish);
      script.addEventListener('error', () => fail(new Error('模块加载失败')));
      sandboxDocument.body.appendChild(script);
    });

    await Promise.race([execution, waitForAsyncWork(1000)]);
    await waitForAsyncWork();
    outputEl.textContent = output || '代码执行完成（无输出）';
  } catch (error) {
    outputEl.textContent = `错误：${error.message}`;
  } finally {
    document.body.removeChild(sandbox);
  }
}
