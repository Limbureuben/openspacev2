import { APP_BASE_HREF } from '@angular/common';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import { renderApplication } from '@angular/platform-server';
import AppServerModule from './src/main.server'; // Use default export for AppServerModule
import { ApplicationRef } from '@angular/core';


// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Serve static files from /browser
  server.get('**', express.static(browserDistFolder, {
    maxAge: '1y',
    index: 'index.html',
  }));

  // All regular routes use Angular's renderApplication
  server.get('**', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    renderApplication(() => import('./src/main.server').then(m => m.default as any), {
      document: indexHtml,
      url: `${protocol}://${headers.host}${originalUrl}`,
      platformProviders: [
        { provide: APP_BASE_HREF, useValue: baseUrl },
      ],
    }).then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): Promise<ApplicationRef> {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  return new Promise((resolve, reject) => {
    server.listen(port, () => {
      console.log(`Node Express server listening on http://localhost:${port}`);
      resolve(new ApplicationRef()); // Resolve the promise when the server starts
    }).on('error', (err) => {
      reject(err); // Reject the promise if there is an error
    });
  });
}

run().catch(err => {
  console.error('Error starting server:', err);
});
