#!/bin/bash
for route in terms-of-service privacy-policy legal-notices about; do
  mkdir -p "dist/$route"
  cp dist/index.html "dist/$route/index.html"
done
cp dist/index.html dist/404.html
