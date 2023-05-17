#!/bin/bash
VERSION="2.0.0"

docker build -t shop-demo:$VERSION .
docker tag  shop-demo:$VERSION tinsae/shop-demo:$VERSION
docker push tinsae/shop-demo:$VERSION
```

