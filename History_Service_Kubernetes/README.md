#### Steps
1. kubectl apply -f postgres-deployment.yaml
2. Expose the postgres-service using `minikube tunnel`
3. kubectl apply -f go-deployment.yaml
4. Expose the go-service using `minikube tunnel`