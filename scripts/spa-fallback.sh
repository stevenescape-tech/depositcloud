#!/bin/bash
for route in terms-of-service privacy-policy legal-notices; do
  mkdir -p "dist/$route"
  cp dist/index.html "dist/$route/index.html"
done
cp dist/index.html dist/404.html
