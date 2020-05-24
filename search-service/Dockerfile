FROM maven:3.6.0-jdk-11-slim AS build
COPY search-service/src /home/app/src
COPY search-service/pom.xml /home/app

## Подготовка common-models для локального репо
COPY common-models/src /home/common-models/src
COPY common-models/pom.xml /home/common-models
RUN mvn -f /home/common-models/pom.xml clean install
RUN mvn org.apache.maven.plugins:maven-install-plugin:2.5.2:install-file \
  -Dfile=/home/common-models/target/common-models.jar \
  -DgroupId=ru.otus.spring.assetsmgr -DartifactId=common-models -Dversion=0.1 \
  -Dpackaging=jar -DlocalRepositoryPath=/home/localrepo
##

RUN mvn -f /home/app/pom.xml clean package

FROM adoptopenjdk/openjdk11:jdk-11.0.6_10-alpine-slim
COPY --from=build /home/app/target/search-service*.jar /usr/local/lib/search-service.jar
EXPOSE 8882

## Add the wait script to the image
ADD util/wait /wait
RUN chmod +x /wait

CMD /wait && java -jar /usr/local/lib/search-service.jar
