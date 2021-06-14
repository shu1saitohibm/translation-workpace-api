## Secrets
To make this pipeline work, following Secrets are neccessary to be placed in the same namespace.

### quay-robot
Type: kubernetes.io/dockerconfigjson  
Docker registry credintial to access quay.io registry.


### github-deploykey-secret
Type: Opaque  
SSH private key to accesss GitHub private repository. 
Public key should be registerd to the repository as GitHub DeployKey.

| key | value |
| - | - |
| id_rsa |ssh private key contents |
| known_hosts |.ssh/known_hosts contents. |


### github-webhook-secret
Type: Opaque  
Challenge token which should meet the secret token in "GitHub" webhook configuration.

| key | value |
| - | - |
| secretToken | the value of the secret token. |


## Allocation to Service Accounts

Docker registry credential secret should be associated with the `build-bot` service account.

```
oc patch serviceaccount build-bot -p '{"imagePullSecrets": [{"name": "quay-robot"}]}'
```


