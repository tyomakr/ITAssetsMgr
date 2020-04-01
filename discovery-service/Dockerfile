FROM maven:3.6.0-jdk-11-slim AS build
COPY discovery-service/src /home/app/src
COPY discovery-service/pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean package

FROM adoptopenjdk/openjdk11:jdk-11.0.6_10-alpine-slim
COPY --from=build /home/app/target/discovery-service*.jar /usr/local/lib/discovery-service.jar
EXPOSE 8761

## Add the wait script to the image
ADD util/wait /wait
RUN chmod +x /wait

CMD /wait && java -jar /usr/local/lib/discovery-service.jar