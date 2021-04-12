# NodeJs-ServiceMesh

nodejs-servicemesh is a repository to create samples of linkerd, istio, consul e kurma

### LINKERD

#### dashboard linkerd
```
- expose: linkerd dashboard &
```
```
- pagina principal do namespace: http://localhost:50750/namespaces/nodejs-servicemesh
```
```
- metricas por deploy: http://localhost:50750/namespaces/nodejs-servicemesh/deployments/gateway
```
```
- grafana: http://localhost:50750/grafana/d/deployment/linkerd-deployment?orgId=1&refresh=1m&var-namespace=nodejs-servicemesh&var-deployment=gateway&var-inbound=All&var-outbound=All
```


#### deployment
```
- create namespace: kubectl apply -f ./app.yml
```
```
- deploy microservice: kubectl apply -f ./microservice/app.yml
```
```
- deploy gateway: kubectl apply -f ./gateway/app.yml 
```
```
- deploy worker: kubectl apply -f ./worker/app.yml
```

#### Config retry e timeouts
```
- microservice: kubectl apply -f ./microservice/linkerd/service-profile.yaml
```
```
- gateway: kubectl apply -f ./gateway/linkerd/service-profile.yaml
```


#### Inject fault percentage (traffic split)
```
- deploy error microservice: kubectl apply -f ./microservice/linkerd/faulty-backend.yaml
```
```
- traffic split: kubectl apply -f ./microservice/linkerd/inject-fault.yaml
```

#### Monitorar retries 
```
- between client and server: linkerd -n nodejs-servicemesh routes deploy/gateway --to svc/microservice -o wide
```
```
- just in server: linkerd -n nodejs-servicemesh routes svc/microservice
```

#### Monitorar timeouts 
```
- between client and server: linkerd -n nodejs-servicemesh routes deploy/gateway --to svc/microservice -o wide
```
```
- just in server: linkerd -n nodejs-servicemesh routes svc/microservice
```

## General Commands To Check Application

#### curl internal service

```
- gateway: curl http://gateway.nodejs-servicemesh.svc.cluster.local/about
```
```
- microservice: curl http://microservice.nodejs-servicemesh.svc.cluster.local/about
```

#### logs container
```
- microservice: kubectl logs -f -n nodejs-servicemesh -l app=microservice
```
```
- gateway: kubectl logs -f -n nodejs-servicemesh -l app=gateway
```
