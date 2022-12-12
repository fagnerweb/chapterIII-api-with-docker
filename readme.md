docker ps -> mostrar os containers, status, port e name

docker ps -a -> mostra todos os containers, ativos e não

docker rm name/id -> remover container

docker start name -> inicia container

docker stop id -> para container

docker-compose -up -d -> para subir o container

docker-componse stop -> para container

docker-compose down -> remover tudo que é criado dentro do servico

docker exec -it rentx /bin/bash -> acessa o container

ctrl + d -> sair do container

docker logs rentx -f (para ficar observando os logs use o -f)

docker inspect --format='{{range .NetworkSettings.Networks}}{{.
IPAddress}}{{end}}' rentx  -> mostra o ip do nosso container

docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' database_ignite  -> mostra o ip do nosso container

docker exec database_ignite cat /etc/hosts