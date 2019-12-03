import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

const PORT = 3001;

app.get('/*', (req, res) => {
  const context = {};
  const app = ReactDOMServer.renderToString(
    <StaticRouter location = {req.url} context = {context}>
      <App />
    </StaticRouter>
  );
  // check this path
  const indexFile = path.resolve('/CSE442-542/2019-Fall/cse-442i/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error("Something went wrong: ", err);
      return res.status(500).send("Oops, better luck next time!");
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

app.listen(PORT, () => {
  console.log("Server is listening on port ${PORT}");
});
